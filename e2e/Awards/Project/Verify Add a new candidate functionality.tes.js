var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to awards': function (browser) {
        browser
            .relUrl('/event/1607/awards')
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

    'Status swither by default': function (browser) {
        browser
            .waitForElementVisible('//label[@btnradio="0"]', 30000)
            .verify.cssProperty('//label[@btnradio="0"]', 'background-color', 'rgba(231, 60, 60, 1)')
            .pause(1000);

    },

    'Choose "Project" Candidate type': function (browser) {
        browser
            .waitForElementVisible('//input[@id=3]', 30000)
            .click('//input[@id=3]')
            .waitForElementVisible('//button[text()="Save"]', 30000)
            .click('//button[text()="Save"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//div[text()="Award saved successfully"]', 30000)
            .waitForElementVisible('//button[text()="Add a new candidate"]', 30000);
    },

    'add a new candidate ': function (browser) {
        browser
            .click('//button[text()="Add a new candidate"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .verify.elementNotPresent('//h3[text()="Candidate 1"]', 30000)
            .verify.elementNotPresent('//label[text()="Project local name "]', 30000)
            .verify.elementNotPresent('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="localName"]', 30000)
            .verify.elementNotPresent('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="englishName"]', 30000)
            .pause(3000);

    },
    'status switcher is on': function (browser) {
        browser
            .waitForElementVisible('//label[@btnradio="1"]', 30000)
            .click('//label[@btnradio="1"]')
            .verify.cssProperty('//label[@btnradio="1"]', 'background-color', 'rgba(41, 115, 207, 1)')
            .pause(1000)
            .waitForElementVisible('//button[text()="Save"]', 30000)
            .click('//button[text()="Save"]')
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
            .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]')
            .waitForElementVisible('//*[text()="Candidate 1"]/../../../../../..//button[text()="Winner"]', 30000)
            .waitForElementVisible('//*[text()="Candidate 1"]/../../../../../..//button[text()="Delete"]', 30000)
            .waitForElementVisible('//label[text()="Introduction"]', 30000)
            .waitForElementVisible('//*[text()="Candidate 1"]/../../../../../..//textarea[@ngcontrol="introduction"]', 30000);
    },
    'add 2-nd candidate ': function (browser) {
        browser
            .click('//button[text()="Add a new candidate"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h3[text()="Candidate 2"]', 30000)
            .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]')
            .waitForElementVisible('//*[text()="Candidate 2"]/../../../../../..//button[text()="Winner"]', 30000)
            .waitForElementVisible('//*[text()="Candidate 2"]/../../../../../..//button[text()="Delete"]', 30000)
            .waitForElementVisible('//label[text()="Introduction"]', 30000)
            .waitForElementVisible('//*[text()="Candidate 2"]/../../../../../..//textarea[@ngcontrol="introduction"]', 30000);

    },
    'add 3-th candidate ': function (browser) {
        browser
            .click('//button[text()="Add a new candidate"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h3[text()="Candidate 3"]', 30000)
            .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]')
            .waitForElementVisible('//*[text()="Candidate 3"]/../../../../../..//button[text()="Winner"]', 30000)
            .waitForElementVisible('//*[text()="Candidate 3"]/../../../../../..//button[text()="Delete"]', 30000)
            .waitForElementVisible('//label[text()="Introduction"]', 30000)
            .waitForElementVisible('//*[text()="Candidate 3"]/../../../../../..//textarea[@ngcontrol="introduction"]', 30000)
    },
    'to return everything to its original position ': function (browser) {
        browser
            .refresh()
            .waitForElementVisible('//div[@class="row"][3]//button[text()="Delete"]', 20000)
            .click('//div[@class="row"][3]//button[text()="Delete"]')
            .waitForElementVisible('//button[@data-marker="me-confirm__button__button__yes"]', 3000)
            .click('//button[@data-marker="me-confirm__button__button__yes"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//div[@class="row"][2]//button[text()="Delete"]', 30000)
            .click('//div[@class="row"][2]//button[text()="Delete"]')
            .waitForElementVisible('//button[@data-marker="me-confirm__button__button__yes"]', 3000)
            .click('//button[@data-marker="me-confirm__button__button__yes"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//div[@class="row"][1]//button[text()="Delete"]', 30000)
            .click('//div[@class="row"][1]//button[text()="Delete"]')
            .waitForElementVisible('//button[@data-marker="me-confirm__button__button__yes"]', 3000)
            .click('//button[@data-marker="me-confirm__button__button__yes"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//div[text()="Company deleted successfully"]', 30000)
            .verify.elementNotPresent('//h3[text()="Candidate 1"]')
            .verify.elementNotPresent('//h3[text()="Candidate 2"]')
            .verify.elementNotPresent('//h3[text()="Candidate 3"]')
            .pause(1500)
            .click('//label[@btnradio="0"]')
            .waitForElementVisible('//button[text()="Save"]', 20000)
            .click('//button[text()="Save"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//div[text()="Award saved successfully"]', 20000)
            .verify.cssProperty('//label[@btnradio="0"]', 'background-color', 'rgba(231, 60, 60, 1)');

    },

})
;