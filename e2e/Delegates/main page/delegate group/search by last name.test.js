var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to delegates': function (browser) {
        browser
            .relUrl('/event/200/delegates')
    },

    'search by last name ': function (browser) {
        browser
            .setValueByXpath('(//tr/td[2]/input)[1]',['Schritt', browser.Keys.ENTER])
            .verify.elementPresent('//tr[1]/td[2]/span/a[contains(text(),"Schritt")]')

            .verify.elementPresent('//h4[contains(text(),"Delegates 0/1")]');
    },

});