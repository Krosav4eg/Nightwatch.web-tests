var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to settings page': function (browser) {
        browser
            .relUrl('/event/212/settings');
    },

    'check general information': function (browser) {
        var settings = browser.page.settings();
        settings
            .verify.elementPresent('@totalNameFor212Event');
    },

    'select all check-boxes and radio buttons': function (browser) {
        var settings = browser.page.settings();
        settings
            .verify.elementPresent('@agendaText')
            .verify.elementPresent('@availabilityText')

            .clickBySelector('@availabilityYesCheckbox')
            .clickBySelector('@delegatesblockingEnabledForMEUsersCheckbox')
            .clickBySelector('@delegatesblockingEnabledForDelegatesCheckbox')
            .clickBySelector('@providersblockingEnabledForMEUsersCheckbox')

            .clickBySelector('@providersblockingEnabledForSolutionProvidersCheckbox')
            .verify.elementPresent('@groupQtyText', 5000)

            .setValueBySelector('@groupQtyInput', ['0', browser.Keys.ENTER])
            .setValueBySelector('@groupQtyInput', ['1', browser.Keys.ENTER])
            .setValueBySelector('@groupQtyInput', ['2', browser.Keys.ENTER])
            .setValueBySelector('@groupQtyInput', ['3', browser.Keys.ENTER])
            .setValueBySelector('@groupQtyInput', ['4', browser.Keys.ENTER])
            .setValueBySelector('@groupQtyInput', ['5', browser.Keys.ENTER])
            .setValueBySelector('@groupQtyInput', ['6', browser.Keys.ENTER])

            .clickBySelector('@firstCheckbox')
            .clickBySelector('@secondCheckbox')
            .clickBySelector('@thirdCheckbox')
            .clickBySelector('@fourthCheckbox')
            .clickBySelector('@fifthCheckbox')
            .clickBySelector('@sixthCheckbox')
            .clickBySelector('@saveButton');
    },

    'events groups are displayed': function (browser) {
        browser
            .relUrl('/event/212/delegates');

        var eventGroups = browser.page.delegates().section.eventGroups;
        eventGroups

            .waitForElementVisible('@totalName', 5000)

            .verify.elementPresent('@group1Text')
            .verify.elementPresent('@group2Text')
            .verify.elementPresent('@group3Text')
            .verify.elementPresent('@group4Text')
            .verify.elementPresent('@group5Text')
            .verify.elementPresent('@group6Text');
    },

    'blocking delegates of agenda assertion': function (browser) {
        browser
            .relUrl('/delegates/edit/92240');

        var delegatesEdit = browser.page.delegates().section.delegatesEdit;
        delegatesEdit

            .verify.elementPresent('@totalName')
            .verify.elementPresent('@id105375Link')
            .verify.elementPresent('@participationInformationText')
            .verify.elementPresent('@blockedTimesTotalText')
            .verify.elementPresent('@blockedTimesText')
            .verify.elementPresent('@addBlockedTimeButton');
    },

    'go to the settings page': function (browser) {
        browser
            .relUrl('/event/212/settings')

        var settings = browser.page.settings();
        settings
            .verify.elementPresent('@totalNameFor212Event');
    },

    'delete all check-boxes and radio buttons': function (browser) {
        var settings = browser.page.settings();
        settings

            .clickBySelector('@availabilityYesCheckbox')
            .clickBySelector('@delegatesblockingEnabledForMEUsersCheckbox')
            .clickBySelector('@delegatesblockingEnabledForDelegatesCheckbox')
            .clickBySelector('@providersblockingEnabledForMEUsersCheckbox')

            .clickBySelector('@providersblockingEnabledForSolutionProvidersCheckbox')
            .setValueBySelector('@groupQtyInput', ['2', browser.Keys.ENTER])

            .verify.elementNotPresent('@thirdCheckbox')
            .verify.elementNotPresent('@fourthCheckbox')
            .verify.elementNotPresent('@fifthCheckbox')
            .verify.elementNotPresent('@sixthCheckbox')

            .clickBySelector('@saveButton');
    },

    'events groups are not displayed': function (browser) {
        browser
            .relUrl('/event/212/delegates');

        var eventGroups = browser.page.delegates().section.eventGroups;
        eventGroups

            .waitForElementVisible('@totalName', 5000)

            .verify.elementNotPresent('@group3Text')
            .verify.elementNotPresent('@group4Text')
            .verify.elementNotPresent('@group5Text')
            .verify.elementNotPresent('@group6Text');
    },
});

