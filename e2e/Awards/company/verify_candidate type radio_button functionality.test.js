var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to awards': function (browser) {
        browser
            .relUrl('/event/212/awards')
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

    'to return everything to its original position ': function (browser) {
        var awardSectoin = browser.page.awards().section.awardSectoin;
        awardSectoin
            .clickBySelector('@contactRadioButton')
            .clickBySelector('@saveButton')

            .waitForElementVisible('@succesMasseg', 30000);
    },
});
