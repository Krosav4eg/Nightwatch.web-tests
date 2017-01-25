var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');


module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'select press on organizer name': function (browser) {
        browser
            .clickBySelectorXpath('//tr/th[3]')
            .clickBySelectorXpath('//tr/th[3]')
            .clickBySelectorXpath('//tr[1]/td[3]/span/a[contains(text(),"VTT Technical Research Centre of Finland")]')
            .useXpath()
            .waitForElementVisible('//div[contains(text(),"Participation info - VTT Technical Research Centre of Finland  - (E#7589)")]', 30000)
    },
});