#!/usr/bin/env bun

const args = process.argv.slice(2);
const command = args[0];
const component = args[1];

if (command === "add" && component) {
  console.log(`Fetching component: ${component}`);
  // later: fetch from GitHub
} else {
  console.log("Usage: reuise add <component>");
}
