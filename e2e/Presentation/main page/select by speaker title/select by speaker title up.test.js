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
    
    'select by speaker title up': function (browser) {
        browser
            .useXpath()
            .getLocationInView("//tr/th[10]", function (result) {
                this.verify.equal(typeof result, "object")
                this.verify.equal(result.status, 0)
                this.verify.equal(result.value.x, 1350)
                this.verify.equal(result.value.y, 522)
                this.clickBySelectorXpath('//tr/th[10]')

                    .useXpath()
                    .waitForElementVisible('//tr[1]/td[10]/span', 5000)
                    .verify.elementPresent('//tr[1]/td[10]/span')
                    .verify.elementPresent('//tr[2]/td[10]/span')
                    .verify.elementPresent('//tr[3]/td[10]/span')
                    .verify.elementPresent('//tr[4]/td[10]/span')
            });
    },
});