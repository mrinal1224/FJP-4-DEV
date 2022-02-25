const loginLink = "https://www.hackerrank.com/auth/login";
const puppeteer = require("puppeteer");

const codeFile = require('./code')

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
  })
  .then(function () {
    let algoSecClickedPromise = waitAndClick('a[data-attr1="algorithms"]', page);
    return algoSecClickedPromise;
  })
  .then(function () {
    let warmUpSectionClickedPromise = waitAndClick('input[value="warmup"]' , page)
    return warmUpSectionClickedPromise;
  }).then(function(){
      let allQuestionsArrPromise = page.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled')
      return allQuestionsArrPromise;
  }).then(function(TotalQuestions){
    console.log('Number of Questions -> ' + TotalQuestions.length)
    let questionWillBeSolved = questionSolver(page , TotalQuestions[0] , codeFile.answers[0])
    return questionWillBeSolved
  });

function waitAndClick(selector, cPage) {
  return new Promise(function (resolve, reject) {
    let waitForModalPromise = cPage.waitForSelector(selector);
    waitForModalPromise
      .then(function () {
        let clickModal = cPage.click(selector, { delay: 100 });
        return clickModal;
      })
      .then(function () {
        resolve();
      })
      .catch(function () {
        reject();
      });
  });
}


function questionSolver(page , question , answer){

  return new Promise(function(resolve , reject){
    let questionWillbeClickedPromise = question.click()
    questionWillbeClickedPromise.then(function(){
      let waitForEditor = waitAndClick('.monaco-editor.no-user-select.vs' , page)
      return waitForEditor
    }).then(function(){
      let customInputClicked =  waitAndClick('.checkbox-input' , page)
      return customInputClicked
    }).then(function(){
       return waitAndClick('.input.text-area.custominput.auto-width' , page)
    }).then(function(){
       return page.type('.input.text-area.custominput.auto-width' , answer , {delay : 20})
    }).then(function(){
      
    })
  })

}

console.log("After");
