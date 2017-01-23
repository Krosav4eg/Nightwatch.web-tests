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
//             .waitForElementVisible('//h3[text()="IndustryForum Chemistry"]', 7000)
//             .waitForElementVisible('//h4[text()="Awards"]', 7000)
//             .waitForElementVisible('//label[text()="Award title local"]', 7000)
//             .waitForElementVisible('//label[text()="Award title English"]', 7000)
//             .waitForElementVisible('//label[text()="Candidate type"]', 7000)
//             .waitForElementVisible('//div[text()="                         Contact                       "]', 7000)
//             .waitForElementVisible('//input[@id=1]', 7000)
//             .waitForElementVisible('//div[text()="                         Company                       "]', 7000)
//             .waitForElementVisible('//div[text()="                         Project                       "]', 7000)
//             .waitForElementVisible('//input[@id=3]', 7000)
//             .waitForElementVisible('//label[text()="Status"]', 7000)
//             .waitForElementVisible('//div[text()="Modified: "]', 7000)
//             .waitForElementVisible('//div[text()="Modified by: "]', 7000)
//             .waitForElementVisible('//button[@type="submit"]', 7000)
//             .waitForElementVisible('//h4[text()="Candidates"]', 7000);
//     },
//
//     'set values into the input fields': function (browser) {
//         browser
//             .waitForElementVisible('//div[1]/div/input[1][@type="text"]', 5000)
//             .clearValue('//div[1]/div/input[1][@type="text"]')
//             .setValue('//div[1]/div/input[1][@type="text"]', 'The best of the best')
//             .clearValue('//div[2]/div/input[1][@type="text"]')
//             .setValue('//div[2]/div/input[1][@type="text"]', 'The best of the best 2');
//     },
//     'status switcher: select "Off" in status switcher': function (browser) {
//         browser
//             .waitForElementVisible('//label[@btnradio="0"]', 7000)
//             .click('//label[@btnradio="0"]');
//     },
//
//     'select "company" candidate type': function (browser) {
//         browser
//             .waitForElementVisible('//input[@id=2]', 7000)
//             .click('//input[@id=2]');
//     },
//     'click save button ': function (browser) {
//         browser
//             .click('//button[@type="submit"]')
//             .useCss()
//             .waitForElementVisible('#thisIsMainLoader', 30000)
//             .waitForElementNotVisible('#thisIsMainLoader', 30000)
//             .useXpath()
//             .waitForElementVisible('//div[text()="Award saved successfully"]', 30000)
//             .assert.elementNotPresent('//h3[text()="Candidate 1"]')
//             .assert.elementNotPresent('//h3[text()="Candidate 2"]');
//     },
//     'to return everything to its original position ': function (browser) {
//         browser
//             .click('//input[@id=1]')
//             .click('//button[@type="submit"]')
//             .click('//label[@btnradio="1"]')
//             .useCss()
//             .waitForElementVisible('#thisIsMainLoader', 30000)
//             .waitForElementNotVisible('#thisIsMainLoader', 30000)
//             .waitForElementVisible('//div[text()="Award saved successfully"]', 30000);
//     },
//
// });
