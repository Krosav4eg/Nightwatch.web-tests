var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/partners')
    },

    'sort by E#ID up': function (browser) {
        var idColumn = browser.page.partners().section.idColumn;
        idColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '#1')
            .verify.containsText('@secondRow', '#2')
            .verify.containsText('@thirdRow', '#3')
            .verify.containsText('@fourthRow', '#4')
    },

    'sort by E#ID down': function (browser) {
        var idColumn = browser.page.partners().section.idColumn;
        idColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '#30')
            .verify.containsText('@secondRow', '#29')
            .verify.containsText('@thirdRow', '#28')
            .verify.containsText('@fourthRow', '#27')
    },

    'search by E#ID. Blank': function (browser) {
        var idColumn = browser.page.partners().section.idColumn;
        idColumn
            .setValueBySelector('@seachColumn', ['25', browser.Keys.ENTER])

            .verify.containsText('@firstRow', '#25')
    },

    'search by E#ID. one numbers': function (browser) {
        var idColumn = browser.page.partners().section.idColumn;
        idColumn
            .setValueBySelector('@seachColumn', ['2', browser.Keys.ENTER])

            .verify.containsText('@firstRow', '#2')
    },
});
