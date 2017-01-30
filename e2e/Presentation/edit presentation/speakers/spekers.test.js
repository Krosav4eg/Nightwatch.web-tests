var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/219/presentations')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
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

    'check information about speaker in the edit presentation (#3696)': function (browser) {
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
    // 'add new speaker': function (browser) {
    //     browser
    //         .waitForElementVisible('//button[text()="Add speaker"]', 3000)
    //         .click('//button[text()="Add speaker"]')
    //         .waitForElementVisible('//h4[text()="Attach Master Contact"]', 3000)
    //         .waitForElementVisible('//button[2][text()="           Add new         "]', 3000)
    //         .click('//button[2][text()="           Add new         "]')
    //         .waitForElementVisible('//h4[text()="Master contact"]',3000)
    //         .waitForElementVisible('//h4[text()="Add new guest speaker"]',3000)
    //         .waitForElementVisible('//input[@id="lastName"]',3000)
    //         .setValue('//input[@id="lastName"]','Sergey')
    //         .waitForElementVisible('//input[@id="firstName"]',3000)
    //         .setValue('//input[@id="firstName"]','Potapoff')
    //         .waitForElementVisible('//input[@id="academicTitle"]',3000)
    //         .setValue('//input[@id="academicTitle"]','Academic')
    //         .waitForElementVisible('//input[@id="functionTitle"]',3000)
    //         .setValue('//input[@id="functionTitle"]','functionTitle')
    //         .waitForElementVisible('//input[@id="masterCompanyId"]',3000)
    //         .setValue('//input[@id="masterCompanyId"]','Telenor ASA [Norway]')
    //         .waitForElementVisible('//input[@id="country"]',3000)
    //         .setValue('//input[@id="country"]','')
    //         .pause(2000)
    //         .setValue('//input[@id="country"]', ['Ukraine', browser.Keys.ENTER])
    //         .waitForElementVisible('//input[@id="mobile"]',3000)
    //         .setValue('//input[@id="mobile"]','0978544488')
    //         .waitForElementVisible('//input[@id="email"]',3000)
    //         .setValue('//input[@id="email"]','Sergey_Potapof@mail.ru')
    //         .waitForElementVisible('//modal[@class="modal fade in"]//button[1][text()="Save"]',3000)
    //         .click('//modal[@class="modal fade in"]//button[1][text()="Save"]')
    //         .useCss()
    //         .waitForElementVisible('#thisIsMainLoader', 30000)
    //         .waitForElementNotVisible('#thisIsMainLoader', 30000)
    //         .useXpath()
    //         .waitForElementVisible('//modal[@class="modal fade in"]//button[3][text()="           Close         "]', 3000)
    //         .click('//modal[@class="modal fade in"]//button[3][text()="           Close         "]')
    //         .pause(1500)
    //         .verify.elementNotPresent('//h4[text()="Attach Master Contact"]');
    //
    //
    // },
    // 'new speaker has been successfully added': function (browser) {
    //     browser
    //         .waitForElementVisible('//tr[4]/td[2]/span[text()="       Guest Speaker     "]', 3000)
    //         .waitForElementVisible('//tr[4]/td[3]/span[text()="       Telenor ASA     "]', 3000)
    //         .waitForElementVisible('//tr[4]/td[4]/span[text()="       Sergey     "]', 3000)
    //         .waitForElementVisible('//tr[4]/td[5]/span[text()="       Potapoff     "]', 3000)
    //         .waitForElementVisible('//tr[4]/td[6]/span[text()="       Academic      "]', 3000)
    //         .waitForElementVisible('//tr[4]/td[7]/span[text()="       Function      "]', 3000)
    //         .waitForElementVisible('//tr[4]/td[8]/span[text()="       Sergey_Potapof@mail.ru     "]', 3000)
    //         .waitForElementVisible('//tr[4]/td[9]/span[text()="       Delegate     "]', 3000)
    //         .waitForElementVisible('//tr[4]/td[10]/span/button[@class="btn btn-danger"]', 3000);
    //
    //
    // },

});