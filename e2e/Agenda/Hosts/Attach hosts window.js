
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
            .useCss()
            .pause(2000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(1000)
    },
    'not selected speaker': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//modal[@class="modal fade in"]//h4[text()="Add presentation to "]', 4000)
            .assert.elementPresent('//modal[@class="modal fade in"]//button[@data-marker="me-modal-attach-presentation-to-element__input__button__save"]')
            .click('//modal[@class="modal fade in"]//button[@data-marker="me-modal-attach-presentation-to-element__input__button__save"]')
            .pause(2500)
    },

    'none speaker is displayed': function (browser) {
        browser
            .useXpath()
            .assert.elementNotPresent('//modal[@class="modal fade in"]//td[text()="3756"]')
            .assert.elementNotPresent('//modal[@class="modal fade in"]//td[text()="3758"]')
    },

    'attach new speaker ': function (browser) {
        browser
            .useCss()
            .pause(2000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(1000)
            .useXpath()
            .waitForElementVisible('//me-event-agenda-element-presentation/div/div[2]/button[text()="Attach"]', 3000)
            .click('//me-event-agenda-element-presentation/div/div[2]/button[text()="Attach"]')
            .waitForElementVisible('//modal[@class="modal fade in"]//h4[text()="Add presentation to "]', 4000)
            .waitForElementVisible('//modal[@class="modal fade in"]//input[@data-marker="me-modal-attach-presentation-to-element__input__checkbox__3723"]', 4000)
            .assert.elementPresent('//tr[2]/td/ul/li[text()=" - Hermsmeier Jörg               "]')
            .assert.elementPresent('//tr[2]/td/ul/li[text()=" - Vekve Sandra               "]')
            .assert.elementPresent('//tr[2]/td/ul/li[text()=" - Skreien Kaaby Oddvar Eirik               "]')
            .assert.elementPresent('//tr[2]/td/ul/li[text()=" - Eriksen Olav               "]')

            .waitForElementVisible('//modal[@class="modal fade in"]//input[@data-marker="me-modal-attach-presentation-to-element__input__checkbox__3725"]', 4000)
            .assert.elementPresent('//tr[3]/td/ul/li[text()=" - Hermsmeier Jörg               "]')
            .assert.elementPresent('//tr[3]/td/ul/li[text()=" - Skreien Kaaby Oddvar Eirik               "]')
            .assert.elementPresent('//tr[3]/td/ul/li[text()=" - Vekve Sandra               "]')
            .assert.elementPresent('//tr[3]/td/ul/li[text()=" - Eriksen Olav               "]')

            .waitForElementVisible('//modal[@class="modal fade in"]//input[@data-marker="me-modal-attach-presentation-to-element__input__checkbox__3756"]', 4000)
            .assert.elementPresent('//tr[4]/td/ul/li[text()=" - Skreien Kaaby Oddvar Eirik               "]')

            .waitForElementVisible('//modal[@class="modal fade in"]//input[@data-marker="me-modal-attach-presentation-to-element__input__checkbox__3757"]', 4000)
            .assert.elementPresent('//tr[5]/td/ul/li[text()=" - Skreien Kaaby Oddvar Eirik               "]')

            .waitForElementVisible('//modal[@class="modal fade in"]//input[@data-marker="me-modal-attach-presentation-to-element__input__checkbox__3758"]', 4000)
            .assert.elementPresent('//tr[6]/td/ul/li[text()=" - Vekve Sandra               "]')
            .assert.elementPresent('//tr[6]/td/ul/li[text()=" - Eriksen Olav               "]')

            .click('//modal[@class="modal fade in"]//input[@data-marker="me-modal-attach-presentation-to-element__input__checkbox__3756"]')
            .pause(500)
            .click('//modal[@class="modal fade in"]//input[@data-marker="me-modal-attach-presentation-to-element__input__checkbox__3758"]')
            .assert.elementPresent('//modal[@class="modal fade in"]//button[@data-marker="me-modal-attach-presentation-to-element__input__button__save"]')
            .click('//modal[@class="modal fade in"]//button[@data-marker="me-modal-attach-presentation-to-element__input__button__save"]')
            .pause(5000)
    },
    'chosen speaker is displayed': function (browser) {
        browser
            .assert.elementPresent('//modal[@class="modal fade in"]//td[text()="3756"]')

            .assert.elementPresent('//li[text()=" - Skreien Kaaby Oddvar Eirik             "]')
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
            .pause(3000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(3000)
    },
    'chosen speakers are displayed': function (browser) {
        browser
            .useXpath()
            .assert.elementPresent('//h5[contains(text(),"08:00 - 09:45")]')
            .assert.elementPresent('//h5[contains(text(),"Presentation / Case")]')
            .assert.elementPresent('//button[contains(text(), "       Add room     ")]')
            .assert.elementPresent('//button[@class="btn btn-primary"]/i[@class="fa fa-plus"]')
            .assert.elementPresent('//td[text()="3756"]')
            .assert.elementPresent('//div[@class=""]//tr[1]//li[text()=" - Skreien Kaaby Oddvar Eirik             "]')
            .assert.elementPresent('//a[@href="/presentations/edit/3756"]/i')
            .assert.elementPresent('//me-event-agenda-attached-presentation-list//i[@class="fa fa-trash-o delete-element"]')
            .assert.elementPresent('//td[text()="3758"]')
            .assert.elementPresent('//div[@class=""]//tr[1]//li[text()=" - Vekve Sandra             "]')
            .assert.elementPresent('//div[@class=""]//tr[1]//li[text()=" - Eriksen Olav             "]')
            .assert.elementPresent('//a[@href="/presentations/edit/3758"]/i')
            .assert.elementPresent('//table[@class="table table-striped"]/tr[2]/td[4]/a[2]/i[@class="fa fa-trash-o delete-element"]')
    },

    'delete presentation': function (browser) {
        browser
            .waitForElementVisible('//i[@class="fa fa-trash-o delete-element"]', 2000)
            .click('//i[@class="fa fa-trash-o delete-element"]')
            .pause(1500)
            .waitForElementVisible('//modal[@class="modal fade in"]//h4[text()="Confirmation"]', 2000)
            .waitForElementVisible('//modal[@class="modal fade in"]//button[@data-marker="me-confirm__button__button__yes"]', 2000)
            .click('//modal[@class="modal fade in"]//button[@data-marker="me-confirm__button__button__yes"]')
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(3000)

    },
})
;