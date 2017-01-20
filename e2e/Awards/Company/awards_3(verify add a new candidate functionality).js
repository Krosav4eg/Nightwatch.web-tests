var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to awards': function (browser) {
        browser
            .relUrl('/event/1401/awards')
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000);
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
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .useXpath()
            .waitForElementVisible('//div[text()="Award saved successfully"]', 10000)
            .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]')
            .waitForElementVisible('//button[text()="Add a new candidate"]', 10000);

    },

    // 'click on add a new candidate  button': function (browser) {
    //     browser
    //         .useXpath()
    //         .click('//button[text()="Add a new candidate"]')
    //         .waitForElementVisible('//button[text()="Add company"]', 10000)
    //         .waitForElementVisible('//input[@value-property-name="companyId"]', 10000)
    //         .click('//input[@value-property-name="companyId"]')
    //         .useCss()
    //         .setValue('.auto-complete input', "UNiQUARE")
    //         .pause(5000)
    //         .useXpath()
    //         .click('//*[contains(text(),"UNiQUARE")]')
    //         .pause(3000)
    //         .click('//button[text()="Add company"]')
    //         .pause(3000);
    //
    // },
    'added candidate has been displayed': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h4[text()="Candidates"]', 10000)
            .waitForElementVisible('//h3[text()="Candidate 1"]', 10000)
            .waitForElementVisible('//label[text()="Company Name"]', 10000)
            .waitForElementVisible('//span[text()="             UNiQUARE Software Development GmbH             "]', 10000)
            .waitForElementVisible('//a[@href="http://alpha.ew.managementevents.com/EW/MasterCompany/cruII/id/100014"]', 10000)
            .waitForElementVisible('//label[text()="Country"]', 10000)
            .waitForElementVisible('//span[text()="AUSTRIA"]', 10000)
            .waitForElementVisible('//img[@src="http://alpha.master-api.managementevents.com/frontend/web/images/no-image.png"]', 10000)
            .waitForElementVisible('//label[text()="Introduction"]', 10000)
            .waitForElementVisible('//div/textarea', 10000)
            .waitForElementVisible('//button[text()="Winner"]', 10000)
            .waitForElementVisible('//button[text()="Delete"]', 10000)
            .waitForElementVisible('//div[@class="form-group"]//div[text()="Modified: "]', 10000)
            .waitForElementVisible('//div[@class="form-group"]//div[text()="Modified by: "]', 10000)
            .waitForElementVisible('//div[@class="form-group"]//button[text()="Save"]', 10000)


    },
    'click on add new button': function (browser) {
        browser
            .waitForElementVisible('//button[text()="Add a new candidate"]', 10000)
            .click('//button[text()="Add a new candidate"]')
            .waitForElementVisible('//button[text()="Add company"]', 10000)
            .waitForElementVisible('//input[@value-property-name="companyId"]', 10000)

    },

    ' click on add company button without entering the company': function (browser) {
        browser
            .click('//button[text()="Add company"]')
            .waitForElementVisible('//div[text()="Please select a company"]', 10000)
    },
    // 'enter alcatel in the autocomplete to displaying companies': function (browser) {
    //     browser
    //         .click('//input[@value-property-name="companyId"]')
    //         .useCss()
    //         .setValue('.auto-complete input', "Alcatel")
    //         .pause(5000)
    //         .useXpath()
    //         .click('//*[contains(text(),"Alcatel")]')
    //         .click('//button[text()="Add company"]')
    //         .pause(3000);
    // },
    'added second candidate has been displayed': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h4[text()="Candidates"]', 10000)
            .waitForElementVisible('//h3[text()="Candidate 2"]', 10000)
            .waitForElementVisible('//label[text()="Company Name"]', 10000)
            // .waitForElementVisible('//span[text()="             UNiQUARE Software Development GmbH             "]', 10000)
            // .waitForElementVisible('//a[@href="http://alpha.ew.managementevents.com/EW/MasterCompany/cruII/id/100014"]', 10000)
            .waitForElementVisible('//label[text()="Country"]', 10000)
            // .waitForElementVisible('//span[text()="AUSTRIA"]', 10000)
            // .waitForElementVisible('//img[@src="http://alpha.master-api.managementevents.com/frontend/web/images/no-image.png"]', 10000)
            .waitForElementVisible('//label[text()="Introduction"]', 10000)
            .waitForElementVisible('//div/textarea', 10000)
            .waitForElementVisible('//button[text()="Winner"]', 10000)
            .waitForElementVisible('//button[text()="Delete"]', 10000)
            .waitForElementVisible('//div[@class="form-group"]//div[text()="Modified: "]', 10000)
            .waitForElementVisible('//div[@class="form-group"]//div[text()="Modified by: "]', 10000)
            .waitForElementVisible('//div[@class="form-group"]//button[text()="Save"]', 10000)
            .waitForElementVisible('//button[text()="Add a new candidate"]', 10000)

    },
    'click on add new candidate button again': function (browser) {
        browser
            .click('//button[text()="Add a new candidate"]')
            .assert.elementNotPresent('//button[text()="Add company"]')
            .assert.elementNotPresent('//input[@value-property-name="companyId"]')
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
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .useXpath()
            .waitForElementVisible('//div[text()="Award saved successfully"]', 10000)
            .assert.elementNotPresent('//h3[text()="Candidate 1"]')
            .assert.elementNotPresent('//h3[text()="Candidate 2"]');
    },
    'to return everything to its original position ': function (browser) {
        browser
            .click('//input[@id=1]')
            .click('//button[@type="submit"]')
            .click('//label[@btnradio="1"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .waitForElementVisible('//div[text()="Award saved successfully"]', 10000);
    },

    'status switcher is "Off"': function (browser) {
        browser
            .click('//input[@id=2]')
            .click('//label[@btnradio="0"]')
            .assert.cssProperty('//label[@btnradio="0"]', 'background-color', 'rgba(214, 26, 26, 1)')
            .click('//button[@type="submit"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .useXpath()
            .waitForElementVisible('//div[text()="Award saved successfully"]', 10000);

    },

    // 'click on add new button': function (browser) {
    //     browser
    //         .waitForElementVisible('//button[text()="Add a new candidate"]', 10000)
    //         .click('//button[text()="Add a new candidate"]')
    //         .waitForElementVisible('//button[text()="Add company"]', 10000)
    //         .waitForElementVisible('//input[@value-property-name="companyId"]', 10000);
    //
    // },
    //
    // 'create new candidate': function (browser) {
    //     browser
    //         .click('//input[@value-property-name="companyId"]')
    //         .useCss()
    //         .setValue('.auto-complete input', "Aalef")
    //         .pause(3000)
    //         .useXpath()
    //         .click('//*[contains(text(),"Aalef")]')
    //         .click('//button[text()="Add company"]');
    //
    // },

    'created candidate is not visible': function (browser) {
        browser
        // .waitForElementVisible('//div[text()="Award saved successfully"]', 10000)
            .assert.elementNotPresent('//h3[text()="Candidate 3"]');
    },
    'status switcher is "ON"': function (browser) {
        browser
            .click('//input[@id=2]')
            .click('//label[@btnradio="1"]')
            .assert.cssProperty('//label[@btnradio="1"]', 'background-color', 'rgba(41, 115, 207, 1)')
            .click('//button[@type="submit"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .useXpath()
            .waitForElementVisible('//div[text()="Award saved successfully"]', 10000)
            .assert.elementPresent('//h3[text()="Candidate 1"]')
            .assert.elementPresent('//h3[text()="Candidate 2"]')
            .assert.elementPresent('//h3[text()="Candidate 3"]');

    },

    'try to click on "Contact" radio button': function (browser) {
        browser
            .click('//input[@id=1]')
            .waitForElementVisible('//*[contains(text(),"be changed because candidates have been selected.Please remove the existing candidates before changing the candidate type of the award.")]', 10000);

    },

    'try to click on "Project" radio button': function (browser) {
        browser
            .click('//input[@id=3]')
            .waitForElementVisible('//*[contains(text(),"be changed because candidates have been selected.Please remove the existing candidates before changing the candidate type of the award.")]', 10000);

    },
    'delete all candidates from candidates table': function (browser) {
        browser
            .waitForElementVisible('//div[@class="row"][1]//button[text()="Delete"]', 10000)
            .click('//div[@class="row"][1]//button[text()="Delete"]')
            .waitForElementVisible('//button[@data-marker="me-confirm__button__button__yes"]', 3000)
            .click('//button[@data-marker="me-confirm__button__button__yes"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .useXpath()
            .waitForElementVisible('//div[@class="row"][2]//button[text()="Delete"]', 10000)
            .click('//div[@class="row"][2]//button[text()="Delete"]')
            .waitForElementVisible('//button[@data-marker="me-confirm__button__button__yes"]', 3000)
            .click('//button[@data-marker="me-confirm__button__button__yes"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .useXpath()
            .waitForElementVisible('//div[@class="row"][3]//button[text()="Delete"]', 10000)
            .click('//div[@class="row"][3]//button[text()="Delete"]')
            .waitForElementVisible('//button[@data-marker="me-confirm__button__button__yes"]', 3000)
            .click('//button[@data-marker="me-confirm__button__button__yes"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .useXpath()
            .waitForElementVisible('//div[text()="Company deleted successfully"]', 10000)
            .assert.elementNotPresent('//h3[text()="Candidate 1"]')
            .assert.elementNotPresent('//h3[text()="Candidate 2"]')
            .assert.elementNotPresent('//h3[text()="Candidate 3"]');
    },

    'click on "Contact" radio button': function (browser) {
        browser
            .click('//input[@id=2]')
            .click('//button[@type="submit"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .useXpath()
            .waitForElementVisible('//div[text()="Award saved successfully"]', 10000);
    },

})
;
