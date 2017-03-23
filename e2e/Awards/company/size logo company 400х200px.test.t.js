var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to awards': function (browser) {
        browser
            .relUrl('/event/1504/awards')
    },

    'select company radio and switch ON buttons ': function (browser) {
        var awardSectoin = browser.page.awards().section.awardSectoin;
        awardSectoin
            .clickBySelector('@companyRadioButton')
            .clickBySelector('@onButton')
            .clickBySelector('@saveButton')

            .waitForElementVisible('@succesMasseg', 30000);
    },

    'create new candidate': function (browser) {
        var awardSectoin = browser.page.awards();
        awardSectoin
            .addNewCandidateByName("Aalef");
    },

    'press "choose file" button': function (browser) {
        var candidatesSectoin = browser.page.awards().section.candidatesSectoin;
        candidatesSectoin
            .clickBySelector('@masterIdLink');
    },

    'switchWindow ': function (browser) {
        browser
            .closeWindow()
            .window_handles(function (result) {
                var handle = result.value[0];
                browser.switchWindow(handle);
            });
    },

    'verify image': function (browser) {
        var masterCompan = browser.page.masterCompan();
        masterCompan
            .waitForElementVisible('@totalName', 60000)
            .verify.containsText('@totalName',"Company - Aalef Oy (#92844)")

            .setValueBySelector('@companyPictureInput',  __dirname + '/logo.jpg')
            .waitForElementVisible('@cropCompanyPicture', 30000)
            .getElementSize('@cropCompanyPicture', function (result) {
                  this.verify.equal(typeof result, "object")
                  this.verify.equal(result.status, 0)
                  this.verify.equal(result.value.width, 800)
                  this.verify.equal(result.value.height, 400)
            })

            .click('@cropButton')
            .waitForElementVisible('@webLogo', 30000)
            .getElementSize("@webLogo", function (result) {
                  this.verify.equal(typeof result, "object")
                  this.verify.equal(result.status, 0)
                  this.verify.equal(result.value.width, 381)
                  this.verify.equal(result.value.height, 190)
            })
    },

    'go to the candidate 1 page ': function (browser) {
        browser
            .relUrl('/event/1504/awards')
    },

    'delete 1-st candidate': function (browser) {
        var awardSectoin = browser.page.awards();
        awardSectoin
            .deleteFirstCandidate();
    },
});