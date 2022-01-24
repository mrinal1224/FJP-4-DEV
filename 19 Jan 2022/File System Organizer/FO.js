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

let types = {
  media: ["mp4", "mkv", "mp3"],
  archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
  documents: [
    "docx",
    "doc",
    "pdf",
    "xlsx",
    "xls",
    "odt",
    "ods",
    "odp",
    "odg",
    "odf",
    "txt",
    "ps",
    "tex",
  ],
  app: ["exe", "dmg", "pkg", "deb"],
};

switch (command) {
  case 'tree':
    treeFn(inputArr[1])
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
  // we need a directory path as parameter
  let destPath;
  if (dirPath == undefined) {
    console.log("Please enter a valid Directory Path");
    return;
  } // check whether directory path is passed or not and if not simply return

  let doesExist = fs.existsSync(dirPath);

  // this doesExist will tell the Target Folder exists or not

  if (doesExist == true) {
    destPath = path.join(dirPath, "organized_Files"); // D:\Batches\FJP-4\testFolder\organized_files- we are ready to create folder her

    // we created a path for organized_Files Folder

    // check whether in the given destPath does a folder exist with same name and if does not make a folder
    if (fs.existsSync(destPath) == false) {
      fs.mkdirSync(destPath);
    } else {
      console.log("Folder Already Exists");
    }
  } else {
    console.log("Please Enter A valid Path");
    return;
  }

  organizeHelper(dirPath, destPath);
}

function organizeHelper(src, dest) {
  let childNames = fs.readdirSync(src);
  //console.log(childNames)

  for (let i = 0; i < childNames.length; i++) {
    let childAddress = path.join(src, childNames[i]);
    let isFile = fs.lstatSync(childAddress).isFile();

    if (isFile == true) {
      let fileCategory = getCategory(childNames[i]);
      console.log(childNames[i] + " belongs to " + fileCategory);

      sendFiles(childAddress, dest, fileCategory);
    }
  }
}

function getCategory(FileName) {
  let ext = path.extname(FileName).slice(1);
  // we extraxcted extension names of the target Files

  //console.log(ext)

  for (let key in types) {
    let cTypeArr = types[key];
    // we took out all the Category type Arrays here
    //console.log(cTypeArr)

    for (let i = 0; i < cTypeArr.length; i++) {
      if (ext == cTypeArr[i]) {
        return key;
      }
    }
  }

  return "others"
}

function sendFiles(srcFilePath, dest, fileCategory) {
  // we will create path for each category type encountered to create folders of their names
  let catPath = path.join(dest, fileCategory)

  //D:\FJP4\test folder\organized_files\media
  //D:\FJP4 \test folder\organized_files\documents

  if (fs.existsSync(catPath) == false) {
    fs.mkdirSync(catPath)
  }

  let fileName = path.basename(srcFilePath)

  // we took out the basename of all the files

  let destFilePath = path.join(catPath, fileName)

  fs.copyFileSync(srcFilePath, destFilePath)

  fs.unlinkSync(srcFilePath);

  console.log("Files Organized")


}



function treeFn(dirPath){
    if(dirPath==undefined){
      console.log('Please Enter a Valid Path')
      return;
    }

    else{
      let doesExist = fs.existsSync(dirPath)
      if(doesExist == true){
        treeHelper(dirPath , ' ')
      }
    }
}


function treeHelper(targetPath , indent){
     let isFile = fs.lstatSync(targetPath).isFile()
     


     if(isFile==true){
         let fileName = path.basename(targetPath)
         console.log(indent + "├── " + fileName)
     }

     else{
            let dirName = path.basename(targetPath)
            console.log(indent + "└──" + dirName)

            let children = fs.readdirSync(targetPath)

            for(let i=0 ; i<children.length ; i++){
              let childpath = path.join(targetPath , children[i])
              treeHelper(childpath , indent + '\t')
            }


     }
}












