var _ = require('lodash');
var presteps = require('../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {
    '@disabled': false,
    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/agenda')
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000);
    },
    'creation new container': function (browser) {
        browser
            .waitForElementVisible('button.btn.btn-primary.btn-block', 10000)
            .click('button.btn.btn-primary.btn-block')
            .pause(2000)
            .useXpath()
            .assert.containsText('//h4[contains(text(),"Container form")]', 'Container form')
            .useCss()
            .waitForElementVisible('input#heading', 1000)
            .setValue('input#heading', 'new_event2016 ')
            .waitForElementVisible('input#subHeading', 1000)
            .setValue('input#subHeading', 'test')
            .waitForElementVisible('#containerStartHour input', 1000)
            .setValue('#containerStartHour input', '8:00')
            .waitForElementVisible('#containerEndHour input', 1000)
            .setValue('#containerEndHour input', '10:00')
            .useXpath()
            .click('//form/div[2]/div/div/button[contains(text(),"Save")]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .useXpath()
            .assert.elementPresent('//b[contains(text(), "new_event2016")]')
            .assert.containsText('//b[1][contains(text(),"8:00")]', '8:00')
            .assert.containsText('//b[2][contains(text(),"10:00")]', '10:00');

    },

    'click on add element button': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('.btn.btn-info.btn-block', 4000)
            .click('.btn.btn-info.btn-block');
    },

    'element form window is displayed': function (browser) {
        browser
            .useXpath()
            .assert.elementPresent('//h4[contains(text(),"Element form")]')
            .assert.elementPresent('//label[contains(text(),"           Agenda Element Entry Type ")]');
    },
    'choose Static agenda element': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('select#agendaElementEntryTypeId.form-control', 2000)
            .click('select#agendaElementEntryTypeId.form-control')
            .useXpath()
            .waitForElementVisible('//option[contains(text(),"Static agenda element")]', 5000)
            .click('//option[contains(text(),"Static agenda element")]');

    },

    'assertion Agenda Element Type drop down list': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('select#agendaElementTypeId', 5000)
            .click('select#agendaElementTypeId')
            .assert.containsText('option[value="35"]', '               Awards Panel             ')
            .useXpath()
            .assert.containsText('//option[contains(text(),"               Headline             ")]', '               Headline             ')
            .useCss()
            .assert.containsText('option[value="27"]', '               Presentation / Case             ')
            .assert.containsText('option[value="19"]', '               Presentation / Chairman             ')
            .assert.containsText('option[value="28"]', '               Presentation / Cross-Function Keynote             ')
            .assert.containsText('option[value="18"]', '               Presentation / Debate             ')
            .assert.containsText('option[value="29"]', '               Presentation / FishBowl             ')
            .assert.containsText('option[value="1"]', '               Presentation / Keynote             ')
            .assert.containsText('option[value="30"]', '               Presentation / Leadership presentation             ')
            .assert.containsText('option[value="17"]', '               Presentation / Panel discussion             ')
            .assert.containsText('option[value="31"]', '               Presentation / Snapshot             ')
            .assert.containsText('option[value="21"]', '               Presentation / Spotlight             ');
    },

    'select presentation/case': function (browser) {
        browser
            .waitForElementVisible('option[value="27"', 5000)
            .click('option[value="27"]');

    },

    'set start time ': function (browser) {
        browser
            .waitForElementVisible('me-date-time-input#elementStartHour input.form-control.dateTimeInput.dateTimeInput', 5000)
            .setValue('me-date-time-input#elementStartHour input.form-control.dateTimeInput.dateTimeInput', ['8:00', browser.Keys.ENTER])
            .pause(1000);
    },

    'set end time ': function (browser) {
        browser
            .waitForElementVisible('me-date-time-input#elementEnd input.form-control.dateTimeInput.dateTimeInput', 1000)
            .setValue('me-date-time-input#elementEnd input.form-control.dateTimeInput.dateTimeInput', ['9:45', browser.Keys.ENTER])
            .pause(1000)
            .useXpath()
            .waitForElementVisible('//label[contains(text(),"           End time ")]', 1000);
    },

    'presentation/case page assertion': function (browser) {
        browser
            .assert.containsText('//label[contains(text(),"           End time ")]', 'End time')
            .assert.containsText('//label[contains(text(),"           Meeting allowed ")]', 'Meeting allowed')
            .assert.containsText('//option[contains(text(),"                 No meetings allowed               ")]', 'No meetings allowed')
            .assert.containsText('//label[contains(text(),"Groups Used")]', 'Groups Used')
            .assert.containsText('//label[contains(text(),"Event Groups")]', 'Event Groups')
            .assert.elementPresent('//div[text()="               Group 1 - orange             "]')
            .assert.elementPresent('//div[text()="               Group 2 - violet             "]')
            .assert.containsText('//label[text()="Attach role/presentation"]', 'Attach role/presentation')
            .assert.elementPresent('//me-event-agenda-element-presentation/div/div[2]/button[text()="Attach"]', 'Attach')
            .assert.containsText('//label[contains(text(),"Show in calendars")]', 'Show in calendars')
            .assert.elementPresent('//label[text()="               Delegates             "]')
            .assert.elementPresent('//label[text()="               Provider representatives             "]')
            .assert.containsText('//label[contains(text(),"Publish WWW")]', 'Publish WWW')
            .useCss()
            .assert.elementPresent('#visibilityPublishWWWYes')
            .assert.elementPresent('#visibilityPublishWWWNo')
            .useXpath()
            .assert.containsText('//div[@class="form-group"]/div/label[contains(text(),"Room")]', 'Room')
            .useCss()
            .waitForElementVisible('input#room', 3000);
    },

    'click on attach button': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//me-event-agenda-element-presentation/div/div[2]/button[text()="Attach"]', 1500)
            .click('//me-event-agenda-element-presentation/div/div[2]/button[text()="Attach"]')
            .useCss()
            .pause(2000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000);

    },

    'not selected speaker': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//modal[@class="modal fade in"]//h4[text()="Add presentation to "]', 4000)
            .assert.elementPresent('//modal[@class="modal fade in"]//button[@data-marker="me-modal-attach-presentation-to-element__input__button__save"]')
            .click('//modal[@class="modal fade in"]//button[@data-marker="me-modal-attach-presentation-to-element__input__button__save"]')
            .pause(2500);
    },

    'none speaker is displayed': function (browser) {
        browser
            .useXpath()
            .assert.elementNotPresent('//modal[@class="modal fade in"]//td[text()="3756"]')
            .assert.elementNotPresent('//modal[@class="modal fade in"]//td[text()="3758"]');
    },

    'attach new speaker ': function (browser) {
        browser
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .useXpath()
            .waitForElementVisible('//me-event-agenda-element-presentation/div/div[2]/button[text()="Attach"]', 3000)
            .click('//me-event-agenda-element-presentation/div/div[2]/button[text()="Attach"]')
            .waitForElementVisible('//modal[@class="modal fade in"]//h4[text()="Add presentation to "]', 4000)
            .waitForElementVisible('//modal[@class="modal fade in"]//input[@data-marker="me-modal-attach-presentation-to-element__input__checkbox__3723"]', 4000)
            .click('//modal[@class="modal fade in"]//input[@data-marker="me-modal-attach-presentation-to-element__input__checkbox__3756"]')
            .pause(500)
            .click('//modal[@class="modal fade in"]//input[@data-marker="me-modal-attach-presentation-to-element__input__checkbox__3758"]')
            .assert.elementPresent('//modal[@class="modal fade in"]//button[@data-marker="me-modal-attach-presentation-to-element__input__button__save"]')
            .click('//modal[@class="modal fade in"]//button[@data-marker="me-modal-attach-presentation-to-element__input__button__save"]')
            .pause(2000);
    },

    'chosen speaker is displayed': function (browser) {
        browser
            .waitForElementVisible('//modal[@class="modal fade in"]//td[text()="3756"]',5000)
            .assert.elementPresent('//modal[@class="modal fade in"]//td[text()="3756"]')
            .assert.elementPresent('//li[text()=" - Kennedy Cathal             "]')
            .assert.elementPresent('//a[@href="/presentations/edit/3756"]//i[@class="fa fa-pencil edit-element"]')
            .assert.elementPresent('//tr[1]//i[@class="fa fa-trash-o delete-element"]')
            .assert.elementPresent('//modal[@class="modal fade in"]//td[text()="3758"]')
            .assert.elementPresent('//li[text()=" - Vekve Sandra             "]')
            .assert.elementPresent('//a[@href="/presentations/edit/3758"]//i[@class="fa fa-pencil edit-element"]')
            .assert.elementPresent('//tr[2]//i[@class="fa fa-trash-o delete-element"]')
            .assert.elementPresent('//i[@class="fa fa-plus"]')
            .waitForElementVisible('//div/div/div/div/button[contains(text(),"Save")]', 4000)
            .click('//div/div/div/div/button[contains(text(),"Save")]')
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .pause(3000);
    },

    'chosen speakers are displayed': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h5[contains(text(),"08:00 - 09:45")]','10000')
            .assert.elementPresent('//h5[contains(text(),"08:00 - 09:45")]')
            .assert.elementPresent('//h5[contains(text(),"Presentation / Case")]')
            .assert.elementPresent('//button[contains(text(), "       Add room     ")]')
            .assert.elementPresent('//button[@class="btn btn-primary"]/i[@class="fa fa-plus"]')
            .assert.elementPresent('//td[text()="3756"]')
            .assert.elementPresent('//div[@class=""]//tr[1]//li[text()=" - Kennedy Cathal             "]')
            .assert.elementPresent('//a[@href="/presentations/edit/3756"]/i')
            .assert.elementPresent('//me-event-agenda-attached-presentation-list//i[@class="fa fa-trash-o delete-element"]')
            .assert.elementPresent('//td[text()="3758"]')
            .assert.elementPresent('//div[@class=""]//tr[1]//li[text()=" - Vekve Sandra             "]')
            .assert.elementPresent('//div[@class=""]//tr[1]//li[text()=" - Eriksen Olav             "]')
            .assert.elementPresent('//a[@href="/presentations/edit/3758"]/i')
            .assert.elementPresent('//table[@class="table table-striped"]/tr[2]/td[4]/a[2]/i[@class="fa fa-trash-o delete-element"]');
    },

    'delete presentation': function (browser) {
        browser
            .waitForElementVisible('//i[@class="fa fa-trash-o delete-element"]', 2000)
            .click('//i[@class="fa fa-trash-o delete-element"]')
            .waitForElementVisible('//modal[@class="modal fade in"]//h4[text()="Confirmation"]', 4000)
            .waitForElementVisible('//modal[@class="modal fade in"]//button[@data-marker="me-confirm__button__button__yes"]', 2000)
            .click('//modal[@class="modal fade in"]//button[@data-marker="me-confirm__button__button__yes"]')
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(2000);
    },

    'delete container': function (browser) {
        browser
            .click('.fa.fa-trash-o.delete-container')
            .pause(1500)
            .waitForElementVisible('modal.modal.fade.in div.modal-footer>button.btn.btn-success', 4000)
            .click('modal.modal.fade.in div.modal-footer>button.btn.btn-success')
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(1000)
            .useXpath()
            .assert.elementNotPresent('//b[contains(text(), "new_event2016")]');

    },
});
