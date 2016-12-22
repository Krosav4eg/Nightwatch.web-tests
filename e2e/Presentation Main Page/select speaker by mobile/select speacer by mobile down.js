var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {
    '@disabled': false,
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
                this.assert.equal(typeof result, "object")
                this.assert.equal(result.status, 0)
                this.assert.equal(result.value.x, 1350)
                this.assert.equal(result.value.y, 522)
                this.click('//tr/th[12]')
                    .useCss()
                    .waitForElementNotVisible('#thisIsMainLoader', 10000)
                    .useXpath()
                    .waitForElementVisible('//tr/th[12]', 10000)
                    .click('//tr/th[12]')
                    .useCss()
                    .waitForElementVisible('#thisIsMainLoader', 30000)
                    .waitForElementNotVisible('#thisIsMainLoader', 30000)
                    .useXpath()
                    .waitForElementVisible('//tr[1]/td[12]/span/ul/li[text()="             4915254617454           "]', 5000)
                    .assert.elementPresent('//tr[1]/td[12]/span/ul/li[text()="             4915254617454           "]')
                    .assert.elementPresent('//tr[2]/td[12]/span/ul/li[text()="             +49151 46756613           "]')
                    .assert.elementPresent('//tr[2]/td[12]/span/ul/li[text()="             4790992788           "]')
                    .assert.elementPresent('//tr[2]/td[12]/span/ul/li[text()="             324567890546789           "]')


            });

    },


});