const puppeteer = require('puppeteer')

console.log('Before')

let browserWillLaunchPromise = puppeteer.launch({
      headless:false,
      args:['--start-maximized'],
      defaultViewport : null

}) // launch returns a promise to open Browser

browserWillLaunchPromise.then(function(browserInstance){
         let newTabPromise = browserInstance.newPage()
         return newTabPromise
         // new Page method will open a new Tab in the Browser
}).then(function(newTab){
     let websiteWillbeOpenedPromise = newTab.goto('https://www.pepcoding.com/')  
     return websiteWillbeOpenedPromise 
}).then(function(){
       console.log('Pepcoding Webiste opened')
})




console.log('After')
