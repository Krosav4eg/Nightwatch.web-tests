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

    'sort by presentation type up': function (browser) {
        browser
            .useXpath()
            .moveToElement('//tr[1]/th[10]', 1298, 597)
            .clickBySelectorXpath('//tr[1]/th[10]')
            .verify.containsText('//tr[1]/td[10]/span/ul/li', 'Debate')
            .verify.containsText('//tr[2]/td[10]/span/ul/li', 'Group discussion initiation')
            .verify.containsText('//tr[3]/td[10]/span/ul/li', 'Keynote')
            .verify.containsText('//tr[4]/td[10]/span/ul/li', 'Keynote')
            .verify.containsText('//tr[5]/td[10]/span/ul/li', 'Keynote')
    },

    'sort by presentation type down': function (browser) {
        browser
            .moveToElement('//tr[1]/th[10]', 1298, 597)
            .clickBySelectorXpath('//tr[1]/th[10]')
            .verify.containsText('//tr[2]/td[10]/span/ul/li', 'Keynote')
            .verify.containsText('//tr[3]/td[10]/span/ul/li', 'Keynote')
            .verify.containsText('//tr[4]/td[10]/span/ul/li', 'Group discussion initiation')
            .verify.containsText('//tr[5]/td[10]/span/ul/li', 'Debate')
    },

    'check case-parallel presentations': function (browser) {
        browser
            .useXpath()
            .moveToElement('//tr[1]/th[10]', 1298, 597)
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