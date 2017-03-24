var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/partner-meeting-status')
    },

    'sort by company up': function (browser) {
        var companyNameColumn = browser.page.meetingStatus().section.companyNameColumn;
        companyNameColumn

            .clickBySelector('@nameColumn')
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '3SC World')
            .verify.containsText('@secondRow', '4power Infocom Free Zone Company LLC')
            .verify.containsText('@thirdRow', 'Agile Financial Technologies')
            .verify.containsText('@fourthRow', 'Al Ayoubi Technologies LLC')
            .verify.containsText('@fifthRow', 'Al Rostamani Communications')
    },

    'sort by company down': function (browser) {
        var companyNameColumn = browser.page.meetingStatus().section.companyNameColumn;
        companyNameColumn

            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Workspace Oy')
            .verify.containsText('@secondRow', 'Wisdom Information Technology Solutions')
            .verify.containsText('@thirdRow', 'Westcon Middle East Free Zone Company')
            .verify.containsText('@fourthRow', 'VisionSoft Business Solutions JLT')
            .verify.containsText('@fifthRow', 'Villen testi')
    },

    'search by company Blank': function (browser) {
        var companyNameColumn = browser.page.meetingStatus().section.companyNameColumn;
        companyNameColumn
            .setValueBySelector('@seachColumn', ['Asbis', browser.Keys.ENTER])

            .verify.containsText('@firstRow', 'Asbis Middle East Free Zone Establishment')
    },

    'search by company 3 numbers': function (browser) {
        browser
            .setValueBySelector('@seachColumn', ['Asb', browser.Keys.ENTER])

            .verify.containsText('@firstRow', 'Asbis Middle East Free Zone Establishment')
    },
});
