var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to awards': function (browser) {
        browser
            .relUrl('/event/1502/awards')
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
    // 'select company radio button ': function (browser) {
    //     browser
    //         .click('//input[@id=2]')
    //         .click('//label[@btnradio="1"]')
    //         .click('//button[@type="submit"]')
    //         .useCss()
    //         .waitForElementVisible('#thisIsMainLoader', 10000)
    //         .waitForElementNotVisible('#thisIsMainLoader', 10000)
    //         .useXpath()
    //         .waitForElementVisible('//div[text()="Award saved successfully"]', 10000)
    //         .waitForElementVisible('//button[text()="Add a new candidate"]', 10000);
    //
    // },
    //
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
    'click on casterContact ID': function (browser) {
        browser
            .waitForElementVisible('//a[@href="http://alpha.ew.managementevents.com/EW/MasterCompany/cruII/id/100014"]', 10000)
            .click('//a[@href="http://alpha.ew.managementevents.com/EW/MasterCompany/cruII/id/100014"]')

    },

    'check contact information': function (browser) {
        browser
            .closeWindow()
            .window_handles(function (result) {
                var handle = result.value[0];
                browser.switchWindow(handle)
                    .waitForElementVisible('//h4[text()="Company  - UNiQUARE Software Development GmbH (#100014)"]', 30000)
                    .useCss()
                    .assert.valueContains('#MasterCompany_Name', 'UNiQUARE Software Development GmbH')
                    .assert.valueContains('#MasterCompany_Country', 'AUSTRIA')
                    .relUrl('/event/1502/awards')
                    .waitForElementVisible('#thisIsMainLoader', 10000)
                    .waitForElementNotVisible('#thisIsMainLoader', 10000);
            })
    },
    'back to the awards page': function (browser) {
        browser
            .relUrl('/event/1502/awards')
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .useXpath()
            .waitForElementVisible('//h4[text()="Event (#1502)"]', 10000);

    },
    'enter introduction': function (browser) {
        browser
            .moveToElement('//me-event-candidates-form//button[text()="Save"]', 100, 100)
            .waitForElementVisible('//textarea', 10000)
            .clearValue('//textarea')
            .setValue('//textarea','Very important information')
            .waitForElementVisible('//me-event-candidates-form//button[text()="Save"]', 10000)
            .click('//me-event-candidates-form//button[text()="Save"]')
            .waitForElementVisible('//div[text()="Award saved successfully"]', 10000)
            .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]')
            .assert.valueContains('//textarea', 'Very important information');

    },
    'refresh page and verify in introduction field': function (browser) {
        browser
            .refresh()
            .waitForElementVisible('//me-event-candidates-form//button[text()="Save"]', 20000)
            .moveToElement('//me-event-candidates-form//button[text()="Save"]', 100, 100)
            .waitForElementVisible('//textarea', 10000)
            .assert.valueContains('//textarea', 'Very important information');

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
            .assert.elementNotPresent('//h3[text()="Candidate 1"]');

    },


})
;