const request = require("request");
const cheerio = require("cheerio");
const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary";


request(url , cb);

function cb(err, response, html) {
       if (err) {
           console.log(err);
       } else {
           handleHTML(html);
       }
   }


function handleHTML(html){
       let selTool = cheerio.load(html)

       let elemArr = selTool('.d-flex.match-comment-padder.align-items-center .match-comment-long-text')
       let lbc = selTool(elemArr[0]).text()

       console.log(lbc)
}