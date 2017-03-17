var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to check-in': function (browser) {
        browser
            .relUrl('/events/2339/check-in')
    },

    'open first delegate': function (browser) {
        var lastNameColumn = browser.page.checkIn().section.lastNameColumn;
        lastNameColumn
            .clickBySelector('@firstRow');
    },

    'check Attendance Status': function (browser) {
        var delgatesInfo = browser.page.checkIn().section.delgatesInfo;
        delgatesInfo
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

        var delgatesInfo = browser.page.checkIn().section.delgatesInfo;
        delgatesInfo
            .verify.containsText('@attendanceStatus', "Not Arrived");
    },

    'edit and verify': function (browser) {
        var delgatesInfo = browser.page.checkIn().section.delgatesInfo;
        delgatesInfo
            .clickBySelector('@checkedInOption')
            .clickBySelector('@saveButton')
            .clickBySelector('@cancelButton');

        var lastNameColumn = browser.page.checkIn().section.lastNameColumn;
        lastNameColumn
            .clickBySelector('@firstRow');

        var delgatesInfo = browser.page.checkIn().section.delgatesInfo;
        delgatesInfo
            .verify.containsText('@attendanceStatus', "Checked in");
    },
});