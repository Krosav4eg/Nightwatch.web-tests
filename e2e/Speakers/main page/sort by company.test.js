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

    'sort by company up': function (browser) {
        browser
            .clickBySelectorXpath('//tr[1]/th[2]')

            .useXpath()
            .verify.containsText("//tr[1]/td[2]/span", ":em engineering methods AG")
            .verify.containsText("//tr[2]/td[2]/span", "Bayernwerk AG")
            .verify.containsText("//tr[3]/td[2]/span", "E.ON Global Commodities SE")
            .verify.containsText("//tr[4]/td[2]/span", "EnergieNetz Mitte GmbH")
            .verify.containsText("//tr[5]/td[2]/span", "EWE AG")
            .verify.containsText("//tr[6]/td[2]/span", "Ferngas Nordbayern GmbH")
            .verify.containsText("//tr[7]/td[2]/span", "Mainova AG")
            .verify.containsText("//tr[8]/td[2]/span", "Norges Statsbaner AS (NSB)");
    },

    'sort by company down': function (browser) {
        browser
            .clickBySelectorXpath('//tr[1]/th[2]')
            .useXpath()
            .verify.containsText("//tr[1]/td[2]/span", "Telenor ASA")
            .verify.containsText("//tr[2]/td[2]/span", "Telenor ASA")
            .verify.containsText("//tr[3]/td[2]/span", "SpareBank 1 Gruppen AS")
            .verify.containsText("//tr[4]/td[2]/span", "RWE Service GmbH")
            .verify.containsText("//tr[5]/td[2]/span", "RWE GBS GmbH")
            .verify.containsText("//tr[6]/td[2]/span", "Norwegian Ministry of Foreign Affairs")
            .verify.containsText("//tr[7]/td[2]/span", "Norges Statsbaner AS (NSB)")
            .verify.containsText("//tr[8]/td[2]/span", "Mainova AG");
    },
});