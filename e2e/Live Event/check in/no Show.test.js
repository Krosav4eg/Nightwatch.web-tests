var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to check-in': function (browser) {
        browser
            .relUrl('/events/2336/check-in')
    },

    'open first delegate': function (browser) {
        var filter = browser.page.checkIn().section.filter;
        filter
            .clickBySelector('@showAllOption');

        var participationStatusesColumn = browser.page.checkIn().section.participationStatusesColumn;
        participationStatusesColumn
            .clickBySelector('@confirmedRebookOption');

        var lastNameColumn = browser.page.checkIn().section.lastNameColumn;
        lastNameColumn
            .verify.containsText('@firstRow', 'Weiste')
            .clickBySelector('@firstRow');
    },

    'click by noShowButton and confirmNoButton': function (browser) {
        var delgatesInfo = browser.page.checkIn().section.delgatesInfo;
        delgatesInfo
            .clickBySelector('@noShowButton')
            .clickBySelector('@confirmNoButton')

            .verify.containsText('@participationStatus', "Confirmed Rebook");
    },

    'click by noShowButton and confirmYesButton': function (browser) {
        var delgatesInfo = browser.page.checkIn().section.delgatesInfo;
        delgatesInfo
            .clickBySelector('@noShowButton')
            .clickBySelector('@confirmYesButton')
    },

    'ferify status in grid': function (browser) {
        browser.refresh();
        var filter = browser.page.checkIn().section.filter;
        filter
            .clickBySelector('@showAllOption');

        var participationStatusesColumn = browser.page.checkIn().section.participationStatusesColumn;
        participationStatusesColumn
            .clickBySelector('@noShowOption')

            .verify.containsText('@firstRow', 'No show');

        var lastNameColumn = browser.page.checkIn().section.lastNameColumn;
        lastNameColumn
            .verify.containsText('@firstRow', 'Weiste')
            .clickBySelector('@firstRow');
    },

    'edit status to confirmedRebookOption': function (browser) {
        var delgatesInfo = browser.page.checkIn().section.delgatesInfo;
        delgatesInfo
            .clickBySelector('@confirmedRebookOption')

            .clickBySelector('@saveButton')
            .clickBySelector('@cancelButton');
    },

    'verify status after edit': function (browser) {
        browser.refresh();
        var filter = browser.page.checkIn().section.filter;
        filter
            .clickBySelector('@showAllOption');

        var participationStatusesColumn = browser.page.checkIn().section.participationStatusesColumn;
        participationStatusesColumn
            .clickBySelector('@confirmedRebookOption')

            .verify.containsText('@firstRow', 'Confirmed Rebook');

        var lastNameColumn = browser.page.checkIn().section.lastNameColumn;
        lastNameColumn
            .verify.containsText('@firstRow', 'Weiste')
            .clickBySelector('@firstRow');

        var delgatesInfo = browser.page.checkIn().section.delgatesInfo;
        delgatesInfo
            .verify.containsText('@participationStatus', "Confirmed Rebook");
    },
});