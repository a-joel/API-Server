// generate-hash.js
import bcrypt from 'bcryptjs'; 
// ⚠️ NOTE: If your backend doesn't use ES Modules (import/export), 
// change the line above to: const bcrypt = require('bcryptjs');

// 👇 CHANGE THIS to the actual password you want to use 👇
const myActualPassword = "srikuttymybrowmyonlybondonlyrelation";
// This scrambles the password into a secure hash
const hash = await bcrypt.hash(myActualPassword, 10);
const isTrue = await bcrypt.compare(myActualPassword, hash)

console.log(isTrue);


console.log("\n✅ SUCCESS! Copy the string below:\n");
console.log(hash);
console.log("\n");