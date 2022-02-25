const loginLink = "https://www.hackerrank.com/auth/login";
const puppeteer = require("puppeteer");

console.log("Before");

let email = "novovi8175@robhung.com";
let password = "pepcoding123";

let page;

let browserWillLaunchPromise = puppeteer.launch({
  headless: false,
  args: ["--start-maximized"],
  defaultViewport: null,
}); // launch returns a promise to open Browser

browserWillLaunchPromise
  .then(function (browserInstance) {
    let newTabPromise = browserInstance.newPage();
    return newTabPromise;
    // new Page method will open a new Tab in the Browser
  })
  .then(function (newTab) {
    page = newTab;
    let websiteWillbeOpenedPromise = newTab.goto(loginLink);
    return websiteWillbeOpenedPromise;
  })
  .then(function () {
    let emailWillbeEnteredPromise = page.type("input[id='input-1']", email, {
      delay: 100,
    });
    return emailWillbeEnteredPromise;
  })
  .then(function () {
    let passwordWillbeEnteredPromise = page.type(
      "input[id=input-2]",
      password,
      { delay: 100 }
    );
    return passwordWillbeEnteredPromise;
  })
  .then(function () {
    let loginButtonClickPromise = page.click(
      'button[data-analytics="LoginPassword"]',
      { delay: 50 }
    );
    return loginButtonClickPromise;
  }).then(function(){
    let algoSecClickedPromise = waitAndClick('a[data-attr1="python"]' , page)
    return algoSecClickedPromise
  }).then(function(){
    console.log('Algo Section Clicked')
  });



  function waitAndClick(selector , cPage){
    return new Promise(function(resolve , reject){
      let waitForModalPromise = cPage.waitForSelector(selector)
      waitForModalPromise.then(function(){
        let clickModal = cPage.click(selector , {delay : 100})
         return clickModal
      }).then(function(){ resolve()}).catch(function(){reject()})
    })
  }

console.log("After");
