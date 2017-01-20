var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to awards': function (browser) {
        browser
            .relUrl('/event/1503/awards')
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
            .waitForElementVisible('//button[text()="Add a new candidate"]', 10000);

    },

    // 'create new candidate': function (browser) {
    //     browser
    //         .click('//button[text()="Add a new candidate"]')
    //         .click('//input[@value-property-name="companyId"]')
    //         .useCss()
    //         .setValue('.auto-complete input', "Aalef")
    //         .pause(3000)
    //         .useXpath()
    //         .click('//*[contains(text(),"Aalef")]')
    //         .click('//button[text()="Add company"]');
    //
    // },
    'added candidate has been displayed': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h4[text()="Candidates"]', 10000)
            .waitForElementVisible('//h3[text()="Candidate 1"]', 10000)
            .waitForElementVisible('//label[text()="Company Name"]', 10000)
            .waitForElementVisible('//span[text()="             Aalef Oy             "]', 10000)
            .waitForElementVisible('//a[@href="http://alpha.ew.managementevents.com/EW/MasterCompany/cruII/id/92844"]', 10000)
            .waitForElementVisible('//label[text()="Country"]', 10000)
            .waitForElementVisible('//img[@src="http://alpha.master-api.managementevents.com/frontend/web/images/no-image.png"]', 10000)
            .waitForElementVisible('//label[text()="Introduction"]', 10000)
            .waitForElementVisible('//div/textarea', 10000)
            .waitForElementVisible('//button[text()="Winner"]', 10000)
            .waitForElementVisible('//button[text()="Delete"]', 10000)
            .waitForElementVisible('//div[@class="form-group"]//div[text()="Modified: "]', 10000)
            .waitForElementVisible('//div[@class="form-group"]//div[text()="Modified by: "]', 10000)
            .waitForElementVisible('//div[@class="form-group"]//button[text()="Save"]', 10000);

    },

    'enter introduction': function (browser) {
        browser
            .moveToElement('//me-event-candidates-form//button[text()="Save"]', 100, 100)
            .waitForElementVisible('//form//div[1]//textarea', 10000)
            .clearValue('//form//div[1]//textarea')
            .setValue('//form//div[1]//textarea', 'Very important information')
            .waitForElementVisible('//me-event-candidates-form//button[text()="Save"]', 10000)
            .click('//me-event-candidates-form//button[text()="Save"]')
            .waitForElementVisible('//div[text()="Award saved successfully"]', 10000)
            .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]')
            .assert.valueContains('//form//div[1]//textarea', 'Very important information')
            .pause(1500);

    },
    'Enter Winners description ': function (browser) {
        browser
            .click('//button[text()="Winner"]')
            .waitForElementVisible('//*[contains(text(),"s description")]', 10000)
            .waitForElementVisible('//form//div[2]//textarea', 10000)
            .assert.cssProperty('//button[text()="Winner"]', 'background-color', 'rgba(108, 166, 50, 1)')
            .clearValue('//form//div[2]//textarea')
            .setValue('//form//div[2]//textarea', 'You are best of the best')
            .assert.valueContains('//form//div[2]//textarea', 'You are best of the best')
            .click('//me-event-candidates-form//button[text()="Save"]')
            .waitForElementVisible('//div[text()="Award saved successfully"]', 10000)
            .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]');


    },
    'refresh page and verify in introduction field': function (browser) {
        browser
            .refresh()
            .waitForElementVisible('//me-event-candidates-form//button[text()="Save"]', 20000)
            .moveToElement('//me-event-candidates-form//button[text()="Save"]', 100, 100)
            .waitForElementVisible('//form//div[1]//textarea', 10000)
            .assert.valueContains('//form//div[1]//textarea', 'Very important information')
            .waitForElementVisible('//form//div[2]//textarea', 10000)
            .assert.valueContains('//form//div[2]//textarea', 'You are best of the best')
            .pause(1500);

    },
    'click winners button again': function (browser) {
        browser
            .click('//button[text()="Winner"]')
            .pause(1000)
            .assert.elementNotPresent('//*[contains(text(),"s description")]', 10000)
            .assert.elementNotPresent('//form//div[2]//textarea', 10000)
            .assert.cssProperty('//button[text()="Winner"]', 'background-color', 'rgba(41, 115, 207, 1)')
            .pause(1500);

    },
    'change winners description': function (browser) {
        browser
            .click('//button[text()="Winner"]')
            .assert.cssProperty('//button[text()="Winner"]', 'background-color', 'rgba(108, 166, 50, 1)')
            .assert.valueContains('//form//div[1]//textarea', 'Very important information')
            .waitForElementVisible('//form//div[2]//textarea', 10000)
            .assert.valueContains('//form//div[2]//textarea', 'You are best of the best')
            .waitForElementVisible('//form//div[2]//textarea', 10000)
            .clearValue('//form//div[2]//textarea')
            .setValue('//form//div[2]//textarea', 'You are best of the best of the best')
            .click('//me-event-candidates-form//button[text()="Save"]')
            .waitForElementVisible('//div[text()="Award saved successfully"]', 10000)
            .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]')
            .assert.valueContains('//form//div[2]//textarea', 'You are best of the best of the best')
            .pause(1000)

    },
    'to return everything to its original position ': function (browser) {
        browser
            .click('//button[text()="Winner"]')
            .click('//me-event-candidates-form//button[text()="Save"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .useXpath()
            .waitForElementVisible('//div[text()="Award saved successfully"]', 10000);

    },


})
;