var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/speakers')
    },

    'check event data': function (browser) {
        var eventSection = browser.page.speaker().section.event;
        eventSection
            .waitForElementVisible('@totalName212', 3000);
    },

    'select receivers ': function (browser) {
        var checkBoxSection = browser.page.speaker().section.checkBox;
        checkBoxSection
            .clickBySelector('@allcheckBox')
    },

    'template blank template': function (browser) {
        var sendEmailSection = browser.page.speaker().section.sendEmail;
        sendEmailSection
            .clickBySelector('@sendEmailButton')

            .waitForElementVisible('@nameWindowSendEmail', 3000)
            .clickBySelector('@firstOption')

            .verify.elementPresent('@templateField')
            .verify.valueContains('@fromEmailInput', '')
            .verify.valueContains('@fromNameInput', '')
            .verify.valueContains('@replyToEmailInput', '')
            .verify.valueContains('@subjectInput', '')
            .verify.elementPresent('@cancelButton')
            .verify.elementPresent('@submitButton');
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

            .verify.valueContains('//input[@ngcontrol="name"]', 'Testyhh')
            .verify.valueContains('//input[@ngcontrol="fromEmail"]', 'gbhn@nam.com')
            .verify.valueContains('//input[@ngcontrol="fromName"]', 'Kate')
            .verify.valueContains('//input[@ngcontrol="replyToEmail"]', 'frerfgb@mail.com')
            .verify.valueContains('//select[@ngcontrol="recipientType"]', '17')
            .verify.valueContains('//input[@ngcontrol="contentSubject"]', 'resttgytygh');
    },
});