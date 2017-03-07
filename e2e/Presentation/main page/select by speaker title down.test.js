var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
    },

    'select by speaker title up': function (browser) {
        browser
            .useXpath()
            .getLocationInView("//tr/th[10]", function (result) {
                this.verify.equal(typeof result, "object")
                this.verify.equal(result.status, 0)
                this.verify.equal(result.value.x, 1350)
                this.verify.equal(result.value.y, 421)
                this.clickBySelectorXpath('//tr/th[10]')

                    .useXpath()
                    .verify.elementPresent('//tr[1]/td[10]/span/ul/li[contains(text(),"Geschäftsführer")]')
                    .verify.elementPresent('//tr[2]/td[10]/span/ul/li[contains(text(),"Leiter Handel und Portfoliomanagement")]')
                    .verify.elementPresent('//tr[3]/td[10]/span/ul/li[contains(text(),"Leiter Handel und Portfoliomanagement")]')
                    .verify.elementPresent('//tr[4]/td[10]/span/ul/li[contains(text(),"Leiter Handel und Portfoliomanagement")]')
                    .verify.elementPresent('//tr[5]/td[10]/span/ul/li[contains(text(),"Leiter Handel und Portfoliomanagement")]');
            });
    },
    'select by speaker title down': function (browser) {
        browser
            .clickBySelectorXpath('//tr/th[10]')

            .verify.elementPresent('//tr[1]/td[10]/span/ul/li[contains(text(),"Senior Consultant & Analyst, Center of Expertise")]')
            .verify.elementPresent('//tr[2]/td[10]/span/ul/li[contains(text(),"Leiter Handel und Portfoliomanagement")]')
            .verify.elementPresent('//tr[3]/td[10]/span/ul/li[contains(text(),"Leiter Handel und Portfoliomanagement")]')
            .verify.elementPresent('//tr[4]/td[10]/span/ul/li[contains(text(),"Leiter Handel und Portfoliomanagement")]')
            .verify.elementPresent('//tr[5]/td[10]/span/ul/li[contains(text(),"Leiter Handel und Portfoliomanagement")]')
            .verify.elementPresent('//tr[6]/td[10]/span/ul/li[contains(text(),"Leiter Handel und Portfoliomanagement")]');
    },
});