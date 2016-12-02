
var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');

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
    'choose static agenda element': function (browser) {
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
    'static element page assertion': function (browser) {
        browser
            .assert.containsText('//h4[contains(text(),"Element form")]', 'Element form')
            .assert.containsText('//label[contains(text(),"Agenda Element Type ")]', 'Agenda Element Type ')
            .assert.containsText('//label[contains(text(),"           Start time ")]', 'Start time')
            .assert.containsText('//label[contains(text(),"           End time ")]', 'End time')
            .assert.containsText('//label[contains(text(),"           Meeting allowed ")]', 'Meeting allowed')
            .assert.containsText('//option[contains(text(),"                 No meetings allowed               ")]', 'No meetings allowed')
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
            .waitForElementVisible('select#agendaElementTypeId', 2000)
            .click('select#agendaElementTypeId')
            .assert.containsText('option[value="30"]', '               Presentation / Leadership presentation             ')
            .click('option[value="30"]')
            .pause(1000)
            .useXpath()
            .assert.containsText('//button[text()="Attach"]', 'Attach')
            .assert.containsText('//label[text()="Attach role/presentation"]','Attach role/presentation')
            .click('//button[text()="Attach"]')
            .pause(4000)

    },
    'add presentation to window is appear': function (browser) {
        browser
            .waitForElementVisible('//h4[text()="Add presentation to "]', 1000)
            .pause(1000)
            .assert.elementPresent('//h4[text()="Add presentation to "]')
            .assert.elementPresent('//li[text()=" - Fenzl Alexander               "]')
            .waitForElementVisible('//button[@data-marker="me-modal-attach-presentation-to-element__input__button__cancel"]', 1000)
            .click('//button[@data-marker="me-modal-attach-presentation-to-element__input__button__cancel"]')
            .pause(1000)

    },

    'creating presentation-leaderShip panel': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('me-date-time-input#elementStartHour input.form-control.dateTimeInput.dateTimeInput', 1000)
            .setValue('me-date-time-input#elementStartHour input.form-control.dateTimeInput.dateTimeInput', ['9:30', browser.Keys.ENTER])
            .waitForElementVisible('me-date-time-input#elementEnd input.form-control.dateTimeInput.dateTimeInput', 1000)
            .setValue('me-date-time-input#elementEnd input.form-control.dateTimeInput.dateTimeInput', ['10:00', browser.Keys.ENTER])
            .waitForElementVisible('input#room', 3000)
            .click('input#room')
            .useXpath()
            .waitForElementVisible('//div[@class="col-sm-12 container_btn_group"]/button[2][contains(text(),"Save")]', 2000)
            .click('//div[@class="col-sm-12 container_btn_group"]/button[2][contains(text(),"Save")]')
    },
    'redirection after creation presentation-leadership ': function (browser) {
        browser
            .pause(3000)
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(3000)
            .useXpath()
            .waitForElementVisible('//h5[contains(text(),"09:30 - 10:00")]', 2000)
            .waitForElementVisible('//h5[contains(text(),"Presentation / Leadership presentation")]', 2000)
            .useCss()
            .waitForElementVisible('i.fa.fa-plus', 2000)

    },
    'click add Content button': function (browser) {
        browser
            .click('i.fa.fa-plus')
            .pause(1000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(3000)
    },
    'add presentation to Presentation window is displayed': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h4[text()="Add presentation to "]/b[text()="Presentation / Leadership presentation"]', 2000)
            .waitForElementVisible('//modal[@class="modal fade in"]//input[@data-marker="me-modal-attach-presentation-to-element__input__checkbox__3733"]', 2000)
            .waitForElementVisible('//modal[@class="modal fade in"]//li[text()=" - Fenzl Alexander               "]', 2000)
            .click('//modal[@class="modal fade in"]//input[@data-marker="me-modal-attach-presentation-to-element__input__checkbox__3733"]')
            .waitForElementVisible('//modal[@class="modal fade in"]//button[@data-marker="me-modal-attach-presentation-to-element__input__button__save"]', 2000)
            .click('//modal[@class="modal fade in"]//button[@data-marker="me-modal-attach-presentation-to-element__input__button__save"]')
            .pause(1000)
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(3000)
    },
    'added person is displayed': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h5[contains(text(),"09:30 - 10:00")]', 2000)
            .waitForElementVisible('//h5[contains(text(),"Presentation / Leadership presentation")]', 2000)
            .waitForElementVisible('//button[contains(text(), "Add room")]', 2000)
            .waitForElementVisible('//li[text()=" - Fenzl Alexander             "]', 2000)
            .waitForElementVisible('//button[@class="btn btn-primary"]/i[@class="fa fa-plus"]', 2000)
            .waitForElementVisible('//me-event-agenda-attached-presentation-list//i[@class="fa fa-pencil edit-element"]', 2000)
            .waitForElementVisible('//me-event-agenda-attached-presentation-list//i[@class="fa fa-trash-o delete-element"]', 2000)
            .click('//button[contains(text(), "Add room")]')
            .pause(2000)
    },

    'presentations-leader ship presentation is displayed': function (browser) {
        browser
            .waitForElementVisible('//h4[contains(text(),"Add room for Presentation / Leadership presentation 10-05-2012 09:30:00 - 10:00:00")]', 2000)
            .useCss()
            .waitForElementVisible('input.form-control[title=Room]', 2000)

    },
    'input Room field is empty': function (browser) {
        browser

            .assert.valueContains("input.form-control[title=Room]", "")
            .setValue('input.form-control[title=Room]', 'MyRoom#2')
            .useXpath()
            .waitForElementVisible('//modal[@class="modal fade in"]/div/div/modal-footer/div[@class="modal-footer"]/button[2]', 2000)
            .click('//modal[@class="modal fade in"]/div/div/modal-footer/div[@class="modal-footer"]/button[2]')
    },
    'set room is displaying': function (browser) {
        browser
            .useCss()
            .pause(3000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(3000)
            .useXpath()
            .waitForElementVisible('//button[text()="       MyRoom#2     "]', 2000)
            .click('//button[text()="       MyRoom#2     "]')
    },
    'add room for Presentation is displayed again': function (browser) {
        browser
            .pause(1000)
            .waitForElementVisible('//h4[contains(text(),"Add room for Presentation / Leadership presentation 10-05-2012 09:30:00 - 10:00:00")]', 2000)
            .useCss()
            .waitForElementVisible('input.form-control[title=Room]', 2000)
            .assert.valueContains("input.form-control[title=Room]", "MyRoom#2")
            .waitForElementVisible('button[data-dismiss="modalRoom"]', 2000)
            .click('button[data-dismiss="modalRoom"]')
            .useXpath()
            .waitForElementVisible('//button[text()="       MyRoom#2     "]', 4000)
    },
    'click on edit presentation-LeaderShip presentation panel': function (browser) {
        browser
            .pause(1000)
            .waitForElementVisible('//a[2]/i[@class="fa fa-pencil edit-element"]', 2000)
            .click('//a[2]/i[@class="fa fa-pencil edit-element"]')
    },
    'static page assertion': function (browser) {
        browser
            .pause(2000)
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
            .assert.containsText('//label[contains(text(),"Show in calendars")]', 'Show in calendars')
            .assert.elementPresent('//label[text()="               Delegates             "]')
            .assert.elementPresent('//label[text()="               Provider representatives             "]')
            .assert.containsText('//label[contains(text(),"Publish WWW")]', 'Publish WWW')
            .useCss()
            .assert.elementPresent('#visibilityPublishWWWYes')
            .assert.elementPresent('#visibilityPublishWWWNo')
            .useXpath()
            .assert.containsText('//div[@class="form-group"]/div/label[contains(text(),"Room")]', 'Room')

    },

    'assertion for room field contains name My Room': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('input#room', 2000)
            .assert.valueContains("input#room", "MyRoom#2")
            .refresh()
            .pause(3000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(3000)
    },
    'delete presentation-leaderShip panel': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//a[3]/i[@class="fa fa-trash-o delete-element"]', 1000)
            .click('//a[3]/i[@class="fa fa-trash-o delete-element"]')
            .pause(1500)
            .waitForElementVisible('//div[text()="     Do you really want to delete element Presentation / Leadership presentation?   "]', 2000)
            .click('//modal[@class="modal fade in"]/div/div/modal-footer/div/button[@data-marker="me-confirm__button__button__yes"]')
            .pause(2000)
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(4000)

    },
    'presentation-leaderShip has been deleted': function (browser) {
        browser
            .useXpath()
            .assert.elementNotPresent('//h5[contains(text(),"08:00 - 09:45")]')
            .assert.elementNotPresent('//h5[contains(text(),"Presentation / Leadership presentation")]')
            .assert.elementNotPresent('//button[contains(text(), "Add room")]');

    },

})
;