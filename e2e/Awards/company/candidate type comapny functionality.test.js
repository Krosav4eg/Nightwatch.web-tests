var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to awards': function (browser) {
        browser
            .relUrl('/event/216/awards')
    },

    'check awards page info': function (browser) {
        var allInformation = browser.page.awards().section.allInformation;
        allInformation
            .verify.containsText('@titleEvent', 'Event (#216)')
            .verify.containsText('@nameEvent', 'IndustryForum Healthcare')
            .verify.containsText('@localName', 'Local name: StrategyCircle Gesundheitswesen')
            .verify.containsText('@dates', 'Dates: 2012-09-19 08:00:00 - 2012-09-20 18:00:00')
            .verify.containsText('@venue', 'Venue: ,');

        var awardSectoin = browser.page.awards().section.awardSectoin;
        awardSectoin
            .verify.elementPresent('@awardTitleLocalText')
            .verify.elementPresent('@awardTitleEnglishText')
            .verify.elementPresent('@candidateTypeText')

            .verify.elementPresent('@contactRadioButton')
            .verify.elementPresent('@companyRadioButton')
            .verify.elementPresent('@projectRadioButton')

            .verify.elementPresent('@statusText')

            .verify.elementPresent('@modifiedText')
            .verify.elementPresent('@modifiedByText')

            .verify.elementPresent('@saveButton')
    },

    'verify status switcher': function (browser) {
        var awardSectoin = browser.page.awards().section.awardSectoin;
        awardSectoin
            .clickBySelector('@onButton')
            .verify.cssProperty('@offButton', 'background-color', 'rgba(230, 231, 232, 1)')
            .verify.cssProperty('@onButton', 'background-color', 'rgba(41, 115, 207, 1)');
    },

    'set values into the input fields': function (browser) {
        var awardSectoin = browser.page.awards().section.awardSectoin;
        awardSectoin
            .setValueBySelector('@awardTitleLocalInput','The best of the best')
            .setValueBySelector('@awardTitleEnglishInput','The best of the best 2')
    },

    'select company radio button ': function (browser) {
        var awardSectoin = browser.page.awards().section.awardSectoin;
        awardSectoin
            .clickBySelector('@companyRadioButton')
            .clickBySelector('@saveButton')

            .waitForElementVisible('@succesMasseg', 30000)
            .checkModifiedInSelector('@modifiedDate');

        var candidatesSectoin = browser.page.awards().section.candidatesSectoin;
        candidatesSectoin
            .verify.elementPresent('@addNewCandidateButton');
    },

    'to return everything to its original position ': function (browser) {
        var awardSectoin = browser.page.awards().section.awardSectoin;
        awardSectoin
            .clickBySelector('@contactRadioButton')
            .clickBySelector('@offButton')
            .verify.cssProperty('@offButton', 'background-color', 'rgba(214, 26, 26, 1)')
            .verify.cssProperty('@onButton', 'background-color', 'rgba(230, 231, 232, 1)')
            .clickBySelector('@saveButton')

            .checkModifiedInSelector('@modifiedDate');
    },
});
