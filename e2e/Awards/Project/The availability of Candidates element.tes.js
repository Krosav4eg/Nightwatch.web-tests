var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to awards': function (browser) {
        browser
            .relUrl('/event/1610/awards')
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
    'select project radio button ': function (browser) {
        browser
            .click('//input[@id=3]')
            .click('//label[@btnradio="1"]')
            .click('//button[@type="submit"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//div[text()="Award saved successfully"]', 30000)
            .waitForElementVisible('//button[text()="Add a new candidate"]', 30000);

    },

    'add a new candidate verify availability of fields': function (browser) {
        browser
            .click('//button[text()="Add a new candidate"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h3[text()="Candidate 1"]', 30000)
            .waitForElementVisible('//label[text()="Project local name "]', 30000)
            .waitForElementVisible('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="localName"]', 30000)
            .waitForElementVisible('//label[text()="Project English name "]', 30000)
            .waitForElementVisible('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="englishName"]', 30000)
            .waitForElementVisible('//label[text()="Country "]', 30000)
            .waitForElementVisible('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="country"]', 30000)
            .waitForElementVisible('//label[text()="Introduction"]', 30000)
            .waitForElementVisible('//*[text()="Candidate 1"]/../../../../../..//textarea[@ngcontrol="introduction"]',30000)
            .waitForElementVisible('//input[@id="myUnit"]', 30000)
            .waitForElementVisible('//p[text()="Image format: .jpg, image size min. 800x400px"]', 30000)
            .waitForElementVisible('//img[@src="http://alpha.master-api.managementevents.com/frontend/web/images/no-image.png"]',30000)
            .waitForElementVisible('//*[text()="Candidate 1"]/../../../../../..//button[text()="Save"]',30000)
            .waitForElementVisible('//*[text()="Candidate 1"]/../../../../../..//button[text()="Delete"]',30000)
            .waitForElementVisible('//*[text()="Candidate 1"]/../../../../../..//button[text()="Winner"]',30000)

    },
    'Delete candidate': function (browser) {
        browser
            .waitForElementVisible('//div[@class="row"][1]//button[text()="Delete"]', 30000)
            .click('//div[@class="row"][1]//button[text()="Delete"]')
            .waitForElementVisible('//button[@data-marker="me-confirm__button__button__yes"]', 30000)
            .click('//button[@data-marker="me-confirm__button__button__yes"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .verify.elementNotPresent('//h3[text()="Candidate 1"]')
            .verify.elementNotPresent('//label[text()="Project local name "]')
            .verify.elementNotPresent('//label[text()="Project English name "]')
            .verify.elementNotPresent('//label[text()="Country "]')
            .verify.elementNotPresent('//label[text()="Introduction"]')
            .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]')
            .waitForElementVisible('//div[text()="Company deleted successfully"]', 30000);

    },
});