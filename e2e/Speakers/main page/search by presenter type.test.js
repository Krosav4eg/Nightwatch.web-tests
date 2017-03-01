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

    'sort by presenter type up': function (browser) {
        browser
            .useXpath()
            .moveToElement('//tr[1]/th[12]', 1298, 597)
            .clickBySelectorXpath('//tr[1]/th[12]')
            .verify.containsText('//tr[1]/td[12]/span/ul/li/span', 'Delegate')
            .verify.containsText('//tr[3]/td[12]/span/ul/li/span', 'Delegate')
            .verify.containsText('//tr[4]/td[12]/span/ul/li/span', 'Delegate')
    },

    'sort by presenter type down': function (browser) {
        browser
            .moveToElement('//tr[1]/th[12]', 1298, 597)
            .clickBySelectorXpath('//tr[1]/th[12]')
            .verify.containsText('//tr[3]/td[12]/span/ul/li', 'Delegate')
            .verify.containsText('//tr[4]/td[12]/span/ul/li', 'Delegate')
            .verify.containsText('//tr[5]/td[12]/span/ul/li', 'Delegate')
    },

    'check delegate type': function (browser) {
        browser
            .useXpath()
            .moveToElement('//tr[1]/td[12]', 1298, 597)
            .clickBySelectorXpath('//option[text()="Delegate"]')
            .verify.containsText("//tr[1]/td[12]/span/ul/li", "Delegate")
            .verify.containsText("//tr[2]/td[12]/span/ul/li", "Delegate")
            .verify.containsText("//tr[3]/td[12]/span/ul/li", "Delegate")
            .verify.containsText("//tr[4]/td[12]/span/ul/li", "Delegate")
            .verify.containsText("//tr[5]/td[12]/span/ul/li", "Delegate")
    },

    'check partner type': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Partner"]')
            .verify.elementPresent('//*[contains(text(),"No results found")]')
    },
});