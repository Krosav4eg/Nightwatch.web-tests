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

    'open delegateMobileService': function (browser) {
        var meetingDetails = browser.page.meetingSummary().section.meetingDetails;
        meetingDetails
            .clickBySelector('@delegateMobileService');

        browser.window_handles(function(result) {
            var handle = result.value[1];
            browser.switchWindow(handle)
                .useXpath()
                .waitForElementVisible('//*[@class="nav filter-list ng-scope"]', 90000);
            this.verify.urlContains("app.managementevents.com/#/event/2339/meetings");

            browser.closeWindow(handle);
            handle = result.value[0];
            browser.switchWindow(handle);});
    },

    'open representativeMobileService': function (browser) {
        var meetingDetails = browser.page.meetingSummary().section.meetingDetails;
        meetingDetails
            .clickBySelector('@representativeMobileService');

        browser.window_handles(function(result) {
            var handle = result.value[1];
            browser.switchWindow(handle)
                .useXpath()
                .waitForElementVisible('//span[@class="ns-login ng-binding"]', 60000);
            this.verify.urlContains("app.managementevents.com/#/signup");

            browser.closeWindow(handle);
            handle = result.value[0];
            browser.switchWindow(handle);});
    },

    'click cancel button': function (browser) {
        var meetingDetails = browser.page.meetingSummary().section.meetingDetails;
        meetingDetails
            .clickBySelector('@closeButton');
    },

    'click save button': function (browser) {
        var detailsColumn = browser.page.meetingSummary().section.detailsColumn;
        var meetingDetails = browser.page.meetingSummary().section.meetingDetails;
        var toastInfo = browser.page.toasInformation();

        detailsColumn
            .clickBySelector('@firstRowDetails');
        var meetingDetails = browser.page.meetingSummary().section.meetingDetails;
        meetingDetails
            .clickBySelector('@saveButton');

        toastInfo
            .verify.containsText('@toastTitle', 'Success')
            .verify.containsText('@toastContent', 'Event Participant saved');
    },
});