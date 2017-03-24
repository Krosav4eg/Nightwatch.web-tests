var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/representatives')
    },

    'master Contact Information': function (browser) {
        var idColumn = browser.page.representatives().section.idColumn;
        idColumn
            .clickBySelector('@id50730')

        var representativesEdit = browser.page.representativesEdit();
        representativesEdit
            .verify.containsText('@masterIdInput', '11046')
            .verify.containsText('@lastNameInput', 'Käkelä')
            .verify.containsText('@firstNameInput', 'Ville')
            .verify.containsText('@companyInput', 'Management Events')
            .verify.containsText('@meAccountInput', 'No')
            .verify.containsText('@mobileInput', '358405657227')
            .verify.containsText('@countryInput', 'Finland')
            .verify.containsText('@languageInput', 'Finnish');
    },

    'participation Information': function (browser) {
        var representativesEdit = browser.page.representativesEdit();
        representativesEdit
            .clickBySelector('@cancelledOption')
            .clickBySelector('@confirmedRebookOption')
            .clickBySelector('@lateCancellationOption')
            .clickBySelector('@noShowOption')
            .clickBySelector('@unconfirmedOption')
            .clickBySelector('@unconfirmedRebookOption')
            .clickBySelector('@confirmedOption')

            .clickBySelector('@group2VioletOption')
            .clickBySelector('@group1OrangeOption')
            .clickBySelector('@noGroupOption')

            .verify.containsText('@availabilityFrom', '2015-03-04 08:00:00')
            .verify.containsText('@availabilityTo', '2015-03-04 10:30:00');
    },

    'click by save button': function (browser) {
        var representativesEdit = browser.page.representativesEdit();
        representativesEdit
            .clickBySelector('@saveButtom')

            .waitForElementVisible('@successMassage', 10000)
    },

    'click by canceled button': function (browser) {
        var idColumn = browser.page.representatives().section.idColumn;
        idColumn
            .clickBySelector('@id50730')
        var representativesEdit = browser.page.representativesEdit();
        representativesEdit
            .clickBySelector('@cancelButtom')
            .verify.urlContains('event/2/representatives');
    },
});
