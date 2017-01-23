var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to awards': function (browser) {
        browser
            .relUrl('/event/1606/awards')
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
    'Awards table click on Save button without data entering.': function (browser) {
        browser
            .click('//button[@type="submit"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//div[text()="Award saved successfully"]', 30000)

    },

    'Enter Awards title local: "The best of the best"': function (browser) {
        browser
            .waitForElementVisible('//div[1]/div/input[1][@type="text"]', 30000)
            .clearValue('//div[1]/div/input[1][@type="text"]')
            .setValue('//div[1]/div/input[1][@type="text"]', 'The best of the best')
            .pause(1000)
            .verify.valueContains('//div[1]/div/input[1][@type="text"]', 'The best of the best')
            .pause(1000)
    },
    'Enter too long Awards title local': function (browser) {
        browser
            .clearValue('//div[1]/div/input[1][@type="text"]')
            .setValue('//div[1]/div/input[1][@type="text"]', 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq')
            .pause(1000)
            .verify.valueContains('//div[1]/div/input[1][@type="text"]', 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq')
            .pause(1000)

    },
    'Enter Award title English': function (browser) {
        browser
            .waitForElementVisible('//div[2]/div/input[1][@type="text"]', 30000)
            .clearValue('//div[2]/div/input[1][@type="text"]')
            .setValue('//div[2]/div/input[1][@type="text"]', 'The best of the best 2')
            .pause(1000)
            .verify.valueContains('//div[2]/div/input[1][@type="text"]', 'The best of the best 2')
            .pause(1000)


    },
    'Enter too long Award title English': function (browser) {
        browser
            .waitForElementVisible('//div[2]/div/input[1][@type="text"]', 30000)
            .clearValue('//div[2]/div/input[1][@type="text"]')
            .setValue('//div[2]/div/input[1][@type="text"]', 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq')
            .pause(1000)
            .verify.valueContains('//div[2]/div/input[1][@type="text"]', 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq')
            .pause(1000)


    },

    'Choose "Project" Candidate type': function (browser) {
        browser
            .waitForElementVisible('//input[@id=3]', 30000)
            .click('//input[@id=3]')
    },
    'Status swither by default': function (browser) {
        browser
            .waitForElementVisible('//label[@btnradio="0"]', 30000)
            .verify.cssProperty('//label[@btnradio="0"]', 'background-color', 'rgba(231, 60, 60, 1)')
            .pause(1000)

    },
    'status switcher is on': function (browser) {
        browser
            .waitForElementVisible('//label[@btnradio="1"]', 30000)
            .click('//label[@btnradio="1"]')
            .verify.cssProperty('//label[@btnradio="1"]', 'background-color', 'rgba(41, 115, 207, 1)')
            .pause(1000)

    },
    'click Save button ': function (browser) {
        browser
            .waitForElementVisible('//button[text()="Save"]', 30000)
            .click('//button[text()="Save"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//div[text()="Award saved successfully"]', 30000)
            .waitForElementVisible('//button[text()="Add a new candidate"]', 30000)
            .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]')
            .pause(1000);

    },
    'to return everything to its original position ': function (browser) {
        browser
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