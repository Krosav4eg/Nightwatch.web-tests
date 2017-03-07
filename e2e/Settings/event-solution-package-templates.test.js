var _ = require('lodash');
var presteps = require('./../presteps/presteps.js');
var auth = require('./../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event-solution-package-templates')
    },

    'choose Uitto': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Active"]')
            .verify.containsText('//tr[2]/td[2]', 'Active')

            .clickBySelectorXpath('//option[text()="Archived"]')
            .verify.containsText('//tr[2]/td[2]', 'Archived')

            .clickBySelectorXpath('//option[text()="Passive"]')
            .verify.elementPresent('//*[contains(text(), "No results found")]');
    },
});