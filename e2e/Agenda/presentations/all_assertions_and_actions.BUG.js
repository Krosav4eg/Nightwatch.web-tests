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
            .clickBySelector('@checkbox629')
            .clickBySelector('@saveButton');
    },

    'chosen speaker is displayed': function (browser) {
        browser
            .verify.elementPresent('//td[text()="1875"]')
            .verify.elementPresent('//li/b[text()="Suominen Oyj"]')

            .verify.elementPresent('//i[@class="fa fa-pencil edit-element"]')
            .verify.elementPresent('//i[@class="fa fa-trash-o delete-element"]')
            .verify.elementPresent('//i[@class="fa fa-plus"]')

            .clickBySelectorXpath('//option[contains(text(),"No meetings allowed")]')

            .clickBySelectorXpath('//div/div/div/div/button[contains(text(),"Save")]');
    },

    'presentation/panel discussion has been created': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//h5[contains(text(),"08:00 - 09:45")]')
            .verify.elementPresent('//h5[contains(text(),"Presentation / Panel discussion")]')

            .verify.elementPresent('(//td[text()="1875"])[1]')
            .verify.elementPresent('//table[@class="table-agenda"]//li/b[contains(text(), "Suominen Oyj")]')

            .verify.elementPresent('//table[@class="table-agenda"]//li[(text()=" - Vekve Sandra             ")]')

            .verify.elementPresent('//button[@class="btn btn-primary"]/i[@class="fa fa-plus"]')
            .verify.elementPresent('//button[contains(text(), "Add room")]')

            .verify.elementPresent('//me-event-agenda-attached-presentation-list//i[@class="fa fa-pencil edit-element"]')
            .verify.elementPresent('//me-event-agenda-attached-presentation-list//i[@class="fa fa-trash-o delete-element"]');
    },

    'speaker info assertion on presentations page': function (browser) {
        browser
            .clickBySelectorXpath('//me-event-agenda-attached-presentation-list//i[@class="fa fa-pencil edit-element"]')

            .verify.elementPresent('//a[@href="/presentations/1875/master-contact/126606"]')
            .verify.containsText('(//tr[@class="hover"]//span)[2]', 'Delegate')
            .verify.containsText('(//tr[@class="hover"]//span)[3]', 'Suominen Oyj')
            .verify.containsText('(//tr[@class="hover"]//span)[4]', 'Hulden')
            .verify.containsText('(//tr[@class="hover"]//span)[5]', 'Margareta')
            .verify.containsText('(//tr[@class="hover"]//span)[7]', 'Vice President, R&D')
            .verify.containsText('(//tr[@class="hover"]//span)[8]', 'margareta.hulden@suominencorp.com');
    },

    'input information into input fields page': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//h1[contains(text(), "Edit Presentation (#1875)")]')
            .verify.elementPresent('//h4[contains(text(), "Presentation (#1875)")]')

            .verify.elementPresent('//label[contains(text(),"Organizer ")]')
            .verify.elementPresent('//span[contains(text(),"Management Events")]')

            .verify.elementPresent('//label[contains(text(),"Presentation Type")]')
            .verify.elementPresent('//span[contains(text(),"Panel discussion")]')

            .verify.elementPresent('//label[contains(text(),"Heading")]')
            .setValueByXpath('//input[@data-marker="me-event-presentation-form__input__heading"]', 'Heading')

            .verify.elementPresent('//label[contains(text(),"Sub heading 1")]')
            .setValueByXpath('//input[@data-marker="me-event-presentation-form__input__subheading0"]', 'Sub heading 1')

            .verify.elementPresent('//label[contains(text(),"Sub heading 2")]')
            .setValueByXpath('//input[@data-marker="me-event-presentation-form__input__subheading1"]', 'Sub heading 2')

            .verify.elementPresent('//label[contains(text(),"Sub heading 3")]')
            .setValueByXpath('//input[@data-marker="me-event-presentation-form__input__subheading2"]', 'Sub heading 3')

            .verify.elementPresent('//label[contains(text(),"Notes")]')
            .setValueByXpath('//textarea[@data-marker="me-event-presentation-form__textarea__notes"]', 'Simply note')

            .verify.elementPresent('//label[contains(text(),"Created")]')
            .verify.elementPresent('//label[contains(text(),"Created By")]')

            .verify.elementPresent('//label[contains(text(),"Modified")]')
            .verify.elementPresent('//label[text()="Modified By "]', 3000)

            .verify.elementPresent('(//div[@class="btn-toolbar"]//button[contains(text(),"Cancel")])[1]')
            .clickBySelectorXpath('(//div[@class="btn-toolbar"]//button[contains(text(),"Save")])[1]');
    },

    'check heading in presentation main page': function (browser) {
        browser
            .relUrl('/event/1002/agenda')
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .verify.elementPresent('(//td[text()="Heading"])[1]');
    },

    'back to the presentation edit page': function (browser) {
        browser
            .relUrl('/presentations/edit/1875')
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
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
