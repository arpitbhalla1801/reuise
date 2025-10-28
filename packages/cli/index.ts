#!/usr/bin/env bun

import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import { existsSync } from "node:fs";

const args = process.argv.slice(2);
const command = args[0];
const component = args[1];

async function loadConfig() {
  try {
    const config = await import(join(process.cwd(), "reuise.config.json"));
    return config.default || config;
  } catch {
    return {
      repo: "https://raw.githubusercontent.com/arpitbhalla1801/reuise/refs/heads/main/packages/ui/src/components",
      componentsPath: "./components"
    };
  }
}

if (command === "add" && component) {
  const config = await loadConfig();
  const url = `${config.repo}/${component}.tsx`;
  const destPath = join(process.cwd(), config.componentsPath, `${component}.tsx`);

  console.log(`🌐 Fetching ${url}`);
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`❌ Component "${component}" not found`);
    process.exit(1);
  }

  const code = await res.text();
  await Bun.write(destPath, code);
  console.log(`✅ Added ${component}.tsx to ${config.componentsPath}`);
} else {
  console.log("Usage: reuise add <component>");
}
