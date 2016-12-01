/**
 * Created by Sergey Potapov on 25.11.2016.
 */
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

    'choose element requiring table setting': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('select#agendaElementEntryTypeId.form-control', 2000)
            .click('select#agendaElementEntryTypeId.form-control')
            .pause(1000)
            .useXpath()
            .waitForElementVisible('//option[contains(text(),"Element requiring table setting")]', 1000)
            .click('//option[contains(text(),"Element requiring table setting")]')
            .pause(2000)

    },

    'assertion agenda element type drop down list': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('select#agendaElementTypeId', 2000)

            .assert.containsText('option[value="23"]', '               1-TO-MANY Placeholder             ')
            .assert.containsText('option[value="34"]', '               Dinner placeholder             ')
            .assert.containsText('option[value="33"]', '               Group Discussion Placeholder             ')
            .assert.containsText('option[value="32"]', '               Lunch Placeholder             ')

    },
    'creating 1-TO-1 placeholder panel': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('select#agendaElementTypeId', 2000)
            .click('select#agendaElementTypeId')
            .assert.containsText('option[value="23"]', '               1-TO-MANY Placeholder             ')
            .click('option[value="23"]')
            .waitForElementVisible('me-date-time-input#elementStartHour input.form-control.dateTimeInput.dateTimeInput', 1000)
            .setValue('me-date-time-input#elementStartHour input.form-control.dateTimeInput.dateTimeInput', ['8:55', browser.Keys.ENTER])
            .waitForElementVisible('me-date-time-input#elementEnd input.form-control.dateTimeInput.dateTimeInput', 1000)
            .setValue('me-date-time-input#elementEnd input.form-control.dateTimeInput.dateTimeInput', ['9:25', browser.Keys.ENTER])
            .waitForElementVisible('input#room', 3000)
            .click('input#room')

    },
    'element requiring table setting assertion': function (browser) {
        browser
            .useXpath()

            .assert.containsText('//label[contains(text(),"           End time ")]', 'End time')
            .assert.containsText('//label[contains(text(),"           Start time ")]', 'Start time')

            .assert.containsText('//label[contains(text(),"           Meeting allowed ")]', 'Meeting allowed')
            .useCss()
            // .assert.valueContains("select#meetingAllowed", "Meeting allowed")
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

            .assert.containsText('//label[contains(text(),"Event Groups")]', 'Event Groups')
            .assert.containsText('//label[text()="1 TO MANY MEETING hosts"]', '1 TO MANY MEETING hosts')
            .assert.containsText('//label[text()="Table size"]', 'Table size')
            .assert.elementPresent('//modal[@class="modal fade in"]//label/input[@ngcontrol="tableSize"]')

            .useCss()
            .waitForElementVisible('input[ngcontrol="tableSize"]', 2000)
            .waitForElementVisible('div.col-sm-8.text-center>button.btn.btn-primary', 2000)
            .click('div.col-sm-8.text-center>button.btn.btn-primary')
            .useXpath()
            .waitForElementVisible('//h4[contains(text(),"Add host topics to ")]', 1000)
            .waitForElementVisible('//button[@data-dismiss="modalHosts"]', 3000)
            .pause(2000)
            .click('//button[@data-dismiss="modalHosts"]')

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
            .click('input#room')
            .useXpath()
            .waitForElementVisible('//div[@class="col-sm-12 container_btn_group"]/button[2][contains(text(),"Save")]', 2000)
            .click('//div[@class="col-sm-12 container_btn_group"]/button[2][contains(text(),"Save")]')
    },
    'redirection after creation 1-TO-many-placeholder': function (browser) {
        browser
            .pause(3000)
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(3000)
            .useXpath()
            .waitForElementVisible('//h5[contains(text(),"08:55 - 09:25")]', 2000)
            .waitForElementVisible('//h5[contains(text(),"1-TO-MANY Placeholder")]', 2000)
            .useCss()
            .waitForElementVisible('i.fa.fa-plus', 2000)
            .click('i.fa.fa-plus')
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(3000)

    },
    'Add host topics to 1-TO-MANY Placeholder is displayed': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//b[contains(text(),"1-TO-MANY Placeholder")]', 2000)
            .refresh()
            .useCss()
            .pause(1000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(3000)
    },
    'delete 1-to-many-placeholder panel': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//a[3]/i[@class="fa fa-trash-o delete-element"]', 1000)
            .click('//a[3]/i[@class="fa fa-trash-o delete-element"]')
            .waitForElementVisible('//div[text()="     Do you really want to delete element 1-TO-MANY Placeholder?   "]', 2000)
            .click('//modal[@class="modal fade in"]/div/div/modal-footer/div/button[@data-marker="me-confirm__button__button__yes"]')
            .pause(2000)
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(4000)

    },
    '1-to-many-placeholder has been deleted': function (browser) {
        browser
            .useXpath()
            .assert.elementNotPresent('//h5[contains(text(),"08:00 - 09:45")]')
            .assert.elementNotPresent('//h5[contains(text(),"1-TO-MANY Placeholder")]')
            .assert.elementNotPresent('//i[@class="fa fa-plus"]');

    }


})
;