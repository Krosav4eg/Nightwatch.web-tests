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

    'select by speaker email down': function (browser) {
        browser
            .useXpath()
            .getLocationInView("//tr/th[11]", function (result) {
                this.verify.equal(typeof result, "object")
                this.verify.equal(result.status, 0)
                this.verify.equal(result.value.x, 1298)
                this.verify.equal(result.value.y, 522)
                this.clickBySelectorXpath('//tr/th[11]')
                    .clickBySelectorXpath('//tr/th[11]')

                    .useXpath()
                    .waitForElementVisible('//tr/td[11]/span/ul/li[1][contains(text(),"p.luebcke@mainova.de")]', 5000)
                    .verify.elementPresent('//tr/td[11]/span/ul/li[1][contains(text(),"p.luebcke@mainova.de")]')
                    .verify.elementPresent('//tr[1]/td[11]/span/ul/li[contains(text(),"go@go.go")]')
                    .verify.elementPresent('//tr[1]/td[11]/span/ul/li[contains(text(),"Sergey_Potapof@mail.ru")]')
            });
    },
});