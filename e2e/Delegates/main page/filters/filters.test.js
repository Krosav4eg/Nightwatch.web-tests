var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2008/delegates')
    },

    'choose Show all': function (browser) {
        browser
            .clickBySelectorXpath('(//option[@value=1])[1]')
    },

    'choose Show cancelled': function (browser) {
        browser
            .clickBySelectorXpath('(//option[@value=2])[1]')
            .verify.cssProperty('(//tr[@class="hover participation-status-cancelled"])[1]', 'background-color', 'rgba(255, 80, 80, 1)')
            .verify.cssProperty('(//tr[@class="hover participation-status-cancelled"])[2]', 'background-color', 'rgba(255, 80, 80, 1)')
            .verify.cssProperty('(//tr[@class="hover participation-status-cancelled"])[3]', 'background-color', 'rgba(255, 80, 80, 1)')
            .verify.cssProperty('(//tr[@class="hover participation-status-cancelled"])[4]', 'background-color', 'rgba(255, 80, 80, 1)')
            .verify.cssProperty('(//tr[@class="hover participation-status-cancelled"])[5]', 'background-color', 'rgba(255, 80, 80, 1)')
            .verify.cssProperty('(//tr[@class="hover participation-status-cancelled"])[6]', 'background-color', 'rgba(255, 80, 80, 1)')
            .verify.cssProperty('(//tr[@class="hover participation-status-cancelled"])[7]', 'background-color', 'rgba(255, 80, 80, 1)')
            .verify.cssProperty('(//tr[@class="hover participation-status-cancelled"])[8]', 'background-color', 'rgba(255, 80, 80, 1)')
            .verify.cssProperty('(//tr[@class="hover participation-status-cancelled"])[9]', 'background-color', 'rgba(255, 80, 80, 1)')
    },
});
