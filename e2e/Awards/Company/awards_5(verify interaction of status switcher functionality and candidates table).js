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
//     'status switcher is "Off"': function (browser) {
//         browser
//             .click('//input[@id=2]')
//             .click('//label[@btnradio="0"]')
//             .assert.cssProperty('//label[@btnradio="0"]', 'background-color', 'rgba(214, 26, 26, 1)')
//             .click('//button[@type="submit"]')
//             .useCss()
//             .waitForElementVisible('#thisIsMainLoader', 30000)
//             .waitForElementNotVisible('#thisIsMainLoader', 30000)
//             .useXpath()
//             .waitForElementVisible('//div[text()="Award saved successfully"]', 30000);
//
//     },
//
//     // 'click on add new button': function (browser) {
//     //     browser
//     //         .waitForElementVisible('//button[text()="Add a new candidate"]', 30000)
//     //         .click('//button[text()="Add a new candidate"]')
//     //         .waitForElementVisible('//button[text()="Add company"]', 30000)
//     //         .waitForElementVisible('//input[@value-property-name="companyId"]', 30000);
//     //
//     // },
//     //
//     // 'create new candidate': function (browser) {
//     //     browser
//     //         .click('//input[@value-property-name="companyId"]')
//     //         .useCss()
//     //         .setValue('.auto-complete input', "Aalef")
//     //         .pause(3000)
//     //         .useXpath()
//     //         .click('//*[contains(text(),"Aalef")]')
//     //         .click('//button[text()="Add company"]');
//     //
//     // },
//
//     'created candidate is not visible': function (browser) {
//         browser
//         // .waitForElementVisible('//div[text()="Award saved successfully"]', 30000)
//             .assert.elementNotPresent('//h3[text()="Candidate 3"]');
//     },
//     'status switcher is "ON"': function (browser) {
//         browser
//             .click('//input[@id=2]')
//             .click('//label[@btnradio="1"]')
//             .assert.cssProperty('//label[@btnradio="1"]', 'background-color', 'rgba(41, 115, 207, 1)')
//             .click('//button[@type="submit"]')
//             .useCss()
//             .waitForElementVisible('#thisIsMainLoader', 30000)
//             .waitForElementNotVisible('#thisIsMainLoader', 30000)
//             .useXpath()
//             .waitForElementVisible('//div[text()="Award saved successfully"]', 30000)
//             .assert.elementPresent('//h3[text()="Candidate 1"]')
//             .assert.elementPresent('//h3[text()="Candidate 2"]')
//             .assert.elementPresent('//h3[text()="Candidate 3"]');
//
//     },
// })
// ;
