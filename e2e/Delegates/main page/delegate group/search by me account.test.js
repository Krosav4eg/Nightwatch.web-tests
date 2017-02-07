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

    'click blank': function (browser) {
        browser
            .useXpath()
            .moveToElement('(//tr/th[13])[1]', 1340, 640)

            .clickBySelectorXpath('(//tr/td[13]/select/option)[1]')
            .verify.containsText('//tr[1]/td[13]/span', 'No')
            .verify.containsText('//tr[2]/td[13]/span', 'No')
            .verify.containsText('//tr[3]/td[13]/span', 'No')

            .verify.elementPresent('//h4[contains(text(),"Delegates 0/32")]');
    },

    'click no': function (browser) {
        browser
            .useXpath()
            .clickBySelectorXpath('//tr/td[13]/select/option[contains(text(),"No")]')
            .verify.containsText('//tr[1]/td[13]/span', 'No')
            .verify.containsText('//tr[2]/td[13]/span', 'No')
            .verify.containsText('//tr[3]/td[13]/span', 'No')

            .verify.elementPresent('//h4[contains(text(),"Delegates 0/32")]');
    },

    'click Yes': function (browser) {
        browser
            .clickBySelectorXpath('//tr/td[13]/select/option[contains(text(),"Yes")]')
            // .verify.containsText('//tr[1]/td[13]/span', 'Yes')
            // .verify.containsText('//tr[2]/td[13]/span', 'Yes')
            // .verify.containsText('//tr[3]/td[13]/span', 'Yes')
            // .verify.containsText('//tr[4]/td[13]/span', 'Yes')
            .verify.elementPresent('//h4[contains(text(),"Delegates 0/0")]');
    },

});