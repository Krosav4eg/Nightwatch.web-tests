var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2008/representatives')
    },

    'press when partner wasnt choosen': function (browser) {
        var allInformation = browser.page.representatives().section.allInformation;
        allInformation
            .clickBySelector('@sendSMSButton')

            .waitForElementVisible('@alertMassege', 10000)
            .verify.containsText('@contentMassege', 'You need chose Partner first')
    },

    'press when one partner was choosen': function (browser) {
        var checkboxColumn = browser.page.representatives().section.checkboxColumn;
        checkboxColumn
            .clickBySelector('@firstRow');
        var allInformation = browser.page.representatives().section.allInformation;
        allInformation
            .clickBySelector('@sendSMSButton')

        var sendSMS = browser.page.representatives().section.sendSMS;
        sendSMS
            .verify.valueContains('@templateSelect', '')
    },

    'verify select Template': function (browser) {
        var sendSMS = browser.page.representatives().section.sendSMS;
        sendSMS
            .clickBySelector('@option575')
            .verify.valueContains('@textSMS', 'This is the link to your meeting service: {{Partner.Link.Agenda-AUTO}}')

            .clickBySelector('@option97')
            .verify.valueContains('@textSMS', 'We have booked a new meeting for you. You can check your meetings from here from your mobile service')

            .clickBySelector('@option575')
            .verify.valueContains('@textSMS', 'This is the link to your meeting service: {{Partner.Link.Agenda-AUTO}}')

            .clickBySelector('@option97')
            .verify.valueContains('@textSMS', 'We have booked a new meeting for you. You can check your meetings from here from your mobile service')
    },

    'press send SMS': function (browser) {
        var sendSMS = browser.page.representatives().section.sendSMS;
        sendSMS
            .clickBySelector('@sendSMSButton')
    },

    'press when all partner was choosen': function (browser) {
        var checkboxColumn = browser.page.representatives().section.checkboxColumn;
        checkboxColumn
            .clickBySelector('@allcheCkbox');
        var allInformation = browser.page.representatives().section.allInformation;
        allInformation
            .clickBySelector('@sendSMSButton')

        var sendSMS = browser.page.representatives().section.sendSMS;
        sendSMS
            .verify.valueContains('@templateSelect', '')

            .clickBySelector('@cancelButton');
        allInformation
            .clickBySelector('@sendSMSButton');
        var sendSMS = browser.page.representatives().section.sendSMS;
        sendSMS
            .verify.valueContains('@templateSelect', '')

            .clickBySelector('@closeButton');
    },
});
