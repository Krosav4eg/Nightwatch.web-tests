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

    'sort by event roles up': function (browser) {
        browser
            .useXpath()
            .moveToElement('//tr[1]/th[11]', 1298, 597)
            .clickBySelectorXpath('//tr[1]/th[11]')
            .waitForElementVisible('//tr[1]/td[11]/span/ul/li[contains(text(),"Chairman")]', 30000)
            .verify.elementPresent('//tr[1]/td[11]/span/ul/li[contains(text(),"Chairman")]')
            .verify.elementPresent('//tr[3]/td[11]/span/ul/li[contains(text(),"Debate speaker")]')
            .verify.elementPresent('//tr[5]/td[11]/span/ul/li[contains(text(),"Case / expert speaker")]')
    },

    'sort by event roles down': function (browser) {
        browser
            .moveToElement('//tr[1]/th[11]', 1298, 597)
            .clickBySelectorXpath('//tr[1]/th[11]')
            .waitForElementVisible('//tr[5]/td[11]/span/ul/li[contains(text(),"Debate speaker")]', 30000)
            .verify.elementPresent('//tr[5]/td[11]/span/ul/li[contains(text(),"Debate speaker")]')
            .verify.elementPresent('//tr[5]/td[11]/span/ul/li[contains(text(),"Keynote speaker")]')
    },
});