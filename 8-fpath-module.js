const path = require('path');

// Outputs the file seperator
console.log(path.sep)


// Outputs the file path of the last value
const filePath = path.join('/contnet', 'subfolder', 'test.txt');
console.log(filePath);

// Outputs the the last file in a path
const base = path.basename(filePath)
console.log(base)

// Outputs the absolute file path to  the file of the last value 
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)