var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to delegates': function (browser) {
        browser
            .relUrl('/event/200/delegates')
    },

    'sort by regestration up': function (browser) {
        browser
            .clickBySelectorXpath('(//tr/th[9])[1]')

            .verify.containsText('//tr[1]/td[9]/span', '2011-03-07 15:21:44')
            .verify.containsText('//tr[2]/td[9]/span', '2011-06-03 10:56:59')
            .verify.containsText('//tr[3]/td[9]/span', '2011-06-10 11:07:53')
            .verify.containsText('//tr[4]/td[9]/span', '2011-06-10 16:57:36')
            .verify.containsText('//tr[5]/td[9]/span', '2011-06-17 15:00:38');
    },

    'sort by regestration down': function (browser) {
        browser
            .clickBySelectorXpath('(//tr/th[9])[1]')

            .verify.containsText('//tr[1]/td[9]/span', '2016-12-07 14:26:57')
            .verify.containsText('//tr[2]/td[9]/span', '2016-12-07 14:26:56')
            .verify.containsText('//tr[3]/td[9]/span', '2016-12-07 14:26:56')
            .verify.containsText('//tr[4]/td[9]/span', '2016-12-07 14:26:56')
            .verify.containsText('//tr[5]/td[9]/span', '2016-12-07 14:26:37');
    },
});