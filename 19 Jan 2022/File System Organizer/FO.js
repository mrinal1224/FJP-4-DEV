// We will be creating a File System Organizer//
//Features of the Project -
//If you have numerous Files in a folder and they are not Properly arranged
//So you can use this tool to arrange them in specific directory according to their extension
// like text files will go into text File Folder .exe files will go into application folder and so on
// so at the end you will have a arranged set of files in specific folders

//js mein input Array ke from mein jaata hai and that is array is process.argv Array

const fs = require("fs");

const path = require("path");

let input = process.argv.slice(2);

let inputArr = input; // [organzie , folderpath]

let command = inputArr[0];

switch (command) {
  case "tree":
    console.log("Tree Implemented");
    break;
  case "organize":
    organizeFn(inputArr[1]);
    break;
  case "help":
    helpFn();
    break;
  default:
    console.log("Please enter a Valid command");
    break;
}

// Help Function will list all the ways by which you can run the commands of this project
function helpFn() {
  console.log(`List of all the commands->
                                 1)Tree - node FO.js tree <dirPath>
                                 2) organize - node FO.js organize <dirPath>
                                 3)help - node FO.js help`);
}

// Organize Function will organize all your target folder's files in a different folders acc to their extensions
function organizeFn(dirPath) {
  let destPath;
  if (dirPath == undefined) {
    console.log("Please enter a valid Directory Path");
    return;
  } // check whether directory path is passed or not and if not simply return

  let doesExist = fs.existsSync(dirPath);

  // this doesExist will tell the Target Folder exists or not

  if (doesExist == true) {
    destPath = path.join(dirPath, "organized_Files");

    // we created a path for organized_Files Folder

    // check whether in the given destPath does a folder exist with same name and if does not make a folder
    if (fs.existsSync(destPath) == false) {
      fs.mkdirSync(destPath);
    } else {
      console.log("Folder Already Exists");
    }
  } else {
    console.log("Please Enter A valid Path");
  }
}

//     D:\Batches\FJP-4\testFolder\organized_files- we are ready to create folder her
