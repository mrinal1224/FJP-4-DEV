const url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard'

const cheerio = require('cheerio')
const request = require('request')

request(url , cb)


function cb(err , response , html){
       if(err){
              console.log(err)
       }
       else{
              extractMatchDetails(html)
       }
}


function extractMatchDetails(html){
       let $ = cheerio.load(html)

       let descElem = $('.header-info .description')
       //console.log(descElem.text())

       let descArr = descElem.text().split(',')


       let venue = descArr[1].trim()
       let date = descArr[2].trim()

       let result = $('.match-info.match-info-MATCH.match-info-MATCH-half-width .status-text span')
       console.log(venue)
       console.log(date)
       console.log(result.text())


       
      

       
}