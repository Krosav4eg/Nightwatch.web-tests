var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/214/speakers')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'check event data': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h4[text()="Event (#214)"]', 3000)
    },

    'sort by title up': function (browser) {
        browser
            .clickBySelectorXpath('//tr[1]/th[5]')
            .verify.containsText("//tr[1]/td[5]/span", "Geschäftsführer")
            .verify.containsText("//tr[2]/td[5]/span", "Head of Global Construction")
            .verify.containsText("//tr[3]/td[5]/span", "Senior Principal Engineer, Corporate Technology")
            .verify.containsText("//tr[4]/td[5]/span", "Vice President Sales China and Mongolia");
    },

    'sort by title down': function (browser) {
        browser
            .clickBySelectorXpath('//tr[1]/th[5]')
            .verify.containsText("//tr[1]/td[5]/span", "Vorstand Industrie")
            .verify.containsText("//tr[2]/td[5]/span", "Vice President Sales China and Mongolia")
            .verify.containsText("//tr[3]/td[5]/span", "Senior Principal Engineer, Corporate Technology");
    },

    'search by title ': function (browser) {
        browser
            .setValueByXpath('//tr[1]/td[5]/input[@type="text"]', ['Geschäftsführer', browser.Keys.ENTER])
            .verify.containsText("//tr[1]/td[5]/span", "Geschäftsführer");
    },
});