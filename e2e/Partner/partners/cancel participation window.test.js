var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/partners');
    },

    'search by company Blank': function (browser) {
        var companyNameColumn = browser.page.partners().section.companyNameColumn;
        companyNameColumn
            .setValueBySelector('@seachColumn', ['ESET Middle East', browser.Keys.ENTER])
            .verify.containsText('@firstRow', 'ESET Middle East');
    },

    'Cancel participation click Close': function (browser) {
        var cancelParticipation = browser.page.partners().section.cancelParticipation;
        cancelParticipation
            .moveToElement('@firstButtonCancelParticipation', 1298, 597)
            .clickBySelector('@firstButtonCancelParticipation')

            .verify.containsText('@modalTitle', 'Cancel participation')
            .verify.containsText('@formGroup', 'Are you sure you want to cancel this participation?')

            .clickBySelector('@closeButton')

            .clickBySelector('@firstButtonCancelParticipation')
            .clickBySelector('@noButton');

        var companyNameColumn = browser.page.partners().section.companyNameColumn;
        companyNameColumn

            .verify.containsText('@firstRow', 'ESET Middle East');
    },

    'participation click Yes': function (browser) {
        var cancelParticipation = browser.page.partners().section.cancelParticipation;
        cancelParticipation
            .moveToElement('@firstButtonCancelParticipation', 1298, 597)
            .clickBySelector('@firstButtonCancelParticipation')
            .clickBySelector('@yesButton');

        browser.refresh();

        var companyNameColumn = browser.page.partners().section.companyNameColumn;
        companyNameColumn
            .setValueBySelector('@seachColumn', ['ESET Middle East', browser.Keys.ENTER])

            .verify.elementPresent('@noResultsFound');
    },

    'edit status': function (browser) {
        browser
            .relUrl('/event/2/partners/16');

        var companyNameColumn = browser.page.partnersEdit().section.participationInfo;
        companyNameColumn
            .clickBySelector('@confirmedOption')
            .click('@saveButton')
            .waitForElementVisible('@successMassege', 10000);

        browser
            .relUrl('/event/2/partners');

        var companyNameColumn = browser.page.partners().section.companyNameColumn;
        companyNameColumn
            .setValueBySelector('@seachColumn', ['ESET Middle East', browser.Keys.ENTER])
            .verify.containsText('@firstRow', 'ESET Middle East');
    },
});