const request= require('request')

const cheerio = require('cheerio')


console.log('Before')

request('https://www.worldometers.info/coronavirus/', cb);


function cb (error, response, html) {
       if(error){
              console.log(error)
       }
       else{
              // console.log(response && response.statusCode)
              handleHTML(html)
       }
     }


function handleHTML(html){
       // in selTool we are basically getting the whole HTML in cheerio's format
       let selTool = cheerio.load(html)
       console.log(selTool)
   

       let contentArr = selTool('.maincounter-number span')


       // for(let i=0 ; i<contentArr.length ; i++){
       //        let data = selTool(contentArr[i]).text()
       //        console.log(data)
       // }

       let totalCases = selTool(contentArr[0]).text()
       let totalDeaths = selTool(contentArr[1]).text()
       let totalRecovered = selTool(contentArr[2]).text()


       console.log('Total Cases->  ' + totalCases)
       console.log('Total Deaths->  ' + totalDeaths)
       console.log('Total Recovered->  ' + totalRecovered)



}

console.log('After')