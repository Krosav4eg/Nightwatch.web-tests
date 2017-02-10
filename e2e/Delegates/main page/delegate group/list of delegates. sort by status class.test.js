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

    'sort by status class up': function (browser) {
        browser
            .useXpath()
            .moveToElement('(//tr/th[11])[1]',1340 , 640)
            .clickBySelectorXpath('(//tr/th[11])[1]')

            .verify.containsText('//tr[1]/td[10]/span', '')
            .verify.containsText('//tr[2]/td[10]/span', '')
            .verify.containsText('//tr[3]/td[10]/span', '')
            .verify.containsText('//tr[4]/td[10]/span', '')
            .verify.containsText('//tr[5]/td[10]/span', '');
    },

    'sort by status class down': function (browser) {
        browser
            .moveToElement('(//tr/th[11])[1]', 1340, 640)
            .clickBySelectorXpath('(//tr/th[11])[1]')

            .verify.containsText('//tr[1]/td[11]/span', 'C')
            .verify.containsText('//tr[2]/td[11]/span', 'B')
            .verify.containsText('//tr[3]/td[11]/span', 'B')
            .verify.containsText('//tr[4]/td[11]/span', 'B')
            .verify.containsText('//tr[5]/td[11]/span', 'B');
    },
});