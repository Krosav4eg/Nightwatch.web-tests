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

    'search by country': function (browser) {
        browser
            .setValueByXpath('(//tr/td[7]/input)[1]',['Germany', browser.Keys.ENTER])
            .verify.containsText('//tr[1]/td[7]/span', 'Germany')
            .verify.containsText('//tr[2]/td[7]/span', 'Germany')
            .verify.containsText('//tr[3]/td[7]/span', 'Germany')
            .verify.containsText('//tr[3]/td[7]/span', 'Germany')
            .verify.containsText('//tr[5]/td[7]/span', 'Germany')

            .verify.elementPresent('//h4[contains(text(),"Delegates 0/32")]');
    },

});