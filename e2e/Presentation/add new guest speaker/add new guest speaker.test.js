var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/2008/presentations')
    },

    'check event data': function (browser) {
        var allInformation = browser.page.presentations().section.allInformation;
        allInformation
            .verify.containsText('@titleEvent', "Event (#2008)")
            .verify.containsText('@nameEvent', "NeedSeeker 18.5.2016")
            .verify.containsText('@localName', "Local name: NeedSeeker 18.5.2016")
            .verify.containsText('@dates', "Dates: 2016-05-18 08:00:00 - 2016-05-18 13:00:00")
            .verify.containsText('@venue', "Venue: Tapahtumakeskus Telakka, Helsinki");
    },

    'go to the edit presentation': function (browser) {
        var idColumn = browser.page.presentations().section.idColumn;
        idColumn
            .clickBySelector('@firstRow')
    },

    'add new guest speaker page verifyion': function (browser) {
        var tableSpeaker = browser.page.presentationsEdit().section.tableSpeaker;
        tableSpeaker
            .clickBySelector('@addSpeakerButton')


        var attachMasterContact = browser.page.presentationsEdit().section.attachMasterContact;
        attachMasterContact
            .clickBySelector('@addNewButton')

        var addNewGuestSpeaker = browser.page.presentationsEdit().section.addNewGuestSpeaker;
        addNewGuestSpeaker

            .verify.elementPresent('@lastNameInput')
            .verify.elementPresent('@firstNameInput')
            .verify.elementPresent('@academicTitleInput')
            .verify.elementPresent('@functionTitleInput')
            .verify.elementPresent('@masterCompanyIdInput')
            .verify.elementPresent('@countryInput')
            .verify.elementPresent('@mobileInput')
            .verify.elementPresent('@emailInput')
            .verify.elementPresent('@saveButton');
    },

    'last name alert message verifyion': function (browser) {
        var addNewGuestSpeaker = browser.page.presentationsEdit().section.addNewGuestSpeaker;
        addNewGuestSpeaker
            .clickBySelector('@lastNameInput')
            .clickBySelector('@firstNameInput')
            .verify.containsText('@lastNameError' ,"Last Name is required");
    },

    'first name alert message verifyion': function (browser) {
        var addNewGuestSpeaker = browser.page.presentationsEdit().section.addNewGuestSpeaker;
        addNewGuestSpeaker
            .clickBySelector('@firstNameInput')
            .clickBySelector('@academicTitleInput')
            .verify.containsText('@firstNameError' ,"First Name is required");
    },

    'academic title no alert message verifyion': function (browser) {
        var addNewGuestSpeaker = browser.page.presentationsEdit().section.addNewGuestSpeaker;
        addNewGuestSpeaker
            .clickBySelector('@academicTitleInput')
            .clickBySelector('@functionTitleInput')
            .verify.elementNotPresent('@academicTitleError');
    },

    'functional title no alert message verifyion': function (browser) {
        var addNewGuestSpeaker = browser.page.presentationsEdit().section.addNewGuestSpeaker;
        addNewGuestSpeaker
            .clickBySelector('@functionTitleInput')
            .clickBySelector('@masterCompanyIdInput')
            .verify.elementNotPresent('@functionTitleError');
    },

    'company no alert message verifyion': function (browser) {
        var addNewGuestSpeaker = browser.page.presentationsEdit().section.addNewGuestSpeaker;
        addNewGuestSpeaker
            .clickBySelector('@masterCompanyIdInput')
            .clickBySelector('@countryInput')
            .verify.elementNotPresent('@masterCompanyIdError');
    },

    'country alert message verifyion': function (browser) {
        var addNewGuestSpeaker = browser.page.presentationsEdit().section.addNewGuestSpeaker;
        addNewGuestSpeaker
            .clickBySelector('@countryInput')
            .clickBySelector('@mobileInput')
            .verify.containsText('@countryError' ,"Country");
    },

    'mobile alert message verifyion': function (browser) {
        var addNewGuestSpeaker = browser.page.presentationsEdit().section.addNewGuestSpeaker;
        addNewGuestSpeaker
            .clickBySelector('@mobileInput')
            .clickBySelector('@emailInput')
            .verify.containsText('@mobileError' ,"Mobile is not valid");
    },

    'email alert message verifyion': function (browser) {
        var addNewGuestSpeaker = browser.page.presentationsEdit().section.addNewGuestSpeaker;
        addNewGuestSpeaker
            .clickBySelector('@emailInput')
            .clickBySelector('@mobileInput')
            .verify.containsText('@emailError' ,"Email is required");
    },

    'blank click all alerts verifyion': function (browser) {
        browser
            .refresh()
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)

        var tableSpeaker = browser.page.presentationsEdit().section.tableSpeaker;
        tableSpeaker
            .clickBySelector('@addSpeakerButton')

        var attachMasterContact = browser.page.presentationsEdit().section.attachMasterContact;
        attachMasterContact
            .clickBySelector('@addNewButton')


        var addNewGuestSpeaker = browser.page.presentationsEdit().section.addNewGuestSpeaker;
        addNewGuestSpeaker

            .verify.elementPresent('@lastNameInput')
            .verify.elementPresent('@firstNameInput')
            .verify.elementPresent('@academicTitleInput')
            .verify.elementPresent('@functionTitleInput')
            .verify.elementPresent('@masterCompanyIdInput')
            .verify.elementPresent('@countryInput')
            .verify.elementPresent('@mobileInput')
            .verify.elementPresent('@emailInput')
            .verify.elementPresent('@saveButton')

            .clickBySelector('@saveButton')

            .verify.containsText('@lastNameError' ,"Last Name is required")
            .verify.containsText('@firstNameError' ,"First Name is required")

            .verify.elementNotPresent('@academicTitleError')
            .verify.elementNotPresent('@functionTitleError')
            .verify.elementNotPresent('@masterCompanyIdError')

            .verify.containsText('@countryError' ,"Country is required")
            .verify.containsText('@mobileError' ,"Mobile is not valid")
            .verify.containsText('@emailError' ,"Email is required");
    },
});