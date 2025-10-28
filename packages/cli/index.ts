#!/usr/bin/env bun
import { addCommand } from "./src/commands/add.ts";

const [, , command, ...args] = process.argv;

switch (command) {
  case "add":
    await addCommand(args);
    break;
  default:
    console.log("Available commands: add, list, help");
}
