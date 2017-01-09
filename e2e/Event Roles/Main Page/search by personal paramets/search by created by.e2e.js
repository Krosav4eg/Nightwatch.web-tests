// var _ = require('lodash');
// var presteps = require('./../../../presteps/presteps.js');
// var auth = require('./../../../presteps/auth.js');
//
// module.exports = _.assign(presteps, auth, {
//     '@disabled': false,
//     'redirection to agenda': function (browser) {
//         browser
//             .relUrl('/event/212/event-participant-roles')
//             .waitForElementVisible('#thisIsMainLoader', 30000)
//             .waitForElementNotVisible('#thisIsMainLoader', 30000);
//     },
//     'search by function title ': function (browser) {
//         browser
//             .useXpath()
//             .waitForElementVisible('//h1[text()="Event role"]', 3000)
//             .waitForElementVisible('//tr[1]/td[10]/input[@type="text"]', 7000)
//             .setValue('//tr[1]/td[10]/input[@type="text"]', ['Xsolve Test User', browser.Keys.ENTER])
//             .useCss()
//             .waitForElementVisible('#thisIsMainLoader', 3000)
//             .waitForElementNotVisible('#thisIsMainLoader', 3000)
//             .useXpath()
//             .waitForElementVisible('//span[text()="       Xsolve Test User     "]', 3000)
//
//
//
//
//     },
//
//
//
// });