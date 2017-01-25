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
            .verify.elementPresent('//h3[text()="IndustryForum Energy"]')
            .verify.elementPresent('//div[text()="Local name: StrategyCircle Energie"]')
            .verify.elementPresent('//div[text()="Dates: 2012-05-09 08:00:00 - 2012-05-10 18:00:00"]')
            .verify.elementPresent('//div[text()="Venue: , "]');
    },

    'select receivers ': function (browser) {
        browser
            .clickBySelectorXpath('//thead/tr[1]/th[1]')
    },

    'template blank template': function (browser) {
        browser
            .clickBySelectorXpath('//a[text()="Send email"]')
            .waitForElementVisible('//h4[text()="Select email template"]', 3000)
            .clickBySelectorXpath('//modal[@class="modal fade in"]//option[1]')

            .verify.elementPresent('//div[contains(text(),"Template:")]')
            .verify.elementPresent('//div[contains(text(),"From Email:")]')
            .verify.elementPresent('//me-cms-content-select-list/div[@class="row"]/div[1][@class="col-sm-12"]/div[2]/div[1]/div[2]/input[@disabled]')
            .verify.valueContains('//me-cms-content-select-list/div[@class="row"]/div[1][@class="col-sm-12"]/div[2]/div[1]/div[2]/input[@disabled]', '')
            .verify.elementPresent('//div[contains(text(),"From Name:")]')
            .verify.elementPresent('//me-cms-content-select-list/div[@class="row"]/div[1][@class="col-sm-12"]/div[2]/div[2]/div[2]/input[@disabled]')
            .verify.valueContains('//me-cms-content-select-list/div[@class="row"]/div[1][@class="col-sm-12"]/div[2]/div[2]/div[2]/input[@disabled]', '')
            .verify.elementPresent('//div[contains(text(),"Reply-To Email:")]')
            .verify.elementPresent('//me-cms-content-select-list/div[@class="row"]/div[1][@class="col-sm-12"]/div[2]/div[3]/div[2]/input[@disabled]')
            .verify.valueContains('//me-cms-content-select-list/div[@class="row"]/div[1][@class="col-sm-12"]/div[2]/div[3]/div[2]/input[@disabled]', '')
            .verify.elementPresent('//div[contains(text(),"Subject:")]')
            .verify.elementPresent('//me-cms-content-select-list/div[@class="row"]/div[1][@class="col-sm-12"]/div[2]/div[4]/div[2]/input[@disabled]')
            .verify.valueContains('//me-cms-content-select-list/div[@class="row"]/div[1][@class="col-sm-12"]/div[2]/div[4]/div[2]/input[@disabled]', '')
            .verify.elementPresent('//button[text()="Cancel"]')
            .verify.elementPresent('//button[text()="Send Email"]');
    },

    'template is selected': function (browser) {
        browser
            .clickBySelectorXpath('//modal[@class="modal fade in"]//option[@value="310"]')
            .waitForElementVisible('//me-cms-content-select-list/div[@class="row"]/div[1][@class="col-sm-12"]/div[2]/div[1]/div[2]/input[@disabled]', 5000)
            .verify.valueContains('//me-cms-content-select-list/div[@class="row"]/div[1][@class="col-sm-12"]/div[2]/div[1]/div[2]/input[@disabled]', 'gbhn@nam.com')
            .verify.elementPresent('//div[contains(text(),"From Name:")]')
            .verify.elementPresent('//me-cms-content-select-list/div[@class="row"]/div[1][@class="col-sm-12"]/div[2]/div[2]/div[2]/input[@disabled]')
            .verify.valueContains('//me-cms-content-select-list/div[@class="row"]/div[1][@class="col-sm-12"]/div[2]/div[2]/div[2]/input[@disabled]', 'Kate')
            .verify.elementPresent('//div[contains(text(),"Reply-To Email:")]')
            .verify.elementPresent('//me-cms-content-select-list/div[@class="row"]/div[1][@class="col-sm-12"]/div[2]/div[3]/div[2]/input[@disabled]')
            .verify.valueContains('//me-cms-content-select-list/div[@class="row"]/div[1][@class="col-sm-12"]/div[2]/div[3]/div[2]/input[@disabled]', 'frerfgb@mail.com')
            .verify.elementPresent('//div[contains(text(),"Subject:")]')
            .verify.elementPresent('//me-cms-content-select-list/div[@class="row"]/div[1][@class="col-sm-12"]/div[2]/div[4]/div[2]/input[@disabled]')
            .verify.valueContains('//me-cms-content-select-list/div[@class="row"]/div[1][@class="col-sm-12"]/div[2]/div[4]/div[2]/input[@disabled]', 'resttgytygh')
            .verify.elementPresent('//p[text()="rgfiugnjitgyhtyh"]')
            .verify.elementPresent('//button[text()="Cancel"]')
            .verify.elementPresent('//button[text()="Send Email"]')

            .clickBySelectorXpath('//button[text()="Send Email"]')
            .waitForElementVisible('//div[text()="The email template was sent successfully."]',4000);
    },

    'check edit email template ': function (browser) {
        browser
            .relUrl('/email-templates/edit/310')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .verify.valueContains('//input[@ngcontrol="name"]', 'Testyhh')
            .verify.valueContains('//input[@ngcontrol="fromEmail"]', 'gbhn@nam.com')
            .verify.valueContains('//input[@ngcontrol="fromName"]', 'Kate')
            .verify.valueContains('//input[@ngcontrol="replyToEmail"]', 'frerfgb@mail.com')
            .verify.valueContains('//select[@ngcontrol="recipientType"]', '17')
            .verify.valueContains('//input[@ngcontrol="contentSubject"]', 'resttgytygh');
    },
});