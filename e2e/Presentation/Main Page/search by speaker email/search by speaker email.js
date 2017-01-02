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
    'select by speaker email': function (browser) {
        browser
            .useXpath()
            .getLocationInView("//tr/th[11]", function (result) {
                this.assert.equal(typeof result, "object")
                this.assert.equal(result.status, 0)
                this.assert.equal(result.value.x, 1298)
                this.assert.equal(result.value.y, 522)
                this.setValue('//tr/td[11]/input[@type="text"]', ['p.luebcke@mainova.de', browser.Keys.ENTER])
                    .useCss()
                    .waitForElementNotVisible('#thisIsMainLoader', 10000)
                    .useXpath()
                    .waitForElementVisible('//tr[1]/td[11]/span/ul/li[text()="             p.luebcke@mainova.de           "]', 5000)
                    .assert.elementPresent('//tr[1]/td[11]/span/ul/li[text()="             p.luebcke@mainova.de           "]')
                    .assert.elementPresent('//tr[1]/td[11]/span/ul/li[text()="             go@go.go           "]')
                   // .assert.elementPresent('//tr[1]/td[11]/span/ul/li[text()="             sandra.vekve@mfa.no           "]')
                    .assert.elementPresent('//tr[2]/td[11]/span/ul/li[text()="             p.luebcke@mainova.de           "]')
            });

    },


});