function samplePromise() {
    return Promise.resolve("Izza");
}


const nama = await samplePromise();
console.info(nama);