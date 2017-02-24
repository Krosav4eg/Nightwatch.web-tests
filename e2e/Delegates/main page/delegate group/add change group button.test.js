var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to delegates': function (browser) {
        browser
            .relUrl('/event/200/delegates')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'delegate was not chosen': function (browser) {
        browser
            .clickBySelectorXpath('//button[contains(text(),"Add/change group")]')
            .verify.elementPresent('//div[contains(text(),"You need chose Delegate first")]');
    },

    ' delegate was chosen': function (browser) {
        browser
            .clickBySelectorXpath('(//tr/td/input[@type="checkbox"])[1]')

            .clickBySelectorXpath('//button[contains(text(),"Add/change group")]')
            .verify.elementPresent('//h4[contains(text(),"Select group in which you want to add selected delegates")]')
            .verify.valueContains('//select[@formcontrolname="groupId"]', '')
            .verify.elementPresent('(//button[contains(text(),"Cancel")])[1]')
            .verify.elementPresent('(//button[contains(text(),"Add/change")])[1]');
    },

    'group 1 - orange was chosen': function (browser) {
        browser
            .clickBySelectorXpath('//option[contains(text(),"Group 1 - orange")]')
            .clickBySelectorXpath('(//button[contains(text(),"Add/change")])[2]')

            .verify.elementPresent('//div[contains(text(),"s group changed")]')
            .moveToElement('(//tr/th[12])[1]', 1340, 640)
            .verify.containsText('//tr[1]/td[12]/span', 'Group 1 - orange');
    },

    'group 2 - violet was chosen': function (browser) {
        browser
            .clickBySelectorXpath('(//tr/td/input[@type="checkbox"])[1]')
            .clickBySelectorXpath('(//tr/td/input[@type="checkbox"])[2]')
            .clickBySelectorXpath('//button[contains(text(),"Add/change group")]')

            .clickBySelectorXpath('//option[contains(text(),"Group 2 - violet")]')
            .clickBySelectorXpath('(//button[contains(text(),"Add/change")])[2]')
            .moveToElement('(//tr/th[12])[1]', 1340, 640)
            .verify.containsText('//tr[2]/td[12]/span', 'Group 2 - violet');
    },

    'change group 1': function (browser) {
        browser
            .clickBySelectorXpath('(//button[contains(text(), "Clear Selection")])')
            .clickBySelectorXpath('(//tr/td/input[@type="checkbox"])[1]')
            .clickBySelectorXpath('//button[contains(text(),"Add/change group")]')

            .clickBySelectorXpath('(//option[contains(text(),"Group 2 - violet")])')
            .clickBySelectorXpath('(//button[contains(text(),"Add/change")])[2]');
    },

    'change group 2': function (browser) {
        browser
            .clickBySelectorXpath('(//button[contains(text(), "Clear Selection")])[1]')
            .clickBySelectorXpath('(//tr/td/input[@type="checkbox"])[2]')
            .clickBySelectorXpath('//button[contains(text(),"Add/change group")]')

            .clickBySelectorXpath('(//option[contains(text(),"Group 1 - orange")])')
            .clickBySelectorXpath('(//button[contains(text(),"Add/change")])[2]')

            .moveToElement('(//tr/th[12])[1]', 1340, 640)
            .verify.containsText('//tr[1]/td[12]/span', 'Group 2 - violet')
            .verify.containsText('//tr[2]/td[12]/span', 'Group 1 - orange');
    },
});