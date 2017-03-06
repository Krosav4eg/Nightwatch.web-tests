var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'select by speaker email up': function (browser) {
        browser
            .useXpath()
            .getLocationInView("//tr/th[12]", function (result) {
                this.verify.equal(typeof result, "object")
                this.verify.equal(result.status, 0)
                this.verify.equal(result.value.x, 1350)
                this.verify.equal(result.value.y, 421)
                this.clickBySelectorXpath('//tr/th[12]')
                    .useXpath()
                    .verify.elementPresent('//tr[1]/td[12]/span/ul/li[contains(text(),"")]')
                    .verify.elementPresent('//tr[2]/td[12]/span/ul/li[contains(text(),"")]')
                    .verify.elementPresent('//tr[3]/td[12]/span/ul/li[contains(text(),"")]')
                    .verify.elementPresent('//tr[4]/td[12]/span/ul/li[contains(text(),"")]')
                    .verify.elementPresent('//tr[5]/td[12]/span/ul/li[contains(text(),"")]')
                    .verify.elementPresent('//tr[6]/td[12]/span/ul/li[contains(text(),"")]')
                    .verify.elementPresent('//tr[7]/td[12]/span/ul/li[contains(text(),"")]')
                    .verify.elementPresent('//tr[8]/td[12]/span/ul/li[contains(text(),"")]')
                    .verify.elementPresent('//tr[9]/td[12]/span/ul/li[contains(text(),"")]')
                    .verify.elementPresent('//tr[10]/td[12]/span/ul/li[contains(text(),"+49 162 2565252")]')
                    .verify.elementPresent('//tr[11]/td[12]/span/ul/li[contains(text(),"+49 1622850155")]');
            });
    },

    'select by speaker email down': function (browser) {
        browser
            .useXpath()
            .clickBySelectorXpath('//tr/th[12]')
            .verify.elementPresent('//tr[1]/td[12]/span/ul/li[contains(text(),"+49 1622850155")]')
            .verify.elementPresent('//tr[2]/td[12]/span/ul/li[contains(text(),"+49 162 2565252")]')
            .verify.elementPresent('//tr[3]/td[12]/span/ul/li[contains(text(),"")]')
            .verify.elementPresent('//tr[4]/td[12]/span/ul/li[contains(text(),"")]')
            .verify.elementPresent('//tr[5]/td[12]/span/ul/li[contains(text(),"")]')
            .verify.elementPresent('//tr[6]/td[12]/span/ul/li[contains(text(),"")]')
            .verify.elementPresent('//tr[7]/td[12]/span/ul/li[contains(text(),"")]')
            .verify.elementPresent('//tr[8]/td[12]/span/ul/li[contains(text(),"")]');
    },
});