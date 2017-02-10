var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to delegates': function (browser) {
        browser
            .relUrl('/event/212/delegates')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },


    'check that when you open select E-mail template page template field is blank': function (browser) {
        browser
            .clickBySelectorXpath('//a[contains(text(),"Prospects")]')
            .clickBySelectorXpath('(//tr/td/input[@type="checkbox"])[21]')
            .verify.elementPresent('//h4[contains(text(),"Prospects 1/808")]')

            .clickBySelectorXpath('//button[contains(text(),"Send email")]')

            .verify.elementPresent('//h4[contains(text(),"Select E-mail template")]')

            .verify.elementPresent('(//div[contains(text(),"Template:")])[1]')
            .verify.valueContains('(//select)[10]', '')

            .verify.elementPresent('(//div[contains(text(),"From Email:")])[1]')
            .verify.valueContains('//*[contains(text(), "From Email:")]/../div/input', '')

            .verify.elementPresent('(//div[contains(text(),"From Name:")])[1]')
            .verify.valueContains('//*[contains(text(), "From Name")]/../div/input', '')

            .verify.elementPresent('(//div[contains(text(),"Reply-To Email:")])[1]')
            .verify.valueContains('//*[contains(text(), "Reply-To Email:")]/../div/input', '')

            .verify.elementPresent('(//div[contains(text(),"Subject:")])[1]')
            .verify.valueContains('//*[contains(text(), "Subject:")]/../div/input', '');
    },

    'visible correct templates in drop down list': function (browser) {
        browser
            .clickBySelectorXpath('(//select)[9]')

            .verify.containsText('(//option)[27]', '')

            .verify.containsText('//option[@value="306"]', 'asdas')
            .verify.containsText('//option[@value="287"]', 'Test')
            .verify.containsText('//option[@value="332"]', 'Test 56')
            .verify.containsText('//option[@value="310"]', 'Testyhh');
    },

    'choose blank field': function (browser) {
        browser
            .clickBySelectorXpath('(//option)[27]')
            .verify.valueContains('(//select)[9]', '')

            .verify.valueContains('//*[contains(text(), "From Email:")]/../div/input', '')
            .verify.valueContains('//*[contains(text(), "From Name")]/../div/input', '')
            .verify.valueContains('//*[contains(text(), "Reply-To Email:")]/../div/input', '')
            .verify.valueContains('//*[contains(text(), "Subject:")]/../div/input', '');
    },

    'choose template': function (browser) {
        browser
            .clickBySelectorXpath('(//option[contains(text(),"Test")])[1]')

            .verify.valueContains('//*[contains(text(), "From Email:")]/../div/input', '{test@managmentevents.com}')
            .verify.valueContains('//*[contains(text(), "From Name")]/../div/input', '{Feedback-AUTO}')
            .verify.valueContains('//*[contains(text(), "Reply-To Email:")]/../div/input', '{test@gmail.com}')
            .verify.valueContains('//*[contains(text(), "Subject:")]/../div/input', 'Test')

            //.verify.elementPresent('//div[contains(text(),"Email template cannot be saved if message includes new db references")]');
    },

    'check that information would be update after you change template': function (browser) {
        browser
            .relUrl('/email-templates/edit/581')
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)

            .useXpath()
            .verify.elementPresent('//h1[contains(text(),"Edit Email Template (#581)")]')

            .setValueByXpath('//input[@ngcontrol="name"]', 'Test1')
            .setValueByXpath('//input[@ngcontrol="fromEmail"]', 'test@events.com')
            .setValueByXpath('//input[@ngcontrol="fromName"]', 'Feedback-AUTO')
            .setValueByXpath('//input[@ngcontrol="replyToEmail"]', 'test@mmm.com')
            .setValueByXpath('//input[@ngcontrol="contentSubject"]', 'AutoTest')

            .clickBySelectorXpath('(//button[contains(text(),"Save")])[1]')
            .clickBySelectorXpath('(//button[contains(text(),"Save")])[2]')
            .relUrl('/event/212/delegates')
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)

            .useXpath()
            .clickBySelectorXpath('//a[contains(text(),"Prospects")]')
            .clickBySelectorXpath('(//tr/td/input[@type="checkbox"])[21]')
            .verify.elementPresent('//h4[contains(text(),"Prospects 1/806")]')

            .clickBySelectorXpath('//button[contains(text(),"Send email")]')

            .clickBySelectorXpath('(//option[contains(text(),"Test1")])[1]')

            .verify.valueContains('//*[contains(text(), "From Email:")]/../div/input', 'test@events.com')
            .verify.valueContains('//*[contains(text(), "From Name")]/../div/input', 'Feedback-AUTO')
            .verify.valueContains('//*[contains(text(), "Reply-To Email:")]/../div/input', 'test@mmm.com')
            .verify.valueContains('//*[contains(text(), "Subject:")]/../div/input', 'AutoTest')

            .verify.elementPresent('//div[contains(text(),"Email template cannot be saved if message includes new db references")]');
    },

    'to return order': function (browser) {
        browser
            .relUrl('/email-templates/edit/581')
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)

            .useXpath()
            .verify.elementPresent('//h1[contains(text(),"Edit Email Template (#581)")]')

            .setValueByXpath('//input[@ngcontrol="name"]', 'Test')
            .setValueByXpath('//input[@ngcontrol="fromEmail"]', '{test@managmentevents.com}')
            .setValueByXpath('//input[@ngcontrol="fromName"]', '{Feedback-AUTO}')
            .setValueByXpath('//input[@ngcontrol="replyToEmail"]', '{test@gmail.com}')
            .setValueByXpath('//input[@ngcontrol="contentSubject"]', 'Test')

            .clickBySelectorXpath('(//button[contains(text(),"Save")])[1]')
            .clickBySelectorXpath('(//button[contains(text(),"Save")])[2]')
            .verify.elementPresent('//div[contains(text(),"The Localization Template was updated successfully")]');
    },

    'verify send email button': function (browser) {
        browser
            .relUrl('/event/212/delegates')
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)

            .useXpath()
            .clickBySelectorXpath('//a[contains(text(),"Prospects")]')
            .clickBySelectorXpath('(//tr/td/input[@type="checkbox"])[21]')
            .clickBySelectorXpath('//button[contains(text(),"Send email")]')

            .clickBySelectorXpath('(//option[contains(text(),"Test")])[1]')
            .clickBySelectorXpath('(//button[@class="btn btn-primary"])[2]')
            .useXpath()
            .verify.elementPresent('//div[contains(text(),"The email template was sent successfully.")]')
            .moveToElement('(//tr/th[14])[1]', 1340, 640)
            .containsCurrentDataInSelectorXpath('(//tr[1]/td[11])[4]');
    },

    'verify cancel  button': function (browser) {
        browser
            .clickBySelectorXpath('//button[contains(text(),"Send email")]')
            .clickBySelectorXpath('(//option[contains(text(),"Test")])[1]')

            .clickBySelectorXpath('((//button[@class="btn btn-default"]))[4]')

            .verify.elementNotPresent('//div[contains(text(),"The email template was sent successfully.")]')
            .moveToElement('(//tr/th[14])[1]', 1340, 640)
            .containsCurrentDataInSelectorXpath('(//tr[1]/td[11])[4]')

            .clickBySelectorXpath('(//tr/td/input[@type="checkbox"])[21]')
            .clickBySelectorXpath('(//tr/td/input[@type="checkbox"])[22]')
            .clickBySelectorXpath('//button[contains(text(),"Send email")]')

            .verify.valueContains('//*[contains(text(), "From Email")]/../div/input', null)
            .verify.valueContains('//*[contains(text(), "From Name")]/../div/input', null)
            .verify.valueContains('//*[contains(text(), "Reply-To Email:")]/../div/input', null)
            .verify.valueContains('//*[contains(text(), "Subject:")]/../div/input', null);
    },
});