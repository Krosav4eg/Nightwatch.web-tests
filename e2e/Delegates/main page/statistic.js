var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to delegates': function (browser) {
        browser
            .relUrl('/event/212/delegates')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'check information general data': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//h4[contains(text(), "Event (#212)")]')
            .verify.elementPresent('//h3[contains(text(), "IndustryForum Energy")]')
            .verify.elementPresent('//div[contains(text(),"Local name: StrategyCircle Energie")]')
            .verify.elementPresent('//div[contains(text(),"Dates: 2012-05-09 08:00:00 - 2012-05-10 18:00:00")]')
            .verify.elementPresent('//div[contains(text(),"Venue: , ")]');
    },
});