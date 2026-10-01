import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// The editable site lives at the repository root. Sites requires a generated dist.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'dist');
const files = ['index.html', 'assets'];
for (const file of files) {
  if (!existsSync(path.join(root, file))) throw new Error(`Missing site file: ${file}`);
}
rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });
for (const file of files) cpSync(path.join(root, file), path.join(output, file), { recursive: true });
console.log('Static site prepared from repository root.');
