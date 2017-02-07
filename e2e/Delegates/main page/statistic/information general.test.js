var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to delegates': function (browser) {
        browser
            .relUrl('/event/200/delegates')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'check information general data': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//h4[contains(text(), "Event (#200)")]')
            .verify.elementPresent('//h3[contains(text(), "IndustryForum Banking & Finance")]')
            .verify.elementPresent('//div[contains(text(),"Local name: StrategyCircle Banken")]')
            .verify.elementPresent('//div[contains(text(),"Dates: 2011-09-27 08:00:00 - 2011-09-28 18:00:00")]')
            .verify.elementPresent('//div[contains(text(),"Venue: , ")]');
    },
});