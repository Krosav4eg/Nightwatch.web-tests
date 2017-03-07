var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/219/presentations')
    },

    'check event data': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h4[text()="Event (#219)"]', 3000)
    },

    'check information about speaker in the presentations page': function (browser) {
        browser
            .waitForElementVisible('//a[@href="/presentations/edit/1025"]', 3000)
            .verify.containsText("//tr[1]/td[2]/span", "Delegate")
            .verify.containsText("//tr[1]/td[3]/span/span", "Management Events")
            .verify.containsText("//tr[1]/td[4]/span", "Keynote")
            .verify.containsText("//tr[1]/td[7]/span/ul/li[1]", "Fachhochschule Kaiserslautern")
            .verify.containsText("//tr[1]/td[8]/span/ul/li[1]", "Speck")
            .verify.containsText("//tr[1]/td[9]/span/ul/li[1]", "Hendrik")
            .verify.containsText("//tr[1]/td[10]/span/ul/li[1]", "Professor")
            .verify.containsText("//tr[1]/td[11]/span/ul/li[1]", "hendrik.speck@fh-kl.de")
            .verify.containsText("//tr[1]/td[12]/span/ul/li[1]", "0176 2122 9880");
    },

    'check information about speaker in the edit presentation': function (browser) {
        browser
            .clickBySelectorXpath('//a[@href="/presentations/edit/1025"]')
            .verify.containsText("//tr[1]/td[2]/span", "Delegate")
            .verify.containsText("//tr[1]/td[3]/span", "Fachhochschule Kaiserslautern")
            .verify.containsText("//tr[1]/td[4]/span", "Speck")
            .verify.containsText("//tr[1]/td[5]/span", "Hendrik")
            .verify.containsText("//tr[1]/td[6]/span", "Prof.")
            .verify.containsText("//tr[1]/td[7]/span", "Professor")
            .verify.containsText("//tr[1]/td[8]/span", "hendrik.speck@fh-kl.de")
            .verify.containsText("//tr[1]/td[9]/span", "Delegate");

    },
    'add new speaker': function (browser) {
        browser
            .clickBySelectorXpath('//button[text()="Add speaker"]')
            .verify.elementPresent('//h4[text()="Attach Master Contact"]')
            .clickBySelectorXpath('//button[contains(text(),"Add new")]')

            .verify.elementPresent('//h4[text()="Master contact"]')
            .verify.elementPresent('//h4[text()="Add new guest speaker"]')
            .verify.elementPresent('//input[@id="lastName"]')
            .setValue('//input[@id="lastName"]', 'Sergey')
            .verify.elementPresent('//input[@id="firstName"]')
            .setValue('//input[@id="firstName"]', 'Potapoff')
            .verify.elementPresent('//input[@id="academicTitle"]')
            .setValue('//input[@id="academicTitle"]', 'Academic')
            .verify.elementPresent('//input[@id="functionTitle"]')
            .setValue('//input[@id="functionTitle"]', 'functionTitle')
            .verify.elementPresent('//input[@id="masterCompanyId"]')
            .setValue('//input[@id="masterCompanyId"]', 'Alex Toys')
            // .waitForElementVisible('//input[@id="country"]', 3000)
            .clickBySelectorXpath('//input[@id="country"]')
            .sendKeys('//input[@id="country"]', 'Ukraine')
            .pause(3000)
            .clickBySelectorXpath('//*[contains(text(),"Ukraine")]')
            .pause(3000)

            .waitForElementVisible('//input[@id="mobile"]', 3000)
            .setValue('//input[@id="mobile"]', '0978544488')
            .waitForElementVisible('//input[@id="email"]', 3000)
            .setValue('//input[@id="email"]', 'Sergey_Potapof@mail.ru')
            .pause(2000)
            .click('(//button[contains(text(),"Save")])[2]')
            .pause(7000)
            .refresh()
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'new speaker has been successfully added': function (browser) {
        browser
            .useXpath()
            .verify.containsText('//tr[2]/td[2]/span', 'Guest Speaker')
            .verify.containsText('//tr[2]/td[3]/span', '')
            .verify.elementPresent('//tr[2]/td[4]/span', 'Sergey')
            .verify.containsText('//tr[2]/td[5]/span', 'Potapoff')
            .verify.containsText('//tr[2]/td[6]/span', 'Academic')
            .verify.containsText('//tr[2]/td[7]/span', 'functionTitle')
            .verify.containsText('//tr[2]/td[8]/span', 'Sergey_Potapof@mail.ru')
            .verify.containsText('//tr[2]/td[9]/span', 'Delegate')

            .clickBySelectorXpath('//tr[2]/td[10]/span/button[@class="btn btn-danger"]')

            .verify.elementPresent('//h4[contains(text(),"Confirmation")]')
            .verify.elementPresent('//modal-content[contains(text(),"Are you sure you want to delete the speaker?")]')
            .clickBySelectorXpath('//button[@data-marker="me-confirm__button__button__yes"]')

            .verify.elementNotPresent('//tr[2]');

    },

});