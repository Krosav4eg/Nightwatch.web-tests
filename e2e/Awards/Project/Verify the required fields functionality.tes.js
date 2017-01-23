var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to awards': function (browser) {
        browser
            .relUrl('/event/1608/awards')
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

    'add candidate 1': function (browser) {
        browser
            .click('//button[text()="Add a new candidate"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h3[text()="Candidate 1"]', 30000)
            .waitForElementVisible('//label[text()="Project local name "]', 30000)
            .waitForElementVisible('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="localName"]', 30000)
            .click('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="localName"]')
            .waitForElementVisible('//label[text()="Project English name "]', 30000)
            .waitForElementVisible('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="englishName"]', 30000)
            .click('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="englishName"]')

            .waitForElementVisible('//p[text()="               Project local name is required.             "]', 30000)

            .waitForElementVisible('//label[text()="Country "]', 30000)
            .waitForElementVisible('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="country"]', 30000)
            .click('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="country"]')

            .waitForElementVisible('//p[text()="               Project English name is required.             "]', 30000)

            .waitForElementVisible('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="englishName"]', 30000)
            .click('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="englishName"]')

            .waitForElementVisible('//p[text()="               Country is required             "]', 30000)
            .refresh();

    },
    'Click Save button': function (browser) {
        browser
            .waitForElementVisible('//*[text()="Candidate 1"]/../../../../../..//button[text()="Save"]', 30000)
            .click('//*[text()="Candidate 1"]/../../../../../..//button[text()="Save"]')
            .waitForElementVisible('//p[text()="               Project local name is required.             "]', 30000)
            .waitForElementVisible('//p[text()="               Project English name is required.             "]', 30000)
            .waitForElementVisible('//p[text()="               Country is required             "]', 30000);

    },
    'Enter the local name': function (browser) {
        browser
            .waitForElementVisible('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="localName"]', 30000)
            .clearValue('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="localName"]')
            .setValue('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="localName"]', 'Тестовый проект_2')
            .waitForElementVisible('//*[text()="Candidate 1"]/../../../../../..//button[text()="Save"]', 30000)
            .click('//*[text()="Candidate 1"]/../../../../../..//button[text()="Save"]')
            .waitForElementVisible('//p[text()="               Project English name is required.             "]', 30000)
            .waitForElementVisible('//p[text()="               Country is required             "]', 30000);


    },
    'Enter the English name': function (browser) {
        browser
            .waitForElementVisible('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="englishName"]', 30000)
            .clearValue('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="englishName"]')
            .setValue('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="englishName"]', 'Test Project_2')
            .waitForElementVisible('//*[text()="Candidate 1"]/../../../../../..//button[text()="Save"]', 30000)
            .click('//*[text()="Candidate 1"]/../../../../../..//button[text()="Save"]')
            .waitForElementVisible('//p[text()="               Country is required             "]', 30000);
    },

    'Enter the Country': function (browser) {
        browser
            .waitForElementVisible('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="country"]', 30000)
            .click('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="country"]')
            .useCss()
            .setValue('.auto-complete input', "Russia")
            .pause(3000)
            .useXpath()
            .click('//*[contains(text(),"Russia")]')
            .pause(3000)
            .click('//*[text()="Candidate 1"]/../../../../../..//button[text()="Save"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//div[text()="Award saved successfully"]', 30000);
    },

    'added candidate is displayed': function (browser) {
        browser
            .waitForElementVisible('//h4[text()="Candidates"]', 30000)
            .waitForElementVisible('//h3[text()="Candidate 1"]', 30000)
            .waitForElementVisible('//label[text()="Project local name "]', 30000)
            .waitForElementVisible('//label[text()="Country "]', 30000)
            .verify.valueContains('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="localName"]', 'Тестовый проект_2')
            .verify.valueContains('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="englishName"]', 'Test Project_2')
            .pause(1000)
            .verify.valueContains('//input[@id="country"]', 'Russia')
            .waitForElementVisible('//*[text()="Candidate 1"]/../../../../../..//button[text()="Winner"]', 30000)
            .waitForElementVisible('//*[text()="Candidate 1"]/../../../../../..//button[text()="Delete"]', 30000)
            .waitForElementVisible('//label[text()="Introduction"]', 30000)
            .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]')

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

})
;