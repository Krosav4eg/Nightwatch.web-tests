var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/speakers')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'check event data': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h4[text()="Event (#212)"]', 3000)
    },

    'sort by mobile up': function (browser) {
        browser
            .clickBySelectorXpath('//tr[1]/th[7]')
            .useXpath()
            .verify.containsText("//tr[1]/td[7]/span", "+380937766688")
            .verify.containsText("//tr[2]/td[7]/span", "+47 48 16 06 439898989")
            .verify.containsText("//tr[3]/td[7]/span", "+49 162 2565252");
    },

    'sort by mobile down': function (browser) {
        browser
            .clickBySelectorXpath('//tr[1]/th[7]')
            .useXpath()
            .verify.containsText("//tr[1]/td[7]/span", "4915254617454")
            .verify.containsText("//tr[2]/td[7]/span", "4790992788")
            .verify.containsText("//tr[3]/td[7]/span", "4790992788")
            .verify.containsText("//tr[4]/td[7]/span", "324567890546789")
    },
});