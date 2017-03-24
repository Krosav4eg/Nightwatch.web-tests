var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/partner-meeting-status')
    },

    'sort by Mettings Guarantee up': function (browser) {
        var guaranteeValidColumn = browser.page.meetingStatus().section.guaranteeValidColumn;
        guaranteeValidColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '')
            .verify.containsText('@secondRow', '')
            .verify.containsText('@thirdRow', '')
            .verify.containsText('@fourthRow', '')
            .verify.containsText('@fifthRow', '')

            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '')
            .verify.containsText('@secondRow', '')
            .verify.containsText('@thirdRow', '')
            .verify.containsText('@fourthRow', '')
            .verify.containsText('@fifthRow', '')
    },

    'choose Yes': function (browser) {
        var guaranteeValidColumn = browser.page.meetingStatus().section.guaranteeValidColumn;
        guaranteeValidColumn
            .clickBySelector('@yesOption')

            .verify.elementPresent('@noResultsFound')
    },

    'choose No': function (browser) {
        var guaranteeValidColumn = browser.page.meetingStatus().section.guaranteeValidColumn;
        guaranteeValidColumn
            .clickBySelector('@noOption')

            .verify.elementPresent('@noResultsFound')
    },

    'choose All': function (browser) {
        var guaranteeValidColumn = browser.page.meetingStatus().section.guaranteeValidColumn;
        guaranteeValidColumn
            .clickBySelector('@allOption')

            .verify.containsText('@firstRow', '')
            .verify.containsText('@secondRow', '')
            .verify.containsText('@thirdRow', '')
            .verify.containsText('@fourthRow', '')
            .verify.containsText('@fifthRow', '')
    },
});
