var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to helpdesk': function (browser) {
        browser
            .relUrl('/events/2008/helpdesk');
    },

    'check that when you open select sms template page template field is blank': function (browser) {
        var pageTemplateFieldIsBlank = browser.page.helpdesk().section.pageTemplateFieldIsBlank;
        pageTemplateFieldIsBlank
            .clickBySelector('@firstCheckbox')
            .clickBySelector('@sendSmS1')

            .verify.elementPresent('@selectSmSTemplateHeader')

            .verify.elementPresent('@templateTextName')

        var templatesInDropDownList = browser.page.helpdesk().section.templatesInDropDownList;
        templatesInDropDownList
            .verify.valueContains('@dropListButton', '');
    },

    'visible correct templates in drop down list': function (browser) {
        var templatesInDropDownList = browser.page.helpdesk().section.templatesInDropDownList;
        templatesInDropDownList
            .clickBySelector('@dropListButton')
            .verify.containsText('@blankField', '')
            .verify.containsText('@directToAppAgenda', 'Direct to App Agenda')
            .verify.containsText('@linkToMobileService', 'Link to Mobile Service')
            .verify.containsText('@linkToMobileService1DayBefore', 'Link to Mobile Service - 1 day before')
            .verify.containsText('@newMeetingBooked', 'New meeting booked')
            .verify.containsText('@newMeetingBookedRequest', 'New meeting request')
            .verify.containsText('@smsRegression', 'SMS regression 3/13')
    },

    'choose blank field': function (browser) {
        var templatesInDropDownList = browser.page.helpdesk().section.templatesInDropDownList;
        templatesInDropDownList
            .clickBySelector('@blankField')
            .verify.valueContains('@dropListButton', '');
    },

    'click send sms button without chosen template': function (browser) {
        var sendSmSButtonWithoutChosenTemplate = browser.page.helpdesk().section.sendSmSButtonWithoutChosenTemplate;
        sendSmSButtonWithoutChosenTemplate
            .clickBySelector('@sendSmS2')
            .verify.elementPresent('@choseTemplateAlert')
            .clickBySelector('@closeButton')

        var pageTemplateFieldIsBlank = browser.page.helpdesk().section.pageTemplateFieldIsBlank;
        pageTemplateFieldIsBlank
            .clickBySelector('@sendSmS1');
    },

    'choose sms template': function (browser) {
        var templatesInDropDownList = browser.page.helpdesk().section.templatesInDropDownList;
        templatesInDropDownList
            .clickBySelector('@newMeetingBookedRequest')
            .verify.valueContains('@textTemplateArea', 'You have received a new meeting request.');
    },

    'check that information would be update after you change template': function (browser) {
        browser
            .relUrl('/sms-templates/edit/99')

        var informationWouldBeUpdate = browser.page.helpdesk().section.informationWouldBeUpdate;
        informationWouldBeUpdate

            .verify.elementPresent('@templateHeader')
            .verify.elementPresent('@name')
            .verify.containsText('@recipientType', 'Delegate')
            .verify.containsText('@receiverType', 'Delegate')
            .verify.containsText('@messageType', 'Info')

            .clickBySelector('@saveButton1')
            .verify.elementPresent('@successTemplateAlert')

            .setValueBySelector('@textArea', 'autotest')
            .clickBySelector('@saveButton2')
            .verify.elementPresent('@successLocalizationTemplateAlert')

            .relUrl('/events/2008/helpdesk')

        var pageTemplateFieldIsBlank = browser.page.helpdesk().section.pageTemplateFieldIsBlank;
        pageTemplateFieldIsBlank
            .clickBySelector('@firstCheckbox')
            .clickBySelector('@sendSmS1')

        var templatesInDropDownList = browser.page.helpdesk().section.templatesInDropDownList;
        templatesInDropDownList
            .clickBySelector('@newMeetingBookedRequest')
            .verify.valueContains('@textTemplateArea', 'autotest');
    },

    'to return order': function (browser) {
        browser
            .relUrl('/sms-templates/edit/99')

        var informationWouldBeUpdate = browser.page.helpdesk().section.informationWouldBeUpdate;
        informationWouldBeUpdate
            .setValueBySelector('@textArea', 'You have received a new meeting request.')
            .clickBySelector('@saveButton2')
            .verify.elementPresent('@successLocalizationTemplateAlert');
    },


    'verify send sms button': function (browser) {
        browser
            .relUrl('/events/2008/helpdesk')

        var pageTemplateFieldIsBlank = browser.page.helpdesk().section.pageTemplateFieldIsBlank;
        pageTemplateFieldIsBlank
            .clickBySelector('@firstCheckbox')
            .clickBySelector('@sendSmS1')

        var templatesInDropDownList = browser.page.helpdesk().section.templatesInDropDownList;
        templatesInDropDownList
            .clickBySelector('@newMeetingBookedRequest')

        var sendSmSButtonWithoutChosenTemplate = browser.page.helpdesk().section.sendSmSButtonWithoutChosenTemplate;
        sendSmSButtonWithoutChosenTemplate
            .clickBySelector('@sendSmS2');
    },
});
