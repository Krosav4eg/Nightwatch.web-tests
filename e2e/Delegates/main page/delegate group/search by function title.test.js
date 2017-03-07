var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');
module.exports = _.assign(presteps, auth, {

    'redirection to delegates': function (browser) {
        browser
            .relUrl('/event/200/delegates')
    },

    'search by function title': function (browser) {
        browser
            .setValueByXpath('(//tr/td[4]/input)[1]',['Direktor Kreditrisiko-Management', browser.Keys.ENTER])
            .pause(2000)
            .verify.containsText('//tr[1]/td[4]/span', 'Direktor Kreditrisiko-Management')
            .verify.containsText('//tr[2]/td[4]/span', 'Direktor Kreditrisiko-Management')

            .verify.elementPresent('//h4[contains(text(),"Delegates 0/2")]');
    },

});