var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
    },
    
    'search by created by 3 numbers': function (browser) {
        browser
            .setValueByXpath('//tr/td[3]/input[@type="text"]', ['man', browser.Keys.ENTER])
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//tr[1]/td[3]/span/span[contains(text(),"Management Events")]', 5000)
            .verify.elementPresent('//tr[2]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[3]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[4]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[5]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[6]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[7]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[8]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[9]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[10]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[11]/td[3]/span/span[contains(text(),"Management Events")]');
    },

    'search by created by blank': function (browser) {
        browser
            .setValueByXpath('//tr/td[3]/input[@type="text"]', ['', browser.Keys.ENTER])
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//tr[1]/td[3]/span/span[contains(text(),"Management Events")]', 5000)
            .verify.elementPresent('//tr[2]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[3]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[4]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[5]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[6]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[7]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[8]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[9]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[10]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[11]/td[3]/span/span[contains(text(),"Management Events")]');
    },
});