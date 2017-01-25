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

    'sort by presentation type up': function (browser) {
        browser
            .useXpath()
            .moveToElement('//tr[1]/th[10]', 1298, 597)
            .clickBySelectorXpath('//tr[1]/th[10]')
            .waitForElementVisible('//tr[1]/td[10]/span/ul/li[contains(text(),"Case presentation")]', 30000)
            .verify.elementPresent('//tr[2]/td[10]/span/ul/li[contains(text(),"Case presentation")]')
            .verify.elementPresent('//tr[2]/td[10]/span/ul/li[contains(text(),"Case - parallel")]')
            .verify.elementPresent('//tr[4]/td[10]/span/ul/li[contains(text(),"Chairman speach")]')
            .verify.elementPresent('//tr[6]/td[10]/span/ul/li[contains(text(),"Keynote")]')
            .verify.elementPresent('//tr[6]/td[10]/span/ul/li[contains(text(),"Debate")]')
    },

    'sort by presentation type down': function (browser) {
        browser
            .moveToElement('//tr[1]/th[10]', 1298, 597)
            .clickBySelectorXpath('//tr[1]/th[10]')
            .waitForElementVisible('//tr[1]/td[10]/span/ul/li[contains(text(),"Keynote")]', 30000)
            .verify.elementPresent('//tr[1]/td[10]/span/ul/li[contains(text(),"Case - parallel")]')
            .verify.elementPresent('//tr[1]/td[10]/span/ul/li[contains(text(),"Keynote")]')
            .verify.elementPresent('//tr[1]/td[10]/span/ul/li[contains(text(),"Case - parallel")]')
            .verify.elementPresent('//tr[1]/td[10]/span/ul/li[contains(text(),"Debate")]')
            .verify.elementPresent('//tr[1]/td[10]/span/ul/li[contains(text(),"Keynote")]')
    },
});