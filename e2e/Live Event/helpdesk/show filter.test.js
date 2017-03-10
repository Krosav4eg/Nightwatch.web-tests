var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/events/2316/helpdesk')
    },

    'select ShowConfirmedAndUnconfirmedOption': function (browser) {
        var showFilterPage = browser.page.helpdesk().section.showFilter;
        showFilterPage
            .clickBySelector('@ShowConfirmedAndUnconfirmedOption')

        var participationStatusesColumnPage = browser.page.helpdesk().section.participationStatusesColumn;
        participationStatusesColumnPage
            .verify.containsText('@firstRow', 'Confirmed Rebook')
            .verify.containsText('@secondRow', 'Confirmed')
            .verify.containsText('@thirdRow', 'Confirmed Rebook')
            .verify.containsText('@fourthRow', 'Confirmed')
    },

    'select showOnlyAttendingOption': function (browser) {
        var showFilterPage = browser.page.helpdesk().section.showFilter;
        showFilterPage
            .clickBySelector('@showOnlyAttendingOption')

        var participationStatusesColumnPage = browser.page.helpdesk().section.participationStatusesColumn;
        participationStatusesColumnPage
            .verify.containsText('@firstRow', 'Confirmed')
            .verify.containsText('@secondRow', 'Confirmed')
            .verify.containsText('@thirdRow', 'Confirmed')
            .verify.containsText('@fourthRow', 'Confirmed')

        var attendanceStatusesColumnPage = browser.page.helpdesk().section.attendanceStatusesColumn;
        attendanceStatusesColumnPage
            .verify.containsText('@firstRow', 'Checked in')
            .verify.containsText('@secondRow', 'Checked in')
            .verify.containsText('@thirdRow', 'Checked in')
            .verify.containsText('@fourthRow', 'Checked in')
    },

    'select allOption': function (browser) {
        var showFilterPage = browser.page.helpdesk().section.showFilter;
        showFilterPage
            .clickBySelector('@allOption')
    },
});