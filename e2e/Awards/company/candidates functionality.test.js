var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to awards': function (browser) {
        browser
            .relUrl('/event/1502/awards')
    },

    'select company radio button ': function (browser) {
        var awardSectoin = browser.page.awards().section.awardSectoin;
        awardSectoin
            .clickBySelector('@companyRadioButton')
            .clickBySelector('@onButton')
            .clickBySelector('@saveButton')

            .waitForElementVisible('@succesMasseg', 30000);
    },

    'click on add a new candidate  button': function (browser) {
        var awardSectoin = browser.page.awards();
        awardSectoin
            .addNewCandidateByName("PRS Prime");
    },

    'added candidate has been displayed': function (browser) {
        var candidatesSectoin = browser.page.awards().section.candidatesSectoin;
        candidatesSectoin

            .verify.elementPresent('@candidate1Text')
            .verify.elementPresent('@companyNameText')
            .verify.elementPresent('@masterId84462Link')
            .verify.elementPresent('@countryText')

            .verify.elementPresent('@defaultLogo')

            .verify.elementPresent('@introductionText')
            .verify.elementPresent('@introductionInput')

            .verify.elementPresent('@winnerButton')
            .verify.elementPresent('@deleteButton')

            .verify.elementPresent('@modifiedText')
            .verify.elementPresent('@modifiedByText')

            .verify.elementPresent('@saveButton')
    },

    'click on casterContact ID': function (browser) {
        var candidatesSectoin = browser.page.awards().section.candidatesSectoin;
        candidatesSectoin
            .clickBySelector('@masterId84462Link');
    },

    'check contact information': function (browser) {
        browser
        .closeWindow()
            .window_handles(function (result) {
                var handle = result.value[0];
                browser.switchWindow(handle);
            });
    },
    'verify  contact information': function (browser) {
        var masterCompan = browser.page.masterCompan();
        masterCompan
            .waitForElementVisible('@totalName', 60000)
            .verify.containsText('@totalName',"Company - *PRS Prime Re Services AG (#84462)")
            .verify.valueContains('@nameInput', '*PRS Prime Re Services AG')
            .verify.valueContains('@countryInput', 'Switzerland');
    },

    'back to the awards page': function (browser) {
        browser
            .relUrl('/event/1502/awards')
    },

    'enter introduction': function (browser) {
        var candidatesSectoin = browser.page.awards().section.candidatesSectoin;
        candidatesSectoin
            .moveToElement('@saveButton', 100, 100)
            .setValueBySelector('@introductionInput', 'Very important information')

            .clickBySelector('@saveButton');
        var awardSectoin = browser.page.awards().section.awardSectoin;
        awardSectoin
            .waitForElementVisible('@succesMasseg', 30000)
    },

    'refresh page and verify in introduction field': function (browser) {
        browser
            .refresh();
        var candidatesSectoin = browser.page.awards().section.candidatesSectoin;
        candidatesSectoin
            .waitForElementVisible('@saveButton', 30000)
            .moveToElement('@saveButton', 100, 100)

            .verify.valueContains('@introductionInput', 'Very important information');
    },

    'delete candidate': function (browser) {
        var awardSectoin = browser.page.awards();
        awardSectoin
            .deleteFirstCandidate();
    },
});
