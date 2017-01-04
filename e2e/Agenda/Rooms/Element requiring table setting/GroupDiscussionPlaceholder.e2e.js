var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

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

    'choose Element requiring table setting': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('select#agendaElementEntryTypeId.form-control', 2000)
            .click('select#agendaElementEntryTypeId.form-control')
            .pause(1000)
            .useXpath()
            .waitForElementVisible('//option[contains(text(),"Element requiring table setting")]', 1000)
            .click('//option[contains(text(),"Element requiring table setting")]')
            .pause(2000);
    },

    'element requiring table setting assertion': function (browser) {
        browser
            .useXpath()
            .assert.containsText('//label[contains(text(),"           End time ")]', 'End time')
            .assert.containsText('//label[contains(text(),"           Start time ")]', 'Start time')
            .assert.containsText('//label[contains(text(),"           Meeting allowed ")]', 'Meeting allowed')
            .useCss()
            .click('select#meetingAllowed')
            .assert.containsText('select#meetingAllowed>option[value="1"]', '                 Primary meeting hour               ')
            .assert.containsText('select#meetingAllowed>option[value="2"]', '                 Secondary meeting hour               ')
            .assert.containsText('select#meetingAllowed>option[value="0"]', '                 No meetings allowed               ')
            .useXpath()
            .assert.containsText('//label[contains(text(),"Groups Used")]', 'Groups Used')
            .verify.attributeEquals('//div[5]/div/div/div[@class="checkbox block"]/label/input[@class="ng-untouched ng-pristine ng-valid"]', 'checked', 'true')
            .assert.containsText('//label[contains(text(),"Event Groups")]', 'Event Groups')
            .assert.elementPresent('//div[text()="               Group 1 - orange             "]')
            .assert.elementPresent('//div[text()="               Group 2 - violet             "]')
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
            .click('input#room');
    },

    'assertion agenda element type drop down list': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('select#agendaElementTypeId', 2000)
            .assert.containsText('option[value="23"]', '               1-TO-MANY Placeholder             ')
            .assert.containsText('option[value="34"]', '               Dinner placeholder             ')
            .assert.containsText('option[value="33"]', '               Group Discussion Placeholder             ')
            .assert.containsText('option[value="32"]', '               Lunch Placeholder             ')
            .useCss()
            .waitForElementVisible('select#agendaElementTypeId', 2000)
            .click('select#agendaElementTypeId')
            .assert.containsText('option[value="33"]', '               Group Discussion Placeholder             ')
            .click('option[value="33"]')
            .pause(1000)
            .useXpath()
            .assert.containsText('//button[text()="Attach"]', 'Attach')
            .assert.containsText('//label[text()="Attach role/presentation"]', 'Attach role/presentation')
            .pause(1000);
    },

    'creating group discussion placeholder panel': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('me-date-time-input#elementStartHour input.form-control.dateTimeInput.dateTimeInput', 1000)
            .setValue('me-date-time-input#elementStartHour input.form-control.dateTimeInput.dateTimeInput', ['8:45', browser.Keys.ENTER])
            .waitForElementVisible('me-date-time-input#elementEnd input.form-control.dateTimeInput.dateTimeInput', 1000)
            .setValue('me-date-time-input#elementEnd input.form-control.dateTimeInput.dateTimeInput', ['9:15', browser.Keys.ENTER])
            .waitForElementVisible('input#room', 3000)
            .click('input#room')
            .useXpath()
            .waitForElementVisible('//div[@class="col-sm-12 container_btn_group"]/button[2][contains(text(),"Save")]', 2000)
            .click('//div[@class="col-sm-12 container_btn_group"]/button[2][contains(text(),"Save")]');
    },

    'redirection after creation group discussion placeholder panel': function (browser) {
        browser
            .pause(3000)
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .useXpath()
            .waitForElementVisible('//h5[contains(text(),"08:45 - 09:15")]', 2000)
            .waitForElementVisible('//h5[contains(text(),"Group Discussion Placeholder")]', 2000)
            .useCss()
            .waitForElementVisible('i.fa.fa-plus', 2000);
    },

    'click plus button': function (browser) {
        browser
            .click('i.fa.fa-plus')
            .pause(2000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000);

    },

    'choose person in  add presentation to window': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//modal[@class="modal fade in"]//b[contains(text(),"Group Discussion Placeholder")]', 2000)
            .waitForElementVisible('//input[@data-marker="me-modal-attach-presentation-to-element__input__checkbox__3729"]', 2000)
            .waitForElementVisible('//modal[@class="modal fade in"]//li[text()=" - Weber Jürgen               "]', 2000)
            .click('//input[@data-marker="me-modal-attach-presentation-to-element__input__checkbox__3729"]')
            .waitForElementVisible('//modal[@class="modal fade in"]//button[@data-marker="me-modal-attach-presentation-to-element__input__button__save"]', 2000)
            .click('//modal[@class="modal fade in"]//button[@data-marker="me-modal-attach-presentation-to-element__input__button__save"]')
            .pause(1000)
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 10000);

    },

    'chosen person is displayed': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h5[contains(text(),"08:45 - 09:15")]', 2000)
            .waitForElementVisible('//h5[contains(text(),"Group Discussion Placeholder")]', 2000)
            .waitForElementVisible('//button[contains(text(), "Add room")]', 2000)
            .waitForElementVisible('//li[text()=" - Weber Jürgen             "]', 2000)
            .waitForElementVisible('//button[@class="btn btn-primary"]/i[@class="fa fa-plus"]', 2000)
            .waitForElementVisible('//me-event-agenda-attached-presentation-list//i[@class="fa fa-pencil edit-element"]', 2000)
            .waitForElementVisible('//me-event-agenda-attached-presentation-list//i[@class="fa fa-trash-o delete-element"]', 2000)
            .click('//button[contains(text(), "Add room")]')
            .pause(2000);
    },

    'add room for Group is displayed': function (browser) {
        browser
            .waitForElementVisible('//h4[contains(text(),"Add room for Group Discussion Placeholder 10-05-2012 08:45:00 - 09:15:00")]', 2000)
            .useCss()
            .waitForElementVisible('input.form-control[title=Room]', 2000);
    },

    'input room field is empty': function (browser) {
        browser
            .assert.valueContains("input.form-control[title=Room]", "")
            .setValue('input.form-control[title=Room]', 'MyRoom#3')
            .useXpath()
            .waitForElementVisible('//modal[@class="modal fade in"]//button[@data-marker="me-event-agenda__button__save-room"]', 2000)
            .click('//modal[@class="modal fade in"]//button[@data-marker="me-event-agenda__button__save-room"]');
    },

    'input room is displaying': function (browser) {
        browser
            .useCss()
            .pause(2000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .useXpath()
            .waitForElementVisible('//button[text()="       MyRoom#3     "]', 2000)
            .click('//button[text()="       MyRoom#3     "]');
    },

    'add room for group discussion is displayed again': function (browser) {
        browser
            .waitForElementVisible('//h4[contains(text(),"Add room for Group Discussion Placeholder 10-05-2012 08:45:00 - 09:15:00")]', 2000)
            .useCss()
            .waitForElementVisible('input.form-control[title=Room]', 2000)
            .assert.valueContains("input.form-control[title=Room]", "MyRoom#3")
            .waitForElementVisible('button[data-dismiss="modalRoom"]', 2000)
            .click('button[data-dismiss="modalRoom"]')
            .pause(2000)
            .useXpath()
            .waitForElementVisible('//button[text()="       MyRoom#3     "]', 2000);
    },

    'click on edit panel': function (browser) {
        browser
            .pause(1000)
            .waitForElementVisible('//a[2]/i[@class="fa fa-pencil edit-element"]', 2000)
            .click('//a[2]/i[@class="fa fa-pencil edit-element"]')
            .pause(1500);
    },

    'static page assertion': function (browser) {
        browser
            .assert.containsText('//h4[contains(text(),"Element form")]', 'Element form')
            .assert.containsText('//label[contains(text(),"Agenda Element Type ")]', 'Agenda Element Type ')
            .assert.containsText('//label[contains(text(),"           Start time ")]', 'Start time')
            .assert.containsText('//label[contains(text(),"           End time ")]', 'End time')
            .assert.containsText('//label[contains(text(),"           Meeting allowed ")]', 'Meeting allowed')
            .assert.containsText('//option[contains(text(),"                 No meetings allowed               ")]', 'No meetings allowed')
            .assert.containsText('//label[contains(text(),"Groups Used")]', 'Groups Used')
            .assert.containsText('//label[contains(text(),"Event Groups")]', 'Event Groups')
            .assert.elementPresent('//div[text()="               Group 1 - orange             "]')
            .assert.elementPresent('//div[text()="               Group 2 - violet             "]')
            .pause(1000)
            .assert.elementPresent('//label[text()="Attach role/presentation"]')
            .assert.elementPresent('//modal//i[@class="fa fa-plus"]')
            .assert.elementPresent('//modal//li[text()=" - Weber Jürgen             "]')
            .assert.elementPresent('//modal//i[@class="fa fa-pencil edit-element"]')
            .assert.elementPresent('//modal//i[@class="fa fa-trash-o delete-element"]')
            .assert.containsText('//label[contains(text(),"Show in calendars")]', 'Show in calendars')
            .assert.elementPresent('//label[text()="               Delegates             "]')
            .assert.elementPresent('//label[text()="               Provider representatives             "]')
            .assert.containsText('//label[contains(text(),"Publish WWW")]', 'Publish WWW')
            .useCss()
            .assert.elementPresent('#visibilityPublishWWWYes')
            .assert.elementPresent('#visibilityPublishWWWNo')
            .useXpath()
            .assert.containsText('//div[@class="form-group"]/div/label[contains(text(),"Room")]', 'Room');
    },

    'assertion for room field contains name My Room': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('input#room', 2000)
            .assert.valueContains("input#room", "MyRoom#3")
            .refresh()
            .waitForElementNotVisible('#thisIsMainLoader', 10000);

    },

    'delete group discussion placeholder panel': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//a[3]/i[@class="fa fa-trash-o delete-element"]', 1000)
            .click('//a[3]/i[@class="fa fa-trash-o delete-element"]')
            .pause(1500)
            .waitForElementVisible('//div[text()="     Do you really want to delete element Group Discussion Placeholder?   "]', 2000)
            .click('//modal[@class="modal fade in"]/div/div/modal-footer/div/button[@data-marker="me-confirm__button__button__yes"]')
            .pause(2000)
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(1500);
    },

    'group discussion placeholder has been deleted': function (browser) {
        browser
            .useXpath()
            .assert.elementNotPresent('//h5[contains(text(),"08:00 - 09:45")]')
            .assert.elementNotPresent('//h5[contains(text(),"Group Discussion Placeholder")]')
            .assert.elementNotPresent('//button[text()="       MyRoom#3     "]');
    },
    'delete container': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('.fa.fa-trash-o.delete-container', 10000)
            .click('.fa.fa-trash-o.delete-container')
            .waitForElementVisible('div.modal-footer>button.btn.btn-success', 7000)
            .click('div.modal-footer>button.btn.btn-success')
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(1000)
            .useXpath()
            .assert.elementNotPresent('//b[contains(text(), "new_event2016")]');

    },
});
