#!/usr/bin/env bun

import { cp } from "node:fs/promises";
import { join } from "node:path";
import { existsSync } from "node:fs";

const args = process.argv.slice(2);
const command = args[0];
const component = args[1];

if (command === "add" && component) {
  const componentPath = join(import.meta.dir, "../ui/src/components", `${component}.tsx`);
  const destPath = join(process.cwd(), "components", `${component}.tsx`);

  if (!existsSync(componentPath)) {
    console.error(`❌ Component "${component}" not found in @reuise/ui`);
    process.exit(1);
  }

  await cp(componentPath, destPath);
  console.log(`✅ Added ${component}.tsx to ./components/`);
} else {
  console.log("Usage: reuise add <component>");
}
