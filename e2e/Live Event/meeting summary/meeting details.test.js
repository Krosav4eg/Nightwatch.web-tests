var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to meeting-summary': function (browser) {
        browser
            .relUrl('/events/2339/meeting-summary');
    },

    'open meeting details': function (browser) {
        var detailsColumn = browser.page.meetingSummary().section.detailsColumn;
        detailsColumn
            .clickBySelector('@firstRowDetails');
    },

    'verify meeting details': function (browser) {
        var meetingDetails = browser.page.meetingSummary().section.meetingDetails;
        meetingDetails
            .verify.containsText('@meetingTime', '2017-03-16 10:00 - 10:15')
            .verify.containsText('@delegate', 'Knut Bjørånesset, ISS Facility Services AS')
            .verify.containsText('@delegateMobile', '+47 40 01 13 15')
            .verify.containsText('@representative', 'Helge Aarvik, SAP Ariba Nordics')
            .verify.containsText('@representativeMobile', '+4741515646')
            .verify.containsText('@meetingStatus', 'Booked')
            .verify.containsText('@meetingType', '1-to-1 meeting')
            .verify.containsText('@meetingInitiated', 'Booked by delegate')
            .verify.containsText('@meetingRequest', '2017-01-30 12:28:23')
            .verify.containsText('@meetingBooked', '2017-01-30 12:28:23')
            .verify.containsText('@modified', '2017-02-07 11:15:51')
            .verify.containsText('@participationStatus', 'Confirmed')
            .verify.containsText('@attendanceStatus', 'Not Arrived')

            .verify.elementPresent('@checkingStatusSelect')
            .verify.elementPresent('@undefinedOption')
            .verify.elementPresent('@okOption')
            .verify.elementPresent('@canceledOption')
            .verify.elementPresent('@delegateMobileService')
            .verify.elementPresent('@representativeMobileService')

            .verify.containsText('@sms', '-')
            .verify.containsText('@called', '')

            .verify.elementPresent('@participationNotesInput')
            .verify.elementPresent('@callingNotesInput')
            .verify.elementPresent('@closeButton')
            .verify.elementPresent('@saveButton')
    },
});