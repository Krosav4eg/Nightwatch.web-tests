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

    'sort by presenter type up': function (browser) {
        browser
            .useXpath()
            .moveToElement('//tr[1]/th[12]', 1298, 597)
            .clickBySelectorXpath('//tr[1]/th[12]')
            .waitForElementVisible('//tr[1]/td[12]/span/ul/li/span[contains(text(),"Delegate")]', 30000)
            .verify.elementPresent('//tr[1]/td[12]/span/ul/li/span[contains(text(),"Delegate")]')
            .verify.elementPresent('//tr[3]/td[12]/span/ul/li/span[contains(text(),"Delegate")]')
            .verify.elementPresent('//tr[5]/td[12]/span/ul/li/span[contains(text(),"Delegate")]')
    },

    'sort by presenter type down': function (browser) {
        browser
            .moveToElement('//tr[1]/th[12]', 1298, 597)
            .clickBySelectorXpath('//tr[1]/th[12]')
            .waitForElementVisible('//tr[1]/td[12]/span/ul/li/span[contains(text(),"Delegate")]', 30000)
            .verify.elementPresent('//tr[1]/td[12]/span/ul/li/span[contains(text(),"Delegate")]')
            .verify.elementPresent('//tr[2]/td[12]/span/ul/li/span[contains(text(),"Delegate")]')
            .verify.elementPresent('//tr[3]/td[12]/span/ul/li/span[contains(text(),"Delegate")]')
    },
});