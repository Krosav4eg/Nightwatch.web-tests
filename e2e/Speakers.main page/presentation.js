// var _ = require('lodash');
// var presteps = require('./../presteps/presteps.js');
// var auth = require('./../presteps/auth.js');
//
// module.exports = _.assign(presteps, auth, {
//
//     'redirection to agenda': function (browser) {
//         browser
//             .relUrl('/event/212/speakers')
//             .waitForElementVisible('#thisIsMainLoader', 30000)
//             .waitForElementNotVisible('#thisIsMainLoader', 30000);
//     },
//     'check event data': function (browser) {
//         browser
//             .useXpath()
//             .waitForElementVisible('//h4[text()="Event (#212)"]', 3000)
//             .assert.elementPresent('//h3[text()="IndustryForum Energy"]')
//             .assert.elementPresent('//div[text()="Local name: StrategyCircle Energie"]')
//             .assert.elementPresent('//div[text()="Dates: 2012-05-09 08:00:00 - 2012-05-10 18:00:00"]')
//             .assert.elementPresent('//div[text()="Venue: , "]');
//     },
//
//     'check case-parallel presentations': function (browser) {
//         browser
//             .getLocationInView('//tr[1]/th[10]', function (result) {
//                 this.assert.equal(typeof result, "object")
//                 this.assert.equal(result.status, 0)
//                 this.assert.equal(result.value.x, 1298)
//                 this.assert.equal(result.value.y, 597)
//                 this.click('//tr[1]/th[10]')
//                     .useCss()
//                     .waitForElementNotVisible('#thisIsMainLoader', 10000)
//                     .useXpath()
//                    // .waitForElementVisible('//h4/span[text()="3"]', 7000)
//
//
//             });
//
//     },
//
// });