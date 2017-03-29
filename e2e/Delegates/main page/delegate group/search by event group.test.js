var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to delegates': function (browser) {
        browser
            .relUrl('/event/200/delegates')
    },

    'click blank': function (browser) {
        browser
            .useXpath()
            .moveToElement('(//tr/th[12])[1]',1340 , 640)

            .clickBySelectorXpath('(//tr/td[12]/select/option)[1]')
            .verify.containsText('//tr[1]/td[12]/span', '')
            .verify.containsText('//tr[2]/td[12]/span', '')

            .verify.elementPresent('//h4[contains(text(),"Delegates 0/27")]');
    },

    'click group 1 - orange': function (browser) {
        browser
            .clickBySelectorXpath('//tr/td[12]/select/option[contains(text(),"Group 1 - orange")]')
            .verify.containsText('//tr[1]/td[12]/span', 'Group 1 - orange')
            .verify.containsText('//tr[2]/td[12]/span', 'Group 1 - orange')
            .verify.containsText('//tr[3]/td[12]/span', 'Group 1 - orange')
            .verify.containsText('//tr[4]/td[12]/span', 'Group 1 - orange')

            .verify.elementPresent('//h4[contains(text(),"Delegates 0/8")]');
    },

    'click group 2 - violet': function (browser) {
        browser
            .clickBySelectorXpath('//tr/td[12]/select/option[contains(text(),"Group 2 - violet")]')
            .verify.containsText('//tr[1]/td[12]/span', 'Group 2 - violet')
            .verify.containsText('//tr[2]/td[12]/span', 'Group 2 - violet')
            .verify.containsText('//tr[3]/td[12]/span', 'Group 2 - violet')
            .verify.containsText('//tr[4]/td[12]/span', 'Group 2 - violet')

            .verify.elementPresent('//h4[contains(text(),"Delegates 0/11")]');
    },

});