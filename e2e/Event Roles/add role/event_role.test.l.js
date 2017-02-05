var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/event-participant-roles')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'click add new role ': function (browser) {
        browser
            .clickBySelectorXpath('//button[text()="Add new role"]')
            .verify.elementPresent('//h4[text()="Event Participant Role"]');
    },

    'drop down list verify': function (browser) {
        browser
            .clickBySelectorXpath('(//select)[4]')

            .verify.containsText('(//select)[4]/option[1]', 'Select Event Role')
            .verify.containsText('(//option[@value="3"])[3]', 'Advisory board member')
            .verify.containsText('(//option[@value="4"])[3]', 'Awards candidate')
            .verify.containsText('(//option[@value="5"])[3]', 'Case / expert speaker')
            .verify.containsText('(//option[@value="6"])[3]', 'Chairman')
            .verify.containsText('(//option[@value="7"])[2]', 'Cross-function keynote speaker')
            .verify.containsText('(//option[@value="8"])[2]', 'Debate speaker')
            .verify.containsText('(//option[@value="9"])[2]', 'FishBowl speaker')
            .verify.containsText('(//option[@value="10"])[2]', 'Group discussion initiator')
            .verify.containsText('(//option[@value="11"])[2]', 'Host delegate')
            .verify.containsText('(//option[@value="12"])[2]', 'Keynote speaker')
            .verify.containsText('(//option[@value="13"])[2]', 'Panel speaker')
            .verify.containsText('(//option[@value="14"])[2]', 'Leadership speaker')
            .verify.containsText('(//option[@value="15"])[2]', 'Testimonial')

            .clickBySelectorXpath('(//select)[4]');
    },

    'create advisory board member role': function (browser) {
        browser
            .clickBySelectorXpath('(//input[@placeholder="Choose participant (min 3 chars)"])[1]')
            .setValueByCss('.auto-complete input', 'Boris')
            .pause(2000)
            .clickBySelectorXpath('//*[contains(text(),"Boris")]')
            .clickBySelectorXpath('(//option[@value="3"])[3]')
            .clickBySelectorXpath('//button[contains(text(),"Save")]')

            .clickBySelectorXpath('(//option[@value="3"])[1]')
            .verify.containsText('//tr[5]/td[2]/span', 'Advisory board member')
            .verify.containsText('//tr[5]/td[4]', 'Funke')
            .verify.containsText('//tr[5]/td[5]', 'Boris')

            .click('//tr[5]/td[11]/span/button')
            .pause(1000)
            .acceptAlert()
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .verify.elementNotPresent('//tr[5]/td[2]/span')
            .verify.elementNotPresent('//tr[5]/td[4]')
            .verify.elementNotPresent('//tr[5]/td[5]');
    },

    'create awards candidate role': function (browser) {
        browser
            .clickBySelectorXpath('//button[text()="Add new role"]')
            .verify.elementPresent('//h4[text()="Event Participant Role"]')

            .clickBySelectorXpath('(//input[@placeholder="Choose participant (min 3 chars)"])[1]')
            .setValueByCss('.auto-complete input', 'Boris')
            .pause(2000)
            .clickBySelectorXpath('//*[contains(text(),"Boris")]')
            .clickBySelectorXpath('(//option[@value="4"])[3]')
            .clickBySelectorXpath('//button[contains(text(),"Save")]')

            .moveToElement('(//tr[1]/th[2])[1]', 10, 10)

            .clickBySelectorXpath('(//option[@value="4"])[1]')
            .verify.containsText('//tr[2]/td[2]/span', 'Awards candidate')
            .verify.containsText('//tr[2]/td[4]', 'Funke')
            .verify.containsText('//tr[2]/td[5]', 'Boris')

            .click('//tr[2]/td[11]/span/button')
            .pause(1000)
            .acceptAlert()
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .verify.elementNotPresent('//tr[5]/td[2]/span')
            .verify.elementNotPresent('//tr[5]/td[4]')
            .verify.elementNotPresent('//tr[5]/td[5]');
    },

    'create Case / expert speaker role': function (browser) {
        browser
            .clickBySelectorXpath('//button[text()="Add new role"]')
            .verify.elementPresent('//h4[text()="Event Participant Role"]')

            .clickBySelectorXpath('(//input[@placeholder="Choose participant (min 3 chars)"])[1]')
            .setValueByCss('.auto-complete input', 'Boris')
            .pause(2000)
            .clickBySelectorXpath('//*[contains(text(),"Boris")]')
            .clickBySelectorXpath('(//option[@value="5"])[3]')
            .clickBySelectorXpath('//button[contains(text(),"Save")]')

            .moveToElement('(//tr[1]/th[2])[1]', 10, 10)

            .clickBySelectorXpath('(//option[@value="5"])[1]')
            .verify.containsText('//tr[3]/td[2]/span', 'Case / expert speaker')
            .verify.containsText('//tr[3]/td[4]', 'Funke')
            .verify.containsText('//tr[3]/td[5]', 'Boris')

            .click('//tr[3]/td[11]/span/button')
            .pause(1000)
            .acceptAlert()
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .verify.elementNotPresent('//tr[3]/td[2]/span')
            .verify.elementNotPresent('//tr[3]/td[4]')
            .verify.elementNotPresent('//tr[3]/td[5]');
    },

    'create Chairman role': function (browser) {
        browser
            .clickBySelectorXpath('//button[text()="Add new role"]')
            .verify.elementPresent('//h4[text()="Event Participant Role"]')

            .clickBySelectorXpath('(//input[@placeholder="Choose participant (min 3 chars)"])[1]')
            .setValueByCss('.auto-complete input', 'Boris')
            .pause(2000)
            .clickBySelectorXpath('//*[contains(text(),"Boris")]')
            .clickBySelectorXpath('(//option[@value="6"])[3]')
            .clickBySelectorXpath('//button[contains(text(),"Save")]')

            .moveToElement('(//tr[1]/th[2])[1]', 10, 10)

            .clickBySelectorXpath('(//option[@value="6"])[1]')
            .verify.containsText('//tr[2]/td[2]/span', 'Chairman')
            .verify.containsText('//tr[2]/td[4]', 'Funke')
            .verify.containsText('//tr[2]/td[5]', 'Boris')

            .click('//tr[2]/td[11]/span/button')
            .pause(1000)
            .acceptAlert()
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .verify.elementNotPresent('//tr[2]/td[2]/span')
            .verify.elementNotPresent('//tr[2]/td[4]')
            .verify.elementNotPresent('//tr[2]/td[5]');
    },

    'create Cross-function keynote speaker role': function (browser) {
        browser
            .clickBySelectorXpath('//button[text()="Add new role"]')
            .verify.elementPresent('//h4[text()="Event Participant Role"]')

            .clickBySelectorXpath('(//input[@placeholder="Choose participant (min 3 chars)"])[1]')
            .setValueByCss('.auto-complete input', 'Boris')
            .pause(2000)
            .clickBySelectorXpath('//*[contains(text(),"Boris")]')
            .clickBySelectorXpath('(//option[@value="7"])[2]')
            .clickBySelectorXpath('//button[contains(text(),"Save")]')

            .moveToElement('(//tr[1]/th[2])[1]', 10, 10)

            .clickBySelectorXpath('(//option[@value="7"])[1]')
            .verify.containsText('//tr[2]/td[2]/span', 'Cross-function keynote speaker')
            .verify.containsText('//tr[2]/td[4]', 'Funke')
            .verify.containsText('//tr[2]/td[5]', 'Boris')

            .click('//tr[2]/td[11]/span/button')
            .pause(1000)
            .acceptAlert()
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .verify.elementNotPresent('//tr[2]/td[2]/span')
            .verify.elementNotPresent('//tr[2]/td[4]')
            .verify.elementNotPresent('//tr[2]/td[5]');
    },

    'create Debate speaker role': function (browser) {
        browser
            .clickBySelectorXpath('//button[text()="Add new role"]')
            .verify.elementPresent('//h4[text()="Event Participant Role"]')

            .clickBySelectorXpath('(//input[@placeholder="Choose participant (min 3 chars)"])[1]')
            .setValueByCss('.auto-complete input', 'Boris')
            .pause(2000)
            .clickBySelectorXpath('//*[contains(text(),"Boris")]')
            .clickBySelectorXpath('(//option[@value="8"])[2]')
            .clickBySelectorXpath('//button[contains(text(),"Save")]')

            .moveToElement('(//tr[1]/th[2])[1]', 10, 10)

            .clickBySelectorXpath('(//option[@value="8"])[1]')
            .verify.containsText('//tr[4]/td[2]/span', 'Debate speaker')
            .verify.containsText('//tr[4]/td[4]', 'Funke')
            .verify.containsText('//tr[4]/td[5]', 'Boris')

            .click('//tr[4]/td[11]/span/button')
            .pause(1000)
            .acceptAlert()
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .verify.elementNotPresent('//tr[4]/td[2]/span')
            .verify.elementNotPresent('//tr[4]/td[4]')
            .verify.elementNotPresent('//tr[4]/td[5]');
    },

    'create FishBowl speaker role': function (browser) {
        browser
            .clickBySelectorXpath('//button[text()="Add new role"]')
            .verify.elementPresent('//h4[text()="Event Participant Role"]')

            .clickBySelectorXpath('(//input[@placeholder="Choose participant (min 3 chars)"])[1]')
            .setValueByCss('.auto-complete input', 'Boris')
            .pause(2000)
            .clickBySelectorXpath('//*[contains(text(),"Boris")]')
            .clickBySelectorXpath('(//option[@value="9"])[2]')
            .clickBySelectorXpath('//button[contains(text(),"Save")]')

            .moveToElement('(//tr[1]/th[2])[1]', 10, 10)

            .clickBySelectorXpath('(//option[@value="9"])[1]')
            .verify.containsText('//tr[2]/td[2]/span', 'FishBowl speaker')
            .verify.containsText('//tr[2]/td[4]', 'Funke')
            .verify.containsText('//tr[2]/td[5]', 'Boris')

            .click('//tr[2]/td[11]/span/button')
            .pause(1000)
            .acceptAlert()
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .verify.elementNotPresent('//tr[2]/td[2]/span')
            .verify.elementNotPresent('//tr[2]/td[4]')
            .verify.elementNotPresent('//tr[2]/td[5]');
    },

    'create Group discussion initiator role': function (browser) {
        browser
            .clickBySelectorXpath('//button[text()="Add new role"]')
            .verify.elementPresent('//h4[text()="Event Participant Role"]')

            .clickBySelectorXpath('(//input[@placeholder="Choose participant (min 3 chars)"])[1]')
            .setValueByCss('.auto-complete input', 'Boris')
            .pause(2000)
            .clickBySelectorXpath('//*[contains(text(),"Boris")]')
            .clickBySelectorXpath('(//option[@value="10"])[2]')
            .clickBySelectorXpath('//button[contains(text(),"Save")]')

            .moveToElement('(//tr[1]/th[2])[1]', 10, 10)

            .clickBySelectorXpath('(//option[@value="10"])[1]')
            .verify.containsText('//tr[3]/td[2]/span', 'Group discussion initiator')
            .verify.containsText('//tr[3]/td[4]', 'Funke')
            .verify.containsText('//tr[3]/td[5]', 'Boris')

            .click('//tr[3]/td[11]/span/button')
            .pause(1000)
            .acceptAlert()
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .verify.elementNotPresent('//tr[3]/td[2]/span')
            .verify.elementNotPresent('//tr[3]/td[4]')
            .verify.elementNotPresent('//tr[3]/td[5]');
    },

    'create Host delegate role': function (browser) {
        browser
            .clickBySelectorXpath('//button[text()="Add new role"]')
            .verify.elementPresent('//h4[text()="Event Participant Role"]')

            .clickBySelectorXpath('(//input[@placeholder="Choose participant (min 3 chars)"])[1]')
            .setValueByCss('.auto-complete input', 'Boris')
            .pause(2000)
            .clickBySelectorXpath('//*[contains(text(),"Boris")]')
            .clickBySelectorXpath('(//option[@value="11"])[2]')
            .clickBySelectorXpath('//button[contains(text(),"Save")]')

            .moveToElement('(//tr[1]/th[2])[1]', 10, 10)

            .clickBySelectorXpath('(//option[@value="11"])[1]')
            .verify.containsText('//tr[3]/td[2]/span', 'Host delegate')
            .verify.containsText('//tr[3]/td[4]', 'Funke')
            .verify.containsText('//tr[3]/td[5]', 'Boris')

            .click('//tr[3]/td[11]/span/button')
            .pause(1000)
            .acceptAlert()
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .verify.elementNotPresent('//tr[3]/td[2]/span')
            .verify.elementNotPresent('//tr[3]/td[4]')
            .verify.elementNotPresent('//tr[3]/td[5]');
    },

    'create Keynote speaker role': function (browser) {
        browser
            .clickBySelectorXpath('//button[text()="Add new role"]')
            .verify.elementPresent('//h4[text()="Event Participant Role"]')

            .clickBySelectorXpath('(//input[@placeholder="Choose participant (min 3 chars)"])[1]')
            .setValueByCss('.auto-complete input', 'Boris')
            .pause(2000)
            .clickBySelectorXpath('//*[contains(text(),"Boris")]')
            .clickBySelectorXpath('(//option[@value="12"])[2]')
            .clickBySelectorXpath('//button[contains(text(),"Save")]')

            .moveToElement('(//tr[1]/th[2])[1]', 10, 10)

            .clickBySelectorXpath('(//option[@value="12"])[1]')
            .verify.containsText('//tr[2]/td[2]/span', 'Keynote speaker')
            .verify.containsText('//tr[2]/td[4]', 'Funke')
            .verify.containsText('//tr[2]/td[5]', 'Boris')

            .click('//tr[2]/td[11]/span/button')
            .pause(1000)
            .acceptAlert()
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .verify.elementNotPresent('//tr[2]/td[2]/span')
            .verify.elementNotPresent('//tr[2]/td[4]')
            .verify.elementNotPresent('//tr[2]/td[5]');
    },

    'create Panel speaker role': function (browser) {
        browser
            .clickBySelectorXpath('//button[text()="Add new role"]')
            .verify.elementPresent('//h4[text()="Event Participant Role"]')

            .clickBySelectorXpath('(//input[@placeholder="Choose participant (min 3 chars)"])[1]')
            .setValueByCss('.auto-complete input', 'Boris')
            .pause(2000)
            .clickBySelectorXpath('//*[contains(text(),"Boris")]')
            .clickBySelectorXpath('(//option[@value="13"])[2]')
            .clickBySelectorXpath('//button[contains(text(),"Save")]')

            .moveToElement('(//tr[1]/th[2])[1]', 10, 10)

            .clickBySelectorXpath('(//option[@value="13"])[1]')
            .verify.containsText('//tr[5]/td[2]/span', 'Panel speaker')
            .verify.containsText('//tr[5]/td[4]', 'Funke')
            .verify.containsText('//tr[5]/td[5]', 'Boris')

            .click('//tr[5]/td[11]/span/button')
            .pause(1000)
            .acceptAlert()
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .verify.elementNotPresent('//tr[5]/td[2]/span')
            .verify.elementNotPresent('//tr[5]/td[4]')
            .verify.elementNotPresent('//tr[5]/td[5]');
    },

    'create Leadership speaker role': function (browser) {
        browser
            .clickBySelectorXpath('//button[text()="Add new role"]')
            .verify.elementPresent('//h4[text()="Event Participant Role"]')

            .clickBySelectorXpath('(//input[@placeholder="Choose participant (min 3 chars)"])[1]')
            .setValueByCss('.auto-complete input', 'Boris')
            .pause(2000)
            .clickBySelectorXpath('//*[contains(text(),"Boris")]')
            .clickBySelectorXpath('(//option[@value="14"])[2]')
            .clickBySelectorXpath('//button[contains(text(),"Save")]')

            .moveToElement('(//tr[1]/th[2])[1]', 10, 10)

            .clickBySelectorXpath('(//option[@value="14"])[1]')
            .verify.containsText('//tr[3]/td[2]/span', 'Leadership speaker')
            .verify.containsText('//tr[3]/td[4]', 'Funke')
            .verify.containsText('//tr[3]/td[5]', 'Boris')

            .click('//tr[3]/td[11]/span/button')
            .pause(1000)
            .acceptAlert()
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .verify.elementNotPresent('//tr[3]/td[2]/span')
            .verify.elementNotPresent('//tr[3]/td[4]')
            .verify.elementNotPresent('//tr[3]/td[5]');
    },

    'create Testimonial role': function (browser) {
        browser
            .clickBySelectorXpath('//button[text()="Add new role"]')
            .verify.elementPresent('//h4[text()="Event Participant Role"]')

            .clickBySelectorXpath('(//input[@placeholder="Choose participant (min 3 chars)"])[1]')
            .setValueByCss('.auto-complete input', 'Boris')
            .pause(2000)
            .clickBySelectorXpath('//*[contains(text(),"Boris")]')
            .clickBySelectorXpath('(//option[@value="15"])[2]')
            .clickBySelectorXpath('//button[contains(text(),"Save")]')

            .moveToElement('(//tr[1]/th[2])[1]', 10, 10)

            .clickBySelectorXpath('(//option[@value="15"])[1]')
            .verify.containsText('//tr[3]/td[2]/span', 'Leadership speaker')
            .verify.containsText('//tr[3]/td[4]', 'Funke')
            .verify.containsText('//tr[3]/td[5]', 'Boris')

            .click('//tr[3]/td[11]/span/button')
            .pause(1000)
            .acceptAlert()
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .verify.elementNotPresent('//tr[3]/td[2]/span')
            .verify.elementNotPresent('//tr[3]/td[4]')
            .verify.elementNotPresent('//tr[3]/td[5]');
    },

});