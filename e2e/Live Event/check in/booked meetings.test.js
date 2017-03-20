var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/events/2327/check-in')
    },

    'click Last Name for any of the delegates': function (browser) {
        var lastNameColumn = browser.page.checkIn().section.lastNameColumn;
        lastNameColumn
            .clickBySelector('@firstRow');
    },

    'check Delegate Details': function (browser) {
        var bookedMeetingsPage = browser.page.helpdesk().section.bookedMeetings;
        bookedMeetingsPage
            .verify.elementPresent('@icon')
            .verify.containsText('@dataMeeting', '2017-01-25')
            .verify.containsText('@timeMeeting', '14:15 - 14:30')
            .verify.containsText('@firstname', 'Siemens Oy')
            .verify.containsText('@lastname', 'Jaakko Rantala')
            .verify.containsText('@status', 'Checked')
    },

    'click by icon Meeting': function (browser) {
        var bookedMeetingsPage = browser.page.helpdesk().section.bookedMeetings;
        bookedMeetingsPage
            .clickBySelector('@icon')

            .verify.elementPresent('@cancelButton')
            .verify.elementPresent('@rescheduleButton')
            .verify.elementPresent('@changeRepresentativeButton')

            .clickBySelector('@icon')

            .expect.element('@cancelButton').to.not.be.visible
        bookedMeetingsPage.expect.element('@rescheduleButton').to.not.be.visible;
        bookedMeetingsPage.expect.element('@changeRepresentativeButton').to.not.be.visible;
    },

    'click by name Meeting': function (browser) {
        var bookedMeetingsPage = browser.page.helpdesk().section.bookedMeetings;
        bookedMeetingsPage
            .clickBySelector('@titleName')

            .expect.element('@icon').to.not.be.visible;
        bookedMeetingsPage.expect.element('@timeMeeting').to.not.be.visible;
        bookedMeetingsPage .expect.element('@lastname').to.not.be.visible;

        bookedMeetingsPage .clickBySelector('@titleName')

            .verify.elementPresent('@icon')
            .verify.elementPresent('@timeMeeting')
            .verify.elementPresent('@lastname');
    },
});