var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to delegates': function (browser) {
        browser
            .relUrl('/event/200/delegates')
    },

    'sort by active Investments up': function (browser) {
        browser
            .useXpath()
            .moveToElement('(//tr/th[10])[1]', 1298, 597)
            .clickBySelectorXpath('(//tr/th[10])[1]')

            .verify.containsText('//tr[1]/td[10]/span', '0')
            .verify.containsText('//tr[2]/td[10]/span', '0')
            .verify.containsText('//tr[3]/td[10]/span', '0')
            .verify.containsText('//tr[4]/td[10]/span', '0')
            .verify.containsText('//tr[5]/td[10]/span', '0');
    },

    'sort by active Investments down': function (browser) {
        browser
            .moveToElement('(//tr/th[10])[1]', 1298, 597)
            .clickBySelectorXpath('(//tr/th[10])[1]')

            .verify.containsText('//tr[1]/td[10]/span', '2')
            .verify.containsText('//tr[2]/td[10]/span', '0')
            .verify.containsText('//tr[3]/td[10]/span', '0')
            .verify.containsText('//tr[4]/td[10]/span', '0')
            .verify.containsText('//tr[5]/td[10]/span', '0');
    },
});