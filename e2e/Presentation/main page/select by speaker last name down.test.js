var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
    },

    'select by speaker last name up': function (browser) {
        browser
            .useXpath()
            .getLocationInView("//tr/th[8]", function (result) {
                this.verify.equal(typeof result, "object")
                this.verify.equal(result.status, 0)
                this.verify.equal(result.value.x, 1350)
                this.verify.equal(result.value.y, 421)
                this.clickBySelectorXpath('//tr/th[8]')
                    .useXpath()
                    .verify.elementPresent('//tr[1]/td[8]/span/ul/li[contains(text(),"Alphéus")]')
                    .verify.elementPresent('//tr[2]/td[8]/span/ul/li[contains(text(),"Funke")]')
                    .verify.elementPresent('//tr[3]/td[8]/span/ul/li[contains(text(),"Funke")]')
                    .verify.elementPresent('//tr[4]/td[8]/span/ul/li[contains(text(),"Funke")]')
                    .verify.elementPresent('//tr[5]/td[8]/span/ul/li[contains(text(),"Funke")]')
                    .verify.elementPresent('//tr[6]/td[8]/span/ul/li[contains(text(),"Funke")]')
                    .verify.elementPresent('//tr[7]/td[8]/span/ul/li[contains(text(),"Funke")]');
            });
    },

    'select by speaker last name down': function (browser) {
        browser
            .useXpath()
            .clickBySelectorXpath('//tr/th[8]')
            .useXpath()
            .verify.elementPresent('//tr[1]/td[8]/span/ul/li[contains(text(),"Klink")]')
            .verify.elementPresent('//tr[2]/td[8]/span/ul/li[contains(text(),"Funke")]')
            .verify.elementPresent('//tr[3]/td[8]/span/ul/li[contains(text(),"Funke")]')
            .verify.elementPresent('//tr[4]/td[8]/span/ul/li[contains(text(),"Funke")]')
            .verify.elementPresent('//tr[5]/td[8]/span/ul/li[contains(text(),"Funke")]')
            .verify.elementPresent('//tr[6]/td[8]/span/ul/li[contains(text(),"Funke")]')
            .verify.elementPresent('//tr[7]/td[8]/span/ul/li[contains(text(),"Funke")]');
    },
});