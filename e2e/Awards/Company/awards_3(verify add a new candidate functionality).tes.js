var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to awards': function (browser) {
        browser
            .relUrl('/event/1401/awards')
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
            .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]')
            .waitForElementVisible('//button[text()="Add a new candidate"]', 30000);

    },

    'click on add a new candidate  button': function (browser) {
        browser
            .useXpath()
            .click('//button[text()="Add a new candidate"]')
            .click('//input[@value-property-name="companyId"]')
            .useCss()
            .setValue('.auto-complete input', "UNiQUARE")
            .pause(3000)
            .useXpath()
            .click('//*[contains(text(),"UNiQUARE")]')
            .pause(3000)
            .click('//button[text()="Add company"]')
            .pause(2500);
    },
    'added candidate has been displayed': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h4[text()="Candidates"]', 30000)
            .waitForElementVisible('//h3[text()="Candidate 1"]', 30000)
            .waitForElementVisible('//label[text()="Company Name"]', 30000)
            .waitForElementVisible('//span[text()="             UNiQUARE Software Development GmbH             "]', 30000)
            .waitForElementVisible('//a[@href="http://alpha.ew.managementevents.com/EW/MasterCompany/cruII/id/100014"]', 30000)
            .waitForElementVisible('//label[text()="Country"]', 30000)
            .waitForElementVisible('//span[text()="AUSTRIA"]', 30000)
            .waitForElementVisible('//img[@src="http://alpha.master-api.managementevents.com/frontend/web/images/no-image.png"]', 30000)
            .waitForElementVisible('//label[text()="Introduction"]', 30000)
            .waitForElementVisible('//div/textarea', 30000)
            .waitForElementVisible('//button[text()="Winner"]', 30000)
            .waitForElementVisible('//button[text()="Delete"]', 30000)
            .waitForElementVisible('//div[@class="form-group"]//div[text()="Modified: "]', 30000)
            .waitForElementVisible('//div[@class="form-group"]//div[text()="Modified by: "]', 30000)
            .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]')
            .waitForElementVisible('//div[@class="form-group"]//button[text()="Save"]', 30000)
    },
    'add a new candidate button': function (browser) {
        browser
            .useXpath()
            .refresh()
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//button[text()="Add a new candidate"]', 30000)
            .click('//button[@class="row-fluid btn btn-default"]')
            .waitForElementVisible('//button[text()="Add company"]', 30000)
            .waitForElementVisible('//input[@value-property-name="companyId"]', 30000);

    },

    ' click on add company button without entering the company': function (browser) {
        browser
            .click('//button[text()="Add company"]')
            .waitForElementVisible('//div[text()="Please select a company"]', 30000)
    },
    'enter alcatel in the autocomplete to displaying companies': function (browser) {
        browser
            .click('//input[@value-property-name="companyId"]')
            .useCss()
            .setValue('.auto-complete input', "Alcatel")
            .pause(5000)
            .useXpath()
            .click('//*[contains(text(),"Alcatel")]')
            .click('//button[text()="Add company"]')
            .pause(3000);
    },
    'added second candidate has been displayed': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h4[text()="Candidates"]', 30000)
            .waitForElementVisible('//h3[text()="Candidate 2"]', 30000)
            .waitForElementVisible('//label[text()="Company Name"]', 30000)
            .waitForElementVisible('//span[text()="             Alcatel Austria AG             "]', 30000)
            .waitForElementVisible('//a[@href="http://alpha.ew.managementevents.com/EW/MasterCompany/cruII/id/63459"]', 30000)
            .waitForElementVisible('//label[text()="Country"]', 30000)
            .waitForElementVisible('//span[text()="AUSTRIA"]', 30000)
            .waitForElementVisible('//label[text()="Introduction"]', 30000)
            .waitForElementVisible('//div/textarea', 30000)
            .waitForElementVisible('//button[text()="Winner"]', 30000)
            .waitForElementVisible('//button[text()="Delete"]', 30000)
            .waitForElementVisible('//div[@class="form-group"]//div[text()="Modified: "]', 30000)
            .waitForElementVisible('//div[@class="form-group"]//div[text()="Modified by: "]', 30000)
            .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]')
            .waitForElementVisible('//div[@class="form-group"]//button[text()="Save"]', 30000)
            .waitForElementVisible('//button[text()="Add a new candidate"]', 30000)

    },
    'click on add new candidate button again': function (browser) {
        browser
            .click('//button[text()="Add a new candidate"]')
            .verify.elementNotPresent('//button[text()="Add company"]')
            .verify.elementNotPresent('//input[@value-property-name="companyId"]')
    },
    'set values into the input fields': function (browser) {
        browser
            .waitForElementVisible('//div[1]/div/input[1][@type="text"]', 5000)
            .clearValue('//div[1]/div/input[1][@type="text"]')
            .setValue('//div[1]/div/input[1][@type="text"]', 'The best of the best')
            .clearValue('//div[2]/div/input[1][@type="text"]')
            .setValue('//div[2]/div/input[1][@type="text"]', 'The best of the best 2');
    },
    'status switcher: select "Off" in status switcher': function (browser) {
        browser
            .waitForElementVisible('//label[@btnradio="0"]', 7000)
            .click('//label[@btnradio="0"]');
    },

    'select "company" candidate type': function (browser) {
        browser
            .waitForElementVisible('//input[@id=2]', 7000)
            .click('//input[@id=2]');
    },
    'click save button ': function (browser) {
        browser
            .click('//button[@type="submit"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//div[text()="Award saved successfully"]', 30000)
            .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]')
            .verify.elementNotPresent('//h3[text()="Candidate 1"]')
            .verify.elementNotPresent('//h3[text()="Candidate 2"]')
            .refresh()
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'create new candidate': function (browser) {
        browser
            .useXpath()
            .click('//button[text()="Add a new candidate"]')
            .click('//input[@value-property-name="companyId"]')
            .useCss()
            .setValue('.auto-complete input', "Aalef")
            .pause(3000)
            .useXpath()
            .click('//*[contains(text(),"Aalef")]')
            .pause(3000)
            .click('//button[text()="Add company"]')
            .pause(2000);
    },

    'created candidate is not visible': function (browser) {
        browser
            .waitForElementVisible('//div[text()="Company added successfully"]', 30000)
            .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]')
            .verify.elementNotPresent('//h3[text()="Candidate 3"]');
    },
    'status switcher is "ON"': function (browser) {
        browser
            .click('//input[@id=2]')
            .click('//label[@btnradio="1"]')
            .verify.cssProperty('//label[@btnradio="1"]', 'background-color', 'rgba(41, 115, 207, 1)')
            .click('//button[@type="submit"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//div[text()="Award saved successfully"]', 30000)
            .verify.elementPresent('//h3[text()="Candidate 1"]')
            .verify.elementPresent('//h3[text()="Candidate 2"]')
            .verify.elementPresent('//h3[text()="Candidate 3"]')
            .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]');


    },

    'try to click on "Contact" radio button': function (browser) {
        browser
            .click('//input[@id=1]')
            .waitForElementVisible('//*[contains(text(),"be changed because candidates have been selected.Please remove the existing candidates before changing the candidate type of the award.")]', 30000);

    },

    'try to click on "Project" radio button': function (browser) {
        browser
            .click('//input[@id=3]')
            .waitForElementVisible('//*[contains(text(),"be changed because candidates have been selected.Please remove the existing candidates before changing the candidate type of the award.")]', 30000)
            .pause(5000);
    },
    'delete all candidates from candidates table': function (browser) {
        browser
            .waitForElementVisible('//*[text()="Candidate 3"]/../../../../../..//button[text()="Delete"]', 30000)
            .click('//*[text()="Candidate 3"]/../../../../../..//button[text()="Delete"]')
            .waitForElementVisible('//button[@data-marker="me-confirm__button__button__yes"]', 30000)
            .click('//button[@data-marker="me-confirm__button__button__yes"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//*[text()="Candidate 2"]/../../../../../..//button[text()="Delete"]', 20000)
            .click('//*[text()="Candidate 2"]/../../../../../..//button[text()="Delete"]')
            .waitForElementVisible('//button[@data-marker="me-confirm__button__button__yes"]', 20000)
            .click('//button[@data-marker="me-confirm__button__button__yes"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//*[text()="Candidate 1"]/../../../../../..//button[text()="Delete"]', 30000)
            .click('//*[text()="Candidate 1"]/../../../../../..//button[text()="Delete"]')
            .waitForElementVisible('//button[@data-marker="me-confirm__button__button__yes"]', 30000)
            .click('//button[@data-marker="me-confirm__button__button__yes"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//div[text()="Company deleted successfully"]', 30000)
            .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]')
            .verify.elementNotPresent('//h3[text()="Candidate 1"]')
            .verify.elementNotPresent('//h3[text()="Candidate 2"]')
            .verify.elementNotPresent('//h3[text()="Candidate 3"]');
    },

    'click on "Contact" radio button': function (browser) {
        browser
            .click('//input[@id=2]')
            .click('//button[@type="submit"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//div[text()="Award saved successfully"]', 30000)

    },

});

