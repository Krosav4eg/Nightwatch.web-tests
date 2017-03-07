var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
    },

    'select by speaker last name down': function (browser) {
        browser
            .useXpath()
            .getLocationInView("//tr/th[9]", function (result) {
                this.verify.equal(typeof result, "object")
                this.verify.equal(result.status, 0)
                this.verify.equal(result.value.x, 1350)
                this.verify.equal(result.value.y, 421)
                this.setValue('//tr/td[9]/input[@type="text"]', ['Ing', browser.Keys.ENTER])
                    .useCss()
                    .waitForElementNotVisible('#thisIsMainLoader', 30000)
                    .useXpath()
                    .verify.elementPresent('//tr[1]/td[9]/span/ul/li[contains(text(),"Ingo")]');
            });
    },
});