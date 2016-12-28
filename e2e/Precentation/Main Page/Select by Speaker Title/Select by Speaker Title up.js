var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {
    '@disabled': true,
    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },
    'select by speaker title up': function (browser) {
        browser
            .useXpath()
            .getLocationInView("//tr/th[10]", function (result) {
                this.assert.equal(typeof result, "object")
                this.assert.equal(result.status, 0)
                this.assert.equal(result.value.x, 1350)
                this.assert.equal(result.value.y, 522)
                this.click('//tr/th[10]')
                    .useCss()
                    .waitForElementNotVisible('#thisIsMainLoader', 10000)
                    .useXpath()
                    .waitForElementVisible('//tr[1]/td[10]/span', 5000)
                    .assert.elementPresent('//tr[1]/td[10]/span')
                    .assert.elementPresent('//tr[2]/td[10]/span')
                    .assert.elementPresent('//tr[3]/td[10]/span')
                    .assert.elementPresent('//tr[4]/td[10]/span')


            });

    },


});