var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2008/partners/5221')
    },

    // 'add contact person': function (browser) {
    //     browser
    //        .addContactPerson('Rehab', '1');
    // },

    'send email empty fields': function (browser) {
        var communication = browser.page.partnersEdit().section.communication;
        communication
            .clickBySelector('@sendEmailButton')
            .clickBySelector("@sendButton")

            .waitForElementVisible('@alertMassege', 10000)

            .clickBySelector("@cancelButton");
    },

    'send email': function (browser) {
        var communication = browser.page.partnersEdit().section.communication;
        communication
            .clickBySelector('@sendEmailButton')

            .clickBySelector('@firstRepresentatives')
            .clickBySelector('@template68Option')

            .verify.valueContains('@fromEmailInput', 'production.ns@managementevents.com')
            .verify.valueContains('@fromNameInput', 'Needseeker Customer Service')
            .verify.valueContains('@replyToEmailInput', 'production.ns@managementevents.com')
            .verify.valueContains('@subjectInput', 'Needseeker -tapaamiset varattavissa nyt. Linkki tapaamispalveluusi')

            .clickBySelector('@template579Option')

            .verify.valueContains('@fromEmailInput', '{{EventVersion.PCResponsible.Email}}')
            .verify.valueContains('@fromNameInput', '{{EventVersion.PCResponsible.FirstName}} {{EventVersion.PCResponsible.LastName}}')
            .verify.valueContains('@replyToEmailInput', '{{EventVersion.PCResponsible.Email}}')
            .verify.valueContains('@subjectInput', 'Uudet Needseeker-tapaamiskreditit lisätty yrityksellenne')

            .clickBySelector('@template68Option')

            .verify.valueContains('@fromEmailInput', 'production.ns@managementevents.com')
            .verify.valueContains('@fromNameInput', 'Needseeker Customer Service')
            .verify.valueContains('@replyToEmailInput', 'production.ns@managementevents.com')
            .verify.valueContains('@subjectInput', 'Needseeker -tapaamiset varattavissa nyt. Linkki tapaamispalveluusi')

            .clickBySelector('@template579Option')

            .verify.valueContains('@fromEmailInput', '{{EventVersion.PCResponsible.Email}}')
            .verify.valueContains('@fromNameInput', '{{EventVersion.PCResponsible.FirstName}} {{EventVersion.PCResponsible.LastName}}')
            .verify.valueContains('@replyToEmailInput', '{{EventVersion.PCResponsible.Email}}')
            .verify.valueContains('@subjectInput', 'Uudet Needseeker-tapaamiskreditit lisätty yrityksellenne')

            .clickBySelector("@sendButton")

            .waitForElementVisible('@successMassege', 10000)

            .verify.containsText('@lastEdit', "Test")
            .verify.containsText('@lastEdit', "Needseeker - credits added to companies")
            .containsCurrentData('@lastEdit');
    },

    'verify fields after send': function (browser) {
        var communication = browser.page.partnersEdit().section.communication;
        communication
            .clickBySelector('@sendEmailButton')

            .verify.valueContains('@fromEmailInput', '')
            .verify.valueContains('@fromNameInput', '')
            .verify.valueContains('@replyToEmailInput', '')
            .verify.valueContains('@subjectInput', '')

            .clickBySelector("@cancelButton");
    },

    // 'delete contact person': function (browser) {
    //
    //     browser
    //         .sendKeys('//button[text()="Delete"]', [browser.Keys.HOME])
    //         .moveToElement('//button[text()="Delete"]', 10, 10)
    //         .clickBySelectorXpath('//button[text()="Delete"]')
    //         .clickBySelectorXpath('(//button[text()="Yes"])[1]');
    // },
});