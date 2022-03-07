const inquirer = require('inquirer');
inquirer
  .prompt([
    {
           type : "list",
           name : 'selection',
           choices : ['choice1' , 'choice2']

    }
  ])
  .then(function(answer) {
      if(answer.selection=='choice1'){
             console.log('choice 1 is Selected')
      }
      

      else{
             console.log('Choice 2 is Selected')
      }
  })