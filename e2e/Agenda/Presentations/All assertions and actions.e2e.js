var _ = require('lodash');
var presteps = require('../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {
    '@disabled': true,
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
            .pause(3000)
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
            .waitForElementVisible('//h4[contains(text(),"Element form")]',5000)
            .assert.elementPresent('//h4[contains(text(),"Element form")]')
            .assert.elementPresent('//label[contains(text(),"           Agenda Element Entry Type ")]');
    },

    'choose Static agenda element': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('select#agendaElementEntryTypeId.form-control', 2000)
            .click('select#agendaElementEntryTypeId.form-control')
            .pause(1000)
            .useXpath()
            .waitForElementVisible('//option[contains(text(),"Static agenda element")]', 1000)
            .click('//option[contains(text(),"Static agenda element")]');

    },

    'assertion Agenda Element Type drop down list': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('select#agendaElementTypeId', 2000)
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
            .pause(1000)
            .click('option[value="27"]')
            .pause(1000);
    },

    'set start time ': function (browser) {
        browser
            .waitForElementVisible('me-date-time-input#elementStartHour input.form-control.dateTimeInput.dateTimeInput', 1000)
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
            .click('//me-event-agenda-element-presentation/div/div[2]/button[text()="Attach"]');
    },

    'attach new speaker ': function (browser) {
        browser
            .waitForElementVisible('//me-event-agenda-element-presentation/div/div[2]/button[text()="Attach"]', 1000)
            .click('//me-event-agenda-element-presentation/div/div[2]/button[text()="Attach"]')
            .waitForElementVisible('//modal[@class="modal fade in"]//h4[text()="Add presentation to "]', 1000)
            .waitForElementVisible('//modal[@class="modal fade in"]//input[@data-marker="me-modal-attach-presentation-to-element__input__checkbox__3725"]', 3000)
            .click('//modal[@class="modal fade in"]//input[@data-marker="me-modal-attach-presentation-to-element__input__checkbox__3725"]')
            .waitForElementVisible('//modal[@class="modal fade in"]//button[@data-marker="me-modal-attach-presentation-to-element__input__button__save"]', 2000)
            .click('//modal[@class="modal fade in"]//button[@data-marker="me-modal-attach-presentation-to-element__input__button__save"]')
            .pause(2000);
    },

    'chosen speaker is displayed': function (browser) {
        browser
            .assert.elementPresent('//modal[@class="modal fade in"]//td[text()="3725"]')
            .assert.elementPresent('//modal[@class="modal fade in"]//li/b[text()="EWE AG"]')
            .assert.elementPresent('//li[text()=" - Hermsmeier Jörg             "]')
            .assert.elementPresent('//modal[@class="modal fade in"]//li/b[text()="Norges Statsbaner AS (NSB)"]')
            .assert.elementPresent('//li[text()=" - Skreien Kaaby Oddvar Eirik             "]')
            .assert.elementPresent('//modal[@class="modal fade in"]//li/b[text()="Norwegian Ministry of Foreign Affairs"]')
            .assert.elementPresent('//li[text()=" - Vekve Sandra             "]')
            .assert.elementPresent('//modal[@class="modal fade in"]//li/b[text()="SpareBank 1 Gruppen AS"]')
            .assert.elementPresent('//li[text()=" - Eriksen Olav             "]')
            .assert.elementPresent('//i[@class="fa fa-pencil edit-element"]')
            .assert.elementPresent('//i[@class="fa fa-trash-o delete-element"]')
            .assert.elementPresent('//i[@class="fa fa-plus"]')
            .waitForElementVisible('//div/div/div/div/button[contains(text(),"Save")]', 4000)
            .click('//div/div/div/div/button[contains(text(),"Save")]');
    },

    'presentation/case has been created': function (browser) {
        browser
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .useXpath()
            .waitForElementVisible('//h5[contains(text(),"08:00 - 09:45")]', 2000)
            .waitForElementVisible('//h5[contains(text(),"Presentation / Case")]', 2000)
            .waitForElementVisible('//button[contains(text(), "Add room")]', 2000)
            .waitForElementVisible('//li/b[text()="EWE AG"]', 2000)
            .waitForElementVisible('//li[text()=" - Hermsmeier Jörg             "]', 2000)
            .waitForElementVisible('//li/b[text()="Norges Statsbaner AS (NSB)"]', 2000)
            .waitForElementVisible('//li[text()=" - Skreien Kaaby Oddvar Eirik             "]', 2000)
            .waitForElementVisible('//li/b[text()="Norwegian Ministry of Foreign Affairs"]', 2000)
            .waitForElementVisible('//li[text()=" - Vekve Sandra             "]', 2000)
            .waitForElementVisible('//li/b[text()="SpareBank 1 Gruppen AS"]', 2000)
            .waitForElementVisible('//li[text()=" - Eriksen Olav             "]', 2000)
            .waitForElementVisible('//button[@class="btn btn-primary"]/i[@class="fa fa-plus"]', 2000)
            .waitForElementVisible('//me-event-agenda-attached-presentation-list//i[@class="fa fa-pencil edit-element"]', 2000)
            .waitForElementVisible('//me-event-agenda-attached-presentation-list//i[@class="fa fa-trash-o delete-element"]', 2000);
    },

    'adding another speaker': function (browser) {
        browser
            .click('//button[@class="btn btn-primary"]/i[@class="fa fa-plus"]')
            .useCss()
            .pause(1500)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(3000)
            .useXpath()
            .waitForElementVisible('//modal[@class="modal fade in"]//h4[text()="Add presentation to "]', 2000)
            .waitForElementVisible('//modal[@class="modal fade in"]//input[@data-marker="me-modal-attach-presentation-to-element__input__checkbox__3756"]', 2000)
            .click('//modal[@class="modal fade in"]//input[@data-marker="me-modal-attach-presentation-to-element__input__checkbox__3756"]')
            .pause(1000)
            .waitForElementVisible('//modal[@class="modal fade in"]//button[@data-marker="me-modal-attach-presentation-to-element__input__button__save"]', 2000)
            .click('//modal[@class="modal fade in"]//button[@data-marker="me-modal-attach-presentation-to-element__input__button__save"]')
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 10000);

    },

    'another speaker has been created': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h5[contains(text(),"08:00 - 09:45")]', 2000)
            .waitForElementVisible('//h5[contains(text(),"Presentation / Case")]', 2000)
            .waitForElementVisible('//button[contains(text(), "Add room")]', 2000)
            .waitForElementVisible('//li/b[text()="EWE AG"]', 2000)
            .waitForElementVisible('//li[text()=" - Hermsmeier Jörg             "]', 2000)
            .waitForElementVisible('//li/b[text()="Norges Statsbaner AS (NSB)"]', 2000)
            .waitForElementVisible('//li[text()=" - Skreien Kaaby Oddvar Eirik             "]', 2000)
            .waitForElementVisible('//li/b[text()="Norwegian Ministry of Foreign Affairs"]', 2000)
            .waitForElementVisible('//li[text()=" - Vekve Sandra             "]', 2000)
            .waitForElementVisible('//li/b[text()="SpareBank 1 Gruppen AS"]', 2000)
            .waitForElementVisible('//li[text()=" - Eriksen Olav             "]', 2000)
            .waitForElementVisible('//button[@class="btn btn-primary"]/i[@class="fa fa-plus"]', 2000)
            .waitForElementVisible('//me-event-agenda-attached-presentation-list//i[@class="fa fa-pencil edit-element"]', 2000)
            .waitForElementVisible('//me-event-agenda-attached-presentation-list//i[@class="fa fa-trash-o delete-element"]', 2000)
            .assert.elementPresent('//a[@href="/presentations/edit/3725"]/i')
            .assert.elementPresent('//me-event-agenda-attached-presentation-list//i[@class="fa fa-trash-o delete-element"]')

            .assert.elementPresent('//td[text()="3756"]')
            .waitForElementVisible('//li/b[text()="Telenor ASA"]', 2000)
            .waitForElementVisible('//li[text()=" - Kennedy Cathal             "]', 2000)

            .assert.elementPresent('//a[@href="/presentations/edit/3756"]/i')
            .assert.elementPresent('//me-event-agenda-attached-presentation-list//i[@class="fa fa-trash-o delete-element"]');
    },

    'speaker info assertion on presentations page': function (browser) {
        browser
            .waitForElementVisible('//a[@href="EventPresentationIndex"]', 5000)
            .click('//a[@href="EventPresentationIndex"]')
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .useXpath()
            .waitForElementVisible('//h4[text()="Event (#212)"]', 5000)
            .waitForElementVisible('//h4[text()="Presentations"]', 5000)
            .waitForElementVisible('//h4[text()="Presentations - "]', 5000)
            .waitForElementVisible('//h4[text()="Presentations - "]/span[text()="30"]', 5000)
            .waitForElementVisible('//a[@href="/presentations/edit/3725"]', 5000)
            .waitForElementVisible('//table//tr[4]/td[3]/span/span[text()="           Management Events         "]', 5000)
            .waitForElementVisible('//table//tr[4]/td[4]/span[text()="         Case presentation       "]', 5000)
            .waitForElementVisible('//tr[4]/td[7]/span/ul/li[text()="             EWE AG           "]', 5000)
            .waitForElementVisible('//tr[4]/td[7]/span/ul/li[2][text()="             Norges Statsbaner AS (NSB)           "]', 5000)
            .waitForElementVisible('//tr[4]/td[7]/span/ul/li[3][text()="             Norwegian Ministry of Foreign Affairs           "]', 5000)
            .waitForElementVisible('//tr[4]/td[7]/span/ul/li[4][text()="             SpareBank 1 Gruppen AS           "]', 5000)
            .waitForElementVisible('//tr[4]/td[8]/span/ul/li[text()="             Hermsmeier           "]', 5000)
            .waitForElementVisible('//tr[4]/td[8]/span/ul/li[2][text()="             Skreien Kaaby           "]', 5000)
            .waitForElementVisible('//tr[4]/td[8]/span/ul/li[3][text()="             Vekve           "]', 5000)
            .waitForElementVisible('//tr[4]/td[8]/span/ul/li[4][text()="             Eriksen           "]', 5000)
            .waitForElementVisible('//tr[4]/td[9]/span/ul/li[1][text()="             Jörg           "]', 5000)
            .waitForElementVisible('//tr[4]/td[9]/span/ul/li[2][text()="             Oddvar Eirik           "]', 5000)
            .waitForElementVisible('//tr[4]/td[9]/span/ul/li[3][text()="             Sandra           "]', 5000)
            .waitForElementVisible('//tr[4]/td[9]/span/ul/li[4][text()="             Olav           "]', 5000)
            .back()
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .waitForElementVisible('a.btn.btn-default.day.active', 5000)
            .useXpath()
            .waitForElementVisible('//a[2][@class="btn btn-default day"]', 5000)


    },
    'delete 1-st speaker in list': function (browser) {
        browser
            .waitForElementVisible('//me-event-agenda-attached-presentation-list//i[@class="fa fa-trash-o delete-element"]', 2000)
            .click('//me-event-agenda-attached-presentation-list//i[@class="fa fa-trash-o delete-element"]')
            .pause(1500)
            .waitForElementVisible('//modal[@class="modal fade in"]//h4[text()="Confirmation"]', 2000)
            .waitForElementVisible('//modal[@class="modal fade in"]//div[text()="     Do you really want to detach current presentation?   "]', 2000)
            .waitForElementVisible('//modal[@class="modal fade in"]//button[@data-marker="me-confirm__button__button__yes"]', 2000)
            .click('//modal[@class="modal fade in"]//button[@data-marker="me-confirm__button__button__yes"]')
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 10000);

    },
    'edit presentation/case in Element form': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//div[@class="panel-heading orangeBlockColorForEvent"]/div/a[2]/i[@class="fa fa-pencil edit-element"]', 4000)
            .click('//div[@class="panel-heading orangeBlockColorForEvent"]/div/a[2]/i[@class="fa fa-pencil edit-element"]')
            .pause(3000);
    },
    'speaker wit id 3756 is displayed': function (browser) {
        browser
            .assert.elementPresent('//modal[@class="modal fade in"]//td[text()="3756"]')
            .assert.elementPresent('//modal[@class="modal fade in"]//li/b[text()="Telenor ASA"]')
            .assert.elementPresent('//modal[@class="modal fade in"]//li[text()=" - Kennedy Cathal             "]')
            .assert.elementPresent('//modal[@class="modal fade in"]//i[@class="fa fa-pencil edit-element"]')
            .assert.elementPresent('//modal[@class="modal fade in"]//i[@class="fa fa-trash-o delete-element"]')
            .assert.elementPresent('//modal[@class="modal fade in"]//i[@class="fa fa-plus"]')
    },

    'changing room number': function (browser) {
        browser
            .useXpath()
            .assert.containsText('//div[@class="form-group"]/div/label[contains(text(),"Room")]', 'Room')
            .useCss()
            .waitForElementVisible('input#room', 3000)
            .setValue('input#room', 'Room#7');
    },

    'change start time ': function (browser) {
        browser
            .waitForElementVisible('me-date-time-input#elementStartHour input.form-control.dateTimeInput.dateTimeInput', 1000)
            .clearValue('me-date-time-input#elementStartHour input.form-control.dateTimeInput.dateTimeInput')
            .setValue('me-date-time-input#elementStartHour input.form-control.dateTimeInput.dateTimeInput', ['8:30', browser.Keys.ENTER])
            .pause(1000);
    },

    'change end time ': function (browser) {
        browser
            .waitForElementVisible('me-date-time-input#elementEnd input.form-control.dateTimeInput.dateTimeInput', 1000)
            .clearValue('me-date-time-input#elementEnd input.form-control.dateTimeInput.dateTimeInput')
            .setValue('me-date-time-input#elementEnd input.form-control.dateTimeInput.dateTimeInput', ['9:30', browser.Keys.ENTER])
            .pause(1000)
            .useXpath()
            .waitForElementVisible('//div/div/div/div/button[contains(text(),"Save")]', 4000)
            .click('//div/div/div/div/button[contains(text(),"Save")]')
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 10000);

    },

    'changing speaker is displayed': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h5[contains(text(),"08:30 - 09:30")]',4000)
            .assert.elementPresent('//h5[contains(text(),"08:30 - 09:30")]')
            .assert.elementPresent('//h5[contains(text(),"Presentation / Case")]')
            .assert.elementPresent('//button[contains(text(), "Room#7")]')
            .assert.elementPresent('//button[@class="btn btn-primary"]/i[@class="fa fa-plus"]')
            .assert.elementPresent('//td[text()="3756"]')
            .waitForElementVisible('//li/b[text()="Telenor ASA"]', 2000)
            .waitForElementVisible('//li[text()=" - Kennedy Cathal             "]', 2000)
            .assert.elementPresent('//a[@href="/presentations/edit/3756"]/i')
            .assert.elementPresent('//me-event-agenda-attached-presentation-list//i[@class="fa fa-trash-o delete-element"]');
    },

    'delete presentation': function (browser) {
        browser
            .waitForElementVisible('//me-event-agenda-attached-presentation-list//i[@class="fa fa-trash-o delete-element"]', 2000)
            .click('//me-event-agenda-attached-presentation-list//i[@class="fa fa-trash-o delete-element"]')
            .pause(1500)
            .waitForElementVisible('//modal[@class="modal fade in"]//h4[text()="Confirmation"]', 2000)
            .waitForElementVisible('//modal[@class="modal fade in"]//button[@data-marker="me-confirm__button__button__yes"]', 2000)
            .click('//modal[@class="modal fade in"]//button[@data-marker="me-confirm__button__button__yes"]')
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 10000);

    },
    'delete container': function (browser) {
        browser
            .click('.fa.fa-trash-o.delete-container')
            .pause(1000)
            .waitForElementVisible('modal.modal.fade.in div.modal-footer>button.btn.btn-success', 1000)
            .click('modal.modal.fade.in div.modal-footer>button.btn.btn-success')
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .useXpath()
            .assert.elementNotPresent('//b[contains(text(), "new_event2016")]')
            .pause(1000);
    },
});
