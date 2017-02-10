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

    'search by status class': function (browser) {
        browser
            .useXpath()
            .moveToElement('(//tr/th[11])[1]', 1340, 640)
            .setValueByXpath('(//tr/td[11]/input)[1]', ['C', browser.Keys.ENTER])
            .verify.containsText('//tr[1]/td[11]/span', 'C')

            .verify.elementPresent('//h4[contains(text(),"Delegates 0/1")]');
    },
});