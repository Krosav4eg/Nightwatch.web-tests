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

    'check case-parallel presentations': function (browser) {
        browser
            .useXpath()
            .moveToElement('//tr[1]/td[10]/span/ul/li[contains(text(),"Panel discussion")]', 1298, 597)
            .clickBySelectorXpath('//option[text()="Case - parallel"]')

            .useXpath()
            .waitForElementVisible('//tr[1]/td[10]/span/ul/li', 3000)
            .verify.containsText("//tr[1]/td[10]/span/ul/li", "Case - parallel")
            .verify.containsText("//tr[2]/td[10]/span/ul/li", "Case - parallel")
            .verify.containsText("//tr[3]/td[10]/span/ul/li", "Case - parallel")
    },

    'check whole-audience presentations': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Case - whole audience"]')
            .useXpath()
            .waitForElementVisible('//tr[1]/td[10]/span/ul/li', 3000)
            .verify.containsText("//tr[1]/td[10]/span/ul/li", "Case - whole audience")
    },

    'check case presentations': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Case presentation"]')

            .useXpath()
            .waitForElementVisible('//tr[1]/td[10]/span/ul/li', 3000)
            .verify.containsText("//tr[1]/td[10]/span/ul/li", "Case presentation")
            .verify.containsText("//tr[2]/td[10]/span/ul/li", "Case presentation")
            .verify.containsText("//tr[3]/td[10]/span/ul/li", "Case presentation")
    },

    'check chairman speach': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Chairman speach"]')
            .useXpath()
            .waitForElementVisible('//tr[1]/td[10]/span/ul/li', 3000)
            .verify.containsText("//tr[1]/td[10]/span/ul/li", "Chairman speach")
            .verify.containsText("//tr[2]/td[10]/span/ul/li", "Chairman speach")
    },

    'check Cross-function keynote': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Cross-function keynote"]')
            .useXpath()
            .waitForElementVisible('//tr[1]/td[10]/span/ul/li', 3000)
            .verify.containsText("//tr[1]/td[10]/span/ul/li", "Cross-function keynote")
    },

    'check debate': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Debate"]')
            .useXpath()
            .waitForElementVisible('//tr[1]/td[10]/span/ul/li', 3000)
            .verify.containsText("//tr[1]/td[10]/span/ul/li", "Debate")
            .verify.containsText("//tr[2]/td[10]/span/ul/li", "Debate")
            .verify.containsText("//tr[3]/td[10]/span/ul/li", "Debate")
            .verify.containsText("//tr[4]/td[10]/span/ul/li", "Debate")
    },

    'check FishBowl': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="FishBowl"]')
            .useXpath()
            .waitForElementVisible('//tr[1]/td[10]/span/ul/li', 3000)
            .verify.containsText("//tr[1]/td[10]/span/ul/li", "FishBowl")
    },

    'check group discussion initiation': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Group discussion initiation"]')
            .useXpath()
            .waitForElementVisible('//tr[1]/td[10]/span/ul/li', 3000)
            .verify.containsText("//tr[1]/td[10]/span/ul/li", "Group discussion initiation")
            .verify.containsText("//tr[2]/td[10]/span/ul/li", "Group discussion initiation");
    },

    'check group leadership presentation': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Leadership presentation"]')
            .useXpath()
            .waitForElementVisible('//tr[1]/td[10]/span/ul/li', 3000)
            .verify.containsText("//tr[1]/td[10]/span/ul/li", "Leadership presentation")
            .verify.containsText("//tr[2]/td[10]/span/ul/li", "Leadership presentation")
    },

    'check group panel discussion': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Panel discussion"]')
            .useXpath()
            .waitForElementVisible('//tr[1]/td[10]/span/ul/li', 3000)
            .verify.containsText("//tr[1]/td[10]/span/ul/li", "Panel discussion")
            .verify.containsText("//tr[2]/td[10]/span/ul/li", "Panel discussion")
            .verify.containsText("//tr[3]/td[10]/span/ul/li", "Panel discussion")
            .verify.containsText("//tr[4]/td[10]/span/ul/li", "Panel discussion");
    },
});