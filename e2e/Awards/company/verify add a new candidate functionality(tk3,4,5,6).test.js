var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to awards': function (browser) {
        browser
            .relUrl('/event/1401/awards')
    },

    'select company radio button ': function (browser) {
        var awardSectoin = browser.page.awards().section.awardSectoin;
        awardSectoin
            .clickBySelector('@companyRadioButton')
            .clickBySelector('@onButton')
            .clickBySelector('@saveButton')

            .waitForElementVisible('@succesMasseg', 30000);
    },

    'click on add a new candidate button': function (browser) {
        var awardSectoin = browser.page.awards();
        awardSectoin
            .addNewCandidateByName("UNiQUARE");
    },

    'select add a new candidate button': function (browser) {
        var awardSectoin = browser.page.awards().section.candidatesSectoin
           // .clickBySelector('@addNewCandidateButton')
            .clickBySelector('@companyNameInput')
            .clickBySelector('@addCompanyButton')

            .waitForElementVisible('@errorMassege', 30000)
            .clickBySelector('@addNewCandidateButton');
    },

    'enter alcatel in the autocomplete to displaying companies': function (browser) {
        var awardSectoin = browser.page.awards();
        awardSectoin
            .addNewCandidateByName("Alcatel");
    },

    'added second candidate has been displayed': function (browser) {
        var candidatesSectoin = browser.page.awards().section.candidatesSectoin;
        candidatesSectoin
            .verify.containsText('@companyNameSecondCondidateText', 'Alcatel Austria AG')
            .verify.containsText('@companyNameSecondCondidateText', '(M#63459)')
    },

    'click on add new candidate button again': function (browser) {
        var awardSectoin = browser.page.awards().section.candidatesSectoin
            .clickBySelector('@addNewCandidateButton')
            .verify.elementNotPresent('@companyNameInput')
            .verify.elementNotPresent('@addCompanyButton')
    },

    'status switcher: select "Off" in status switcher': function (browser) {
        var awardSectoin = browser.page.awards().section.awardSectoin;
        var allInformation = browser.page.awards().section.allInformation;
        allInformation
            .moveToElement('@titleEvent', 0, 0);
        awardSectoin
            .clickBySelector('@offButton')
            .clickBySelector('@saveButton')

            .waitForElementVisible('@succesMasseg', 30000);
    },

    'click save button ': function (browser) {
        var candidatesSectoin = browser.page.awards().section.candidatesSectoin;
        candidatesSectoin
            .verify.elementNotPresent('@candidate1Text')
            .verify.elementNotPresent('@candidate2Text')
    },

    'create new candidate': function (browser) {
        var awardSectoin = browser.page.awards();
        awardSectoin
            .addNewCandidateByName("ALVAREZ");
    },

    'created candidate is not visible': function (browser) {
        var candidatesSectoin = browser.page.awards().section.candidatesSectoin;
        candidatesSectoin
            .verify.elementNotPresent('@candidate1Text')
            .verify.elementNotPresent('@candidate2Text')
            .verify.elementNotPresent('@candidate3Text')
    },

    'status switcher is "ON"': function (browser) {
        var awardSectoin = browser.page.awards().section.awardSectoin;
        var allInformation = browser.page.awards().section.allInformation;
        allInformation
            .moveToElement('@titleEvent', 0, 0);
        awardSectoin
            .clickBySelector('@onButton')
            .clickBySelector('@saveButton')

            .waitForElementVisible('@succesMasseg', 30000);

        var candidatesSectoin = browser.page.awards().section.candidatesSectoin;
        candidatesSectoin
            .verify.elementPresent('@candidate1Text')
            .verify.elementPresent('@candidate2Text')
            .verify.elementPresent('@candidate3Text')
    },

    'try to click on "Contact" radio button': function (browser) {
        var awardSectoin = browser.page.awards().section.awardSectoin;
        awardSectoin
            .clickBySelector('@contactRadioButton')

            .verify.elementPresent('@infoMassege');

    },

    'try to click on "Project" radio button': function (browser) {
        var awardSectoin = browser.page.awards().section.awardSectoin;
        awardSectoin
            .clickBySelector('@projectRadioButton')

            .verify.elementPresent('@infoMassege');
    },

    'delete all candidates from candidates table': function (browser) {
        var awardSectoin = browser.page.awards();
        awardSectoin
            .deleteFirstCandidate();
        awardSectoin
            .deleteFirstCandidate();
        awardSectoin
            .deleteFirstCandidate();
    },
});

