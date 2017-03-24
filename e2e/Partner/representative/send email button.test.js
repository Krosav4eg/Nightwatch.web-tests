var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2308/representatives')
    },

    'press when partner wasnt choosen': function (browser) {
        var allInformation = browser.page.representatives().section.allInformation;
        allInformation
            .clickBySelector('@sendEmailButton')

            .waitForElementVisible('@alertMassege', 10000)
            .verify.containsText('@contentMassege', 'You need chose Partner first')
    },

    'press when one partner was choosen': function (browser) {
        var checkboxColumn = browser.page.representatives().section.checkboxColumn;
        checkboxColumn
            .clickBySelector('@firstRow');
        var allInformation = browser.page.representatives().section.allInformation;
        allInformation
            .clickBySelector('@sendEmailButton')

        var sendEmail = browser.page.representatives().section.sendEmail;
        sendEmail
            .verify.valueContains('@templateSelect', '')
            .verify.containsText('@fromEmailInput', "")
            .verify.containsText('@fromNameInput', "")
            .verify.containsText('@replyToEmailInput', "")
            .verify.containsText('@subjectInput', "")

    },

    'verify choose Template': function (browser) {
        var sendEmail = browser.page.representatives().section.sendEmail;
        sendEmail
            .clickBySelector('@option170')

            .verify.valueContains('@fromEmailInput', '{{EventVersion.PCResponsible.Email}}')
            .verify.valueContains('@fromNameInput', '{{EventVersion.PCResponsible.FirstName}} {{EventVersion.PCResponsible.LastName}}')
            .verify.valueContains('@replyToEmailInput', '{{EventVersion.PCResponsible.Email}}')
            .verify.valueContains('@subjectInput', 'Start to book your meetings')

            .clickBySelector('@option581')

            .verify.valueContains('@fromEmailInput', '{{EventVersion.PCResponsible.Email}}')
            .verify.valueContains('@fromNameInput', '{{EventVersion.PCResponsible.FirstName}} {{EventVersion.PCResponsible.LastName}}')
            .verify.valueContains('@replyToEmailInput', '{{EventVersion.PCResponsible.Email}}')
            .verify.valueContains('@subjectInput', 'Your link to the Mobile Service')

            .clickBySelector('@option170')

            .verify.valueContains('@fromEmailInput', '{{EventVersion.PCResponsible.Email}}')
            .verify.valueContains('@fromNameInput', '{{EventVersion.PCResponsible.FirstName}} {{EventVersion.PCResponsible.LastName}}')
            .verify.valueContains('@replyToEmailInput', '{{EventVersion.PCResponsible.Email}}')
            .verify.valueContains('@subjectInput', 'Start to book your meetings')
    },

    'click by send Email': function (browser) {
        var sendEmail = browser.page.representatives().section.sendEmail;
        sendEmail
                .clickBySelector('@sendEmailButton');

        var allInformation = browser.page.representatives().section.allInformation;
        allInformation
                .waitForElementVisible('@successMassege', 10000)
                .verify.containsText('@contentMassege', 'The email template was sent successfully');
    },

    'press when all partner was choosen': function (browser) {
        var checkboxColumn = browser.page.representatives().section.checkboxColumn;
        checkboxColumn
            .clickBySelector('@allcheCkbox');

        var allInformation = browser.page.representatives().section.allInformation;
        allInformation
            .clickBySelector('@sendEmailButton')

        var sendEmail = browser.page.representatives().section.sendEmail;
        sendEmail
            .verify.valueContains('@templateSelect', '0')
            .verify.valueContains('@fromEmailInput', '')
            .verify.valueContains('@fromNameInput', '')
            .verify.valueContains('@replyToEmailInput', '')
            .verify.valueContains('@subjectInput', '')
    },

    'click by Cancel': function (browser) {
        var sendEmail = browser.page.representatives().section.sendEmail;
        sendEmail
            .clickBySelector('@cancelButton');
        var allInformation = browser.page.representatives().section.allInformation;
        allInformation
            .clickBySelector('@sendEmailButton');
        sendEmail
            .clickBySelector('@closeButton');
    },
});
