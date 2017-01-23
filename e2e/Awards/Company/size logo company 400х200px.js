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
    'check awards page info': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h4[text()="Awards"]', 7000)
            .waitForElementVisible('//label[text()="Award title local"]', 7000)
            .waitForElementVisible('//div[1]/div/input[1][@type="text"]', 7000)
            .waitForElementVisible('//label[text()="Award title English"]', 7000)
            .waitForElementVisible('//div[2]/div/input[1][@type="text"]', 7000)
            .waitForElementVisible('//label[text()="Candidate type"]', 7000)
            .waitForElementVisible('//div[text()="                         Contact                       "]', 7000)
            .waitForElementVisible('//input[@id=1]', 7000)
            .waitForElementVisible('//div[text()="                         Company                       "]', 7000)
            .waitForElementVisible('//input[@id=2]', 7000)
            .waitForElementVisible('//div[text()="                         Project                       "]', 7000)
            .waitForElementVisible('//input[@id=3]', 7000)
            .waitForElementVisible('//label[text()="Status"]', 7000)
            .waitForElementVisible('//label[@btnradio="1"]', 7000)
            .waitForElementVisible('//label[@btnradio="0"]', 7000)
            .waitForElementVisible('//div[text()="Modified: "]', 7000)
            .waitForElementVisible('//div[text()="Modified by: "]', 7000)
            .waitForElementVisible('//button[@type="submit"]', 7000)
            .waitForElementVisible('//h4[text()="Candidates"]', 7000);


    },
    'select company radio button ': function (browser) {
        browser
            .click('//input[@id=2]')
            .click('//label[@btnradio="1"]')
            .click('//button[@type="submit"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//div[text()="Award saved successfully"]', 30000)
            .waitForElementVisible('//button[text()="Add a new candidate"]', 30000);

    },

    'create new candidate': function (browser) {
        browser
            .click('//button[text()="Add a new candidate"]')
            .click('//input[@value-property-name="companyId"]')
            .useCss()
            .setValue('.auto-complete input', "Aalef")
            .pause(3000)
            .useXpath()
            .click('//*[contains(text(),"Aalef")]')
            .click('//button[text()="Add company"]');

    },
    'added candidate has been displayed': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h4[text()="Candidates"]', 30000)
            .waitForElementVisible('//h3[text()="Candidate 1"]', 30000)
            .waitForElementVisible('//label[text()="Company Name"]', 30000)
            .waitForElementVisible('//span[text()="             Aalef Oy             "]', 30000)
            .waitForElementVisible('//a[@href="http://alpha.ew.managementevents.com/EW/MasterCompany/cruII/id/92844"]', 30000)
            .waitForElementVisible('//label[text()="Country"]', 30000)
            .waitForElementVisible('//img[@src="http://alpha.master-api.managementevents.com/frontend/web/images/no-image.png"]', 30000)
            .waitForElementVisible('//label[text()="Introduction"]', 30000)
            .waitForElementVisible('//div/textarea', 30000)
            .waitForElementVisible('//button[text()="Winner"]', 30000)
            .waitForElementVisible('//button[text()="Delete"]', 30000)
            .waitForElementVisible('//div[@class="form-group"]//div[text()="Modified: "]', 30000)
            .waitForElementVisible('//div[@class="form-group"]//div[text()="Modified by: "]', 30000)
            .waitForElementVisible('//div[@class="form-group"]//button[text()="Save"]', 30000);

    },
    'press "choose file" button': function (browser) {
        browser
            .click('//a[@href="http://alpha.ew.managementevents.com/EW/MasterCompany/cruII/id/92844"]')
            .closeWindow()
            .window_handles(function (result) {
                var handle = result.value[0];
                browser.switchWindow(handle)
                    .waitForElementVisible('//h4[text()="Company  - Aalef Oy (#92844)"]', 30000)
                    .waitForElementVisible('//input[@name="CompanyPicture"]', 30000)
                    .setValue('//input[@name="CompanyPicture"]', 'C:/Users/Avic/Desktop/2017-01-17_10h27_59.png')
                    .waitForElementVisible('//img[@alt="[]"]', 30000)
                    .getElementSize('//img[@alt="[]"]', function (result) {
                        this.assert.equal(typeof result, "object")
                        this.assert.equal(result.status, 0)
                        this.assert.equal(result.value.width, 800)
                        this.assert.equal(result.value.height, 382)
                    })
                    .useCss()
                    .click('#action_done_cropping')
                    .waitForElementVisible('.contact-picture', 30000)
                    .getElementSize(".contact-picture", function (result) {
                        this.assert.equal(typeof result, "object")
                        this.assert.equal(result.status, 0)
                        this.assert.equal(result.value.width, 381)
                        this.assert.equal(result.value.height, 190)
                    })
            })
    },
    'go to the candidate 1 page ': function (browser) {
        browser
            .relUrl('/event/1504/awards')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)

    },

    'delete 1-st candidate': function (browser) {
        browser
            .useXpath()
            .moveToElement('//me-event-candidates-form//button[text()="Save"]', 100, 100)
            .waitForElementVisible('//h3[text()="Candidate 1"]', 30000)
            .waitForElementVisible('//button[text()="Delete"]', 30000)
            .click('//button[text()="Delete"]')
            .waitForElementVisible('//button[@data-marker="me-confirm__button__button__yes"]', 3000)
            .click('//button[@data-marker="me-confirm__button__button__yes"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//div[text()="Company deleted successfully"]', 30000)
            .assert.elementNotPresent('//h3[text()="Candidate 1"]')

    }
});