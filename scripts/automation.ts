import { createInterface } from "node:readline/promises";
import type { AutomationRunStatus } from "resend";
import {
  createAutomation,
  disableAutomation,
  enableAutomation,
  ensureEvents,
  getAutomation,
  getRun,
  listAutomations,
  listRuns,
  removeAutomation,
  stopAutomation,
  syncAutomation,
  verifyAutomation,
} from "../src/lib/enquiries/automation-admin";
import { AUTOMATION_NAMES } from "../src/lib/enquiries/automation-definition";
import { getConfig } from "../src/lib/enquiries/config";
import { getDb, isDatabaseConfigured } from "../src/lib/enquiries/db";

const USAGE = `Usage: npm run automation -- <command> [args]

  create            Create the workflow, disabled. Repeat runs change nothing.
  get [id]          Show status, steps and connections.
  list              List every automation on this Resend account.
  verify [id]       Compare the deployed workflow with the code.
  sync [id]         Push the coded workflow to Resend (must be disabled).
  enable [id]       Enable it. Refuses if it differs from the code.
  disable [id]      Disable it.
  stop [id]         Stop it for ALL customers. Asks for confirmation.
  delete [id]       Delete it permanently. Asks for confirmation.
  runs [id]         List runs. Optional: --status=running|completed|failed|cancelled
  run <runId> [id]  Show one run step by step.
  events            Register the custom events with Resend.

[id] defaults to RESEND_AUTOMATION_ID. To answer a confirmation in advance, pass
--confirm=<automation id>.`;

const args = process.argv.slice(2);
const positional = args.filter((arg) => !arg.startsWith("--"));
const flag = (name: string) =>
  args.find((arg) => arg.startsWith(`--${name}=`))?.slice(name.length + 3);

function automationId(explicit?: string): string {
  const id = explicit ?? getConfig().automationId;
  if (!id) throw new Error("Pass an automation ID or set RESEND_AUTOMATION_ID.");
  return id;
}

async function confirm(id: string, warning: string): Promise<void> {
  console.log(warning);
  const supplied = flag("confirm");
  if (supplied !== undefined) {
    if (supplied !== id) throw new Error("--confirm does not match the automation ID. Nothing was changed.");
    return;
  }
  if (!process.stdin.isTTY) throw new Error(`Not a terminal. Pass --confirm=${id} to proceed.`);

  const prompt = createInterface({ input: process.stdin, output: process.stdout });
  const answer = await prompt.question(`Type the automation ID to continue (${id}): `);
  prompt.close();
  if (answer.trim() !== id) throw new Error("Confirmation did not match. Nothing was changed.");
}

async function openSequenceWarning(): Promise<string> {
  if (!isDatabaseConfigured()) {
    return "Could not check open sequences: DATABASE_URL is not set.";
  }
  const { rows } = await getDb().query<{ count: number }>(
    `SELECT COUNT(*) AS count FROM enquiries WHERE sequence_status IN ('pending', 'active')`
  );
  return `Customers currently in a follow-up sequence: ${Number(rows[0]?.count ?? 0)}.`;
}

async function main() {
  const [command, first, second] = positional;
  const config = getConfig();

  if (!command || command === "help") {
    console.log(USAGE);
    return;
  }

  console.log(`Profile: ${config.profile} (${AUTOMATION_NAMES[config.profile]})\n`);

  switch (command) {
    case "create": {
      const result = await createAutomation();
      if (result.created) {
        console.log("Created, disabled. Add this to your environment:\n");
        console.log(`RESEND_AUTOMATION_ID=${result.id}`);
      } else {
        console.log(`Already exists, nothing created: ${result.id} (${result.status})`);
      }
      break;
    }

    case "get": {
      const automation = await getAutomation(automationId(first));
      console.log(JSON.stringify(automation, null, 2));
      break;
    }

    case "list":
      for (const item of await listAutomations()) {
        console.log(`${item.id}  ${item.status.padEnd(8)}  ${item.name}`);
      }
      break;

    case "verify": {
      const { automation, differences } = await verifyAutomation(automationId(first));
      console.log(`${automation.name}: ${automation.status}`);
      console.log(
        differences.length > 0
          ? `Differs from the code:\n- ${differences.join("\n- ")}`
          : "Matches the code."
      );
      if (differences.length > 0) process.exitCode = 1;
      break;
    }

    case "sync":
      console.log(`Updated: ${(await syncAutomation(automationId(first))).id}`);
      break;

    case "enable": {
      const id = automationId(first);
      if (config.profile === "production") {
        await confirm(id, "This starts emailing real customers on every new enquiry.");
      }
      await enableAutomation(id);
      console.log(`Enabled: ${id}`);
      break;
    }

    case "disable": {
      const id = automationId(first);
      await disableAutomation(id);
      console.log(`Disabled: ${id}. Runs already in progress are not cancelled by this.`);
      break;
    }

    case "stop": {
      const id = automationId(first);
      await confirm(
        id,
        [
          "This stops the automation for ALL customers: no new runs will start.",
          "Runs already in progress continue to completion, so this does not cancel them.",
          "To end one customer's follow-up, set the enquiry status instead (see the docs).",
          await openSequenceWarning(),
        ].join("\n")
      );
      await stopAutomation(id);
      console.log(`Stopped: ${id}`);
      break;
    }

    case "delete": {
      const id = automationId(first);
      await confirm(
        id,
        [
          "This permanently deletes the automation and cannot be undone.",
          await openSequenceWarning(),
        ].join("\n")
      );
      const result = await removeAutomation(id);
      console.log(`Deleted: ${result.id}. Remove RESEND_AUTOMATION_ID from your environment.`);
      break;
    }

    case "runs": {
      const status = flag("status") as AutomationRunStatus | undefined;
      for (const run of await listRuns(automationId(first), status)) {
        console.log(`${run.id}  ${run.status.padEnd(9)}  ${run.created_at}`);
      }
      break;
    }

    case "run": {
      if (!first) throw new Error("Pass a run ID.");
      const run = await getRun(automationId(second), first);
      console.log(`${run.id}: ${run.status}`);
      for (const step of run.steps) {
        console.log(`  ${step.status.padEnd(9)}  ${step.key}  ${step.completed_at ?? ""}`);
      }
      break;
    }

    case "events": {
      const created = await ensureEvents();
      console.log(created.length > 0 ? `Created: ${created.join(", ")}` : "Events already exist.");
      break;
    }

    default:
      console.log(USAGE);
      process.exitCode = 1;
  }
}

main()
  .then(() => process.exit(process.exitCode ?? 0))
  .catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  });
