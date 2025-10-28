// packages/cli/src/utils/fetchComponent.ts
import { writeFileSync, mkdirSync } from "fs";
import path from "path";

export async function fetchComponent(name: string, registry: Record<string, string>) {
  const url = registry[name];
  if (!url) throw new Error(`Component '${name}' not found in registry.`);

  console.log(`📦 Fetching ${name} from ${url}`);

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch component from ${url}`);

  const content = await res.text();

  const outDir = path.resolve(process.cwd(), "src/components");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(path.join(outDir, `${name.charAt(0).toUpperCase() + name.slice(1)}.tsx`), content);

  console.log(`✅ Component '${name}' added to src/components`);
}
