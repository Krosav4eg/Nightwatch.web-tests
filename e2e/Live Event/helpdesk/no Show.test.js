var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to check-in': function (browser) {
        browser
            .relUrl('/events/2316/helpdesk');
    },

    'open first delegate': function (browser) {
        var showFilterPage = browser.page.helpdesk().section.showFilter;
        showFilterPage
            .clickBySelector('@allOption')

        var participationStatusesColumn = browser.page.helpdesk().section.participationStatusesColumn;
        participationStatusesColumn
            .clickBySelector('@confirmedRebookOption');

        var lastNameColumn = browser.page.helpdesk().section.lastNameColumn;
        lastNameColumn
            .setValueBySelector('@seachColumn', ['Ketola', browser.Keys.ENTER])
            .verify.containsText('@firstRow', 'Ketola');
    },

    'click by noShowButton and confirmNoButton': function (browser) {
        var lastNameColumn = browser.page.helpdesk().section.lastNameColumn;
        lastNameColumn
            .clickBySelector('@firstRow');

        var delgatesInfo = browser.page.helpdesk().section.informationDelegate;
        delgatesInfo
            .clickBySelector('@noShowButton')
            .clickBySelector('@confirmNoButton')

            .verify.containsText('@participationStatus', "Confirmed Rebook");
    },

    'click by noShowButton and confirmYesButton': function (browser) {
        var delgatesInfo = browser.page.helpdesk().section.informationDelegate;
        delgatesInfo
            .clickBySelector('@noShowButton')
            .clickBySelector('@confirmYesButton')
    },

    'ferify status in grid': function (browser) {
        var showFilterPage = browser.page.helpdesk().section.showFilter;
        showFilterPage
            .clickBySelector('@allOption');

        var participationStatusesColumn = browser.page.helpdesk().section.participationStatusesColumn;
        participationStatusesColumn
            .clickBySelector('@noShowOption');

        var lastNameColumn = browser.page.helpdesk().section.lastNameColumn;
        lastNameColumn
            .setValueBySelector('@seachColumn', ['Ketola', browser.Keys.ENTER])
            .verify.containsText('@firstRow', 'Ketola')
            .clickBySelector('@firstRow');
    },

    'edit status to confirmedRebookOption': function (browser) {
        var delgatesInfo = browser.page.helpdesk().section.informationDelegate;
        delgatesInfo
            .clickBySelector('@confirmedRebookOption')

            .clickBySelector('@saveButton')
            .clickBySelector('@cancelButton');
    },

    'verify status after edit': function (browser) {
        var showFilterPage = browser.page.helpdesk().section.showFilter;
        showFilterPage
            .clickBySelector('@allOption');

        var participationStatusesColumn = browser.page.helpdesk().section.participationStatusesColumn;
        participationStatusesColumn
            .clickBySelector('@confirmedRebookOption');

        var lastNameColumn = browser.page.helpdesk().section.lastNameColumn;
        lastNameColumn
            .setValueBySelector('@seachColumn', ['Ketola', browser.Keys.ENTER])
            .verify.containsText('@firstRow', 'Ketola')
            .clickBySelector('@firstRow');

        var delgatesInfo = browser.page.helpdesk().section.informationDelegate;
        delgatesInfo
            .verify.containsText('@participationStatus', "Confirmed Rebook");
    },
});