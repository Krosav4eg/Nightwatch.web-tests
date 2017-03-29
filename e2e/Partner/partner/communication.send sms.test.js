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
    //         .addContactPerson('Rehab', '1');
    // },

    'send sms empty fields': function (browser) {
        var communication = browser.page.partnersEdit().section.communication;
        communication
            .clickBySelector('@sendSMSButton')
            .clickBySelector("@sendSMSButtonInModal")

            .waitForElementVisible('@alertMassege', 10000)

            .clickBySelector("@cancelSMSButtonInModal")
    },

    'send sms': function (browser) {
        var communication = browser.page.partnersEdit().section.communication;
        communication
            .clickBySelector('@sendSMSButton')

            .clickBySelector('@firstRepresentatives')

            .clickBySelector('@template575Option')
            .verify.valueContains('@textSMSInput', 'This is the link to your meeting service: {{Partner.Link.Agenda-AUTO}}')

            .clickBySelector('@template97Option')
            .verify.valueContains('@textSMSInput', 'We have booked a new meeting for you. You can check your meetings from here from your mobile service')

            .clickBySelector('@template575Option')
            .verify.valueContains('@textSMSInput', 'This is the link to your meeting service: {{Partner.Link.Agenda-AUTO}}')

            .clickBySelector("@sendSMSButtonInModal")

            .waitForElementVisible('@successSMSMassege', 10000)

            .verify.containsText('@lastEditSMS', "Testing SMS")
            .verify.containsText('@lastEditSMS', "Rehab E.M. Abdullah")
            .containsCurrentData('@lastEditSMS');
    },

    'verify fields after send': function (browser) {
        var communication = browser.page.partnersEdit().section.communication;
        communication
            .clickBySelector('@sendSMSButton')

            .verify.valueContains('@textSMSInput', null)

            .clickBySelector("@cancelSMSButtonInModal")
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