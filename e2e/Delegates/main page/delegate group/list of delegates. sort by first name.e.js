var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to delegates': function (browser) {
        browser
            .relUrl('/event/200/delegates')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'sort by first name up': function (browser) {
        browser
            .clickBySelectorXpath('(//tr/th[3])[1]')

            .verify.elementPresent('//tr[1]/td[3]/span/a[contains(text(),"Boris")]')
            .verify.elementPresent('//tr[2]/td[3]/span/a[contains(text(),"Brigitte")]')
            .verify.elementPresent('//tr[3]/td[3]/span/a[contains(text(),"Carsten")]')
            .verify.elementPresent('//tr[4]/td[3]/span/a[contains(text(),"Carsten")]')
            .verify.elementPresent('//tr[5]/td[3]/span/a[contains(text(),"Christian")]')
            .verify.elementPresent('//tr[6]/td[3]/span/a[contains(text(),"Christoph")]')
            .verify.elementPresent('//tr[7]/td[3]/span/a[contains(text(),"Daniel")]')
            .verify.elementPresent('//tr[8]/td[3]/span/a[contains(text(),"Eric")]')
            .verify.elementPresent('//tr[9]/td[3]/span/a[contains(text(),"Heiko")]')
            .verify.elementPresent('//tr[10]/td[3]/span/a[contains(text(),"Holger")]')
            .verify.elementPresent('//tr[11]/td[3]/span/a[contains(text(),"Jens")]')
            .verify.elementPresent('//tr[12]/td[3]/span/a[contains(text(),"Jürgen")]')
            .verify.elementPresent('//tr[13]/td[3]/span/a[contains(text(),"Jürgen")]')
            .verify.elementPresent('//tr[14]/td[3]/span/a[contains(text(),"Jürgen")]')
            .verify.elementPresent('//tr[15]/td[3]/span/a[contains(text(),"Jutta")]')
            .verify.elementPresent('//tr[16]/td[3]/span/a[contains(text(),"Kirsten")]')
    },

    'sort by first name down': function (browser) {
        browser
            .clickBySelectorXpath('(//tr/th[3])[1]')

            .verify.elementPresent('//tr[1]/td[3]/span/a[contains(text(),"Zeljko")]')
            .verify.elementPresent('//tr[2]/td[3]/span/a[contains(text(),"Vacancy")]')
            .verify.elementPresent('//tr[3]/td[3]/span/a[contains(text(),"Thomas")]')
            .verify.elementPresent('//tr[4]/td[3]/span/a[contains(text(),"Thilo")]')
            .verify.elementPresent('//tr[5]/td[3]/span/a[contains(text(),"Sven")]')
            .verify.elementPresent('//tr[6]/td[3]/span/a[contains(text(),"Stefan")]')
            .verify.elementPresent('//tr[7]/td[3]/span/a[contains(text(),"Reinhard")]')
            .verify.elementPresent('//tr[8]/td[3]/span/a[contains(text(),"Oliver")]')
            .verify.elementPresent('//tr[9]/td[3]/span/a[contains(text(),"Nurten")]')
            .verify.elementPresent('//tr[10]/td[3]/span/a[contains(text(),"Mike")]')
            .verify.elementPresent('//tr[11]/td[3]/span/a[contains(text(),"Michael")]')
            .verify.elementPresent('//tr[12]/td[3]/span/a[contains(text(),"Matthias")]')
            .verify.elementPresent('//tr[13]/td[3]/span/a[contains(text(),"Markus")]')
            .verify.elementPresent('//tr[14]/td[3]/span/a[contains(text(),"Lothar")]')
            .verify.elementPresent('//tr[15]/td[3]/span/a[contains(text(),"Lanna")]')
            .verify.elementPresent('//tr[16]/td[3]/span/a[contains(text(),"Klaus")]')
    },
});