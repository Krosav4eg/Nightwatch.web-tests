var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/representatives')
    },

    'choose Show all': function (browser) {
        browser
            .clickBySelectorXpath('//option[@value=1]')

            .verify.containsText('//tr[1]/td[3]/span', 'Mohd')
            .verify.containsText('//tr[2]/td[3]/span', 'Ville')
            .verify.containsText('//tr[3]/td[3]/span', 'Khuram')
            .verify.containsText('//tr[4]/td[3]/span', 'Asif')
            .verify.containsText('//tr[5]/td[3]/span', 'Om')
    },

    'choose Show cancelled': function (browser) {
        browser
            .clickBySelectorXpath('//option[@value=2]')

            .verify.elementPresent('//*[contains(text(), "No results found")]')
    },

    'choose Show only active': function (browser) {
        browser
            .clickBySelectorXpath('//option[@value=0]')

            .verify.containsText('//tr[1]/td[3]/span', 'Mohd')
            .verify.containsText('//tr[2]/td[3]/span', 'Ville')
            .verify.containsText('//tr[3]/td[3]/span', 'Khuram')
            .verify.containsText('//tr[4]/td[3]/span', 'Asif')
            .verify.containsText('//tr[5]/td[3]/span', 'Om')
    },

    'clock reset all': function (browser) {
        browser
            .clickBySelectorXpath('//*[@class="btn btn-default btn-block filter-button-margins"]')

            .verify.containsText('//tr[1]/td[3]/span', 'Mohd')
            .verify.containsText('//tr[2]/td[3]/span', 'Ville')
            .verify.containsText('//tr[3]/td[3]/span', 'Khuram')
            .verify.containsText('//tr[4]/td[3]/span', 'Asif')
            .verify.containsText('//tr[5]/td[3]/span', 'Om')
    },
});
