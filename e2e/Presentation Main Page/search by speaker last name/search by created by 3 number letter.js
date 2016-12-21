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
    'select by speaker last name down': function (browser) {
        browser
            .useXpath()
            .getLocationInView("//tr/th[8]", function (result) {
                this.assert.equal(typeof result, "object")
                this.assert.equal(result.status, 0)
                this.assert.equal(result.value.x, 1178)
                this.assert.equal(result.value.y, 523)
                this.setValue('//tr/td[8]/input[@type="text"]', ['web', browser.Keys.ENTER])
                    .useCss()
                    .waitForElementNotVisible('#thisIsMainLoader', 10000)
                    .useXpath()
                    .waitForElementVisible('//tr[1]/td[8]/span/ul/li[text()="             Weber           "]', 5000)
                    .assert.elementPresent('//tr[1]/td[8]/span/ul/li[text()="             Weber           "]')

            });

    },


});