var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

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
                this.verify.equal(result.value.y, 421)
                this.setValue('//tr/td[11]/input[@type="text"]', ['holger.kink@rwe.com', browser.Keys.ENTER])
                    .useCss()
                    .waitForElementNotVisible('#thisIsMainLoader', 30000)
                    .useXpath()
                    .verify.elementPresent('//tr[1]/td[11]/span/ul/li[contains(text(),"holger.kink@rwe.com")]')
            });
    },
});