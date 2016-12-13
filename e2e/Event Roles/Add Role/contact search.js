// var _ = require('lodash');
// var presteps = require('./../../presteps/presteps.js');
// var auth = require('./../../presteps/auth.js');
//
// module.exports = _.assign(presteps, auth, {
//     '@disabled': false,
//     'redirection to agenda': function (browser) {
//         browser
//             .relUrl('/event/212/event-participant-roles')
//             .waitForElementVisible('#thisIsMainLoader', 10000)
//             .waitForElementNotVisible('#thisIsMainLoader', 10000);
//     },
//     'event role page verify': function (browser) {
//         browser
//             .useXpath()
//             .waitForElementVisible('//h1[text()="Event role"]', 3000)
//             .assert.elementPresent('//h4[text()="Event (#212)"]')
//             .assert.elementPresent('//h4[text()="Event roles"]')
//             .useCss()
//             .assert.elementPresent('h4>span');
//
//     }
//     ,
//     'event participant role verify': function (browser) {
//         browser
//             .useXpath()
//             .assert.elementPresent('//button[text()="Add new role"]')
//             .click('//button[text()="Add new role"]')
//             .waitForElementVisible('//h4[text()="Event Participant Role"]', 5000)
//             .waitForElementVisible('//label[text()="Event Role "]', 5000)
//             .waitForElementVisible('//select[@id="eventRoleId"]', 5000)
//             .waitForElementVisible('//label[text()="Contact / Search"]', 5000)
//             .waitForElementVisible('//input[@placeholder="Choose participant (min 3 chars)"]', 5000)
//             .waitForElementVisible('//modal[@class="modal fade in"]//button[text()="Save"]', 5000);
//
//     },
//     'blank field press save button': function (browser) {
//         browser
//             .click('//modal[@class="modal fade in"]//button[text()="Save"]')
//             .waitForElementVisible('//p[text()="           Event Role is required.         "]', 2000);
//     },
//     'blank field press another field ': function (browser) {
//         browser
//             .setValue('//input[@placeholder="Choose participant (min 3 chars)"]', ['', browser.Keys.ENTER])
//             .waitForElementVisible('//p[text()="           Event Role is required.         "]', 2000);
//
//     },
//     '1 chars in field': function (browser) {
//         browser
//             .setValue('//input[@placeholder="Choose participant (min 3 chars)"]', ['F', browser.Keys.ENTER])
//             .clearValue('//input[@placeholder="Choose participant (min 3 chars)"]')
//             .pause(1100)
//             .assert.elementPresent('//p[text()="           Event Role is required.         "]');
//
//     },
//     '2 chars in field': function (browser) {
//         browser
//             .setValue('//input[@placeholder="Choose participant (min 3 chars)"]', ['Fe', browser.Keys.ENTER])
//             .clearValue('//input[@placeholder="Choose participant (min 3 chars)"]')
//             .pause(1100)
//             .assert.elementPresent('//p[text()="           Event Role is required.         "]');
//
//     },
//     '3 chars in field': function (browser) {
//         browser
//             .setValue('//input[@placeholder="Choose participant (min 3 chars)"]', 'Fen')
//             .clearValue('//input[@placeholder="Choose participant (min 3 chars)"]')
//             .pause(1100)
//             .assert.elementPresent('//p[text()="           Event Role is required.         "]', 2000);
//
//
//     },
//     'save button': function (browser) {
//         browser
//             .waitForElementVisible('//select[@id="eventRoleId"]',2000)
//             .click('//select[@id="eventRoleId"]')
//             .waitForElementVisible('//modal[@class="modal fade in"]//option[text()="Advisory board member"]',2000)
//             .click('//modal[@class="modal fade in"]//option[text()="Advisory board member"]')
//             .setValue('//input[@placeholder="Choose participant (min 3 chars)"]', 'Fenz')
//             .useCss()
//             .waitForElementVisible('#thisIsMainLoader', 10000)
//             .waitForElementNotVisible('#thisIsMainLoader', 10000)
//             .useXpath()
//             .setValue('//input[@placeholder="Choose participant (min 3 chars)"]', [browser.Keys.ENTER])
//             .click('//modal[@class="modal fade in"]//button[text()="Save"]')
//             .pause()
//             .useCss()
//             .waitForElementVisible('#thisIsMainLoader', 10000)
//             .waitForElementNotVisible('#thisIsMainLoader', 10000);
//
//     },
// });
