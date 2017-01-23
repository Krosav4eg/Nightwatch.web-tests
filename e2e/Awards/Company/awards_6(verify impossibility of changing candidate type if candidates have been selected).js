// var _ = require('lodash');
// var presteps = require('./../../presteps/presteps.js');
// var auth = require('./../../presteps/auth.js');
//
// module.exports = _.assign(presteps, auth, {
//
//     'redirection to awards': function (browser) {
//         browser
//             .relUrl('/event/1401/awards')
//             .waitForElementVisible('#thisIsMainLoader', 30000)
//             .waitForElementNotVisible('#thisIsMainLoader', 30000);
//     },
//     'check awards page info': function (browser) {
//         browser
//             .useXpath()
//             //waitForElementVisible('//h3[text()="IndustryForum Energy"]', 7000)
//             .waitForElementVisible('//h4[text()="Awards"]', 7000)
//             .waitForElementVisible('//label[text()="Award title local"]', 7000)
//             .waitForElementVisible('//div[1]/div/input[1][@type="text"]', 7000)
//             .waitForElementVisible('//label[text()="Award title English"]', 7000)
//             .waitForElementVisible('//div[2]/div/input[1][@type="text"]', 7000)
//             .waitForElementVisible('//label[text()="Candidate type"]', 7000)
//             .waitForElementVisible('//div[text()="                         Contact                       "]', 7000)
//             .waitForElementVisible('//input[@id=1]', 7000)
//             .waitForElementVisible('//div[text()="                         Company                       "]', 7000)
//             .waitForElementVisible('//input[@id=2]', 7000)
//             .waitForElementVisible('//div[text()="                         Project                       "]', 7000)
//             .waitForElementVisible('//input[@id=3]', 7000)
//             .waitForElementVisible('//label[text()="Status"]', 7000)
//             .waitForElementVisible('//label[@btnradio="1"]', 7000)
//             .waitForElementVisible('//label[@btnradio="0"]', 7000)
//             .waitForElementVisible('//div[text()="Modified: "]', 7000)
//             .waitForElementVisible('//div[text()="Modified by: "]', 7000)
//             .waitForElementVisible('//button[@type="submit"]', 7000)
//             .waitForElementVisible('//h4[text()="Candidates"]', 7000);
//
//
//     },
//
//     'try to click on "Contact" radio button': function (browser) {
//         browser
//             .click('//input[@id=1]')
//             .waitForElementVisible('//*[contains(text(),"be changed because candidates have been selected.Please remove the existing candidates before changing the candidate type of the award.")]', 30000);
//
//     },
//
//     'try to click on "Project" radio button': function (browser) {
//         browser
//             .click('//input[@id=3]')
//             .waitForElementVisible('//*[contains(text(),"be changed because candidates have been selected.Please remove the existing candidates before changing the candidate type of the award.")]', 30000);
//
//     },
//     'delete all candidates from candidates table': function (browser) {
//         browser
//             .waitForElementVisible('//div[@class="row"][1]//button[text()="Delete"]', 30000)
//             .click('//div[@class="row"][1]//button[text()="Delete"]')
//             .waitForElementVisible('//button[@data-marker="me-confirm__button__button__yes"]', 3000)
//             .click('//button[@data-marker="me-confirm__button__button__yes"]')
//             .useCss()
//             .waitForElementVisible('#thisIsMainLoader', 30000)
//             .waitForElementNotVisible('#thisIsMainLoader', 30000)
//             .useXpath()
//             .waitForElementVisible('//div[@class="row"][2]//button[text()="Delete"]', 30000)
//             .click('//div[@class="row"][2]//button[text()="Delete"]')
//             .waitForElementVisible('//button[@data-marker="me-confirm__button__button__yes"]', 3000)
//             .click('//button[@data-marker="me-confirm__button__button__yes"]')
//             .useCss()
//             .waitForElementVisible('#thisIsMainLoader', 30000)
//             .waitForElementNotVisible('#thisIsMainLoader', 30000)
//             .useXpath()
//             .waitForElementVisible('//div[@class="row"][3]//button[text()="Delete"]', 30000)
//             .click('//div[@class="row"][3]//button[text()="Delete"]')
//             .waitForElementVisible('//button[@data-marker="me-confirm__button__button__yes"]', 3000)
//             .click('//button[@data-marker="me-confirm__button__button__yes"]')
//             .useCss()
//             .waitForElementVisible('#thisIsMainLoader', 30000)
//             .waitForElementNotVisible('#thisIsMainLoader', 30000)
//             .useXpath()
//             .waitForElementVisible('//div[text()="Company deleted successfully"]', 30000)
//             .assert.elementNotPresent('//h3[text()="Candidate 1"]')
//             .assert.elementNotPresent('//h3[text()="Candidate 2"]')
//             .assert.elementNotPresent('//h3[text()="Candidate 3"]');
//     },
//
//     'click on "Contact" radio button': function (browser) {
//         browser
//             .click('//input[@id=2]')
//             .click('//button[@type="submit"]')
//             .useCss()
//             .waitForElementVisible('#thisIsMainLoader', 30000)
//             .waitForElementNotVisible('#thisIsMainLoader', 30000)
//             .useXpath()
//             .waitForElementVisible('//div[text()="Award saved successfully"]', 30000);
//     },
// });
