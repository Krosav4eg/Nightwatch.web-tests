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
    
    'select by speaker last name down': function (browser) {
        browser
            .useXpath()
            .getLocationInView("//tr/th[9]", function (result) {
                this.verify.equal(typeof result, "object")
                this.verify.equal(result.status, 0)
                this.verify.equal(result.value.x, 1350)
                this.verify.equal(result.value.y, 522)
                this.clickBySelectorXpath('//tr/th[9]')
                    .clickBySelectorXpath('//tr/th[9]')

                    .useXpath()
                    .waitForElementVisible('//tr[1]/td[9]/span/ul/li[contains(text(),"Herbert")]', 5000)
                    .verify.elementPresent('//tr[1]/td[9]/span/ul/li[contains(text(),"Herbert")]')
                    .verify.elementPresent('//tr[1]/td[9]/span/ul/li[contains(text(),"Sandra")]')
                    .verify.elementPresent('//tr[2]/td[9]/span/ul/li[contains(text(),"Sandra")]')
                    .verify.elementPresent('//tr[2]/td[9]/span/ul/li[contains(text(),"Olav")]')
            });
    },
});