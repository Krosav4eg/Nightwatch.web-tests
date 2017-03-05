// var _ = require('lodash');
// var presteps = require('./../../presteps/presteps.js');
// var auth = require('./../../presteps/auth.js');
//
//
// module.exports = _.assign(presteps, auth, {
//
//     'redirection to agenda': function (browser) {
//         browser
//             .relUrl('/event/212/presentations')
//             .waitForElementVisible('#thisIsMainLoader', 30000)
//             .waitForElementNotVisible('#thisIsMainLoader', 30000);
//     },
//
//     'select press on organizer name': function (browser) {
//         browser
//             .clickBySelectorXpath('//tr/th[3]')
//             .clickBySelectorXpath('//tr/th[3]')
//             .clickBySelectorXpath('//tr[1]/td[3]/span/a')
//             .useXpath()
//             .waitForElementVisible('//div[contains(text(),"Participation info - BET Büro für Energiewirtschaft und technische Planung GmbH - (E#7538)")]', 30000)
//     },
// });