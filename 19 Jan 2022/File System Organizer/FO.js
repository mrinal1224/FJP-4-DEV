let input = process.argv.slice(2)

let inputArr = input

let command = inputArr[0]


switch(command){
       case 'tree':
              console.log('Tree Implemented')
              break
       case 'organize':
              console.log('Organize Implememted');
              break
       case 'help':
              console.log('Help Implemented')
              break
       default :
        console.log('Please enter a Valid command')
        break;
}

