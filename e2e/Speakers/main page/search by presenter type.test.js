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

    'check delegate type': function (browser) {
        browser
            .useXpath()
            .moveToElement('//tr[1]/td[12]', 1298, 597)
            .clickBySelectorXpath('//option[text()="Delegate"]')
            .useXpath()
            .waitForElementVisible('//tr[1]/td[12]/span/ul/li/span', 3000)
            .verify.containsText("//tr[1]/td[12]/span/ul/li/span", "Delegate")
            .verify.containsText("//tr[2]/td[12]/span/ul/li/span", "Delegate")
            .verify.containsText("//tr[3]/td[12]/span/ul/li/span", "Delegate")
            .verify.containsText("//tr[4]/td[12]/span/ul/li/span", "Delegate")
            .verify.containsText("//tr[5]/td[12]/span/ul/li/span", "Delegate")
            .verify.containsText("//tr[6]/td[12]/span/ul/li/span", "Delegate")
            .verify.containsText("//tr[7]/td[12]/span/ul/li/span", "Delegate")
            .verify.containsText("//tr[9]/td[12]/span/ul/li/span", "Delegate")
            .verify.containsText("//tr[10]/td[12]/span/ul/li/span", "Delegate")
    },

    'check partner type': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Partner"]')
            .useXpath()
            .waitForElementVisible('//tr[1]/td[12]/span/ul/li/span', 3000)
            .verify.containsText("//tr[1]/td[12]/span/ul/li/span", "Partner")
            .verify.containsText("//tr[2]/td[12]/span/ul/li/span", "Partner")
            .verify.containsText("//tr[3]/td[12]/span/ul/li/span", "Partner")
            .verify.containsText("//tr[4]/td[12]/span/ul/li/span", "Partner");
    },
});