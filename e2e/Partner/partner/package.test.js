var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to partners': function (browser) {
        browser
            .relUrl('/event/212/partners/7588')
    },

    // 'add new package': function (browser) {
    //     browser
    //         .clickBySelectorXpath('//*[@class="row-fluid btn btn-primary communication-participant-btn"]')
    //         .verify.containsText('(//h4[@class="modal-title"])[2]', "Select package model and template")
    //         .verify.elementPresent('//label[text()="Package model"]')
    //         .verify.elementPresent('//label[text()="Select package"]')
    //         .verify.elementPresent('(//select[@class="form-control ng-untouched ng-pristine ng-valid"])[2]')
    //
    //         .clickBySelectorXpath('(//button[text()="Add"])[2]')
    //
    //         .waitForElementVisible('//div[@class="toast-content"]', 10000)
    //         .verify.containsText('//div[@class="toast-title"]', 'Error')
    //         .verify.containsText('//div[@class="toast-message"]', 'Please choose package template')
    //         .clickBySelectorXpath('//div[@class="toast-content"]')
    //
    //         .clickBySelectorXpath('//*[contains(text(), "Select package model and template")]/../../..//button[text()="Cancel"]')
    // },

    'verify event based': function (browser) {
        var package = browser.page.partnersEdit().section.package;
        package
            .verify.containsText('@packageIDInput', '1237')
            .verify.containsText('@packagetypeInput', 'Silver')
            .verify.containsText('@packageNameInput', 'Silver 2011')

            .clickBySelector('@archivedOption')
            .clickBySelector('@activeOption')

            .verify.containsText('@createdInput', '2016-06-28 17:29:00 /')
            .verify.containsText('@modifiedInput', ' Xsolve ')
            .verify.containsText('@modifiedInput', 'Test User')
    },

    'input fields': function (browser) {
        var package = browser.page.partnersEdit().section.package;
        package
            .setValueBySelector('@representativesInput' , '1')
            .setValueBySelector('@groupDiscussionHostsInput' , '2')
            .setValueBySelector('@oneToManyMeetingHostsInput' , '3')
            .setValueBySelector('@lunchHostsInput' , '4')
            .setValueBySelector('@dinnerHostsInput' , '5')

            .setValueBySelector('@invitedDelegatesInput' , '30')

            .setValueBySelector('@meetingRequestsLeftInput' , '20')
            .setValueBySelector('@guaranteedMeetingsInput' , '25')
            .clickBySelector('@matchingYesCheckbox')
            .clickBySelector('@targetServiceYesCheckbox')

            .setValueBySelector('@caseWholeAudienceInput' , '1')
            .setValueBySelector('@caseParallelInput' , '2')
            .setValueBySelector('@goldSpotlightInput' , '3')
            .setValueBySelector('@keynoteInput' , '4')
            .setValueBySelector('@platinumSpotlightInput' , '5')
            .setValueBySelector('@presentationWholeAudienceInput' , '6')
            .setValueBySelector('@presentationParallelInput' , '7')
            .setValueBySelector('@snapShotInput' , '8')

            .clickBySelector('@saveButton')
    },

    'click save': function (browser) {
        var package = browser.page.partnersEdit().section.package;
        package
            .verify.containsText('@modifiedInput', ' Xsolve ')
            .verify.containsText('@modifiedInput', 'Test User')
            .containsCurrentData('@modifiedInput');
    },

    'verivy input fields': function (browser) {
        var package = browser.page.partnersEdit().section.package;
        package
            .verify.valueContains('@representativesInput' , '1')
            .verify.valueContains('@groupDiscussionHostsInput' , '2')
            .verify.valueContains('@oneToManyMeetingHostsInput' , '3')
            .verify.valueContains('@lunchHostsInput' , '4')
            .verify.valueContains('@dinnerHostsInput' , '5')

            .verify.valueContains('@invitedDelegatesInput' , '30')

            .verify.valueContains('@meetingRequestsLeftInput' , '20')
            .verify.valueContains('@guaranteedMeetingsInput' , '25')
            .verify.attributeEquals('@matchingYesCheckbox', 'checked', 'true')
            .verify.attributeEquals('@targetServiceYesCheckbox', 'checked', 'true')

            .verify.valueContains('@caseWholeAudienceInput' , '1')
            .verify.valueContains('@caseParallelInput' , '2')
            .verify.valueContains('@goldSpotlightInput' , '3')
            .verify.valueContains('@keynoteInput' , '4')
            .verify.valueContains('@platinumSpotlightInput' , '5')
            .verify.valueContains('@presentationWholeAudienceInput' , '6')
            .verify.valueContains('@presentationParallelInput' , '7')
            .verify.valueContains('@snapShotInput' , '8')
    },

    'edit team': function (browser) {
        var package = browser.page.partnersEdit().section.package;
        package
            .setValueBySelector('@representativesInput' , '6')
            .setValueBySelector('@groupDiscussionHostsInput' , '7')
            .setValueBySelector('@oneToManyMeetingHostsInput' , '8')
            .setValueBySelector('@lunchHostsInput' , '9')
            .setValueBySelector('@dinnerHostsInput' , '10')

            .setValueBySelector('@invitedDelegatesInput' , '20')

            .setValueBySelector('@meetingRequestsLeftInput' , '10')
            .setValueBySelector('@guaranteedMeetingsInput' , '15')
            .clickBySelector('@matchingNoCheckbox')
            .clickBySelector('@targetServiceNoCheckbox')

            .setValueBySelector('@caseWholeAudienceInput' , '11')
            .setValueBySelector('@caseParallelInput' , '22')
            .setValueBySelector('@goldSpotlightInput' , '33')
            .setValueBySelector('@keynoteInput' , '44')
            .setValueBySelector('@platinumSpotlightInput' , '55')
            .setValueBySelector('@presentationWholeAudienceInput' , '66')
            .setValueBySelector('@presentationParallelInput' , '77')
            .setValueBySelector('@snapShotInput' , '88')
    },

    'click save for edit': function (browser) {
        var package = browser.page.partnersEdit().section.package;
        package
            .clickBySelector('@saveButton')
            .waitForElementVisible('successMassege', 10000)

            .containsCurrentData('@modifiedInput');
    },

    'verify after edit team': function (browser) {
        var package = browser.page.partnersEdit().section.package;
        package
            .verify.valueContains('@representativesInput' , '6')
            .verify.valueContains('@groupDiscussionHostsInput' , '7')
            .verify.valueContains('@oneToManyMeetingHostsInput' , '8')
            .verify.valueContains('@lunchHostsInput' , '9')
            .verify.valueContains('@dinnerHostsInput' , '10')

            .verify.valueContains('@invitedDelegatesInput' , '20')

            .verify.valueContains('@meetingRequestsLeftInput' , '10')
            .verify.valueContains('@guaranteedMeetingsInput' , '15')
            .verify.attributeEquals('@matchingNoCheckbox', 'checked', 'true')
            .verify.attributeEquals('@targetServiceNoCheckbox', 'checked', 'true')

            .verify.valueContains('@caseWholeAudienceInput' , '11')
            .verify.valueContains('@caseParallelInput' , '22')
            .verify.valueContains('@goldSpotlightInput' , '33')
            .verify.valueContains('@keynoteInput' , '44')
            .verify.valueContains('@platinumSpotlightInput' , '55')
            .verify.valueContains('@presentationWholeAudienceInput' , '66')
            .verify.valueContains('@presentationParallelInput' , '77')
            .verify.valueContains('@snapShotInput' , '88')
    },
});