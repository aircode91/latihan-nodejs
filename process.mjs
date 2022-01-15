import process from "process";


process.addListener('exit',(exitCode)=>{
    console.info(`NodeJs exit with code ${exitCode}`);
})

console.info(process.version);
console.table(process.argv);
console.table(process.report);
console.info(process.env);

process.exit(1);