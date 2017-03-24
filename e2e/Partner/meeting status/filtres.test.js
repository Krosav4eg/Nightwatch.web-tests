var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/partner-meeting-status')
    },

    'choose Show all': function (browser) {
        var allInformation = browser.page.meetingStatus().section.allInformation;
        allInformation
            .clickBySelector('@showAllFilterOption')

        var participationStatusColumn = browser.page.meetingStatus().section.participationStatusColumn;
        participationStatusColumn
            .verify.containsText('@firstRow', 'Unconfirmed')
            .verify.containsText('@secondRow', 'Confirmed')
            .verify.containsText('@thirdRow', 'Confirmed')
            .verify.containsText('@fourthRow', 'Confirmed')
    },

    'choose Show cancelled': function (browser) {
        var allInformation = browser.page.meetingStatus().section.allInformation;
        allInformation
            .clickBySelector('@showCancelledFilterOption')
        var participationStatusColumn = browser.page.meetingStatus().section.participationStatusColumn;
        participationStatusColumn
            .verify.elementPresent('@noResultsFound')
    },

    'choose Show only active': function (browser) {
        var allInformation = browser.page.meetingStatus().section.allInformation;
        allInformation
            .clickBySelector('@showOnlyActiveFilterOption')

        var participationStatusColumn = browser.page.meetingStatus().section.participationStatusColumn;
        participationStatusColumn
            .verify.containsText('@firstRow', 'Unconfirmed')
            .verify.containsText('@secondRow', 'Confirmed')
            .verify.containsText('@thirdRow', 'Confirmed')
            .verify.containsText('@fourthRow', 'Confirmed')
    },

    'click Reset ': function (browser) {
        var allInformation = browser.page.meetingStatus().section.allInformation;
        allInformation
            .clickBySelector('@showCancelledFilterOption')
            .clickBySelector('@resetButton')

        var participationStatusColumn = browser.page.meetingStatus().section.participationStatusColumn;
        participationStatusColumn
            .verify.containsText('@firstRow', 'Unconfirmed')
            .verify.containsText('@secondRow', 'Confirmed')
            .verify.containsText('@thirdRow', 'Confirmed')
            .verify.containsText('@fourthRow', 'Confirmed')
    },
});
