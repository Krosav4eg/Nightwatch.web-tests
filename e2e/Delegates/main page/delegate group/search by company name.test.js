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

    'search by company name': function (browser) {
        browser
            .setValueByXpath('(//tr/td[5]/input)[1]',['Bankhaus Neelmeyer AG', browser.Keys.ENTER])

            .verify.containsText('//tr[1]/td[5]/span', 'Bankhaus Neelmeyer AG')
            .verify.containsText('//tr[2]/td[5]/span', 'Bankhaus Neelmeyer AG')

            .verify.elementPresent('//h4[contains(text(),"Delegates 0/2")]');
    },

});