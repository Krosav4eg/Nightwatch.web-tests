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

    'search by active investments': function (browser) {
        browser
            .useXpath()
            .moveToElement('(//tr/th[10])[1]', 1340, 640)
            .setValueByXpath('(//tr/td[10]/input)[1]', ['0', browser.Keys.ENTER])
            .verify.containsText('//tr[1]/td[10]/span', '0')
            .verify.containsText('//tr[2]/td[10]/span', '0')
            .verify.containsText('//tr[3]/td[10]/span', '0')
            .verify.containsText('//tr[4]/td[10]/span', '0')

            .verify.elementPresent('//h4[contains(text(),"Delegates 0/32")]');
    },
});