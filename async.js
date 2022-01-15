function samplePromise(){
    return Promise.resolve("Izza");
}

// metode async await dengan menggunakan file js
async function run(){
    const nama = await samplePromise();
    console.info(nama);
}


run();