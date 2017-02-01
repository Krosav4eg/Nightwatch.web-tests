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

    'sort by regestration up': function (browser) {
        browser
            .clickBySelectorXpath('(//tr/th[9])[1]')

            .verify.containsText('//tr[1]/td[9]/span', '2010-11-02 14:13:44')
            .verify.containsText('//tr[2]/td[9]/span', '2010-12-06 17:49:59')
            .verify.containsText('//tr[3]/td[9]/span', '2010-12-09 16:02:40')
            .verify.containsText('//tr[4]/td[9]/span', '2011-03-01 13:59:15')
            .verify.containsText('//tr[5]/td[9]/span', '2011-03-07 15:21:44');
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