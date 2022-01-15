import fs from "fs";
import fsp from "fs/promises";

const buffer = fs.readFileSync("file-system.mjs");
console.info(buffer.toString());
console.info(buffer.toString());

fs.writeFileSync('temp.txt','Hello Izza');


const buffer2 = await fsp.readFile('file-system.mjs');

console.info(buffer2.toString());


await fsp.writeFile('temp.txt','Hello Izza with promise !!');