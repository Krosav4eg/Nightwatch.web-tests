var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/speakers')
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
    'select receivers ': function (browser) {
        browser
            .waitForElementVisible('//thead/tr[1]/th[1]', 3000)
            .click('//thead/tr[1]/th[1]')
    },

    'template blank template': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//a[text()="Send email"]', 3000)
            .click('//a[text()="Send email"]')
            .waitForElementVisible('//h4[text()="Select email template"]', 3000)
            .waitForElementVisible('//modal[@class="modal fade in"]//option[1]', 3000)
            .click('//modal[@class="modal fade in"]//option[1]')
            .assert.elementPresent('//div[text()="         Template:       "]')
            .assert.elementPresent('//div[text()="           From Email:         "]')
            .assert.elementPresent('//me-cms-content-select-list/div[@class="row"]/div[1][@class="col-sm-12"]/div[2]/div[1]/div[2]/input[@disabled]')
            .assert.valueContains('//me-cms-content-select-list/div[@class="row"]/div[1][@class="col-sm-12"]/div[2]/div[1]/div[2]/input[@disabled]', '')
            .assert.elementPresent('//div[text()="           From Name:         "]')
            .assert.elementPresent('//me-cms-content-select-list/div[@class="row"]/div[1][@class="col-sm-12"]/div[2]/div[2]/div[2]/input[@disabled]')
            .assert.valueContains('//me-cms-content-select-list/div[@class="row"]/div[1][@class="col-sm-12"]/div[2]/div[2]/div[2]/input[@disabled]', '')
            .assert.elementPresent('//div[text()="           Reply-To Email:         "]')
            .assert.elementPresent('//me-cms-content-select-list/div[@class="row"]/div[1][@class="col-sm-12"]/div[2]/div[3]/div[2]/input[@disabled]')
            .assert.valueContains('//me-cms-content-select-list/div[@class="row"]/div[1][@class="col-sm-12"]/div[2]/div[3]/div[2]/input[@disabled]', '')
            .assert.elementPresent('//div[text()="           Subject:         "]')
            .assert.elementPresent('//me-cms-content-select-list/div[@class="row"]/div[1][@class="col-sm-12"]/div[2]/div[4]/div[2]/input[@disabled]')
            .assert.valueContains('//me-cms-content-select-list/div[@class="row"]/div[1][@class="col-sm-12"]/div[2]/div[4]/div[2]/input[@disabled]', '')
            .assert.elementPresent('//button[text()="Cancel"]')
            .assert.elementPresent('//button[text()="Send Email"]');
    },
    'template is selected': function (browser) {
        browser
            .waitForElementVisible('//modal[@class="modal fade in"]//option[@value="310"]', 3000)
            .click('//modal[@class="modal fade in"]//option[@value="310"]')
            .waitForElementVisible('//me-cms-content-select-list/div[@class="row"]/div[1][@class="col-sm-12"]/div[2]/div[1]/div[2]/input[@disabled]', 5000)
            .assert.valueContains('//me-cms-content-select-list/div[@class="row"]/div[1][@class="col-sm-12"]/div[2]/div[1]/div[2]/input[@disabled]', 'gbhn@nam.com')
            .assert.elementPresent('//div[text()="           From Name:         "]')
            .assert.elementPresent('//me-cms-content-select-list/div[@class="row"]/div[1][@class="col-sm-12"]/div[2]/div[2]/div[2]/input[@disabled]')
            .assert.valueContains('//me-cms-content-select-list/div[@class="row"]/div[1][@class="col-sm-12"]/div[2]/div[2]/div[2]/input[@disabled]', 'Kate')
            .assert.elementPresent('//div[text()="           Reply-To Email:         "]')
            .assert.elementPresent('//me-cms-content-select-list/div[@class="row"]/div[1][@class="col-sm-12"]/div[2]/div[3]/div[2]/input[@disabled]')
            .assert.valueContains('//me-cms-content-select-list/div[@class="row"]/div[1][@class="col-sm-12"]/div[2]/div[3]/div[2]/input[@disabled]', 'frerfgb@mail.com')
            .assert.elementPresent('//div[text()="           Subject:         "]')
            .assert.elementPresent('//me-cms-content-select-list/div[@class="row"]/div[1][@class="col-sm-12"]/div[2]/div[4]/div[2]/input[@disabled]')
            .assert.valueContains('//me-cms-content-select-list/div[@class="row"]/div[1][@class="col-sm-12"]/div[2]/div[4]/div[2]/input[@disabled]', 'resttgytygh')
            .assert.elementPresent('//p[text()="rgfiugnjitgyhtyh"]')
            .assert.elementPresent('//button[text()="Cancel"]')
            .assert.elementPresent('//button[text()="Send Email"]')
            .click('//button[text()="Send Email"]')
            .waitForElementVisible('//div[text()="The email template was sent successfully."]',4000);
    },

    'check edit email template ': function (browser) {
        browser
            .relUrl('/email-templates/edit/310')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .assert.valueContains('//input[@ngcontrol="name"]', 'Testyhh')
            .assert.valueContains('//input[@ngcontrol="fromEmail"]', 'gbhn@nam.com')
            .assert.valueContains('//input[@ngcontrol="fromName"]', 'Kate')
            .assert.valueContains('//input[@ngcontrol="replyToEmail"]', 'frerfgb@mail.com')
            .assert.valueContains('//select[@ngcontrol="recipientType"]', '17')
            .assert.valueContains('//input[@ngcontrol="contentSubject"]', 'resttgytygh');

    },
});