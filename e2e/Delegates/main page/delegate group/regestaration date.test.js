var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to delegates': function (browser) {
        browser
            .relUrl('/event/201/delegates')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'search by registration date': function (browser) {
        browser
            .setValueByXpath('(//tr/td[9]/input)[1]', ['2015-10-29 13:50:07', browser.Keys.ENTER])
            .pause(2000)
            .verify.containsText('//tr[1]/td[9]/span', '2015-10-29 13:50:07')
            .verify.containsText('//tr[2]/td[9]/span', '2015-10-29 13:50:07')

            .verify.elementPresent('//h4[contains(text(),"Delegates 0/2")]');
    },
});