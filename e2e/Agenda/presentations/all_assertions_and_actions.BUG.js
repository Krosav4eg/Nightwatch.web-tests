var _ = require('lodash');
var presteps = require('../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/1002/agenda')
    },

    'creation new container': function (browser) {
        var agendaPage = browser.page.agenda();
        agendaPage.
             containerCreation();
    },

    'choose static agenda element': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .clickBySelector('@addElementButton');

        var addElementPage = browser.page.agenda().section.addElement;
        addElementPage
            .clickBySelector('@staticAgendaElementOption');
    },

    'select presentation/panel discussion': function (browser) {
        var addElementPage = browser.page.agenda().section.addElement;
        addElementPage
            .clickBySelector('@presentationPanelDiscussionOption')
            .setValueBySelector('@startTimeInput', ['8:00', browser.Keys.ENTER])
            .setValueBySelector('@endTimeInput', ['9:45', browser.Keys.ENTER])
            .clickBySelector('@attachButton')
    },

    'attach new speaker ': function (browser) {
        var addPresentation = browser.page.agenda().section.addPresentation;
        addPresentation
            .clickBySelector('@checkbox1875')
            .clickBySelector('@saveButton');
    },

    'chosen speaker is displayed': function (browser) {
        var addElementPage = browser.page.agenda().section.addElement;
        addElementPage
            .verify.elementPresent('@text1875')
            .verify.elementPresent('@suominenOyjText')

            .clickBySelector('@noMeetingsAllowedOption')
            .clickBySelector('@saveButton');
    },

    'presentation/panel discussion has been created': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .verify.containsText('@timeElementText',"08:00 - 09:45")
            .verify.containsText('@namePlaceholderText',"Presentation / Panel discussion")
            .verify.elementPresent('@addRoomButton')
            .verify.elementPresent('@plusPresentationButton')
            .verify.elementPresent('@text1875')
            .verify.elementPresent('@suominenOyjText')
    },

    'speaker info assertion on presentations page': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .clickBySelector('@editPresentationButton')
    },

    'input information into input fields page': function (browser) {
        var tableSpeaker = browser.page.presentationsEdit().section.tableSpeaker;
        tableSpeaker
            .verify.elementPresent('@firstRowInColumnM')
            .verify.containsText('@firstRowInColumnContactType', 'Delegate')
            .verify.containsText('@firstRowInColumnCompanyName', 'Suominen Oyj')
            .verify.containsText('@firstRowInColumnLastName', 'Hulden')
            .verify.containsText('@firstRowInColumnFirstName', 'Margareta')
            .verify.containsText('@firstRowInColumnTitle', 'Vice President, R&D')
            .verify.containsText('@firstRowInColumnEmail', 'margareta.hulden@suominencorp.com');

        var presentation = browser.page.presentationsEdit().section.presentation;
        presentation

            .verify.elementPresent('@organizerText')
            .verify.elementPresent('@managementEventsText')

            .verify.elementPresent('@presentationTypeText')
            .verify.elementPresent('@panelDiscussionText')

            .verify.elementPresent('@headingText')
            .setValueBySelector('@headingInput', 'Heading')

            .verify.elementPresent('@subheading1Text')
            .setValueBySelector('@subheading1Input', 'Sub heading 1')

            .verify.elementPresent('@subheading2Text')
            .setValueByXpath('@subheading2Input', 'Sub heading 2')

            .verify.elementPresent('@subheading3Text')
            .setValueByXpath('@subheading3Input', 'Sub heading 3')

            .verify.elementPresent('@notesText')
            .setValueByXpath('@notesInput', 'Simply note')

            .verify.elementPresent('@createdText')
            .verify.elementPresent('@createdByText')

            .verify.elementPresent('@modifiedText')
            .verify.elementPresent('@modifiedByText')

            .verify.elementPresent('@cancelButton')
            .clickBySelector('@saveButton');
    },

    'check heading in presentation main page': function (browser) {
        browser
            .relUrl('/event/1002/agenda')
    },

    'back to the presentation edit page': function (browser) {
        browser
            .relUrl('/presentations/edit/1875')
    },

    'verify information about speaker': function (browser) {
        browser
            .clickBySelectorXpath('//a[@href="/presentations/1875/master-contact/126606"]')
            .useCss()
            .verify.valueContains('#lastName', 'Hulden')
            .verify.valueContains('#firstName', 'Margareta')
            .verify.valueContains('#academicTitle', '')
            .verify.valueContains('#functionTitle', 'Vice President, R&D')
            .verify.valueContains('#masterCompanyId', '')
            .verify.valueContains('#country', 'Finland')
            .verify.valueContains('#mobile', '+358-503856549')
            .verify.valueContains('#email', 'margareta.hulden@suominencorp.com')
    },

    'add new speaker verify': function (browser) {
        browser
            .back()
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .clickBySelectorXpath('//button[text()="Add speaker"]')
            .waitForElementVisible('//h4[text()="Attach Master Contact"]', 5000)

            .clickBySelectorXpath('//button[contains(text(),"Add new")]')
            .waitForElementVisible('//h4[text()="Add new guest speaker"]', 5000)

            .setValueByXpath('//input[@id="lastName"]', 'Gorohov')
            .setValueByXpath('//input[@id="firstName"]', 'Igor')
            .setValueByXpath('//input[@id="academicTitle"]', 'academicTitle')
            .setValueByXpath('//input[@id="functionTitle"]', 'Miami Vice')
            .setValueByXpath('//input[@id="masterCompanyId"]', 'Alex Andersen')
            .setValueByXpath('//input[@id="country"]', 'Russia')

            .clickBySelectorXpath('//*[contains(text(),"Russia")]')

            .setValueByXpath('//input[@id="mobile"]', '+358-503856549')
            .setValueByXpath('//input[@id="email"]', 'margareta.hulden@suojkjkjminencorp.com')

            .clickBySelectorXpath('(//button[text()="Save"])[2]')
            .clickBySelectorXpath('(//span[text()="×"])[1]');
    },

    'new added speaker is displayed': function (browser) {
        browser
            .verify.elementPresent('(//a[@href])[86]')
            .verify.containsText('//tr[2]/td[2]/span', 'Guest Speaker')
            .verify.containsText('//tr[2]/td[4]/span', 'Gorohov')
            .verify.containsText('//tr[2]/td[5]/span', 'Igor')
            .verify.containsText('//tr[2]/td[6]/span', 'academicTitle')
            .verify.containsText('//tr[2]/td[7]/span', 'Miami Vice')
            .verify.containsText('//tr[2]/td[8]/span', 'margareta.hulden@suojkjkjminencorp.com')
            .verify.containsText('//tr[2]/td[9]/span', 'Delegate');

    },

    'delete just added new a candidate': function (browser) {
        browser
            .clickBySelectorXpath('(//button[@class="btn btn-danger"])[1]')
            .clickBySelectorXpath('//button[@data-marker="me-confirm__button__button__yes"]')
            .verify.elementNotPresent('(//a[@href])[86]')
            .verify.elementNotPresent('//tr[2]/td[2]/span')
            .verify.elementNotPresent('//tr[2]/td[4]/span')
            .verify.elementNotPresent('//tr[2]/td[5]/span')
            .verify.elementNotPresent('//tr[2]/td[6]/span')
            .verify.elementNotPresent('//tr[2]/td[7]/span')
            .verify.elementNotPresent('//tr[2]/td[8]/span')
            .verify.elementNotPresent('//tr[2]/td[9]/span');
    },

    'delete presentation': function (browser) {
        browser
            .relUrl('/event/1002/agenda')
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .clickBySelectorXpath('//me-event-agenda-attached-presentation-list//i[@class="fa fa-trash-o delete-element"]')
            .clickBySelectorXpath('//modal[@class="modal fade in"]//button[@data-marker="me-confirm__button__button__yes"]')
    },

    'delete container': function (browser) {
        browser
            .deleteContainerForAgenda();
    },
});
