var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {
    '@disabled': false,
    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },
    'select by speaker last name down': function (browser) {
        browser
            .useXpath()
            .getLocationInView("//tr/th[10]", function (result) {
                this.assert.equal(typeof result, "object")
                this.assert.equal(result.status, 0)
                this.assert.equal(result.value.x, 1350)
                this.assert.equal(result.value.y, 522)
                this.setValue('//tr/td[10]/input[@type="text"]', ['ges', browser.Keys.ENTER])
                    .useCss()
                    .waitForElementNotVisible('#thisIsMainLoader', 10000)
                    .useXpath()
                    .waitForElementVisible('//tr[2]/td[10]/span/ul/li[text()="             Geschäftsführer           "]', 5000)
                    .assert.elementPresent('//tr[2]/td[10]/span/ul/li[text()="             Geschäftsführer           "]')
                    .assert.elementPresent('//tr[5]/td[10]/span/ul/li[text()="             Geschäftsführer           "]')
                   
            });

    },


});