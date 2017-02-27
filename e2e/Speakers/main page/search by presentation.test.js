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

    'check case-parallel presentations': function (browser) {
        browser
            .useXpath()
            .moveToElement('//*[contains(text(),"Panel discussion")]', 2000, 195)
            .clickBySelectorXpath('//option[text()="Case - parallel"]')

            .verify.elementPresent('//*[contains(text(),"No results found")]')
    },

    'check whole-audience presentations': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Case - whole audience"]')

            .verify.elementPresent('//*[contains(text(),"No results found")]')
    },

    'check case presentations': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Case presentation"]')

            .verify.elementPresent('//*[contains(text(),"No results found")]')
    },

    'check chairman speach': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Chairman speech"]')

            .verify.elementPresent('//*[contains(text(),"No results found")]')
    },

    'check Cross-function keynote': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Cross-function keynote"]')

            .verify.elementPresent('//*[contains(text(),"No results found")]')
    },

    'check debate': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Debate"]')

            .waitForElementVisible('//tr[1]/td[10]/span/ul/li', 3000)
            .verify.containsText("//tr[1]/td[10]/span/ul/li", "Debate")
    },

    'check FishBowl': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="FishBowl"]')

            .verify.elementPresent('//*[contains(text(),"No results found")]')
    },

    'check group discussion initiation': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Group discussion initiation"]')
            .useXpath()
            .waitForElementVisible('//tr[1]/td[10]/span/ul/li', 3000)
            .verify.containsText("//tr[1]/td[10]/span/ul/li", "Group discussion initiation")
    },

    'check group leadership presentation': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Leadership presentation"]')

            .verify.elementPresent('//*[contains(text(),"No results found")]')
    },

    'check group panel discussion': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Panel discussion"]')

            .verify.elementPresent('//*[contains(text(),"No results found")]')
    },
});