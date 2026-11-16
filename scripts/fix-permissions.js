const fs = require("fs");
const path = require("path");

function fixPermissions(dir) {
  try {
    if (!fs.existsSync(dir)) return;
    fs.chmodSync(dir, 0o755);
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        fixPermissions(fullPath);
      } else {
        try {
          fs.chmodSync(fullPath, 0o644);
        } catch (_) {}
      }
    }
  } catch (_) {}
}

const root = path.join(__dirname, "..");
["src", "public", "prisma", "scripts"].forEach((folder) => {
  fixPermissions(path.join(root, folder));
});

console.log("File and directory permissions normalized.");

