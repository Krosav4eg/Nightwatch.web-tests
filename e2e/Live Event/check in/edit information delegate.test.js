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

    'check called': function (browser) {
        var informationDelegate = browser.page.helpdesk().section.informationDelegate;
        informationDelegate
            .verify.containsText('@called', '')
            .verify.elementPresent('@calledButton')
    },

    'check Availability': function (browser) {
        var informationDelegate = browser.page.helpdesk().section.informationDelegate;
        informationDelegate
            .verify.containsText('@availability', '2017-02-14 08:15:00 - 2017-02-14 17:00:00')
            .verify.elementPresent('@availabilityEditLink')
    },

    'check Participation Status': function (browser) {
        var informationDelegate = browser.page.helpdesk().section.informationDelegate;
        informationDelegate
            .clickBySelector('@cancelledOption')
            .verify.cssProperty('@participationStatus', 'background-color', 'rgba(255, 80, 80, 1)')

            .clickBySelector('@confirmedOption')
            .verify.cssProperty('@participationStatus', 'background-color', 'rgba(255, 255, 255, 1)')

            .clickBySelector('@confirmedRebookOption')
            .verify.cssProperty('@participationStatus', 'background-color', 'rgba(255, 255, 255, 1)')

            .clickBySelector('@lateCancellationOption')
            .verify.cssProperty('@participationStatus', 'background-color', 'rgba(255, 80, 80, 1)')

            .clickBySelector('@noShowOption')
            .verify.cssProperty('@participationStatus', 'background-color', 'rgba(255, 80, 80, 1)')

            .clickBySelector('@unconfirmedOption')
            .verify.cssProperty('@participationStatus', 'background-color', 'rgba(255, 190, 96, 1)')

            .clickBySelector('@unconfirmedRebookOption')
            .verify.cssProperty('@participationStatus', 'background-color', 'rgba(255, 190, 96, 1)')
            .clickBySelector('@confirmedRebookOption')
            .verify.elementPresent('@noShowButton')
    },

    'check Attendance Status': function (browser) {
        var informationDelegate = browser.page.helpdesk().section.informationDelegate;
        informationDelegate
            .clickBySelector('@calledCanceledOption')
            .verify.cssProperty('@attendanceStatus', 'background-color', 'rgba(255, 80, 80, 1)')

            .clickBySelector('@calledDelayedOption')
            .verify.cssProperty('@attendanceStatus', 'background-color', 'rgba(255, 190, 96, 1)')

            .clickBySelector('@calledNotReachedOption')
            .verify.cssProperty('@attendanceStatus', 'background-color', 'rgba(255, 190, 96, 1)')

            .clickBySelector('@checkedInOption')
            .verify.cssProperty('@attendanceStatus', 'background-color', 'rgba(139, 207, 132, 1)')

            .clickBySelector('@leftOption')
            .verify.cssProperty('@attendanceStatus', 'background-color', 'rgba(255, 80, 80, 1)')

            .clickBySelector('@notArrivedOption')
            .verify.cssProperty('@attendanceStatus', 'background-color', 'rgba(255, 255, 255, 1)')
    },

    'check participation Notes': function (browser) {
        var informationDelegate = browser.page.helpdesk().section.informationDelegate;
        informationDelegate
            .setValueBySelector('@participationNotes', "test participationNotes")

            .verify.valueContains('@participationNotes', "test participationNotes")
    },

    'check calling Notes': function (browser) {
        var informationDelegate = browser.page.helpdesk().section.informationDelegate;
        informationDelegate
            .setValueBySelector('@callingNotes', "test callingNotes")

            .verify.valueContains('@callingNotes', "test callingNotes")
    },

    'click save and cancel': function (browser) {
        var informationDelegate = browser.page.helpdesk().section.informationDelegate;
        informationDelegate
            .clickBySelector('@saveButton')
            .clickBySelector('@cancelButton')
    },

    'verify after edit': function (browser) {
        var lastNameColumn = browser.page.checkIn().section.lastNameColumn;
        lastNameColumn
            .clickBySelector('@firstRow');

        var informationDelegate = browser.page.helpdesk().section.informationDelegate;
        informationDelegate
            .verify.valueContains('@callingNotes', "test callingNotes")
            .verify.valueContains('@participationNotes', "test participationNotes")
            .verify.containsText('@participationStatus', "Confirmed Rebook")
            .verify.containsText('@attendanceStatus', "Not Arrived");
    },

    'edit and verify': function (browser) {
        var informationDelegate = browser.page.helpdesk().section.informationDelegate;
        informationDelegate
            .setValueBySelector('@callingNotes', "test2 test")
            .setValueBySelector('@participationNotes', "test2 test")
            .clickBySelector('@checkedInOption')
            .clickBySelector('@confirmedOption')

            .clickBySelector('@saveButton')
            .clickBySelector('@cancelButton');

        var lastNameColumn = browser.page.checkIn().section.lastNameColumn;
        lastNameColumn
            .clickBySelector('@firstRow');

        var informationDelegate = browser.page.helpdesk().section.informationDelegate;
        informationDelegate
            .verify.valueContains('@callingNotes', "test2 test")
            .verify.valueContains('@participationNotes', "test2 test")
            .verify.containsText('@participationStatus', "Confirmed")
            .verify.containsText('@attendanceStatus', "Checked in");
    },
});