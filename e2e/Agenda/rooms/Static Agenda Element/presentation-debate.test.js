var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/213/agenda')
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

    'creating presentation-debate panel': function (browser) {
        var addElementPage = browser.page.agenda().section.addElement;
        addElementPage
            .clickBySelector('@presentationDebateOption')

            .setValueBySelector('@startTimeInput', ['9:30', browser.Keys.ENTER])
            .setValueBySelector('@endTimeInput', ['10:00', browser.Keys.ENTER])

            .clickBySelector('@noMeetingsAllowedOption')
            .clickBySelector('@attachButtonOnAddElementForm');

        var addPresentation = browser.page.agenda().section.addPresentation;
        addPresentation
            .verify.elementPresent('@daimlerAGText')
            .clickBySelector('@cancelButton');

        addElementPage
            .clickBySelector('@saveButton');
    },

    'redirection after creation presentation-debate ': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .verify.elementPresent('@timeElementText',"09:30 - 10:00")
            .verify.elementPresent('@namePlaceholderText',"Presentation / Debate")
    },

    'click add Content button': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .clickBySelector('@plusPresentationButton');
    },

    'add presentation to Presentation window is displayed': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//h4[text()="Add presentation to "]/b[text()="Presentation / Debate"]')

            .verify.elementPresent('(//div[@class="modal in fade"]//b[contains(text(), "Daimler AG")])[1]')
            .clickBySelectorXpath('//input[@data-marker="me-modal-attach-presentation-to-element__input__checkbox__932"]')

            .clickBySelectorXpath('//button[@data-marker="me-modal-attach-presentation-to-element__input__button__save"]');
    },

    'added person is displayed': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//h5[contains(text(),"09:30 - 10:00")]')
            .verify.elementPresent('//h5[contains(text(),"Presentation / Debate")]')

            .verify.elementPresent('//b[contains(text(), "Daimler AG")]')

            .verify.elementPresent('//button[@class="btn btn-primary"]/i[@class="fa fa-plus"]')
            .verify.elementPresent('//button[contains(text(), "Add room")]')

            .verify.elementPresent('//me-event-agenda-attached-presentation-list//i[@class="fa fa-pencil edit-element"]')
            .verify.elementPresent('//me-event-agenda-attached-presentation-list//i[@class="fa fa-trash-o delete-element"]')

            .clickBySelectorXpath('//button[contains(text(), "Add room")]');
    },

    'presentation-debate is displayed': function (browser) {
        browser
            .verify.elementPresent('//h4[contains(text(),"Add room for Presentation / Debate 24-05-2012 09:30:00 - 10:00:00")]')
            .useCss()
            .verify.elementPresent('input.form-control[title=Room]');
    },

    'input Room field is empty': function (browser) {
        browser
            .verify.valueContains("input.form-control[title=Room]", "")
            .setValueByCss('input.form-control[title=Room]', 'MyRoom#2')

            .useXpath()
            .clickBySelectorXpath('//button[@data-marker="me-event-agenda__button__save-room"]');
    },

    'set room is displaying': function (browser) {
        browser
            .clickBySelectorXpath('//button[contains(text(), "MyRoom#2")]');
    },

    'add room for Presentation is displayed again': function (browser) {
        browser
            .verify.elementPresent('//h4[contains(text(),"Add room for Presentation / Debate 24-05-2012 09:30:00 - 10:00:00")]', 2000)
            .useCss()
            .verify.valueContains("input.form-control[title=Room]", "MyRoom#2")

            .clickBySelectorCss('button[data-dismiss="modalRoom"]');
    },

    'assertion for room field contains name My Room#2': function (browser) {
        browser
            .clickBySelectorXpath('//a[2]/i[@class="fa fa-pencil edit-element"]')
            .useCss()
            .verify.valueContains("input#room", "MyRoom#2")

            .refresh()
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'delete presentation-leaderShip panel': function (browser) {
        browser
            .clickBySelectorXpath('//a[3]/i[@class="fa fa-trash-o delete-element"]')
            .verify.elementPresent('//modal-content[contains(text(),"Do you really want to delete element Presentation / Debate?")]')
            .clickBySelectorXpath('//button[@data-marker="me-confirm__button__button__yes"]');

    },

    'presentation-leaderShip has been deleted': function (browser) {
        browser
            .useXpath()
            .verify.elementNotPresent('//h5[contains(text(),"09:30 - 10:00")]')
            .verify.elementNotPresent('//h5[contains(text(),"Presentation / Debate")]')
            .verify.elementNotPresent('//button[contains(text(), "Add room")]');
    },

    'delete container': function (browser) {
        browser
            .pause(3000)
            .deleteContainerForAgenda();
    },
});
