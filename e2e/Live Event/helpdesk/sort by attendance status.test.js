var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to helpdesk': function (browser) {
        browser
            .relUrl('/events/2316/helpdesk')
    },

    'sort by Attendance status up': function (browser) {
        var attendanceStatusesColumn = browser.page.helpdesk().section.attendanceStatusesColumn;
        attendanceStatusesColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Checked in')
            .verify.containsText('@secondRow', 'Checked in')
            .verify.containsText('@thirdRow', 'Checked in')
            .verify.containsText('@fourthRow', 'Checked in');

    },

    'sort by Attendance status down': function (browser) {
        var attendanceStatusesColumn = browser.page.helpdesk().section.attendanceStatusesColumn;
        attendanceStatusesColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Not reached')
            .verify.containsText('@secondRow', 'Not reached')
            .verify.containsText('@thirdRow', 'Not reached')
            .verify.containsText('@fourthRow', 'Not Arrived');
    },

    'choose canceled': function (browser) {
        var attendanceStatusesColumn = browser.page.helpdesk().section.attendanceStatusesColumn;
        attendanceStatusesColumn
            .clickBySelector('@canceledOption')

            .verify.elementPresent('@noResultsFound')
    },

    'choose cheked in': function (browser) {
        var attendanceStatusesColumn = browser.page.helpdesk().section.attendanceStatusesColumn;
        attendanceStatusesColumn
            .clickBySelector('@checkedInOption')

            .verify.containsText('@firstRow', 'Checked in')
            .verify.containsText('@secondRow', 'Checked in')
            .verify.containsText('@thirdRow', 'Checked in')
            .verify.containsText('@fourthRow', 'Checked in');
    },

    'choose delyed': function (browser) {
        var attendanceStatusesColumn = browser.page.helpdesk().section.attendanceStatusesColumn;
        attendanceStatusesColumn
            .clickBySelector('@delayedOption')

            .verify.elementPresent('@noResultsFound')
    },

    'choose left': function (browser) {
        var attendanceStatusesColumn = browser.page.helpdesk().section.attendanceStatusesColumn;
        attendanceStatusesColumn
            .clickBySelector('@leftOption')

            .verify.containsText('@firstRow', 'Left')
            .verify.containsText('@secondRow', 'Left')
            .verify.containsText('@thirdRow', 'Left')
            .verify.containsText('@fourthRow', 'Left');
    },

    'choose not arrived': function (browser) {
        var attendanceStatusesColumn = browser.page.helpdesk().section.attendanceStatusesColumn;
        attendanceStatusesColumn
            .clickBySelector('@notArrivedOption')

            .verify.containsText('@firstRow', 'Not Arrived')
            .verify.containsText('@secondRow', 'Not Arrived')
            .verify.containsText('@thirdRow', 'Not Arrived')
    },

    'choose not reached': function (browser) {
        var attendanceStatusesColumn = browser.page.helpdesk().section.attendanceStatusesColumn;
        attendanceStatusesColumn
            .clickBySelector('@notReachedOption')

            .verify.containsText('@firstRow', 'Not reached')
            .verify.containsText('@secondRow', 'Not reached')
            .verify.containsText('@thirdRow', 'Not reached')
    },

    'choose all': function (browser) {
        var attendanceStatusesColumn = browser.page.helpdesk().section.attendanceStatusesColumn;
        attendanceStatusesColumn
            .clickBySelector('@allOption')

            .verify.containsText('@firstRow', 'Not reached')
            .verify.containsText('@secondRow', 'Not reached')
            .verify.containsText('@thirdRow', 'Not reached')
            .verify.containsText('@fourthRow', 'Not Arrived');
    },
});