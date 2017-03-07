var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to delegates': function (browser) {
        browser
            .relUrl('/event/200/delegates')
    },

    'sort by event group up': function (browser) {
        browser
            .useXpath()
            .moveToElement('(//tr/th[12])[1]',1340 , 640)
            .clickBySelectorXpath('(//tr/th[12])[1]')

            .verify.containsText('//tr[1]/td[12]/span', '')
            .verify.containsText('//tr[2]/td[12]/span', '')
            .verify.containsText('//tr[3]/td[12]/span', '')
            .verify.containsText('//tr[4]/td[12]/span', '')
            .verify.containsText('//tr[5]/td[12]/span', '');
    },

    'sort by event group down': function (browser) {
        browser
            .moveToElement('(//tr/th[12])[1]', 1340, 640)
            .clickBySelectorXpath('(//tr/th[12])[1]')

            .verify.containsText('//tr[1]/td[12]/span', 'Group 2 - violet')
            .verify.containsText('//tr[2]/td[12]/span', 'Group 2 - violet')
            .verify.containsText('//tr[3]/td[12]/span', 'Group 2 - violet')
            .verify.containsText('//tr[4]/td[12]/span', 'Group 2 - violet')
            .verify.containsText('//tr[5]/td[12]/span', 'Group 2 - violet');
    },
});