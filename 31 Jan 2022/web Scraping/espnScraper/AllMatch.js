const cheerio = require("cheerio")

const request = require('request')

const scorecardObj = require('./scorecard')

function getAllMatchLink(uri) {
       request(uri, function (error, response, html) {
         if (error) {
           console.log(error);
         } else {
           extractAllMatchLink(html);
         }
       });
     }
     
     function extractAllMatchLink(html) {
       let $ = cheerio.load(html);
     
       let scoreCardElemArr = $('a[data-hover="Scorecard"]');
     
       for (let i = 0; i < scoreCardElemArr.length; i++) {
         let ScoreCardlink = $(scoreCardElemArr[i]).attr("href");
     
         let fullLink = "https://www.espncricinfo.com" + ScoreCardlink;
     
         console.log(fullLink);

         scorecardObj.ps(fullLink)



       }
     }


     module.exports ={
            getAllMatch : getAllMatchLink
     }
