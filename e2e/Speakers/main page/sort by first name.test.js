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

    'sort by first name up': function (browser) {
        browser
            .clickBySelectorXpath('//tr[1]/th[4]')
            .useXpath()
            .verify.containsText("//tr[1]/td[4]/span", "Alexander")
            .verify.containsText("//tr[2]/td[4]/span", "Cathal")
            .verify.containsText("//tr[3]/td[4]/span", "Constantin")
            .verify.containsText("//tr[4]/td[4]/span", "Herbert");
    },

    'sort by first name down': function (browser) {
        browser
            .clickBySelectorXpath('//tr[1]/th[4]')
            .useXpath()
            .verify.containsText("//tr[1]/td[4]/span", "Sandra")
            .verify.containsText("//tr[2]/td[4]/span", "Potapoff")
            .verify.containsText("//tr[3]/td[4]/span", "Philipp")
            .verify.containsText("//tr[4]/td[4]/span", "Olav");
    },
});