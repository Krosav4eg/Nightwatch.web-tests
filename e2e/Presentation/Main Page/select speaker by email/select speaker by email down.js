var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {
    '@disabled': true,
    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },
    'select by speaker email down': function (browser) {
        browser
            .useXpath()
            .getLocationInView("//tr/th[11]", function (result) {
                this.assert.equal(typeof result, "object")
                this.assert.equal(result.status, 0)
                this.assert.equal(result.value.x, 1298)
                this.assert.equal(result.value.y, 522)
                this.click('//tr/th[11]')
                    .useCss()
                    .waitForElementNotVisible('#thisIsMainLoader', 10000)
                    .useXpath()
                    .waitForElementVisible('//tr/th[11]', 10000)
                    .click('//tr/th[11]')
                    .useCss()
                    .waitForElementVisible('#thisIsMainLoader', 30000)
                    .waitForElementNotVisible('#thisIsMainLoader', 30000)
                    .useXpath()
                    .waitForElementVisible('//tr/td[11]/span/ul/li[1][text()="             p.luebcke@mainova.de           "]', 5000)
                    .assert.elementPresent('//tr/td[11]/span/ul/li[1][text()="             p.luebcke@mainova.de           "]')
                    .assert.elementPresent('//tr[1]/td[11]/span/ul/li[text()="             go@go.go           "]')
                    .assert.elementPresent('//tr[1]/td[11]/span/ul/li[text()="             Sergey_Potapof@mail.ru           "]')

            });

    },


});