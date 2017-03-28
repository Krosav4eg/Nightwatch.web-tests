var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/partners')
    },

    'sort by Participation status up': function (browser) {
        var participationNameColumn = browser.page.partners().section.participationNameColumn;
        participationNameColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '3SC World')
            .verify.containsText('@secondRow', '4power Infocom Free Zone Company LLC')
            .verify.containsText('@thirdRow', 'Agile Financial Technologies')
            .verify.containsText('@fourthRow', 'Al Ayoubi Technologies LLC')
    },

    'sort by Participation status down': function (browser) {
        var participationNameColumn = browser.page.partners().section.participationNameColumn;
        participationNameColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Workspace Oy')
            .verify.containsText('@secondRow', 'Wisdom Information Technology Solutions')
            .verify.containsText('@thirdRow', 'Westcon Middle East Free Zone Company')
            .verify.containsText('@fourthRow', 'VisionSoft Business Solutions JLT')
    },

    'search by Participation status Blank': function (browser) {
        var participationNameColumn = browser.page.partners().section.participationNameColumn;
        participationNameColumn
            .setValueBySelector('@seachColumn', ['Asbis', browser.Keys.ENTER])

            .verify.containsText('@firstRow', 'Asbis Middle East Free Zone Establishment')
    },

    'search by Participation status 3 numbers': function (browser) {
        var participationNameColumn = browser.page.partners().section.participationNameColumn;
        participationNameColumn
            .setValueBySelector('@seachColumn', ['Asb', browser.Keys.ENTER])

            .verify.containsText('@firstRow', 'Asbis Middle East Free Zone Establishment')
    },
});
