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

    'search by status class': function (browser) {
        browser
            .useXpath()
            .moveToElement('(//tr/th[11])[1]', 1340, 640)
            .setValueByXpath('(//tr/td[11]/input)[1]', ['C', browser.Keys.ENTER])
            .verify.containsText('//tr[1]/td[11]/span', 'C')

            .verify.elementPresent('//h4[contains(text(),"Delegates 0/1")]')

            .setValueByXpath('(//tr/td[11]/input)[1]', ['B', browser.Keys.ENTER])
            .verify.containsText('//tr[1]/td[11]/span', 'B')
            .verify.containsText('//tr[2]/td[11]/span', 'B')
            .verify.containsText('//tr[3]/td[11]/span', 'B')
            .verify.containsText('//tr[4]/td[11]/span', 'B')
            .verify.containsText('//tr[5]/td[11]/span', 'B')
            .verify.containsText('//tr[6]/td[11]/span', 'B')

            .verify.elementPresent('//h4[contains(text(),"Delegates 0/6")]')

            .setValueByXpath('(//tr/td[11]/input)[1]', ['A', browser.Keys.ENTER])
            .verify.containsText('//tr[1]/td[11]/span', 'A4')
            .verify.containsText('//tr[2]/td[11]/span', 'A4')
            .verify.containsText('//tr[3]/td[11]/span', 'A4')
            .verify.containsText('//tr[4]/td[11]/span', 'A4')
            .verify.containsText('//tr[5]/td[11]/span', 'A4')
            .verify.containsText('//tr[6]/td[11]/span', 'A4')
            .verify.containsText('//tr[7]/td[11]/span', 'A4')
            .verify.containsText('//tr[8]/td[11]/span', 'A4')
            .verify.containsText('//tr[9]/td[11]/span', 'A4')
            .verify.containsText('//tr[10]/td[11]/span', 'A4')
            .verify.containsText('//tr[11]/td[11]/span', 'A4')
            .verify.containsText('//tr[12]/td[11]/span', 'A4')

            .verify.elementPresent('//h4[contains(text(),"Delegates 0/12")]');
    },
});