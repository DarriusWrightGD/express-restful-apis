const os = require('os');

console.log(os.userInfo());

const totalMem = os.totalmem();
const freeMem = os.freemem();

// console.log(`Total Mem: ${totalMem/1000000}\nFreeMem: ${freeMem/1000000}`);
