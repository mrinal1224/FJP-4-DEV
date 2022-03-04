// We will be creating a File System Organizer//
//Features of the Project -
//If you have numerous Files in a folder and they are not Properly arranged
//So you can use this tool to arrange them in specific directory according to their extension
// like text files will go into text File Folder .exe files will go into application folder and so on
// so at the end you will have a arranged set of files in specific folders

//js mein input Array ke from mein jaata hai and that is array is process.argv Array

const helpModule = require("../commands/help");
const organizeModule = require("../commands/organize");
const treeModule = require("../commands/tree");

let input = process.argv.slice(2);

let inputArr = input; // [organzie , folderpath]

let command = inputArr[0];

switch (command) {
  case "tree":
    treeModule.treeFnKey(inputArr[1]);
    break;
  case "organize":
    organizeModule.organizeFnKey(inputArr[1]);
    break;
  case "help":
    helpModule.helpFnKey();
    break;
  default:
    console.log("Please enter a Valid command");
    break;
}
