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
        var sendEmailSection = browser.page.speaker().section.sendEmail;
        sendEmailSection
            .clickBySelector('@firstOption')//any310Option

            .verify.elementPresent('@templateField')
            .verify.valueContains('@fromEmailInput', 'test@gmail.com')
            .verify.valueContains('@fromNameInput', '')
            .verify.valueContains('@replyToEmailInput', 'test@gmail.com')
            .verify.valueContains('@subjectInput', 'Test')

            .clickBySelector('@submitButton')
            .waitForElementVisible('@sendSuccessfully',4000);
    },

    // 'check edit email template ': function (browser) {
    //     var sendEmailSection = browser.page.speaker().section.sendEmail;
    //     sendEmailSection
    //         .relUrl('/email-templates/edit/310')
    //
    //         .verify.valueContains('//input[@ngcontrol="name"]', 'Testyhh')
    //         .verify.valueContains('//input[@ngcontrol="fromEmail"]', 'gbhn@nam.com')
    //         .verify.valueContains('//input[@ngcontrol="fromName"]', 'Kate')
    //         .verify.valueContains('//input[@ngcontrol="replyToEmail"]', 'frerfgb@mail.com')
    //         .verify.valueContains('//select[@ngcontrol="recipientType"]', '17')
    //         .verify.valueContains('//input[@ngcontrol="contentSubject"]', 'resttgytygh');
    // },
});