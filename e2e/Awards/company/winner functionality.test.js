var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to awards': function (browser) {
        browser
            .relUrl('/event/1503/awards')
    },

    'select company radio button ': function (browser) {
        var awardSectoin = browser.page.awards().section.awardSectoin;
        awardSectoin
            .clickBySelector('@companyRadioButton')
            .clickBySelector('@onButton')
            .clickBySelector('@saveButton')

            .waitForElementVisible('@succesMasseg', 30000)
            .clickBySelector('@succesMasseg');
    },

    'create new candidate': function (browser) {
        var awardSectoin = browser.page.awards();
        awardSectoin
            .addNewCandidateByName("Aalef");
    },

    'enter introduction': function (browser) {
        var candidatesSectoin = browser.page.awards().section.candidatesSectoin;
        candidatesSectoin
            .moveToElement('@saveButton', 100, 100)
            .setValueBySelector('@introductionInput', 'Very important information')
            .clickBySelector('@saveButton');
        var awardSectoin = browser.page.awards().section.awardSectoin;
        awardSectoin
            .waitForElementVisible('@succesMasseg', 30000);

        candidatesSectoin
            .verify.valueContains('@introductionInput', 'Very important information');
    },

    'Enter Winners description ': function (browser) {
        var candidatesSectoin = browser.page.awards().section.candidatesSectoin;
        candidatesSectoin
            .clickBySelector('@winnerButton')

            .verify.elementPresent('@winnersdescriptionText')
            .verify.elementPresent('@winnersdescriptionInput')

            .verify.cssProperty('@winnerButton', 'background-color', 'rgba(108, 166, 50, 1)')

            .setValueBySelector('@winnersdescriptionInput', 'You are best of the best')
            .verify.valueContains('@winnersdescriptionInput', 'You are best of the best')

            .clickBySelector('@saveButton');
        var awardSectoin = browser.page.awards().section.awardSectoin;
        awardSectoin
            .waitForElementVisible('@succesMasseg', 30000);
    },

    'refresh page and verify in introduction field': function (browser) {
        var candidatesSectoin = browser.page.awards().section.candidatesSectoin;
        candidatesSectoin
            .verify.valueContains('@winnersdescriptionInput', 'You are best of the best')
            .verify.valueContains('@introductionInput', 'Very important information')
    },

    'click winners button again': function (browser) {
        var candidatesSectoin = browser.page.awards().section.candidatesSectoin;
        candidatesSectoin
            .clickBySelector('@winnerButton')

            .verify.elementNotPresent('@winnersdescriptionText')
            .verify.elementNotPresent('@winnersdescriptionInput')

            .verify.cssProperty('@winnerButton', 'background-color', 'rgba(41, 115, 207, 1)')
    },

    'change winners description': function (browser) {
        var candidatesSectoin = browser.page.awards().section.candidatesSectoin;
        candidatesSectoin
            .clickBySelector('@winnerButton')

            .verify.cssProperty('@winnerButton', 'background-color', 'rgba(108, 166, 50, 1)')
            .verify.valueContains('@winnersdescriptionInput', 'You are best of the best')
            .verify.valueContains('@introductionInput', 'Very important information')

            .setValueBySelector('@winnersdescriptionInput', 'You are best of the best of the best')

            .clickBySelector('@saveButton');
    },

    'to return everything to its original position ': function (browser) {
        var candidatesSectoin = browser.page.awards().section.candidatesSectoin;
        candidatesSectoin
            .clickBySelector('@winnerButton')
            .clickBySelector('@saveButton');
    },

    'delete candidate': function (browser) {
        var awardSectoin = browser.page.awards();
        awardSectoin
            .deleteFirstCandidate();
    },
});

