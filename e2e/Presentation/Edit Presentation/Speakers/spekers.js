var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {
    '@disabled': true,
    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },
    'check event data': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h4[text()="Event (#212)"]', 3000)
            .assert.elementPresent('//h3[text()="IndustryForum Energy"]')
            .assert.elementPresent('//div[text()="Local name: StrategyCircle Energie"]')
            .assert.elementPresent('//div[text()="Dates: 2012-05-09 08:00:00 - 2012-05-10 18:00:00"]')
            .assert.elementPresent('//div[text()="Venue: , "]');
    },
    'check information about speaker in the presentations page': function (browser) {
        browser
            .waitForElementVisible('//a[@href="/presentations/edit/3696"]', 3000)
            .waitForElementVisible('//tr[1]/td[2]/span[text()="         Delegate       "]', 3000)
            .waitForElementVisible('//tr[1]/td[3]/span/span[text()="           Management Events         "]', 3000)
            .waitForElementVisible('//tr[1]/td[4]/span[text()="         Panel discussion       "]', 3000)
            .waitForElementVisible('//tr[1]/td[5]/span/div[text()="           Heading           "]', 3000)
            .waitForElementVisible('//tr[1]/td[5]/span/div[text()="           Heading           "]/ul/li[1]/span[text()="                 Sub heading 1                "]', 30000)
            .waitForElementVisible('//tr[1]/td[5]/span/div[text()="           Heading           "]/ul/li[2]/span[text()="                 Sub heading 2               "]', 30000)
            .waitForElementVisible('//tr[1]/td[5]/span/div[text()="           Heading           "]/ul/li[3]/span[text()="                 Sub heading 3               "]', 30000)
            .waitForElementVisible('//tr[1]/td[7]/span/ul/li[1][text()="             Mainova AG           "]', 3000)
            .waitForElementVisible('//tr[1]/td[7]/span/ul/li[2][text()="             :em engineering methods AG           "]', 3000)
            .waitForElementVisible('//tr[1]/td[8]/span/ul/li[2][text()="             Nikolay           "]', 3000)
            .waitForElementVisible('//tr[1]/td[9]/span/ul/li[2][text()="             Hodosov           "]', 3000)
            .waitForElementVisible('//tr[1]/td[9]/span/ul/li[1][text()="             Philipp           "]', 3000)
            .waitForElementVisible('//tr[1]/td[10]/span/ul/li[1][text()="             Bereichsleiter IT           "]', 3000)
            .waitForElementVisible('//tr[1]/td[10]/span/ul/li[2][text()="             Function Title           "]', 3000)
            .waitForElementVisible('//tr[1]/td[11]/span/ul/li[1][text()="             p.luebcke@mainova.de           "]', 3000)
            .waitForElementVisible('//tr[1]/td[11]/span/ul/li[2][text()="             go@go.go           "]', 3000)
            .waitForElementVisible('//tr[1]/td[12]/span/ul/li[1][text()="             +49151 46756613           "]', 3000)
            .waitForElementVisible('//tr[1]/td[12]/span/ul/li[2][text()="             4790992788           "]', 3000);

    },
    'check information about speaker in the edit presentation (#3696)': function (browser) {
        browser
            .click('//a[@href="/presentations/edit/3696"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h1[text()="Edit Presentation (#3696)"]', 3000)
            .waitForElementVisible('//a[@href="/presentations/3696/master-contact/416319"]', 3000)
            .waitForElementVisible('//a[@href="/presentations/3696/master-contact/492275"]', 3000)
            .waitForElementVisible('//tr[1]/td[2]/span[text()="       Delegate     "]', 3000)
            .waitForElementVisible('//tr[2]/td[2]/span[text()="       Guest Speaker     "]', 3000)
            .waitForElementVisible('//tr[1]/td[3]/span[text()="       Mainova AG     "]', 3000)
            .waitForElementVisible('//tr[2]/td[3]/span[text()="       :em engineering methods AG     "]', 3000)
            .waitForElementVisible('//tr[1]/td[4]/span[text()="       Lübcke     "]', 3000)
            .waitForElementVisible('//tr[2]/td[4]/span[text()="       Nikolay     "]', 3000)
            .waitForElementVisible('//tr[1]/td[5]/span[text()="       Philipp     "]', 3000)
            .waitForElementVisible('//tr[2]/td[5]/span[text()="       Hodosov     "]', 3000)
            .waitForElementVisible('//tr[2]/td[6]/span[text()="       Academic Title     "]', 3000)
            .waitForElementVisible('//tr[1]/td[7]/span[text()="       Bereichsleiter IT     "]', 3000)
            .waitForElementVisible('//tr[2]/td[7]/span[text()="       Function Title     "]', 3000)
            .waitForElementVisible('//tr[1]/td[8]/span[text()="       p.luebcke@mainova.de     "]', 3000)
            .waitForElementVisible('//tr[2]/td[8]/span[text()="       go@go.go     "]', 3000)
            .waitForElementVisible('//tr[1]/td[9]/span[text()="       Delegate     "]', 3000)
            .waitForElementVisible('//tr[2]/td[9]/span[text()="       Delegate     "]', 3000)
            .waitForElementVisible('//tr[3]/td[9]/span[text()="       Delegate     "]', 3000)
            .waitForElementVisible('//tr[2]/td[10]/span/button[@class="btn btn-danger"]', 3000)
            .waitForElementVisible('//tr[3]/td[10]/span/button[@class="btn btn-danger"]', 3000);

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
    //         .assert.elementNotPresent('//h4[text()="Attach Master Contact"]');
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