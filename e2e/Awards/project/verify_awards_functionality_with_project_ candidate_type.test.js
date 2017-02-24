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

    'awards table click on Save button without data entering.': function (browser) {
        browser
            .clickBySelectorXpath('//button[@type="submit"]')
            .waitForElementVisible('//div[text()="Award saved successfully"]', 30000);
    },

    'enter awards title local: "The best of the best"': function (browser) {
        browser
            .setValueByXpath('//div[1]/div/input[1][@type="text"]', 'The best of the best')
            .verify.valueContains('//div[1]/div/input[1][@type="text"]', 'The best of the best')
    },

    'enter too long awards title local': function (browser) {
        browser
            .setValueByXpath('//div[1]/div/input[1][@type="text"]', 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq')
            .verify.valueContains('//div[1]/div/input[1][@type="text"]', 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq')
    },

    'enter award title english': function (browser) {
        browser
            .setValueByXpath('//div[2]/div/input[1][@type="text"]', 'The best of the best 2')
            .verify.valueContains('//div[2]/div/input[1][@type="text"]', 'The best of the best 2')
    },

    'enter too long award title english': function (browser) {
        browser
            .setValueByXpath('//div[2]/div/input[1][@type="text"]', 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq')
            .verify.valueContains('//div[2]/div/input[1][@type="text"]', 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq')
    },

    'choose "Project" candidate type': function (browser) {
        browser
            .clickBySelectorXpath('//radio-item[@id=3]');
    },

    'status swither by default': function (browser) {
        browser
            .waitForElementVisible('//label[@btnradio="0"]', 30000)
            .verify.cssProperty('//label[@btnradio="0"]', 'background-color', 'rgba(231, 60, 60, 1)')
    },

    'status switcher is on': function (browser) {
        browser
            .clickBySelectorXpath('//label[@btnradio="1"]')
            .verify.cssProperty('//label[@btnradio="1"]', 'background-color', 'rgba(41, 115, 207, 1)')
    },

    'click Save button ': function (browser) {
        browser
            .clickBySelectorXpath('//button[text()="Save"]')
            .waitForElementVisible('//div[text()="Award saved successfully"]', 30000)
            .waitForElementVisible('//button[text()="Add a new candidate"]', 30000)
            .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]')
    },

    'to return everything to its original position ': function (browser) {
        browser
            .clickBySelectorXpath('//label[@btnradio="0"]')
            .clickBySelectorXpath('//button[text()="Save"]')
            .waitForElementVisible('//div[text()="Award saved successfully"]', 20000)
            .verify.cssProperty('//label[@btnradio="0"]', 'background-color', 'rgba(231, 60, 60, 1)');
    },
});
