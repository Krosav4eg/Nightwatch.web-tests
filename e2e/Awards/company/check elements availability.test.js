var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to awards': function (browser) {
        browser
            .relUrl('/event/1501/awards')
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
            .addNewCandidateByName("Zscaler");
    },

    'added candidate has been displayed': function (browser) {
        var candidatesSectoin = browser.page.awards().section.candidatesSectoin;
        candidatesSectoin
            .verify.containsText('@companyNameCondidateText', 'Zscaler')
            .verify.containsText('@companyNameCondidateText', '(M#63417)')
            .verify.containsText('@countryCondidateText',"Germany")
    },

    'delete candidate': function (browser) {
        var awardSectoin = browser.page.awards();
        awardSectoin
            .deleteFirstCandidate();
    },
});
