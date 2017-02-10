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

    'sort by regestration up': function (browser) {
        browser
            .clickBySelectorXpath('(//tr/th[9])[1]')

            .verify.containsText('//tr[1]/td[9]/span', '2015-12-01 17:50:03')
            .verify.containsText('//tr[2]/td[9]/span', '2015-12-23 18:00:03')
            .verify.containsText('//tr[3]/td[9]/span', '2015-12-23 18:00:03')
            .verify.containsText('//tr[4]/td[9]/span', '2015-12-23 18:00:03')
            .verify.containsText('//tr[5]/td[9]/span', '2015-12-23 18:00:03');
    },

    'sort by regestration down': function (browser) {
        browser
            .clickBySelectorXpath('(//tr/th[9])[1]')

            .verify.containsText('//tr[1]/td[9]/span', '2016-08-15 18:10:06')
            .verify.containsText('//tr[2]/td[9]/span', '2016-08-15 18:10:06')
            .verify.containsText('//tr[3]/td[9]/span', '2016-06-16 15:20:03')
            .verify.containsText('//tr[4]/td[9]/span', '2016-06-13 15:50:56')
            .verify.containsText('//tr[5]/td[9]/span', '2016-06-13 15:50:56');
    },
});