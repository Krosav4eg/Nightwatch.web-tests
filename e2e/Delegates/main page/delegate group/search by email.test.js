var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to delegates': function (browser) {
        browser
            .relUrl('/event/200/delegates')
    },

    'search by email': function (browser) {
        browser
            .setValueByXpath('(//tr/td[6]/input)[1]',['klaus.schritt@ikb.de', browser.Keys.ENTER])
            .verify.containsText('//tr[1]/td[6]/span', 'klaus.schritt@ikb.de')

            .verify.elementPresent('//h4[contains(text(),"Delegates 0/1")]');
    },

});