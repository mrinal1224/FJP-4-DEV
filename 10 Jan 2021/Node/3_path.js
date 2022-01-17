const path = require("path");

let filePath = "D:\\  Batches\\FJP-4\\10 Jan 2021\\Node\\1.txt";

let extensionName = path.extname(filePath); // this will print extension name of the file
console.log(extensionName);

let fileName = path.basename(filePath); // this will Print fullname(basename) of the file
console.log(fileName);

console.log(__dirname); // current Directory path

console.log(__filename); // currect file path
