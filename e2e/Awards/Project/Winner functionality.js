var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to awards': function (browser) {
        browser
            .relUrl('/event/1600/awards')
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
    'select project radio button ': function (browser) {
        browser
            .click('//input[@id=3]')
            .click('//label[@btnradio="1"]')
            .click('//button[@type="submit"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .useXpath()
            .waitForElementVisible('//div[text()="Award saved successfully"]', 10000)
            .waitForElementVisible('//button[text()="Add a new candidate"]', 10000);

    },

    'add candidate 1': function (browser) {
        browser
            .click('//button[text()="Add a new candidate"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .useXpath()
            .waitForElementVisible('//h3[text()="Candidate 1"]', 10000)
            .waitForElementVisible('//label[text()="Project local name "]', 10000)
            .waitForElementVisible('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="localName"]', 10000)
            .clearValue('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="localName"]')
            .setValue('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="localName"]', 'Тестовый проект')
            .waitForElementVisible('//label[text()="Project English name "]', 10000)
            .waitForElementVisible('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="englishName"]', 10000)
            .clearValue('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="englishName"]')
            .setValue('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="englishName"]', 'Test Project')
            .waitForElementVisible('//label[text()="Country "]', 10000)
            .waitForElementVisible('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="country"]', 10000)
            .click('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="country"]')
            .useCss()
            .setValue('.auto-complete input', "Ukraine")
            .pause(3000)
            .useXpath()
            .click('//*[contains(text(),"Ukraine")]')
            .pause(3000)
            .click('//*[text()="Candidate 1"]/../../../../../..//button[text()="Save"]')
            .pause(3000)

    },
    'add candidate 2': function (browser) {
        browser
            .click('//button[text()="Add a new candidate"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .useXpath()
            .waitForElementVisible('//h3[text()="Candidate 2"]', 10000)
            .waitForElementVisible('//label[text()="Project local name "]', 10000)
            .waitForElementVisible('//*[text()="Candidate 2"]/../../../..//input[@ngcontrol="localName"]', 10000)
            .clearValue('//*[text()="Candidate 2"]/../../../..//input[@ngcontrol="localName"]')
            .setValue('//*[text()="Candidate 2"]/../../../..//input[@ngcontrol="localName"]', 'Тестовый проект_2')
            .waitForElementVisible('//label[text()="Project English name "]', 10000)
            .waitForElementVisible('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="englishName"]', 10000)
            .clearValue('//*[text()="Candidate 2"]/../../../..//input[@ngcontrol="englishName"]')
            .setValue('//*[text()="Candidate 2"]/../../../..//input[@ngcontrol="englishName"]', 'Test Project_2')
            .waitForElementVisible('//label[text()="Country "]', 10000)
            .waitForElementVisible('//*[text()="Candidate 2"]/../../../..//input[@ngcontrol="country"]', 10000)
            .click('//*[text()="Candidate 2"]/../../../..//input[@ngcontrol="country"]')
            .useCss()
            .setValue('.auto-complete input', "Russia")
            .pause(3000)
            .useXpath()
            .click('//*[contains(text(),"Russia")]')
            .pause(3000)
            .click('//*[text()="Candidate 2"]/../../../../../..//button[text()="Save"]')
            .pause(3000)
    },


    'click on winner button in Candidate 1 ': function (browser) {
        browser
            .moveToElement('//*[text()="Candidate 1"]/../../../../../..//button[text()="Winner"]', 30, 30)
            .click('//*[text()="Candidate 1"]/../../../../../..//button[text()="Winner"]')
            .verify.cssProperty('//button[text()="Winner"]', 'background-color', 'rgba(108, 166, 50, 1)')
            .waitForElementVisible('//*[text()="Candidate 1"]/../../../../../..//textarea[@ngcontrol="winnerDescription"]', 10000);
    },

    'click Save button ': function (browser) {
        browser
            .waitForElementVisible('//*[text()="Candidate 1"]/../../../../../..//button[text()="Save"]', 10000)
            .click('//*[text()="Candidate 1"]/../../../../../..//button[text()="Save"]')
            .waitForElementVisible('//div[text()="Award saved successfully"]', 10000);

    },

    'enter winners description ': function (browser) {
        browser
            .clearValue('//*[text()="Candidate 1"]/../../../../../..//textarea[@ngcontrol="winnerDescription"]')
            .setValue('//*[text()="Candidate 1"]/../../../../../..//textarea[@ngcontrol="winnerDescription"]','test winner description')
            .waitForElementVisible('//*[text()="Candidate 1"]/../../../../../..//button[text()="Save"]', 10000)
            .click('//*[text()="Candidate 1"]/../../../../../..//button[text()="Save"]')
            .waitForElementVisible('//div[text()="Award saved successfully"]', 10000)
            .verify.valueContains('//*[text()="Candidate 1"]/../../../../../..//textarea[@ngcontrol="winnerDescription"]','test winner description');


    },
    // 'click winners button again': function (browser) {
    //     browser
    //         .click('//button[text()="Winner"]')
    //         .pause(1000)
    //         .assert.elementNotPresent('//*[contains(text(),"s description")]', 10000)
    //         .assert.elementNotPresent('//form//div[2]//textarea', 10000)
    //         .assert.cssProperty('//button[text()="Winner"]', 'background-color', 'rgba(41, 115, 207, 1)')
    //         .pause(1500);
    //
    // },
    // 'change winners description': function (browser) {
    //     browser
    //         .click('//button[text()="Winner"]')
    //         .assert.cssProperty('//button[text()="Winner"]', 'background-color', 'rgba(108, 166, 50, 1)')
    //         .assert.valueContains('//form//div[1]//textarea', 'Very important information')
    //         .waitForElementVisible('//form//div[2]//textarea', 10000)
    //         .assert.valueContains('//form//div[2]//textarea', 'You are best of the best')
    //         .waitForElementVisible('//form//div[2]//textarea', 10000)
    //         .clearValue('//form//div[2]//textarea')
    //         .setValue('//form//div[2]//textarea', 'You are best of the best of the best')
    //         .click('//me-event-candidates-form//button[text()="Save"]')
    //         .waitForElementVisible('//div[text()="Award saved successfully"]', 10000)
    //         .assert.valueContains('//form//div[2]//textarea', 'You are best of the best of the best')
    //         .pause(1000)
    //
    // },
    // 'to return everything to its original position ': function (browser) {
    //     browser
    //         .click('//button[text()="Winner"]')
    //         .click('//me-event-candidates-form//button[text()="Save"]')
    //         .useCss()
    //         .waitForElementVisible('#thisIsMainLoader', 10000)
    //         .waitForElementNotVisible('#thisIsMainLoader', 10000)
    //         .useXpath()
    //         .waitForElementVisible('//div[text()="Award saved successfully"]', 10000);
    //
    // },


})
;