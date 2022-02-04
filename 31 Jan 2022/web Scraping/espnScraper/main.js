const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595"; 

const request = require('request')
const cheerio = require('cheerio')

request(url , cb)


function cb(error , response , html){
       if(error){
              console.log(error)
       }
       else{
              console.log(html)
       }
}


