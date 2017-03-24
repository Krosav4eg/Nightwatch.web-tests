var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to check-in': function (browser) {
        browser
            .relUrl('/events/2008/helpdesk');
    },

    'open second delegate ': function (browser) {
        var lastNameColumn = browser.page.helpdesk().section.lastNameColumn;
        lastNameColumn
            .clickBySelector('@secondRowWithLastName');
    },

    'clicking the cross icon in the top right corner': function (browser) {
        var meetingsRequests = browser.page.helpdesk().section.meetingsRequests;
        meetingsRequests
            .clickBySelector('@closeButton')
            .verify.elementNotPresent('@modalContent');
    },

    'open first delegate ': function (browser) {
        var lastNameColumn = browser.page.helpdesk().section.lastNameColumn;
        lastNameColumn
            .clickBySelector('@firstRowWithLastName');
    },

    'check book meeting (Accept a meeting request)': function (browser) {
        var meetingsRequests = browser.page.helpdesk().section.meetingsRequests;
        meetingsRequests
            .clickBySelector('@chevronDown')
            .clickBySelector('@participatingDelegate1')
            .clickBySelector('@bookedMeetingButtonForParticipant1')
            .verify.elementPresent('@bookedErrorMessage');
    },

    'reject meeting (Reject a meeting request)': function (browser) {
        var meetingsRequests = browser.page.helpdesk().section.meetingsRequests;
        meetingsRequests
            .clickBySelector('@rejectedButtonForParticipant1')
            .verify.elementPresent('@rejectSuccessMessage')
            .clickBySelector('@chevronUp');

    },

    'clicking the cross icon in the top right corner again': function (browser) {
        var informationDelegate = browser.page.helpdesk().section.informationDelegate;
        informationDelegate
            .clickBySelector('@cancelButton');
    },

    'open second delegate again': function (browser) {
        var lastNameColumn = browser.page.helpdesk().section.lastNameColumn;
        lastNameColumn
            .clickBySelector('@secondRowWithLastName');
    },

    'change the representative of the meeting': function (browser) {
        var bookedMeetings = browser.page.helpdesk().section.bookedMeetings;
        bookedMeetings
            .clickBySelector('@icon')
            .clickBySelector('@changeRepresentativeButton')

            .verify.elementPresent('@changeRepresentativeHeader')
            .verify.elementPresent('@changeRepresentativeImportantInfo')
            .verify.elementPresent('@changeRepresentativeButtonInNewWindow')
            .verify.elementPresent('@changeRepresentativeInputWindow');
    },
});

