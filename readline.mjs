// readline masih menggunakan callback di nodejs v 16 ada di v 17  yang sudah menggunkan promise

import process from "process";
import readline from 'readline'

const input = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

input.question('Siapan nama anda ? ',(name)=>{
    console.info(`Halo ${name}`);
input.close();
});
