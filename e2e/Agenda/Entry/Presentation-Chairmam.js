/**
 * Created by Sergey Potapov on 23.11.2016.
 */
var _ = require('lodash');
var presteps = require('../../presteps/presteps.js');

module.exports = _.assign(presteps, {
    '@disabled': true,
    'authorization': function (browser) {
        browser
            .url('http://alpha.skynet.managementevents.com')
            .assert.title('Skynet 2')
            .waitForElementVisible('input[name="username"]', 1000)
            .setValue('input[name="username"]', 'xsolve')
            .waitForElementVisible('input[type="password"]', 1000)
            .setValue('input[type="password"]', 'xs0lv3')
            .waitForElementVisible('button[type="submit"]', 1000)
            .click('button[type="submit"]')
            .pause(5000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(1000)
            .assert.containsText('div#page-heading', 'Dashboard')
    },
    'redirection to agenda': function (browser) {
        browser
            .url('http://alpha.skynet.managementevents.com/event/212/agenda')
            .pause(3000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(1000)
    },
    'click on add element button': function (browser) {
        browser
            .pause(2000)
            .useCss()
            .waitForElementVisible('.btn.btn-info.btn-block', 1000)
            .click('.btn.btn-info.btn-block')
    },
    'element form window is displayed': function (browser) {
        browser
            .useXpath()
            .assert.elementPresent('//h4[contains(text(),"Element form")]')
            .assert.elementPresent('//label[contains(text(),"           Agenda Element Entry Type ")]')
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
            .pause(2000)

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
            .assert.elementPresent('//p[text()=" Field is required.           "]')
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
            .assert.containsText('option[value="21"]', '               Presentation / Spotlight             ')
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
            .pause(1500)

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
            .waitForElementVisible('input#room', 3000)
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
            .pause(1000)


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
            .pause(2000)


    },
    'click on attach button': function (browser) {
        browser
            .useXpath()
            .click('//me-event-agenda-element-presentation/div/div[2]/button[text()="Attach"]')
            .pause(1000)
    },
    'add presentation window is displayed': function (browser) {
        browser
            .waitForElementVisible('//h4[text()="Add presentation to "]', 1000)
            .waitForElementVisible('//input[@data-marker="me-modal-attach-presentation-to-element__input__checkbox__3729"]', 1000)
            .click('//input[@data-marker="me-modal-attach-presentation-to-element__input__checkbox__3729"]')
            .waitForElementVisible('//button[@data-marker="me-modal-attach-presentation-to-element__input__button__save"]', 1000)
            .click('//button[@data-marker="me-modal-attach-presentation-to-element__input__button__save"]')
            .pause(2000)

    },
    'chosen person is displayed': function (browser) {
        browser
            .waitForElementVisible('//li[text()=" - Weber Jürgen             "]', 1000)
            .waitForElementVisible('//i[@class="fa fa-pencil edit-element"]', 1000)
            .waitForElementVisible('//i[@class="fa fa-trash-o delete-element"]', 1000)
            .waitForElementVisible('//i[@class="fa fa-plus"]', 1000)
            .waitForElementVisible('//div/div/div/div/button[contains(text(),"Save")]', 4000)
            .click('//div/div/div/div/button[contains(text(),"Save")]')
    },

    'presentation chairman has been created': function (browser) {
        browser
            .pause(2000)
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(3000)
            .useXpath()
            .waitForElementVisible('//h5[contains(text(),"08:00 - 09:45")]', 2000)
            .waitForElementVisible('//h5[contains(text(),"Presentation / Chairman")]', 2000)
            .waitForElementVisible('//button[contains(text(), "Add room")]', 2000)
            .waitForElementVisible('//li[text()=" - Weber Jürgen             "]', 2000)
            .waitForElementVisible('//button[@class="btn btn-primary"]/i[@class="fa fa-plus"]', 2000)
            .waitForElementVisible('//me-event-agenda-attached-presentation-list//i[@class="fa fa-pencil edit-element"]', 2000)
            .waitForElementVisible('//me-event-agenda-attached-presentation-list//i[@class="fa fa-trash-o delete-element"]', 2000)
    }
    ,
    'click on edit presentation/chairman panel': function (browser) {
        browser
            .pause(1000)
            .waitForElementVisible('//a[2]/i[@class="fa fa-pencil edit-element"]', 2000)
            .click('//a[2]/i[@class="fa fa-pencil edit-element"]')
            .pause(2000)
    }
    ,
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
            .pause(2000)
            .useXpath()
            .waitForElementVisible('//button[@data-marker="me-event-agenda-element-form__input__button__cancel"]', 1000)
            .click('//button[@data-marker="me-event-agenda-element-form__input__button__cancel"]')
            .assert.elementNotPresent('//span[@class="label orangeGroupColorForEvent"]')
            .assert.elementNotPresent('//span[@class="label violetGroupColorForEvent"]');

    }
    ,
    'click on pencil option': function (browser) {
        browser
            .pause(1000)
            .waitForElementVisible('//a[2]/i[@class="fa fa-pencil edit-element"]', 2000)
            .click('//a[2]/i[@class="fa fa-pencil edit-element"]')
            .pause(2000)
    }
    ,
    'putting check-boxes in Group 1 & Group 2': function (browser) {
        browser
            .assert.elementPresent('//div[text()="               Group 1 - orange             "]')

            .assert.elementPresent('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__300"]/div/input')
            .click('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__300"]/div/input')
            .assert.elementPresent('//div[text()="               Group 2 - violet             "]')
            .assert.elementPresent('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__301"]/div/input')
            .click('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__301"]/div/input')
            .waitForElementVisible('//div[@class="col-sm-12 container_btn_group"]/button[2][contains(text(),"Save")]', 2000)
            .click('//div[@class="col-sm-12 container_btn_group"]/button[2][contains(text(),"Save")]')
    }
    ,

    'redirection after selection "Group 1 - orange" & "Group 2 - violet"  page': function (browser) {
        browser
            .pause(2000)
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(3000)
            .useXpath()
            .waitForElementVisible('//h5[contains(text(),"08:00 - 09:45")]', 2000)
            .waitForElementVisible('//h5[contains(text(),"Presentation / Chairman")]', 2000)
            .waitForElementVisible('//button[contains(text(), "Add room")]', 2000)
            .waitForElementVisible('//span[@class="label orangeGroupColorForEvent"]', 2000)
            .assert.containsText('//span[@class="label orangeGroupColorForEvent"]', 'Group 1 - orange')
            .waitForElementVisible('//span[@class="label violetGroupColorForEvent"]', 2000)
            .assert.containsText('//span[@class="label violetGroupColorForEvent"]', 'Group 2 - violet')
    }
    ,
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
            .pause(5000)

    },

    'presentation/chairman has been deleted': function (browser) {
        browser
            .useXpath()
            .assert.elementNotPresent('//h5[contains(text(),"08:00 - 09:45")]')
            .assert.elementNotPresent('//h5[contains(text(),"Presentation / Chairman")]')
            .assert.elementNotPresent('//button[contains(text(), "Add room")]');


    },


})
;
