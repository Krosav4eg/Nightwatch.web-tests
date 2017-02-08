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

    'sort by function title up': function (browser) {
        browser
            .clickBySelectorXpath('(//tr/th[4])[1]')

            .verify.containsText('//tr[1]/td[4]/span', 'Abteilungsdirektor Informationsverarbeitung Operations')
            .verify.containsText('//tr[2]/td[4]/span', 'Abteilungsdirektor gewerbliche Immobilienfinanzierung')
            .verify.containsText('//tr[3]/td[4]/span', 'Bereichsleiter Immobilienmanagement, Construction Mobility Property')
            .verify.containsText('//tr[4]/td[4]/span', 'Bereichsleiter Organisation')
            .verify.containsText('//tr[5]/td[4]/span', 'Bereichsleiter Organisation, Projektmanagement und Konzerneinkauf')
            .verify.containsText('//tr[6]/td[4]/span', 'Bereichsleiter Rechnungswesen/Controlling')
            .verify.containsText('//tr[7]/td[4]/span', 'Bereichsleiter Risikobetreuung')
            .verify.containsText('//tr[8]/td[4]/span', 'Bereichsleiter Versorgungsstrukturen und Firmenkunden')
            .verify.containsText('//tr[9]/td[4]/span', 'Director Group Strategy and Planning')
            .verify.containsText('//tr[10]/td[4]/span', 'Direktor Kreditrisiko-Management')
            .verify.containsText('//tr[11]/td[4]/span', 'Direktor Kreditrisiko-Management')
    },

    'sort by function title down': function (browser) {
        browser
            .clickBySelectorXpath('(//tr/th[4])[1]')

            .verify.containsText('//tr[1]/td[4]/span', 'Vorstandsvorsitzender')
            .verify.containsText('//tr[2]/td[4]/span', 'Vorstand, IT und Kundenservice')
            .verify.containsText('//tr[3]/td[4]/span', 'Vorstand')
            .verify.containsText('//tr[4]/td[4]/span', 'Vorstand')
            .verify.containsText('//tr[5]/td[4]/span', 'Vertriebsdirektor');
    },
});