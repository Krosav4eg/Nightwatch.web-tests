var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/partners')
    },

    'Cancel window Add company': function (browser) {
        var allInformation = browser.page.partners().section.allInformation;
        allInformation
            .clickBySelector('@addCompanyButton')

            .clickBySelector('@addCompanyButtonInModal')

            .waitForElementVisible('@erroeMassege', 10000)
            .verify.containsText('@contentMassege', 'Please select a company')

            .clickBySelector('@cancelButtonInModal')
    },

    'Close window Add company': function (browser) {
        var allInformation = browser.page.partners().section.allInformation;
        allInformation
            .clickBySelector('@addCompanyButton')

            .clickBySelector('@companyNameInput')
            .sendKeys('@companyNameInput', "ClinArt Mena")
            .clickBySelector('@clinArtMenaName')

            .clickBySelector('@closeButtonInModal')
    },

    'Add company': function (browser) {
        var allInformation = browser.page.partners().section.allInformation;
        allInformation
            .clickBySelector('@addCompanyButton')

            .verify.containsText('@companyNameInput', "")

            .clickBySelector('@companyNameInput')
            .sendKeys('@companyNameInput', "ClinArt Mena")
            .clickBySelector('@clinArtMenaName')

            .clickBySelector('@addCompanyButtonInModal')
    },
});
