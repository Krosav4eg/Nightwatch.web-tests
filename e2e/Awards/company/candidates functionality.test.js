var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to awards': function (browser) {
        browser
            .relUrl('/event/1502/awards')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'select company radio button ': function (browser) {
        browser
            .selectCompanyRadioButton();
    },

    'click on add a new candidate  button': function (browser) {
        browser
            .addNewCandidate("PRS Prime");
    },

    'added candidate has been displayed': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//h4[contains(text(),"Candidates")]')

            .verify.elementPresent('//h3[contains(text(),"Candidate 1")]')
            .verify.elementPresent('//label[contains(text(),"Company Name")]')
            .verify.elementPresent('//a[contains(text(),"(M#84462)")]')
            .verify.elementPresent('//label[contains(text(),"Country")]')

            .verify.elementPresent('//*[text()="Candidates"]/../..//img')

            .verify.elementPresent('//label[contains(text(),"Introduction")]')
            .verify.elementPresent('//div/textarea')

            .verify.elementPresent('//button[contains(text(),"Winner")]')
            .verify.elementPresent('//button[contains(text(),"Delete")]')

            .verify.elementPresent('//div[@class="form-group"]//div[contains(text(),"Modified: ")]')
            .verify.elementPresent('//div[@class="form-group"]//div[contains(text(),"Modified by: ")]')

            .verify.elementPresent('//div[@class="form-group"]//button[text()="Save"]')
    },

    'click on casterContact ID': function (browser) {
        browser
            .clickBySelectorXpath('//a[contains(text(),"(M#84462)")]');
    },

    'check contact information': function (browser) {
        browser
            .closeWindow()
            .window_handles(function (result) {
                var handle = result.value[0];
                browser.switchWindow(handle)
                    .waitForElementVisible('//h4[contains(text(),"Company  - *PRS Prime Re Services AG (#84462)")]', 30000)

                    .useCss()
                    .verify.valueContains('#MasterCompany_Name', '*PRS Prime Re Services AG')
                    .verify.valueContains('#MasterCompany_Country', 'Switzerland')

                    .relUrl('/event/1502/awards')
                    .waitForElementNotVisible('#thisIsMainLoader', 30000);
            })
    },

    'back to the awards page': function (browser) {
        browser
            .relUrl('/event/1502/awards')
            .useXpath()
            .waitForElementVisible('//h4[contains(text(),"Event (#1502)")]', 30000);
    },

    'enter introduction': function (browser) {
        browser
            .moveToElement('//me-event-candidates-form//button[text()="Save"]', 100, 100)
            .setValueByXpath('//textarea', 'Very important information')
            .waitForElementVisible('//me-event-candidates-form//button[text()="Save"]', 30000)
            .clickBySelectorXpath('//me-event-candidates-form//button[text()="Save"]')
            .waitForElementVisible('//div[contains(text(),"Award saved successfully")]', 30000)
            .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]')
            .verify.valueContains('//textarea', 'Very important information');
    },

    'refresh page and verify in introduction field': function (browser) {
        browser
            .refresh()
            .waitForElementVisible('//me-event-candidates-form//button[text()="Save"]', 20000)
            .moveToElement('//me-event-candidates-form//button[text()="Save"]', 100, 100)

            .waitForElementVisible('//textarea', 30000)
            .verify.valueContains('//textarea', 'Very important information');
    },

    'delete candidate': function (browser) {
        browser
            .deleteCandidate();
    },
});
