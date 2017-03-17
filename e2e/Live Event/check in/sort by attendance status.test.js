var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to check-in': function (browser) {
        browser
            .relUrl('/events/2339/check-in')
    },

    'sort by Attendance status up': function (browser) {
        var attendanceStatusesColumn = browser.page.checkIn().section.attendanceStatusesColumn;
        attendanceStatusesColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Checked in')
            .verify.containsText('@secondRow', 'Not Arrived')
            .verify.containsText('@thirdRow', 'Not Arrived')
            .verify.containsText('@fourthRow', 'Not Arrived');

    },

    'sort by Attendance status down': function (browser) {
        var attendanceStatusesColumn = browser.page.checkIn().section.attendanceStatusesColumn;
        attendanceStatusesColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Not Arrived')
            .verify.containsText('@secondRow', 'Not Arrived')
            .verify.containsText('@thirdRow', 'Not Arrived')
            .verify.containsText('@fourthRow', 'Not Arrived');
    },

    'choose canceled': function (browser) {
        var attendanceStatusesColumn = browser.page.checkIn().section.attendanceStatusesColumn;
        attendanceStatusesColumn
            .clickBySelector('@canceledOption')

            .verify.elementPresent('@noResultsFound')
    },

    'choose cheked in': function (browser) {
        var attendanceStatusesColumn = browser.page.checkIn().section.attendanceStatusesColumn;
        attendanceStatusesColumn
            .clickBySelector('@checkedInOption')

            .verify.containsText('@firstRow', 'Checked in');
    },

    'choose delyed': function (browser) {
        var attendanceStatusesColumn = browser.page.checkIn().section.attendanceStatusesColumn;
        attendanceStatusesColumn
            .clickBySelector('@delayedOption')

            .verify.elementPresent('@noResultsFound')
    },

    'choose left': function (browser) {
        var attendanceStatusesColumn = browser.page.checkIn().section.attendanceStatusesColumn;
        attendanceStatusesColumn
            .clickBySelector('@leftOption')

            .verify.elementPresent('@noResultsFound');
    },

    'choose not arrived': function (browser) {
        var attendanceStatusesColumn = browser.page.checkIn().section.attendanceStatusesColumn;
        attendanceStatusesColumn
            .clickBySelector('@notArrivedOption')

            .verify.containsText('@firstRow', 'Not Arrived')
            .verify.containsText('@secondRow', 'Not Arrived')
            .verify.containsText('@thirdRow', 'Not Arrived')
    },

    'choose not reached': function (browser) {
        var attendanceStatusesColumn = browser.page.checkIn().section.attendanceStatusesColumn;
        attendanceStatusesColumn
            .clickBySelector('@notReachedOption')

            .verify.elementPresent('@noResultsFound');
    },

    'choose all': function (browser) {
        var attendanceStatusesColumn = browser.page.checkIn().section.attendanceStatusesColumn;
        attendanceStatusesColumn
            .clickBySelector('@allOption')

            .verify.containsText('@firstRow', 'Not Arrived')
            .verify.containsText('@secondRow', 'Not Arrived')
            .verify.containsText('@thirdRow', 'Not Arrived');
    },
});