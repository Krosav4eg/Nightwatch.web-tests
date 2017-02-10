var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to delegates': function (browser) {
        browser
            .relUrl('/event/200/delegates')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'sort by last name up': function (browser) {
        browser
            .clickBySelectorXpath('(//tr/th[2])[1]')

            .verify.elementPresent('//tr[1]/td[2]/span/a[contains(text(),"Biermann")]')
            .verify.elementPresent('//tr[2]/td[2]/span/a[contains(text(),"Brunzema")]')
            .verify.elementPresent('//tr[3]/td[2]/span/a[contains(text(),"Ecke")]')
            .verify.elementPresent('//tr[4]/td[2]/span/a[contains(text(),"Erdogan")]')
            .verify.elementPresent('//tr[5]/td[2]/span/a[contains(text(),"Exner")]');
    },

    'sort by last name down': function (browser) {
        browser
            .clickBySelectorXpath('(//tr/th[2])[1]')

            .verify.elementPresent('//tr[1]/td[2]/span/a[contains(text(),"Zelger")]')
            .verify.elementPresent('//tr[2]/td[2]/span/a[contains(text(),"Zeidler")]')
            .verify.elementPresent('//tr[3]/td[2]/span/a[contains(text(),"Zahn")]')
            .verify.elementPresent('//tr[4]/td[2]/span/a[contains(text(),"Töllner")]')
            .verify.elementPresent('//tr[5]/td[2]/span/a[contains(text(),"Strucken")]')
            .verify.elementPresent('//tr[6]/td[2]/span/a[contains(text(),"Staender")]')
            .verify.elementPresent('//tr[7]/td[2]/span/a[contains(text(),"Schritt")]')
            .verify.elementPresent('//tr[8]/td[2]/span/a[contains(text(),"Schaub")]')
            .verify.elementPresent('//tr[9]/td[2]/span/a[contains(text(),"Reuss")]')
            .verify.elementPresent('//tr[10]/td[2]/span/a[contains(text(),"Pommer")]');
    },
});