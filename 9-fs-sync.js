const { readFileSync, writeFileSync } = require("fs");

console.log('start')
// Reading from file
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first, second);

// Creating a file
writeFileSync(
    './content/result-sync.txt', 
    `Here is the result :  
    ${first}, ${second}`
);

// Appending into the file
writeFileSync('./content/result-sync.txt', `Hello Wolrd!`, {flag: 'a'})
console.log('done')
console.log('next')