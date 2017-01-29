var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to awards': function (browser) {
        browser
            .relUrl('/event/1504/awards')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'select company radio and switch ON buttons ': function (browser) {
        browser
            .selectCompanyRadioButton();
    },

    'create new candidate': function (browser) {
        browser
            .addNewCandidate("Aalef");
    },

    'added candidate has been displayed': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//h4[contains(text(),"Candidates")]')

            .verify.elementPresent('//h3[contains(text(),"Candidate 1")]')
            .verify.elementPresent('//label[contains(text(),"Company Name")]')
            .verify.elementPresent('//span[contains(text(),"Aalef Oy")]')
            .verify.elementPresent('//a[contains(text(),"(M#92844)")]', 30000)
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

    'press "choose file" button': function (browser) {
        browser
            .clickBySelectorXpath('//*[text()="Candidates"]/../..//a[contains(@href,"MasterCompany")]')
            .pause(1000)
            .closeWindow()
            .window_handles(function (result) {
                var handle = result.value[0];
                browser.switchWindow(handle)
                    .waitForElementVisible('//h4[text()="Company  - Aalef Oy (#92844)"]', 30000)
                    .waitForElementVisible('//input[@name="CompanyPicture"]', 30000)

                    .setValue('//input[@name="CompanyPicture"]', 'C:/Users/Avic/Desktop/pictures for tests(no delete)/2017-01-17_10h27_59.png')

                    .waitForElementVisible('//img[@alt="[]"]', 30000)
                    .getElementSize('//img[@alt="[]"]', function (result) {
                        this.verify.equal(typeof result, "object")
                        this.verify.equal(result.status, 0)
                        this.verify.equal(result.value.width, 800)
                        this.verify.equal(result.value.height, 382)
                    })
                    .useCss()
                    .click('#action_done_cropping')
                    .waitForElementVisible('.contact-picture', 30000)
                    .getElementSize(".contact-picture", function (result) {
                        this.verify.equal(typeof result, "object")
                        this.verify.equal(result.status, 0)
                        this.verify.equal(result.value.width, 381)
                        this.verify.equal(result.value.height, 190)
                    })
            })
    },

    'go to the candidate 1 page ': function (browser) {
        browser
            .relUrl('/event/1504/awards')
            .useXpath()
            .waitForElementVisible('//h4[contains(text(),"Event (#1504)")]', 30000);
    },

    'delete 1-st candidate': function (browser) {
        browser
            .deleteCandidate();
    },
});