var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/representatives')
    },

    'sort by Country up': function (browser) {
        var countryColumn = browser.page.representatives().section.countryColumn;
        countryColumn

            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Finland')
            .verify.containsText('@secondRow', 'United Arab Emirates')
            .verify.containsText('@thirdRow', 'United Arab Emirates')
            .verify.containsText('@fourthRow', 'United Arab Emirates')

    },

    'sort by Country down': function (browser) {
        var countryColumn = browser.page.representatives().section.countryColumn;
        countryColumn

            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'United Arab Emirates')
            .verify.containsText('@secondRow', 'United Arab Emirates')
            .verify.containsText('@thirdRow', 'United Arab Emirates')
            .verify.containsText('@fourthRow', 'United Arab Emirates')
    },

    'search by Email Blank': function (browser) {
        var countryColumn = browser.page.representatives().section.countryColumn;
        countryColumn
            .setValueBySelector('@seachColumn', ['Finland', browser.Keys.ENTER])

            .verify.containsText('@firstRow', 'Finland')
    },

    'search by Mobile 3 numbers': function (browser) {
        var countryColumn = browser.page.representatives().section.countryColumn;
        countryColumn
            .setValueBySelector('@seachColumn', ['Fin', browser.Keys.ENTER])

            .verify.containsText('@firstRow', 'Finland')
    },
});
