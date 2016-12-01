/**
 * Created by Sergey Potapov on on 15.11.2016.
 */
var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');

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
    'check save button': function (browser) {
        browser
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
            .assert.containsText('//b[2][contains(text(),"10:00")]', '10:00')
    },
    'delete container': function (browser) {
        browser
            .useCss()
            .click('.fa.fa-trash-o.delete-container')
            .pause(1000)
            .waitForElementVisible('div.modal-footer>button.btn.btn-success', 1000)
            .click('div.modal-footer>button.btn.btn-success')
            .pause(3000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(1000)
            .useXpath()
            .assert.elementNotPresent('//b[contains(text(), "new_event2016")]')
            .pause(1000)
    },


    'Check that field is required = blank click another field': function (browser) {

        browser
            .useCss()
            .click('button.btn.btn-primary.btn-block')
            .pause(2000)
            .useXpath()

            .assert.containsText('//h4[contains(text(),"Container form")]', 'Container form')
            .useCss()
            .click('input#heading')
            .pause(1000)
            .click('input#subHeading')
            .useXpath()
            .assert.elementPresent('//p[text()=" Heading is required.           "]')
            .refresh()
            .pause(3000)

    },
    'blank.click Save': function (browser) {
        browser
            .useCss()
            .click('button.btn.btn-primary.btn-block')
            .pause(2000)
            .useXpath()
            .assert.containsText('//h4[contains(text(),"Container form")]', 'Container form')
            .click('//form/div[2]/div/div/button[contains(text(),"Save")]')
            .pause(1000)
            .assert.elementPresent('//p[text()=" Heading is required.           "]')
            .refresh()
    }
    ,

})
;