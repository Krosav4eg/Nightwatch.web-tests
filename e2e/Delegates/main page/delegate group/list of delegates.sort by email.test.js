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

    'sort by email up': function (browser) {
        browser
            .clickBySelectorXpath('(//tr/th[6])[1]')

            .verify.containsText('//tr[1]/td[6]/span', 'boris.strucken@muenchenerhyp.de')
            .verify.containsText('//tr[2]/td[6]/span', 'brigitte.reuss@bh-bank.com')
            .verify.containsText('//tr[3]/td[6]/span', 'carsten.biermann@bhf-bank.com')
            .verify.containsText('//tr[4]/td[6]/span', 'christian.toellner@seb.de');
    },

    'sort by email down': function (browser) {
        browser
            .clickBySelectorXpath('(//tr/th[6])[1]')

            .verify.containsText('//tr[1]/td[6]/span', 'sven.staender@seb.de')
            .verify.containsText('//tr[2]/td[6]/span', 'stefan.zeidler@rlp-bank.de')
            .verify.containsText('//tr[3]/td[6]/span', 'Reinhard.Zelger@bhf-bank.com')
            .verify.containsText('//tr[4]/td[6]/span', 'nurten.erdogan@db.com')
            .verify.containsText('//tr[5]/td[6]/span', 'mike.schaub@ibb.de')
    },
});