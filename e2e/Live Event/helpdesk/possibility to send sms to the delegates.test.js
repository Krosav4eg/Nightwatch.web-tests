var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to helpdesk': function (browser) {
        browser
            .relUrl('/events/2008/helpdesk');
    },

    'check that when you open select sms template page template field is blank': function (browser) {
        browser
            .clickBySelectorXpath('(//tr/td/input[@type="checkbox"])[1]')

            .clickBySelectorXpath('(//button[contains(text(),"Send SMS")])[1]')
            .verify.elementPresent('//h4[contains(text(),"Select SMS template")]')

            .verify.elementPresent('//div[contains(text(),"Template:")]')
            .verify.valueContains('(//select)[6]', '');
    },

    'visible correct templates in drop down list': function (browser) {
        browser
            .clickBySelectorXpath('(//select)[6]')
            .pause()
            .verify.containsText('(//option)[25]', '')
            .verify.containsText('//option[@value="576"]', 'Link to Mobile Service')
            .verify.containsText('//option[@value="577"]', 'Link to Mobile Service - 1 day before')
            .verify.containsText('//option[@value="101"]', 'New meeting booked from the queue')
            .verify.containsText('//option[@value="99"]', 'New meeting request')
            .verify.containsText('//option[@value="583"]', 'Welcome to the Growth Session tomorrow')
    },

    'choose blank field': function (browser) {
        browser
            .clickBySelectorXpath('(//option)[25]')
            .verify.valueContains('(//select)[6]', '');
    },

    'click send sms button without chosen template': function (browser) {
        browser
            .clickBySelectorXpath('(//button[contains(text(),"Send SMS")])[2]')
            .useXpath()
            .verify.elementPresent('//div[contains(text(),"Please choose template.")]')
            .clickBySelectorXpath('//button[@class="close"]')

            .clickBySelectorXpath('(//button[contains(text(),"Send SMS")])[1]');
    },

    'choose sms template': function (browser) {
        browser
            .clickBySelectorXpath('//option[@value="99"]')
            .useCss()
            .verify.valueContains('div[class="modal in fade"] textarea', 'You have received a new meeting request.');
    },

    'check that information would be update after you change template': function (browser) {
        browser
            .relUrl('/sms-templates/edit/99')

            .useXpath()
            .verify.elementPresent('//h1[contains(text(),"Edit Sms Template (#99)")]')
            .verify.elementPresent('//input[@id="name"]')
            .verify.containsText('//select[@id="recipientType"]', 'Delegate')
            .verify.containsText('//select[@formcontrolname="receiverType"]', 'Delegate')
            .verify.containsText('//select[@formcontrolname="messageType"]', 'Info')

            .clickBySelectorXpath('(//button[contains(text(),"Save")])[1]')
            .verify.elementPresent('//div[contains(text(),"The Template was updated successfully")]')

            .setValueByXpath('(//textarea)[1]', 'autotest')
            .clickBySelectorXpath('(//button[contains(text(),"Save")])[2]')
            .verify.elementPresent('//div[contains(text(),"The Localization Template was updated successfully")]')

            .relUrl('/events/2008/helpdesk')
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)

            .useXpath()
            .clickBySelectorXpath('(//tr/td/input[@type="checkbox"])[1]')

            .clickBySelectorXpath('(//button[contains(text(),"Send SMS")])[1]')

            .clickBySelectorXpath('//option[contains(text(),"New meeting request")]')
            .useCss()
            .verify.valueContains('div[class="modal in fade"] textarea ', 'autotest');
    },

    'to return order': function (browser) {
        browser
            .relUrl('/sms-templates/edit/99')

            .setValueByXpath('(//textarea)[1]', 'You have received a new meeting request.')
            .clickBySelectorXpath('(//button[contains(text(),"Save")])[2]')
            .verify.elementPresent('//div[contains(text(),"The Localization Template was updated successfully")]');
    },


    'verify send sms button': function (browser) {
        browser
            .relUrl('/events/2008/helpdesk')
            .clickBySelectorXpath('(//tr/td/input[@type="checkbox"])[1]')

            .clickBySelectorXpath('(//button[contains(text(),"Send SMS")])[1]')
            .clickBySelectorXpath('//option[@value="99"]')

            .clickBySelector('//button[@class="btn btn-primary"]');
    }
});
