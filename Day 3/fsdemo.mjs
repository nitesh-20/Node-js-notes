import { readFile, writeFile } from "fs/promises";

const filePath = new URL('./index.html', import.meta.url);
let data = await readFile(filePath, { encoding: 'utf-8' });
console.log(data);