const fs = require('fs');
const {promisify} = require('util');
fs.readdir = promisify(fs.readdir);

(async ()=> {
  const result = await fs.readdir('./');
  console.log(result);
})()


// fs.readdir('./',(err, files)=>{
//   if(err) {
//     console.log('Error', err);
//   }else {
//     console.log(files);
//   }
// });