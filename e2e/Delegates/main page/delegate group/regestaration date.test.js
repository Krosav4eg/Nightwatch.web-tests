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

    'search by registration date': function (browser) {
        browser
            .setValueByXpath('(//tr/td[9]/input)[1]', ['2016-12-07 14:26:57', browser.Keys.ENTER])
            .verify.containsText('//tr[1]/td[9]/span', '2016-12-07 14:26:57')

            .verify.elementPresent('//h4[contains(text(),"Delegates 0/1")]');
    },
});