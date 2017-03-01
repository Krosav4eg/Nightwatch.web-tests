var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to awards': function (browser) {
        browser
            .relUrl('/event/1501/awards')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'select company radio button ': function (browser) {
        browser
            .selectCompanyRadioButton();
    },

    'click on add a new candidate  button': function (browser) {
        browser
            .addNewCandidate('Zscaler');
    },

    'added candidate has been displayed': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//h4[contains(text(),"Candidates")]')

            .verify.elementPresent('//h3[contains(text(),"Candidate 1")]')
            .verify.elementPresent('//label[contains(text(),"Company Name")]')
            .verify.elementPresent('//span[contains(text(),"Zscaler ")]')
            .verify.elementPresent('//a[contains(text(),"(M#63417)")]')
            .verify.elementPresent('//label[contains(text(),"Country")]')
            .verify.elementPresent('//span[contains(text(),"Germany")]')

            .verify.elementPresent('//*[text()="Candidates"]/../..//img')

            .verify.elementPresent('//label[contains(text(),"Introduction")]')
            .verify.elementPresent('//div/textarea')

            .verify.elementPresent('//button[contains(text(),"Winner")]')
            .verify.elementPresent('//button[contains(text(),"Delete")]')

            .verify.elementPresent('//div[@class="form-group"]//div[contains(text(),"Modified: ")]')
            .verify.elementPresent('//div[@class="form-group"]//div[contains(text(),"Modified by: ")]')

            .verify.elementPresent('//div[@class="form-group"]//button[text()="Save"]')
    },

    'delete candidate': function (browser) {
        browser
            .deleteCandidate();
    },
});
