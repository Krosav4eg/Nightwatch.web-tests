var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/219/presentations')
    },

    'check information about speaker in the presentations page': function (browser) {
        var presenterColumn = browser.page.presentations().section.presenterColumn;
        presenterColumn
            .verify.containsText("@firstRow", "Delegate");

        var organizerColumn = browser.page.presentations().section.organizerColumn;
        organizerColumn
            .verify.containsText("@firstRow", "Management Events");

        var presentationTypeColumn = browser.page.presentations().section.presentationTypeColumn;
        presentationTypeColumn
            .verify.containsText("@firstRow", "Keynote");

        var speakerCompanyColumn = browser.page.presentations().section.speakerCompanyColumn;
        speakerCompanyColumn
            .verify.containsText("@firstRow", "Fachhochschule Kaiserslautern");

        var speakerLastNameColumn = browser.page.presentations().section.speakerLastNameColumn;
        speakerLastNameColumn
            .verify.containsText("@firstRow", "Speck");

        var speakerFirstNameColumn = browser.page.presentations().section.speakerFirstNameColumn;
        speakerFirstNameColumn
            .verify.containsText("@firstRow", "Hendrik");

        var speakerTitleColumn = browser.page.presentations().section.speakerTitleColumn;
        speakerTitleColumn
            .verify.containsText("@firstRow", "Professor");

        var speakerEmailColumn = browser.page.presentations().section.speakerEmailColumn;
        speakerEmailColumn
            .verify.containsText("@firstRow", "hendrik.speck@fh-kl.de");

        var speakerMobileColumn = browser.page.presentations().section.speakerMobileColumn;
        speakerMobileColumn
            .verify.containsText("@firstRow", "0176 2122 9880");
    },

    'go to the edit presentation': function (browser) {
        var idColumn = browser.page.presentations().section.idColumn;
        idColumn
            .clickBySelector('@firstRow')
    },

    'check information about speaker in the edit presentation': function (browser) {
        var tableSpeaker = browser.page.presentationsEdit().section.tableSpeaker;
        tableSpeaker
            .verify.containsText("@firstRowInColumnContactType", "Delegate")
            .verify.containsText("@firstRowInColumnCompanyName", "Fachhochschule Kaiserslautern")
            .verify.containsText("@firstRowInColumnLastName", "Speck")
            .verify.containsText("@firstRowInColumnFirstName", "Hendrik")
            .verify.containsText("@firstRowInAcademicTitleName", "Prof.")
            .verify.containsText("@firstRowInColumnTitle", "Professor")
            .verify.containsText("@firstRowInColumnEmail", "hendrik.speck@fh-kl.de")
            .verify.containsText("@firstRowInColumnPresenterType", "Delegate");

    },
    'add new speaker': function (browser) {
        var tableSpeaker = browser.page.presentationsEdit().section.tableSpeaker;
        tableSpeaker
            .clickBySelector('@addSpeakerButton');


        var attachMasterContact = browser.page.presentationsEdit().section.attachMasterContact;
        attachMasterContact
            .clickBySelector('@addNewButton');

        var addNewGuestSpeaker = browser.page.presentationsEdit().section.addNewGuestSpeaker;
        addNewGuestSpeaker

            .setValue('@lastNameInput', 'Sergey')
            .setValue('@firstNameInput', 'Potapoff')
            .setValue('@academicTitleInput', 'Academic')
            .setValue('@functionTitleInput', 'functionTitle')
            .setValue('@masterCompanyIdInput', 'Alex Toys')
            .clickBySelector('@countryInput')
            .sendKeys('@countryInput', 'Ukraine')
            .clickBySelector('@countryUkraine')

            .setValue('@mobileInput', '0978544488')
            .setValue('@emailInput', 'Sergey_Potapof@mail.ru')
            .clickBySelector('@saveButton');

        browser .refresh()
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'new speaker has been successfully added': function (browser) {
        var tableSpeaker = browser.page.presentationsEdit().section.tableSpeaker;
        tableSpeaker
            .verify.containsText("@secondRowInColumnContactType", "Guest Speaker")
            .verify.containsText("@secondRowInColumnCompanyName", "")
            .verify.containsText("@secondRowInColumnLastName", "Sergey")
            .verify.containsText("@secondRowInColumnFirstName", "Potapoff")
            .verify.containsText("@secondRowInAcademicTitleName", "Academic")
            .verify.containsText("@secondRowInColumnTitle", "functionTitle")
            .verify.containsText("@secondRowInColumnEmail", "Sergey_Potapof@mail.ru")
            .verify.containsText("@secondRowInColumnPresenterType", "Delegate")

            .clickBySelector('@deleteSeconSpeaker')
            .clickBySelector('@alertYes')

            .verify.elementNotPresent('@secondRowInColumnContactType');
    },
});