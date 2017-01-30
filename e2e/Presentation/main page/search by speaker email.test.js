var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

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
                this.verify.equal(typeof result, "object")
                this.verify.equal(result.status, 0)
                this.verify.equal(result.value.x, 1298)
                this.verify.equal(result.value.y, 522)
                this.setValue('//tr/td[11]/input[@type="text"]', ['p.luebcke@mainova.de', browser.Keys.ENTER])
                    .useCss()
                    .waitForElementNotVisible('#thisIsMainLoader', 30000)
                    .useXpath()
                    .waitForElementVisible('//tr[1]/td[11]/span/ul/li[contains(text(),"p.luebcke@mainova.de")]', 5000)
                    .verify.elementPresent('//tr[1]/td[11]/span/ul/li[contains(text(),"p.luebcke@mainova.de")]')
                    .verify.elementPresent('//tr[1]/td[11]/span/ul/li[contains(text(),"go@go.go")]')
                    .verify.elementPresent('//tr[1]/td[11]/span/ul/li[contains(text(),"Sergey_Potapof@mail.ru")]')
            });
    },
});