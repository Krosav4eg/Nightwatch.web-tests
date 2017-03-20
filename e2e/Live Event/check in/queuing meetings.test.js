var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/events/2316/check-in')
    },

    'click Last Name for any of the delegates': function (browser) {
        var lastNameColumn = browser.page.checkIn().section.lastNameColumn;
        lastNameColumn
            .clickBySelector('@firstRow');
    },

    'check Delegate Details': function (browser) {
        var queuingMeetingsPage = browser.page.helpdesk().section.queuingMeetings;
        queuingMeetingsPage
            .clickBySelector('@titleName')

            .verify.containsText('@dataMeeting', 'HiQ Finland')
            .verify.containsText('@dataMeeting', 'Mikko Mölsä')
    },

    'click by data Meeting': function (browser) {
        var queuingMeetingsPage = browser.page.helpdesk().section.queuingMeetings;
        queuingMeetingsPage
            .clickBySelector('@dataMeeting')

            .verify.elementPresent('@bookMeetingButton')
            .verify.elementPresent('@changeRepresentativeButton')

            .clickBySelector('@dataMeeting');

        queuingMeetingsPage.expect.element('@bookMeetingButton').to.not.be.visible;
        queuingMeetingsPage.expect.element('@changeRepresentativeButton').to.not.be.visible;
    },

    'click by name Meeting': function (browser) {
        var queuingMeetingsPage = browser.page.helpdesk().section.queuingMeetings;
        queuingMeetingsPage
            .clickBySelector('@titleName')
            .expect.element('@dataMeeting').to.not.be.visible;

        queuingMeetingsPage .clickBySelector('@titleName')

            .verify.elementPresent('@dataMeeting');
    },
});