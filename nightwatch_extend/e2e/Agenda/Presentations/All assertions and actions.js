/**
 * Created by Sergey Potapov on 28.11.2016.
 */

var _ = require('lodash');
var presteps = require('../../presteps/presteps.js');

module.exports = _.assign(presteps, {
    '@disabled': false,
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
    'choose Static agenda element': function (browser) {
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
    'select presentation/case': function (browser) {
        browser
            .pause(1000)
            .click('option[value="27"]')
            .pause(1000)

    },
    'set start time ': function (browser) {
        browser
            .waitForElementVisible('me-date-time-input#elementStartHour input.form-control.dateTimeInput.dateTimeInput', 1000)
            .setValue('me-date-time-input#elementStartHour input.form-control.dateTimeInput.dateTimeInput', ['8:00', browser.Keys.ENTER])
            .pause(500)


    },
    'set end time ': function (browser) {
        browser
            .waitForElementVisible('me-date-time-input#elementEnd input.form-control.dateTimeInput.dateTimeInput', 1000)
            .setValue('me-date-time-input#elementEnd input.form-control.dateTimeInput.dateTimeInput', ['9:45', browser.Keys.ENTER])
            .pause(1000)
            .useXpath()
            .waitForElementVisible('//label[contains(text(),"           End time ")]', 1000)


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
            .waitForElementVisible('input#room', 3000)
    },

    'click on attach button': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//me-event-agenda-element-presentation/div/div[2]/button[text()="Attach"]', 1500)
            .click('//me-event-agenda-element-presentation/div/div[2]/button[text()="Attach"]')

    },
    // 'add presentation window is displayed': function (browser) {
    //     browser
    //         .useCss()
    //         .pause(3000)
    //         .waitForElementNotVisible('#thisIsMainLoader', 10000)
    //         .pause(3000)
    //         .useXpath()
    //         .waitForElementVisible('//modal[@class="modal fade in"]//h4[text()="Add presentation to "]', 1000)
    //         .waitForElementVisible('//button[@data-marker="me-modal-attach-presentation-to-element__input__button__save"]', 2000)
    //         .click('//button[@data-marker="me-modal-attach-presentation-to-element__input__button__save"]')
    //         .pause(2000)
    // },
    'attach new speaker ': function (browser) {
        browser
            .waitForElementVisible('//me-event-agenda-element-presentation/div/div[2]/button[text()="Attach"]', 1000)
            .click('//me-event-agenda-element-presentation/div/div[2]/button[text()="Attach"]')
            .waitForElementVisible('//modal[@class="modal fade in"]//h4[text()="Add presentation to "]', 1000)
            .waitForElementVisible('//modal[@class="modal fade in"]//input[@data-marker="me-modal-attach-presentation-to-element__input__checkbox__3725"]', 2000)
            .click('//modal[@class="modal fade in"]//input[@data-marker="me-modal-attach-presentation-to-element__input__checkbox__3725"]')
            .waitForElementVisible('//modal[@class="modal fade in"]//button[@data-marker="me-modal-attach-presentation-to-element__input__button__save"]', 2000)
            .click('//modal[@class="modal fade in"]//button[@data-marker="me-modal-attach-presentation-to-element__input__button__save"]')
            .pause(2000)
    },

    'chosen speaker is displayed': function (browser) {
        browser
            .assert.elementPresent('//modal[@class="modal fade in"]//td[text()="3725"]')
            .assert.elementPresent('//li[text()=" - Hermsmeier Jörg             "]')
            .assert.elementPresent('//i[@class="fa fa-pencil edit-element"]')
            .assert.elementPresent('//i[@class="fa fa-trash-o delete-element"]')
            .assert.elementPresent('//i[@class="fa fa-plus"]')
            .waitForElementVisible('//div/div/div/div/button[contains(text(),"Save")]', 4000)
            .click('//div/div/div/div/button[contains(text(),"Save")]')
    },
    'presentation/case has been created': function (browser) {
        browser
            .pause(4000)
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(3000)
            .useXpath()
            .waitForElementVisible('//h5[contains(text(),"08:00 - 09:45")]', 2000)
            .waitForElementVisible('//h5[contains(text(),"Presentation / Case")]', 2000)
            .waitForElementVisible('//button[contains(text(), "Add room")]', 2000)
            .waitForElementVisible('//li[text()=" - Hermsmeier Jörg             "]', 2000)
            .waitForElementVisible('//button[@class="btn btn-primary"]/i[@class="fa fa-plus"]', 2000)
            .waitForElementVisible('//me-event-agenda-attached-presentation-list//i[@class="fa fa-pencil edit-element"]', 2000)
            .waitForElementVisible('//me-event-agenda-attached-presentation-list//i[@class="fa fa-trash-o delete-element"]', 2000)
    }
    ,
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
            .pause(1500)
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(3000)
    },
    'another speaker has been created': function (browser) {
        browser
            .pause(2000)
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(3000)
            .useXpath()
            .assert.elementPresent('//h5[contains(text(),"08:00 - 09:45")]')
            .assert.elementPresent('//h5[contains(text(),"Presentation / Case")]')
            .assert.elementPresent('//button[contains(text(), "Add room")]')
            .assert.elementPresent('//button[@class="btn btn-primary"]/i[@class="fa fa-plus"]')
            .assert.elementPresent('//td[text()="3725"]')
            .assert.elementPresent('//li[text()=" - Hermsmeier Jörg             "]')
            .assert.elementPresent('//a[@href="/presentations/edit/3725"]/i')
            .assert.elementPresent('//me-event-agenda-attached-presentation-list//i[@class="fa fa-trash-o delete-element"]')
            .assert.elementPresent('//td[text()="3756"]')
            .assert.elementPresent('//a[@href="/presentations/edit/3756"]/i')
            .assert.elementPresent('//me-event-agenda-attached-presentation-list//i[@class="fa fa-trash-o delete-element"]')
    }
    ,
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
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(3000)
    },
    //assertion for deleting 1-st speaker

    'edit presentation/case in Element form': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//div[@class="panel-heading orangeBlockColorForEvent"]/div/a[2]/i[@class="fa fa-pencil edit-element"]', 1500)
            .click('//div[@class="panel-heading orangeBlockColorForEvent"]/div/a[2]/i[@class="fa fa-pencil edit-element"]')
            .pause(2000)
    },
    // ' Element form page appear': function (browser) {
    //     browser
    //         .waitForElementVisible('//label[contains(text(),"           End time ")]', 2000)
    //         .assert.containsText('//label[contains(text(),"           End time ")]', 'End time')
    //         .assert.containsText('//label[contains(text(),"           Meeting allowed ")]', 'Meeting allowed')
    //         .assert.containsText('//option[contains(text(),"                 No meetings allowed               ")]', 'No meetings allowed')
    //         .assert.containsText('//label[contains(text(),"Groups Used")]', 'Groups Used')
    //         .assert.containsText('//label[contains(text(),"Event Groups")]', 'Event Groups')
    //         .assert.elementPresent('//div[text()="               Group 1 - orange             "]')
    //         .assert.elementPresent('//div[text()="               Group 2 - violet             "]')
    //
    //         .assert.containsText('//label[text()="Attach role/presentation"]', 'Attach role/presentation')
    //         .assert.elementPresent('//me-event-agenda-element-presentation/div/div[2]/button[text()="Attach"]', 'Attach')
    //
    //         .assert.containsText('//label[contains(text(),"Show in calendars")]', 'Show in calendars')
    //         .assert.elementPresent('//label[text()="               Delegates             "]')
    //         .assert.elementPresent('//label[text()="               Provider representatives             "]')
    //         .assert.containsText('//label[contains(text(),"Publish WWW")]', 'Publish WWW')
    //         .useCss()
    //         .assert.elementPresent('#visibilityPublishWWWYes')
    //         .assert.elementPresent('#visibilityPublishWWWNo')
    //         .useXpath()
    //         .assert.containsText('//div[@class="form-group"]/div/label[contains(text(),"Room")]', 'Room')
    //         .useCss()
    //         .waitForElementVisible('input#room', 3000)
    //         .assert.elementPresent('//modal[@class="modal fade in"]//td[text()="3756"]')
    //         .assert.elementPresent('//modal//li[text()=" - Vekve Sandra             "]')
    //         .assert.elementPresent('//modal//li[text()=" - Skreien Kaaby Oddvar Eirik             "]')
    //         .assert.elementPresent('//i[@class="fa fa-pencil edit-element"]')
    //         .assert.elementPresent('//i[@class="fa fa-trash-o delete-element"]')
    //         .assert.elementPresent('//i[@class="fa fa-plus"]')
    //
    // },
    'changing room number': function (browser) {
        browser
            .useXpath()
            .assert.containsText('//div[@class="form-group"]/div/label[contains(text(),"Room")]', 'Room')
            .useCss()
            .waitForElementVisible('input#room', 3000)
            .setValue('input#room', 'Room#7')

    },
    'change start time ': function (browser) {
        browser

            .waitForElementVisible('me-date-time-input#elementStartHour input.form-control.dateTimeInput.dateTimeInput', 1000)
            .clearValue('me-date-time-input#elementStartHour input.form-control.dateTimeInput.dateTimeInput')
            .setValue('me-date-time-input#elementStartHour input.form-control.dateTimeInput.dateTimeInput', ['8:30', browser.Keys.ENTER])
            .pause(500)


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
            .pause(3000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(3000)
    },
    'changing speaker is displayed': function (browser) {
        browser
            .useXpath()
            .assert.elementPresent('//h5[contains(text(),"08:30 - 09:30")]')
            .assert.elementPresent('//h5[contains(text(),"Presentation / Case")]')
            .assert.elementPresent('//button[contains(text(), "Room#7")]')
            .assert.elementPresent('//button[@class="btn btn-primary"]/i[@class="fa fa-plus"]')
            .assert.elementPresent('//td[text()="3756"]')
            .assert.elementPresent('//a[@href="/presentations/edit/3756"]/i')
            .assert.elementPresent('//me-event-agenda-attached-presentation-list//i[@class="fa fa-trash-o delete-element"]')
    },
    'edit presentation/case in edit presentation window': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('td.text-white.actions>a>i.fa.fa-pencil.edit-element', 2000)
            .click('td.text-white.actions>a>i.fa.fa-pencil.edit-element')
            .pause(1000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(3000)
    },
    'edit presentation window is displayed': function (browser) {
        browser
            .useXpath()
            .assert.elementPresent('//h1[text()="Edit Presentation (#3756)"]')
            .assert.elementPresent('//div/label[text()="Organizer "]')
            .assert.elementPresent('//span[text()="Ferranti Computer Systems"]')
            .assert.elementPresent('//label[text()="Presentation Type "]')
            .assert.elementPresent('//span[text()="Case - whole audience"]')
            .assert.elementPresent('//label[text()="Heading "]')
            .assert.elementPresent('//input[@placeholder="Heading"]')
            .assert.elementPresent('//label[text()="Sub heading 1 "]')
            .assert.elementPresent('//label[text()="Sub heading 2 "]')
            .assert.elementPresent('//label[text()="Sub heading 3 "]')
            .assert.elementPresent('//label[text()="Notes "]')
            .assert.elementPresent('//label[text()="Created "]')
            .assert.elementPresent('//label[text()="Created By "]')
            .assert.elementPresent('//label[text()="Modified "]')
            .assert.elementPresent('//label[text()="Modified By "]')
            .assert.elementPresent('//h4[text()="Presentation materials"]')
            .assert.elementPresent('//input[@type="file"]')
            .assert.elementPresent('//button[text()="Upload file"]')
            .assert.elementPresent('//h4[text()="Speakers"]')
            .assert.elementPresent('//button[text()="Add speaker"]')

    },
    'upload file assertion': function (browser) {
        browser
            .useXpath()
            .pause(1500)
            .waitForElementVisible('//input[@type="file"]', 1500)
            .setValue('//input[@type="file"]', 'C:/Users/Avic/Desktop/Agenda-Elements.docx')
            .waitForElementVisible('//button[text()="Upload file"]', 3000)
            .click('//button[text()="Upload file"]')
            .waitForElementVisible('//li[text()="     Agenda-Elements.docx (999.99 kB)   "]', 5000)

    },
    ' attach master contact window is displayed': function (browser) {
        browser
            .click('//button[text()="Add speaker"]')
            .pause(2000)
            .waitForElementVisible('//h4[text()="Attach Master Contact"]', 2000)
            .waitForElementVisible('//h4[text()="Search"]', 2000)
            .waitForElementVisible('//a[@href="/presentations/3756/master-contact/30"]', 2000)
            .waitForElementVisible('//tr[1]//i[@class="fa fa-external-link"]', 2000)
            .waitForElementVisible('//button[text()="           Search         "]', 2000)
            .waitForElementVisible('//button[text()="           Add new         "]', 2000)
            .waitForElementVisible('//button[text()="           Close         "]', 2000)

    },
    'select speaker': function (browser) {
        browser
            .click('//tr[1]//i[@class="fa fa-external-link"]')
            .useCss()
            .pause(1000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(3000)
            .useXpath()
            .assert.elementPresent('//h1[text()="Edit Presentation (#3756)"]')
            .assert.elementPresent('//div/label[text()="Organizer "]')
            .assert.elementPresent('//span[text()="Ferranti Computer Systems"]')
            .assert.elementPresent('//label[text()="Presentation Type "]')
            .assert.elementPresent('//span[text()="Case - whole audience"]')
            .assert.elementPresent('//label[text()="Heading "]')
            .assert.elementPresent('//input[@placeholder="Heading"]')
            .assert.elementPresent('//label[text()="Sub heading 1 "]')
            .assert.elementPresent('//label[text()="Sub heading 2 "]')
            .assert.elementPresent('//label[text()="Sub heading 3 "]')
            .assert.elementPresent('//label[text()="Notes "]')
            .assert.elementPresent('//label[text()="Created "]')
            .assert.elementPresent('//span[text()="2016-11-02 14:34:50"]')
            .assert.elementPresent('//label[text()="Created By "]')
            .assert.elementPresent('//label[text()="Modified "]')
            .assert.elementPresent('//label[text()="Modified By "]')
            .assert.elementPresent('//h4[text()="Presentation materials"]')
            .assert.elementPresent('//input[@type="file"]')
            .assert.elementPresent('//button[text()="Upload file"]')
            .assert.elementPresent('//h4[text()="Speakers"]')
            .assert.elementPresent('//button[text()="Add speaker"]')
            .waitForElementVisible('//a[@href="/presentations/3756/master-contact/30"]', 2000)
            .waitForElementVisible('//tr[1]//i[@class="fa fa-ban"]', 2000)

    },

    'create heading and notes': function (browser) {
        browser
            .waitForElementVisible('//input[@placeholder="Heading"]', 2000)
            .clearValue('//input[@placeholder="Heading"]')
            .setValue('//input[@placeholder="Heading"]', 'New Heading')
            .waitForElementVisible('//textarea[@rows="5"]', 2000)
            .clearValue('//textarea[@rows="5"]')
            .setValue('//textarea[@rows="5"]', 'New note')
            .pause(1000)
            .waitForElementVisible('//button[text()="Save"]', 2000)
            .click('//button[text()="Save"]')
            .useCss()
            .pause(2000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(2000)
    },
    'heading and notes have been saved': function (browser) {
        browser
            .useXpath()
            .assert.valueContains('//input[@placeholder="Heading"]', 'New Heading')
            .assert.valueContains('//textarea[@rows="5"]', 'New note')
    },

    'speaker has been added': function (browser) {
        browser
            .back()
            .useCss()
            .pause(1000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(2000)
            .useXpath()
            .assert.elementPresent('//h5[contains(text(),"08:30 - 09:30")]')
            .assert.elementPresent('//h5[contains(text(),"Presentation / Case")]')
            .assert.elementPresent('//button[contains(text(), "Room#7")]')
            .assert.elementPresent('//button[@class="btn btn-primary"]/i[@class="fa fa-plus"]')
            .assert.elementPresent('//td[text()="3756"]')
            .assert.elementPresent('//td[text()="New Heading"]')
            .assert.elementPresent('//b[text()="Norwegian Ministry of Foreign Affairs"]', 1000)
            .assert.elementPresent('//a[@href="/presentations/edit/3756"]/i')
            .assert.elementPresent('//me-event-agenda-attached-presentation-list//i[@class="fa fa-trash-o delete-element"]')
    },

    'delete speaker': function (browser) {
        browser
            .click('//a[@href="/presentations/edit/3756"]/i')
            .useCss()
            .pause(1000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(3000)
            .useXpath()
            .click('//tr[1]//i[@class="fa fa-ban"]')
            .pause(1500)
            .acceptAlert()
            .useCss()
            .pause(1000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(3000)
    },
    // 'speaker has been successfully deleted': function (browser) {
    //     browser
    //         .useXpath()
    //         .assert.elementNotPresent('//a[@href="/presentations/3756/master-contact/30"]')
    //         .assert.elementNotPresent('//tr[1]//i[@class="fa fa-ban"]');
    //
    // },


})
;
