var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to delegates': function (browser) {
        browser
            .relUrl('/event/200/delegates')
    },

    'sort by company up': function (browser) {
        browser
            .clickBySelectorXpath('(//tr/th[5])[1]')

            .verify.containsText('//tr[1]/td[5]/span', 'ARGE - Arbeitsgemeinschaft Baden-Württembergischer Bausparkassen')
            .verify.containsText('//tr[2]/td[5]/span', 'Bankhaus Neelmeyer AG')
            .verify.containsText('//tr[3]/td[5]/span', 'Bankhaus Neelmeyer AG')
            .verify.containsText('//tr[4]/td[5]/span', 'Barclaycard Barclays Bank PLC')
            .verify.containsText('//tr[5]/td[5]/span', 'BHF-Bank AG');
    },

    'sort by company down': function (browser) {
        browser
            .clickBySelectorXpath('(//tr/th[5])[1]')

            .verify.containsText('//tr[1]/td[5]/span', 'VR DISKONTBANK GmbH')
            .verify.containsText('//tr[2]/td[5]/span', 'Senacor')
            .verify.containsText('//tr[3]/td[5]/span', 'Seb AG')
            .verify.containsText('//tr[4]/td[5]/span', 'Seb AG')
            .verify.containsText('//tr[5]/td[5]/span', 'Seb AG');
    },
});