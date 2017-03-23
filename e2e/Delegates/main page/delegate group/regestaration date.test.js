var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to delegates': function (browser) {
        browser
            .relUrl('/event/201/delegates')
    },

    'search by registration date': function (browser) {
        browser
            .setValueByXpath('(//tr/td[9]/input)[1]', ['2016-05-19 17:50:04', browser.Keys.ENTER])
            .pause(2000)
            .verify.containsText('//tr[1]/td[9]/span', '2016-05-19 17:50:04')
    },
});