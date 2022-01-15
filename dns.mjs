import dns from "dns/promises";


const address = await dns.lookup("www.rsbella.com");

console.info(address.address);