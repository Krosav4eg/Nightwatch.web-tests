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
                this.assert.equal(result.value.x, 1178)
                this.assert.equal(result.value.y, 523)
                this.click('//tr/th[12]')
                    .useCss()
                    .waitForElementNotVisible('#thisIsMainLoader', 10000)
                    .useXpath()
                    .waitForElementVisible('//tr[1]/td[12]/span', 5000)
                    .assert.elementPresent('//tr[1]/td[12]/span')
                    .assert.elementPresent('//tr[2]/td[12]/span')
                    .assert.elementPresent('//tr[3]/td[12]/span')
                    .assert.elementPresent('//tr[4]/td[12]/span')


            });

    },


});