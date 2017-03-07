var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to delegates': function (browser) {
        browser
            .relUrl('/event/200/delegates')
    },

    'sort by participation up': function (browser) {
        browser
            .clickBySelectorXpath('(//tr/th[8])[1]')

            .verify.containsText('//tr[1]/td[8]/span', 'Confirmed')
            .verify.containsText('//tr[2]/td[8]/span', 'Confirmed')
            .verify.containsText('//tr[3]/td[8]/span', 'Confirmed')
            .verify.containsText('//tr[4]/td[8]/span', 'Confirmed')
            .verify.containsText('//tr[5]/td[8]/span', 'Confirmed');
    },

    'sort by participation down': function (browser) {
        browser
            .clickBySelectorXpath('(//tr/th[8])[1]')

            .verify.containsText('//tr[1]/td[8]/span', 'Confirmed')
            .verify.containsText('//tr[2]/td[8]/span', 'Confirmed')
            .verify.containsText('//tr[3]/td[8]/span', 'Confirmed')
            .verify.containsText('//tr[4]/td[8]/span', 'Confirmed')
            .verify.containsText('//tr[5]/td[8]/span', 'Confirmed');
    },
});