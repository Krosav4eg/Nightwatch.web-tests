// var _ = require('lodash');
// var presteps = require('./../../../presteps/presteps.js');
// var auth = require('./../../../presteps/auth.js');
//
// module.exports = _.assign(presteps, auth, {
//     '@disabled': false,
//     'redirection to agenda': function (browser) {
//         browser
//             .relUrl('/event/212/agenda')
//             .waitForElementVisible('#thisIsMainLoader', 10000)
//             .waitForElementNotVisible('#thisIsMainLoader', 10000);
//     },
//     'creation new container': function (browser) {
//         browser
//             .waitForElementVisible('button.btn.btn-primary.btn-block', 10000)
//             .click('button.btn.btn-primary.btn-block')
//             .pause(2000)
//             .useXpath()
//             .assert.containsText('//h4[contains(text(),"Container form")]', 'Container form')
//             .useCss()
//             .waitForElementVisible('input#heading', 1000)
//             .setValue('input#heading', 'new_event2016 ')
//             .waitForElementVisible('input#subHeading', 1000)
//             .setValue('input#subHeading', 'test')
//             .waitForElementVisible('#containerStartHour input', 1000)
//             .setValue('#containerStartHour input', '8:00')
//             .waitForElementVisible('#containerEndHour input', 1000)
//             .setValue('#containerEndHour input', '10:00')
//             .useXpath()
//             .click('//form/div[2]/div/div/button[contains(text(),"Save")]')
//             .useCss()
//             .waitForElementVisible('#thisIsMainLoader', 30000)
//             .waitForElementNotVisible('#thisIsMainLoader', 30000)
//             .useXpath()
//             .assert.elementPresent('//b[contains(text(), "new_event2016")]')
//             .assert.containsText('//b[1][contains(text(),"8:00")]', '8:00')
//             .assert.containsText('//b[2][contains(text(),"10:00")]', '10:00');
//
//     },
//     'redirection to settings page': function (browser) {
//         browser
//             .useCss()
//             .relUrl('/event/212/settings')
//             .waitForElementVisible('#thisIsMainLoader', 30000)
//             .waitForElementNotVisible('#thisIsMainLoader', 30000)
//             .useXpath()
//             .waitForElementVisible('//span[text()="212/IndustryForum Energy - Event settings"]', 5000);
//     },
//     'inputting checkboxes': function (browser) {
//         browser
//             .waitForElementVisible('//input[@data-marker="me-event-settings-agenda-group-qty__input__text"]', 5000)
//             .clearValue('//input[@data-marker="me-event-settings-agenda-group-qty__input__text"]')
//             .setValue('//input[@data-marker="me-event-settings-agenda-group-qty__input__text"]', ['6', browser.Keys.ENTER])
//             .waitForElementVisible('//input[@data-marker="me-groups-managed-automatically__input__checkbox__1"]', 5000)
//
//             .waitForElementVisible('//input[@data-marker="me-groups-managed-automatically__input__checkbox__2"]', 5000)
//
//             .waitForElementVisible('//input[@data-marker="me-groups-managed-automatically__input__checkbox__3"]', 5000)
//
//             .waitForElementVisible('//input[@data-marker="me-groups-managed-automatically__input__checkbox__4"]', 5000)
//
//             .waitForElementVisible('//input[@data-marker="me-groups-managed-automatically__input__checkbox__5"]', 5000)
//
//             .waitForElementVisible('//input[@data-marker="me-groups-managed-automatically__input__checkbox__6"]', 5000)
//
//             .waitForElementVisible('//div[@class="panel-body"]/div//div[3]/button[2]', 5000)
//             .click('//div[@class="panel-body"]/div//div[3]/button[2]')
//             .useCss()
//             .waitForElementVisible('#thisIsMainLoader', 30000)
//             .waitForElementNotVisible('#thisIsMainLoader', 30000);
//
//     },
//     'redirection to agenda page again': function (browser) {
//         browser
//             .relUrl('/event/212/agenda')
//             .waitForElementVisible('#thisIsMainLoader', 30000)
//             .waitForElementNotVisible('#thisIsMainLoader', 30000)
//
//     },
//     'click on add element button': function (browser) {
//         browser
//             .waitForElementVisible('.btn.btn-info.btn-block', 4000)
//             .click('.btn.btn-info.btn-block');
//     },
//
//     'element form window is displayed': function (browser) {
//         browser
//             .useXpath()
//             .assert.elementPresent('//h4[contains(text(),"Element form")]')
//             .assert.elementPresent('//label[contains(text(),"           Agenda Element Entry Type ")]');
//     },
//
//     'Choose Static agenda element': function (browser) {
//         browser
//             .useCss()
//             .waitForElementVisible('select#agendaElementEntryTypeId.form-control', 2000)
//             .click('select#agendaElementEntryTypeId.form-control')
//             .pause(1000)
//             .useXpath()
//             .waitForElementVisible('//option[contains(text(),"Static agenda element")]', 1000)
//             .click('//option[contains(text(),"Static agenda element")]')
//             .pause(1500);
//     },
//
//     'Static agenda element page assertion': function (browser) {
//         browser
//             .assert.containsText('//h4[contains(text(),"Element form")]', 'Element form')
//             .assert.containsText('//label[contains(text(),"Agenda Element Type ")]', 'Agenda Element Type ')
//             .assert.containsText('//label[contains(text(),"           Start time ")]', 'Start time')
//             .assert.containsText('//label[contains(text(),"           End time ")]', 'End time')
//             .assert.containsText('//label[contains(text(),"           Meeting allowed ")]', 'Meeting allowed')
//             .assert.containsText('//option[contains(text(),"                 No meetings allowed               ")]', 'No meetings allowed')
//             .assert.containsText('//label[contains(text(),"Groups Used")]', 'Groups Used')
//             .verify.attributeEquals('//div[5]/div/div/div[@class="checkbox block"]/label/input[@class="ng-untouched ng-pristine ng-valid"]', 'checked', 'true')
//             .assert.containsText('//label[contains(text(),"Event Groups")]', 'Event Groups')
//             .assert.elementPresent('//div[text()="               Group 1 - orange             "]')
//             .assert.elementPresent('//div[text()="               Group 2 - violet             "]')
//             .assert.containsText('//label[contains(text(),"Show in calendars")]', 'Show in calendars')
//             .assert.elementPresent('//label[text()="               Delegates             "]')
//             .assert.elementPresent('//label[text()="               Provider representatives             "]')
//             .assert.containsText('//label[contains(text(),"Publish WWW")]', 'Publish WWW')
//             .useCss()
//             .assert.elementPresent('#visibilityPublishWWWYes')
//             .assert.elementPresent('#visibilityPublishWWWNo')
//             .useXpath()
//             .assert.containsText('//div[@class="form-group"]/div/label[contains(text(),"Room")]', 'Room');
//     },
//
//     'creating Awards panel': function (browser) {
//         browser
//             .useCss()
//             .waitForElementVisible('select#agendaElementTypeId', 7000)
//             .click('select#agendaElementTypeId')
//             .assert.containsText('option[value="35"]', '               Awards Panel             ')
//             .click('option[value="35"]')
//             .waitForElementVisible('me-date-time-input#elementStartHour input.form-control.dateTimeInput.dateTimeInput', 1000)
//             .setValue('me-date-time-input#elementStartHour input.form-control.dateTimeInput.dateTimeInput', ['8:59', browser.Keys.ENTER])
//             .waitForElementVisible('me-date-time-input#elementEnd input.form-control.dateTimeInput.dateTimeInput', 1000)
//             .setValue('me-date-time-input#elementEnd input.form-control.dateTimeInput.dateTimeInput', ['9:59', browser.Keys.ENTER])
//             .useXpath()
//             .waitForElementVisible('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__300"]', 4000)
//             .click('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__300"]')
//             .waitForElementVisible('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__301"]', 4000)
//             .click('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__301"]')
//             .waitForElementVisible('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__5180"]', 4000)
//             .click('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__5180"]')
//             .waitForElementVisible('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__5181"]', 4000)
//             .click('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__5181"]')
//             .waitForElementVisible('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__5182"]', 4000)
//             .click('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__5182"]')
//             .waitForElementVisible('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__5183"]', 4000)
//             .click('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__5183"]')
//             .useCss()
//             .waitForElementVisible('input#room', 3000)
//             .click('input#room')
//             .useXpath()
//             .waitForElementVisible('//div[@class="col-sm-12 container_btn_group"]/button[2][contains(text(),"Save")]', 2000)
//             .click('//div[@class="col-sm-12 container_btn_group"]/button[2][contains(text(),"Save")]');
//     },
//
//     'redirection after creation awards panel': function (browser) {
//         browser
//             .useCss()
//             .waitForElementNotVisible('#thisIsMainLoader', 30000)
//             .useXpath()
//             .waitForElementVisible('//h5[contains(text(),"08:59 - 09:59")]', 2000)
//             .waitForElementVisible('//h5[contains(text(),"Awards Panel")]', 2000)
//             .waitForElementVisible('//button[contains(text(), "Add room")]', 2000)
//             .waitForElementVisible('//span[@class="label orangeGroupColorForEvent"]', 2000)
//             .waitForElementVisible('//span[@class="label violetGroupColorForEvent"]', 2000)
//             .waitForElementVisible('//span[@class="label blueGroupColorForEvent"]', 2000)
//             .waitForElementVisible('//span[@class="label greenGroupColorForEvent"]', 2000)
//             .waitForElementVisible('//span[@class="label redGroupColorForEvent"]', 2000)
//             .waitForElementVisible('//span[@class="label grayBlockColorForEvent"]', 2000)
//     },
//     'check all groups colors ': function (browser) {
//         browser
//             .assert.cssProperty('//span[@class="label orangeGroupColorForEvent"]', 'background-color', 'rgba(255, 153, 51, 1)')
//             .assert.cssProperty('//span[@class="label violetGroupColorForEvent"]', 'background-color', 'rgba(255, 153, 255, 1)')
//             .assert.cssProperty('//span[@class="label blueGroupColorForEvent"]', 'background-color', 'rgba(51, 153, 255, 1)')
//             .assert.cssProperty('//span[@class="label greenGroupColorForEvent"]', 'background-color', 'rgba(153, 255, 204, 1)')
//             .assert.cssProperty('//span[@class="label redGroupColorForEvent"]', 'background-color', 'rgba(255, 102, 102, 1)')
//             .assert.cssProperty('//span[@class="label grayBlockColorForEvent"]', 'background-color', 'rgba(204, 204, 204, 1)')
//     },
//
//     'check container color ': function (browser) {
//         browser
//             .assert.elementPresent('//button[text()="Add container"]')
//             .assert.cssProperty('//button[text()="Add container"]', 'background-color', 'rgba(79, 142, 220, 1)');
//     },
//
//     'check static agenda element color': function (browser) {
//         browser
//             .assert.elementPresent('//div[@class="panel-heading orangeBlockColorForEvent"]')
//             .assert.cssProperty('//div[@class="panel-heading orangeBlockColorForEvent"]', 'background-color', 'rgba(245, 166, 35, 1)');
//     },
//
//     'check that the button is green when room was not chosen': function (browser) {
//         browser
//             .assert.elementPresent('//button[text()="               Add room             "]')
//             .assert.cssProperty('//button[text()="               Add room             "]', 'background-color', 'rgba(133, 199, 68, 1)');
//     },
//     'click add room': function (browser) {
//         browser
//             .waitForElementVisible('//button[contains(text(), "Add room")]', 5000)
//             .click('//button[contains(text(), "Add room")]');
//     },
//
//     'add room for awards panel is displayed': function (browser) {
//         browser
//             .waitForElementVisible('//h4[contains(text(),"Add room for Awards Panel 10-05-2012 08:59:00 - 09:59:00")]', 4000)
//             .useCss()
//             .waitForElementVisible('input.form-control[title=Room]', 2000)
//             .assert.valueContains("input.form-control[title=Room]", "")
//             .setValue('input.form-control[title=Room]', 'MyRoom')
//             .useXpath()
//             .waitForElementVisible('//modal[@class="modal fade in"]/div/div/modal-footer/div[@class="modal-footer"]/button[2]', 2000)
//             .click('//modal[@class="modal fade in"]/div/div/modal-footer/div[@class="modal-footer"]/button[2]');
//     },
//     'redirection after adding room': function (browser) {
//         browser
//             .useCss()
//             .waitForElementNotVisible('#thisIsMainLoader', 10000)
//             .useXpath()
//             .waitForElementVisible('//h5[contains(text(),"08:59 - 09:59")]', 2000)
//             .waitForElementVisible('//h5[contains(text(),"Awards Panel")]', 2000)
//             .waitForElementVisible('//button[contains(text(), "MyRoom")]', 2000);
//     },
//     'check that the button is red when room was choosen': function (browser) {
//         browser
//             .assert.elementPresent('//button[contains(text(), "MyRoom")]')
//             .assert.cssProperty('//button[contains(text(), "MyRoom")]', 'background-color', 'rgba(231, 60, 60, 1)');
//     },
//     'delete groups checkboxes': function (browser) {
//         browser
//             .waitForElementVisible('//a[2]/i[@class="fa fa-pencil edit-element"]', 2000)
//             .click('//a[2]/i[@class="fa fa-pencil edit-element"]')
//             .pause(2000);
//
//     },
//
//
//     'awards panel has been deleted': function (browser) {
//         browser
//             .useXpath()
//             .waitForElementVisible('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__300"]', 4000)
//             .click('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__300"]')
//             .waitForElementVisible('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__301"]', 4000)
//             .click('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__301"]')
//             .waitForElementVisible('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__5180"]', 4000)
//             .click('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__5180"]')
//             .waitForElementVisible('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__5181"]', 4000)
//             .click('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__5181"]')
//             .waitForElementVisible('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__5182"]', 4000)
//             .click('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__5182"]')
//             .waitForElementVisible('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__5183"]', 4000)
//             .click('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__5183"]')
//             .useXpath()
//             .waitForElementVisible('//div[@class="col-sm-12 container_btn_group"]/button[2][contains(text(),"Save")]', 2000)
//             .click('//div[@class="col-sm-12 container_btn_group"]/button[2][contains(text(),"Save")]')
//             .useCss()
//             .waitForElementNotVisible('#thisIsMainLoader', 10000);
//     },
//     'groups are not present': function (browser) {
//         browser
//             .useXpath()
//             .assert.elementNotPresent('//span[@class="label orangeGroupColorForEvent"]')
//             .assert.elementNotPresent('//span[@class="label violetGroupColorForEvent"]')
//             .assert.elementNotPresent('//span[@class="label blueGroupColorForEvent"]')
//             .assert.elementNotPresent('//span[@class="label greenGroupColorForEvent"]')
//             .assert.elementNotPresent('//span[@class="label redGroupColorForEvent"]')
//             .assert.elementNotPresent('//span[@class="label grayBlockColorForEvent"]');
//     },
//
//     'delete container': function (browser) {
//         browser
//             .useCss()
//             .click('.fa.fa-trash-o.delete-container')
//             .waitForElementVisible('div.modal-footer>button.btn.btn-success', 4000)
//             .click('div.modal-footer>button.btn.btn-success')
//             .waitForElementVisible('#thisIsMainLoader', 10000)
//             .waitForElementNotVisible('#thisIsMainLoader', 10000)
//             .pause(1000)
//             .useXpath()
//             .assert.elementNotPresent('//b[contains(text(), "new_event2016")]');
//
//     },
//
//
// });
