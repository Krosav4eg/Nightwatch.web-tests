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

    'select company radio button ': function (browser) {
        browser
            .selectCompanyRadioButton()
    },

    'click on add a new candidate button': function (browser) {
        browser
            .addNewCandidate("UNiQUARE");
    },

    'added candidate has been displayed': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//h4[contains(text(),"Candidates")]')

            .verify.elementPresent('//h3[contains(text(),"Candidate 1")]')
            .verify.elementPresent('//label[contains(text(),"Company Name")]')
            .verify.elementPresent('//span[contains(text(),"UNiQUARE Software Development GmbH")]')
            .verify.elementPresent('//a[contains(text(),"(M#100014)")]')
            .verify.elementPresent('//label[contains(text(),"Country")]')
            .verify.elementPresent('//span[contains(text(),"AUSTRIA")]')

            .verify.elementPresent('//*[text()="Candidates"]/../..//img')

            .verify.elementPresent('//label[contains(text(),"Introduction")]')
            .verify.elementPresent('//div/textarea')

            .verify.elementPresent('//button[contains(text(),"Winner")]')
            .verify.elementPresent('//button[contains(text(),"Delete")]')

            .verify.elementPresent('//div[@class="form-group"]//div[contains(text(),"Modified: ")]')
            .verify.elementPresent('//div[@class="form-group"]//div[contains(text(),"Modified by: ")]')

            .verify.elementPresent('//div[@class="form-group"]//button[text()="Save"]')
    },

    'select add a new candidate button': function (browser) {
        browser
            .refresh()
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .verify.elementPresent('//button[text()="Add a new candidate"]')
            .clickBySelectorXpath('//button[@class="row-fluid btn btn-default"]')
            .waitForElementVisible('//button[text()="Add company"]', 30000)
            .verify.elementPresent('//input[@value-property-name="companyId"]');
    },

    ' click on add company button without entering the company': function (browser) {
        browser
            .clickBySelectorXpath('//button[text()="Add company"]')
            .waitForElementVisible('//div[text()="Please select a company"]', 30000)
    },

    'enter alcatel in the autocomplete to displaying companies': function (browser) {
        browser
            .refresh()
            .addNewCandidate("Alcatel");
    },

    'added second candidate has been displayed': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//h4[contains(text(),"Candidates")]')

            .verify.elementPresent('//h3[contains(text(),"Candidate 1")]')
            .verify.elementPresent('//label[contains(text(),"Company Name")]')
            .verify.containsText('(//span[@class="control-text"])[3]','Alcatel Austria AG')
            .verify.elementPresent('//a[contains(text(),"(M#63459)")]')
            .verify.elementPresent('//label[contains(text(),"Country")]')
            .verify.elementPresent('//span[contains(text(),"AUSTRIA")]')

            .verify.elementPresent('//*[text()="Candidates"]/../..//img')

            .verify.elementPresent('//label[contains(text(),"Introduction")]')
            .verify.elementPresent('//div/textarea')

            .verify.elementPresent('//button[contains(text(),"Winner")]')
            .verify.elementPresent('//button[contains(text(),"Delete")]')

            .verify.elementPresent('//div[@class="form-group"]//div[contains(text(),"Modified: ")]')
            .verify.elementPresent('//div[@class="form-group"]//div[contains(text(),"Modified by: ")]')

            .verify.elementPresent('//div[@class="form-group"]//button[text()="Save"]')

    },

    'click on add new candidate button again': function (browser) {
        browser
            .clickBySelectorXpath('//button[text()="Add a new candidate"]')
            .verify.elementNotPresent('//button[text()="Add company"]')
            .verify.elementNotPresent('//input[@value-property-name="companyId"]');
    },

    'set values into the input fields': function (browser) {
        browser
            .setValueByXpath('//div[1]/div/input[1][@type="text"]', 'The best of the best')
            .setValueByXpath('//div[2]/div/input[1][@type="text"]', 'The best of the best 2');
    },
    'status switcher: select "Off" in status switcher': function (browser) {
        browser
            .verify.elementPresent('//label[@btnradio="0"]')
            .clickBySelectorXpath('//label[@btnradio="0"]');
    },

    'select "company" candidate type': function (browser) {
        browser
            .clickBySelectorXpath('//radio-item[@id=2]');
    },

    'click save button ': function (browser) {
        browser
            .clickBySelectorXpath('//button[@type="submit"]')
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .verify.elementPresent('//div[text()="Award saved successfully"]')
            .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]')
            .verify.elementNotPresent('//h3[text()="Candidate 1"]')
            .verify.elementNotPresent('//h3[text()="Candidate 2"]')
            .refresh()
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'create new candidate': function (browser) {
        browser
            .addNewCandidate("ALVAREZ");
    },

    'created candidate is not visible': function (browser) {
        browser
            .waitForElementVisible('//div[text()="Company added successfully"]', 30000)
            .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]')
            .verify.elementNotPresent('//h3[text()="Candidate 3"]');
    },

    'status switcher is "ON"': function (browser) {
        browser
            .clickBySelectorXpath('//radio-item[@id=2]')
            .clickBySelectorXpath('//label[@btnradio="1"]')
            .verify.cssProperty('//label[@btnradio="1"]', 'background-color', 'rgba(41, 115, 207, 1)')

            .clickBySelectorXpath('//button[@type="submit"]')

            .useCss()
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
            .clickBySelectorXpath('//radio-item[@id=1]')
            .verify.elementPresent('//*[contains(text(),"be changed because candidates have been selected.Please remove the existing candidates before changing the candidate type of the award.")]');

    },

    'try to click on "Project" radio button': function (browser) {
        browser
            .clickBySelectorXpath('//radio-item[@id=3]')
            .verify.elementPresent('//*[contains(text(),"be changed because candidates have been selected.Please remove the existing candidates before changing the candidate type of the award.")]');
    },

    'delete all candidates from candidates table': function (browser) {
        browser
            .deleteCandidate()
            .deleteCandidate()
            .deleteCandidate();
    },
});

