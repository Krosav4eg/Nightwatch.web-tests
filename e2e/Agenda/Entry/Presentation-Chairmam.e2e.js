var _ = require('lodash');
var presteps = require('../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {
    '@disabled':true ,
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

    'Choose Static agenda element': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('select#agendaElementEntryTypeId.form-control', 2000)
            .click('select#agendaElementEntryTypeId.form-control')
            .pause(1000)
            .useXpath()
            .waitForElementVisible('//option[contains(text(),"Static agenda element")]', 1000)
            .click('//option[contains(text(),"Static agenda element")]')
            .pause(2000);
    },

    'blank.click another field': function (browser) {
        browser
            .assert.containsText('//h4[contains(text(),"Element form")]', 'Element form')
            .waitForElementVisible('//label[contains(text(),"Agenda Element Type ")]', 2000)
            .assert.containsText('//label[contains(text(),"Agenda Element Type ")]', 'Agenda Element Type ')
            .click('//label[contains(text(),"Agenda Element Type ")]')
            .waitForElementVisible('//label[contains(text(),"           Start time ")]', 2000)
            .assert.containsText('//label[contains(text(),"           Start time ")]', 'Start time')
            .click('//label[contains(text(),"           Start time ")]')
            .assert.elementPresent('//p[text()=" Field is required.           "]');
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

    'blank.click Save': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//div/div/div/div/button[contains(text(),"Save")]', 4000)
            .click('//div/div/div/div/button[contains(text(),"Save")]')
            .assert.elementPresent('//p[text()=" Field is required.           "]')
            .assert.elementPresent('//p[text()=" Start Hour is required.           "]')
            .assert.elementPresent('//p[text()=" End Hour is required.           "]')
            .useCss()
            .pause(1000)
            .click('option[value="19"]')
            .pause(1500);
    },

    'presentation/chairman page assertion': function (browser) {
        browser
            .useXpath()
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

    'start time can not be before set time ': function (browser) {
        browser
            .waitForElementVisible('me-date-time-input#elementStartHour input.form-control.dateTimeInput.dateTimeInput', 1000)
            .setValue('me-date-time-input#elementStartHour input.form-control.dateTimeInput.dateTimeInput', ['7:59', browser.Keys.ENTER])
            .useXpath()
            .assert.elementPresent('//p[text()=" Date should be between 08:00 and 10:00           "]')
            .useCss()
            .click('me-date-time-input#elementStartHour input.form-control.dateTimeInput.dateTimeInput')
            .pause(1000)
            .clearValue('me-date-time-input#elementStartHour input.form-control.dateTimeInput.dateTimeInput')
            .setValue('me-date-time-input#elementStartHour input.form-control.dateTimeInput.dateTimeInput', ['8:00', browser.Keys.ENTER])
            .pause(1000);
    },

    'end time can not be after set time ': function (browser) {
        browser
            .waitForElementVisible('me-date-time-input#elementEnd input.form-control.dateTimeInput.dateTimeInput', 1000)
            .setValue('me-date-time-input#elementEnd input.form-control.dateTimeInput.dateTimeInput', ['10:01', browser.Keys.ENTER])
            .useXpath()
            .assert.elementPresent('//p[text()=" Date should be between 08:00 and 10:00           "]')
            .useCss()
            .click('me-date-time-input#elementEnd input.form-control.dateTimeInput.dateTimeInput')
            .pause(1000)
            .clearValue('me-date-time-input#elementEnd input.form-control.dateTimeInput.dateTimeInput')
            .setValue('me-date-time-input#elementEnd input.form-control.dateTimeInput.dateTimeInput', ['9:45', browser.Keys.ENTER])
            .pause(2000);
    },

    'click on attach button': function (browser) {
        browser
            .useXpath()
            .click('//me-event-agenda-element-presentation/div/div[2]/button[text()="Attach"]');
    },

    'add presentation window is displayed': function (browser) {
        browser
            .waitForElementVisible('//h4[text()="Add presentation to "]', 5000)
            .waitForElementVisible('//input[@data-marker="me-modal-attach-presentation-to-element__input__checkbox__3729"]', 1000)
            .click('//input[@data-marker="me-modal-attach-presentation-to-element__input__checkbox__3729"]')
            .waitForElementVisible('//button[@data-marker="me-modal-attach-presentation-to-element__input__button__save"]', 1000)
            .click('//button[@data-marker="me-modal-attach-presentation-to-element__input__button__save"]')
            .pause(2000);
    },

    'chosen person is displayed': function (browser) {
        browser
            .waitForElementVisible('//li[text()=" - Weber Jürgen             "]', 1000)
            .waitForElementVisible('//i[@class="fa fa-pencil edit-element"]', 1000)
            .waitForElementVisible('//i[@class="fa fa-trash-o delete-element"]', 1000)
            .waitForElementVisible('//i[@class="fa fa-plus"]', 1000)
            .waitForElementVisible('//div/div/div/div/button[contains(text(),"Save")]', 4000)
            .click('//div/div/div/div/button[contains(text(),"Save")]');
    },

    'presentation chairman has been created': function (browser) {
        browser
            .pause(2000)
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .useXpath()
            .waitForElementVisible('//h5[contains(text(),"08:00 - 09:45")]', 4000)
            .waitForElementVisible('//h5[contains(text(),"Presentation / Chairman")]', 4000)
            .waitForElementVisible('//button[contains(text(), "Add room")]', 4000)
            .waitForElementVisible('//li[text()=" - Weber Jürgen             "]', 4000)
            .waitForElementVisible('//button[@class="btn btn-primary"]/i[@class="fa fa-plus"]', 4000)
            .waitForElementVisible('//me-event-agenda-attached-presentation-list//i[@class="fa fa-pencil edit-element"]', 4000)
            .waitForElementVisible('//me-event-agenda-attached-presentation-list//i[@class="fa fa-trash-o delete-element"]', 4000);
    },

    'click on edit presentation/chairman panel': function (browser) {
        browser
            .waitForElementVisible('//a[2]/i[@class="fa fa-pencil edit-element"]', 5000)
            .click('//a[2]/i[@class="fa fa-pencil edit-element"]')
            .pause(2000);
    },

    'static agenda page displayed and click on background': function (browser) {
        browser
            .assert.containsText('//label[contains(text(),"           End time ")]', 'End time')
            .assert.containsText('//label[contains(text(),"           Meeting allowed ")]', 'Meeting allowed')
            .assert.containsText('//option[contains(text(),"                 No meetings allowed               ")]', 'No meetings allowed')
            .assert.containsText('//label[contains(text(),"Groups Used")]', 'Groups Used')
            .assert.containsText('//label[contains(text(),"Event Groups")]', 'Event Groups')
            .assert.elementPresent('//div[text()="               Group 1 - orange             "]')
            .assert.elementPresent('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__300"]/div/input')
            .click('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__300"]/div/input')
            .assert.elementPresent('//div[text()="               Group 2 - violet             "]')
            .assert.elementPresent('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__301"]/div/input')
            .click('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__301"]/div/input')
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
            .waitForElementVisible('input#room', 3000)
            .useXpath()
            .waitForElementVisible('//button[@data-marker="me-event-agenda-element-form__input__button__cancel"]', 4000)
            .click('//button[@data-marker="me-event-agenda-element-form__input__button__cancel"]')
            .assert.elementNotPresent('//span[@class="label orangeGroupColorForEvent"]')
            .assert.elementNotPresent('//span[@class="label violetGroupColorForEvent"]');
    },

    'click on pencil option': function (browser) {
        browser
            .pause(1000)
            .waitForElementVisible('//a[2]/i[@class="fa fa-pencil edit-element"]', 2000)
            .click('//a[2]/i[@class="fa fa-pencil edit-element"]')
            .pause(2000);
    },

    'putting check-boxes in Group 1 & Group 2': function (browser) {
        browser
            .assert.elementPresent('//div[text()="               Group 1 - orange             "]')
            .assert.elementPresent('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__300"]/div/input')
            .click('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__300"]/div/input')
            .assert.elementPresent('//div[text()="               Group 2 - violet             "]')
            .assert.elementPresent('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__301"]/div/input')
            .click('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__301"]/div/input')
            .waitForElementVisible('//div[@class="col-sm-12 container_btn_group"]/button[2][contains(text(),"Save")]', 2000)
            .click('//div[@class="col-sm-12 container_btn_group"]/button[2][contains(text(),"Save")]');
    },

    'redirection after selection "Group 1 - orange" & "Group 2 - violet"  page': function (browser) {
        browser
            .pause(2000)
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .useXpath()
            .waitForElementVisible('//h5[contains(text(),"08:00 - 09:45")]', 4000)
            .waitForElementVisible('//h5[contains(text(),"Presentation / Chairman")]', 4000)
            .waitForElementVisible('//button[contains(text(), "Add room")]', 4000)
            .waitForElementVisible('//span[@class="label orangeGroupColorForEvent"]', 4000)
            .assert.containsText('//span[@class="label orangeGroupColorForEvent"]', 'Group 1 - orange')
            .waitForElementVisible('//span[@class="label violetGroupColorForEvent"]', 4000)
            .assert.containsText('//span[@class="label violetGroupColorForEvent"]', 'Group 2 - violet');
    },

    'delete presentation/chairman panel': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//a[3]/i[@class="fa fa-trash-o delete-element"]', 1000)
            .click('//a[3]/i[@class="fa fa-trash-o delete-element"]')
            .waitForElementVisible('//div[text()="     Do you really want to delete element Presentation / Chairman?   "]', 2000)
            .click('//modal[@class="modal fade in"]/div/div/modal-footer/div/button[@data-marker="me-confirm__button__button__yes"]')
            .pause(2000)
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(1500);
    },

    'presentation/chairman has been deleted': function (browser) {
        browser
            .useXpath()
            .assert.elementNotPresent('//h5[contains(text(),"08:00 - 09:45")]')
            .assert.elementNotPresent('//h5[contains(text(),"Presentation / Chairman")]')
            .assert.elementNotPresent('//button[contains(text(), "Add room")]');
    },
    'delete container': function (browser) {
        browser
            .useCss()
            .click('.fa.fa-trash-o.delete-container')
            .pause(1000)
            .waitForElementVisible('modal.modal.fade.in div.modal-footer>button.btn.btn-success', 5000)
            .click('modal.modal.fade.in div.modal-footer>button.btn.btn-success')
            .pause(3000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(1000)
            .useXpath()
            .assert.elementNotPresent('//b[contains(text(), "new_event2016")]');

    },
});
