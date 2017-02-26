var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');


module.exports = _.assign(presteps, auth, {

    // 'redirection to participant-roles': function (browser) {
    //     browser
    //         .relUrl('/event/1482/event-participant-roles')
    //         .waitForElementVisible('#thisIsMainLoader', 100000)
    //         .waitForElementNotVisible('#thisIsMainLoader', 100000);
    // },
    //
    // 'add new role': function (browser) {
    //     browser
    //         .addNewRole("Alveid");
    // },

    'redirection to awards': function (browser) {
        browser
            .relUrl('/event/1482/awards')
    },

    'awards functionality': function (browser) {
        browser
            .setValueByCss('input[formcontrolname="awardTitleEnglish"]', "Test awardTitleEnglish")
            .setValueByCss('input[formcontrolname="awardTitleLocal"]', "Test awardTitleLocal")
            .setValueByCss('input[formcontrolname="awardTitleEnglish"]', "Test awardTitleEnglish")
            .clickBySelectorXpath('//*[@id="1"]')
            .clickBySelectorXpath('//label[text()="On"]')
            .clickBySelectorXpath('//*[text()="Awards"]/../..//button[text()="Save"]')
            .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]')

            // .verify.containsText('//div[@class="toast-title"]', 'Success')
            // .verify.containsText('//div[@class="toast-message"]', 'Award save')
            // .clickBySelectorXpath('//div[@class="toast-content"]')

            .verify.valueContains('//input[@formcontrolname="awardTitleLocal"]', 'Test awardTitleLocal')
            .verify.valueContains('//input[@formcontrolname="awardTitleEnglish"]', 'Test awardTitleEnglish')
            .verify.containsText('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified by:")]/../div[2]', 'Xsolve Test User');
    },

    'change Award Click on "Off" switcher': function (browser) {
        browser
            .setValueByCss('input[formcontrolname="awardTitleLocal"]', "Test awardTitleLocal 2")
            .clickBySelectorXpath('//label[text()="Off"]')
            .clickBySelectorXpath('//*[text()="Awards"]/../..//button[text()="Save"]')
            .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]')

            // .waitForElementVisible('//div[@class="toast-content"]', 10000)
            // .verify.containsText('//div[@class="toast-title"]', 'Success')
            // .verify.containsText('//div[@class="toast-message"]', 'Award save')
            // .clickBySelectorXpath('//div[@class="toast-content"]')

            .verify.valueContains('//input[@formcontrolname="awardTitleLocal"]', 'Test awardTitleLocal 2')
            .verify.elementNotPresent('//*[text()="Candidates"]/../..//*[text()="Candidate 1"]')
            .verify.cssProperty('//*[@class="btn ng-untouched ng-pristine ng-valid btn-danger"]', 'background-color', 'rgba(231, 60, 60, 1)');
    },

    'click on "On" switcher ': function (browser) {
        browser
            .clickBySelectorXpath('//label[text()="On"]')
            .clickBySelectorXpath('//*[text()="Awards"]/../..//button[text()="Save"]')

            .verify.containsText('//*[text()="Candidates"]/../..', "Candidate 1")
            .verify.cssProperty('//*[@class="btn ng-untouched ng-pristine ng-valid btn-primary"]', 'background-color', 'rgba(79, 142, 220, 1)');
    },

    'redirection to role': function (browser) {
        browser
            .clickBySelectorXpath('(//a[@id="EventRoleStatsIndex"])[2]')
    },

    'delete role': function (browser) {
        browser
            .deleteRole("Awards candidate");
    },
});
