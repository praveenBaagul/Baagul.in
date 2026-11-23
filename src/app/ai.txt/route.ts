import { aiFileResponse } from "@/lib/ai-files";

export function GET() {
  return aiFileResponse("ai.txt");
}
