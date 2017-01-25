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
            .verify.elementPresent('//h3[text()="IndustryForum Energy"]')
            .verify.elementPresent('//div[text()="Local name: StrategyCircle Energie"]')
            .verify.elementPresent('//div[text()="Dates: 2012-05-09 08:00:00 - 2012-05-10 18:00:00"]')
            .verify.elementPresent('//div[text()="Venue: , "]');
    },

    'sort by title up': function (browser) {
        browser
            .clickBySelectorXpath('//tr[1]/th[5]')
            .useXpath()
            .verify.containsText("//tr[1]/td[5]/span", "Avdelingsleder for arkitektur, prosess og sikkerhet")
            .verify.containsText("//tr[2]/td[5]/span", "Bereichsleiter IT")
            .verify.containsText("//tr[3]/td[5]/span", "Function")
            .verify.containsText("//tr[4]/td[5]/span", "Function Title");
    },

    'sort by title down': function (browser) {
        browser
            .clickBySelectorXpath('//tr[1]/th[5]')
            .useXpath()
            .verify.containsText("//tr[1]/td[5]/span", "Senior IT architect")
            .verify.containsText("//tr[2]/td[5]/span", "Senior Adviser Information Security")
            .verify.containsText("//tr[3]/td[5]/span", "Leiter Strategische Unternehmensplanung/ Geschäftsführer BayernwerkeNatur");
    },
});