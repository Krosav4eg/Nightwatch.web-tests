var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to check-in': function (browser) {
        browser
            .relUrl('/events/2339/check-in')
    },

    'verify filter ': function (browser) {
        var filter = browser.page.checkIn().section.filter;
        var participationStatusesColumn = browser.page.checkIn().section.participationStatusesColumn;
        var attendanceStatusesColumn = browser.page.checkIn().section.attendanceStatusesColumn;

        filter
            .clickBySelector('@noShowCallsOption');
        participationStatusesColumn
            .clickBySelector('@cancelledOption');
        attendanceStatusesColumn
            .clickBySelector('@checkedInOption');

        filter
            .verify.containsText('@filterSelect', 'No show calls');
        participationStatusesColumn
            .verify.containsText('@selectElement', 'Cancelled');
        attendanceStatusesColumn
            .verify.containsText('@selectElement', 'Checked in');

        filter
            .clickBySelector('@showAllOption');

        participationStatusesColumn
            .verify.containsText('@selectElement', 'Cancelled');
        attendanceStatusesColumn
            .verify.containsText('@selectElement', 'Checked in');

        filter
            .clickBySelector('@showOnlyConfirmedOption');
        attendanceStatusesColumn
            .clickBySelector('@canceledOption');
        participationStatusesColumn
            .clickBySelector('@confirmedOption');

        filter
            .verify.containsText('@filterSelect', 'Show only confirmed');
        participationStatusesColumn
            .verify.containsText('@selectElement', 'Confirmed');
        attendanceStatusesColumn
            .verify.containsText('@selectElement', 'Canceled');
    },
});