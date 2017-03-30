var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to rebooking': function (browser) {
        browser
            .relUrl('/event-settings-templates')
    },

    'sort by id down': function (browser) {
        var templateNameColumn = browser.page.searchTemplate().section.templateNameColumn;
        templateNameColumn

            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'hahaha')
            .verify.containsText('@secondRow', 'name')
            .verify.containsText('@thirdRow', 'template -regression')
            .verify.containsText('@fourthRow', 'test')

            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'test2')
            .verify.containsText('@secondRow', 'test1234')
            .verify.containsText('@thirdRow', 'Test Bug')
            .verify.containsText('@fourthRow', 'test - bug')
    },

    'search by company Blank': function (browser) {
        var templateNameColumn = browser.page.searchTemplate().section.templateNameColumn;
        templateNameColumn

            .setValueBySelector('@seachColumn', ['name', browser.Keys.ENTER])

            .verify.containsText('@firstRow', 'name')
    },
});