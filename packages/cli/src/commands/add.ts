// packages/cli/src/commands/add.ts
import { fetchComponent } from "../utils/fetchComponent";
import registry from "../registry/components.json" assert { type: "json" };

export async function addCommand(args: string[]) {
  const componentName = args[0];
  if (!componentName) {
    console.log("❌ Please specify a component name. Example: reuise add button");
    return;
  }

  await fetchComponent(componentName, registry);
}
