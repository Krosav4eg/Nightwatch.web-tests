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

    'sort by country up': function (browser) {
        browser
            .clickBySelectorXpath('//tr[1]/th[8]')
            .useXpath()
            .verify.containsText("//tr[1]/td[8]/span", "Belarus")
            .verify.containsText("//tr[2]/td[8]/span", "Norway")
            .verify.containsText("//tr[3]/td[8]/span", "Germany")
            .verify.containsText("//tr[4]/td[8]/span", "Germany");
    },

    'sort by country down': function (browser) {
        browser
            .clickBySelectorXpath('//tr[1]/th[8]')
            .useXpath()
            .verify.containsText("//tr[1]/td[8]/span", "Ukraine")
            .verify.containsText("//tr[2]/td[8]/span", "Norway")
            .verify.containsText("//tr[3]/td[8]/span", "Norway")
            .verify.containsText("//tr[4]/td[8]/span", "Norway");
    },
});