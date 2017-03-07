var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to delegates': function (browser) {
        browser
            .relUrl('/event/200/delegates')
    },

    'sort by me account up': function (browser) {
        browser
            .useXpath()
            .moveToElement('(//tr/th[13])[1]',1340 , 640)
            .clickBySelectorXpath('(//tr/th[13])[1]')

            .verify.containsText('//tr[1]/td[13]/span', 'No')
            .verify.containsText('//tr[2]/td[13]/span', 'No')
            .verify.containsText('//tr[3]/td[13]/span', 'No')
            .verify.containsText('//tr[4]/td[13]/span', 'No')
            .verify.containsText('//tr[5]/td[13]/span', 'No');
    },

    'sort by me account down': function (browser) {
        browser
            .moveToElement('(//tr/th[13])[1]', 1340, 640)
            .clickBySelectorXpath('(//tr/th[13])[1]')

            .verify.containsText('//tr[1]/td[13]/span', 'No')
            .verify.containsText('//tr[2]/td[13]/span', 'No')
            .verify.containsText('//tr[3]/td[13]/span', 'No')
            .verify.containsText('//tr[4]/td[13]/span', 'No')
            .verify.containsText('//tr[5]/td[13]/span', 'No');
    },
});