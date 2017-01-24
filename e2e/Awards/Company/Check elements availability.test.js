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
            .addNewCandidate('Krankenhaus');
    },
    'added candidate has been displayed': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//h4[contains(text(),"Candidates")]', 30000)

            .verify.elementPresent('//h3[contains(text(),"Candidate 1")]', 30000)
            .verify.elementPresent('//label[contains(text(),"Company Name")]', 30000)
            .verify.elementPresent('//span[contains(text(),"Allgemeines Krankenhaus Celle")]', 30000)
            .verify.elementPresent('//a[@href="http://test.ew.managementevents.com/EW/MasterCompany/cruII/id/22280"]', 30000)
            .verify.elementPresent('//label[contains(text(),"Country")]', 30000)
            .verify.elementPresent('//span[contains(text(),"Germany")]', 30000)

            .verify.elementPresent('//*[text()="Candidates"]/../..//img', 30000)

            .verify.elementPresent('//label[contains(text(),"Introduction")]', 30000)
            .verify.elementPresent('//div/textarea', 30000)

            .verify.elementPresent('//button[contains(text(),"Winner")]', 30000)
            .verify.elementPresent('//button[contains(text(),"Delete")]', 30000)

            .verify.elementPresent('//div[@class="form-group"]//div[contains(text(),"Modified: ")]', 30000)
            .verify.elementPresent('//div[@class="form-group"]//div[contains(text(),"Modified by: ")]', 30000)

            .verify.elementPresent('//div[@class="form-group"]//button[text()="Save"]', 30000)

    },

    'delete candidate': function (browser) {
        browser
            .deleteCandidate();
    },


})
;