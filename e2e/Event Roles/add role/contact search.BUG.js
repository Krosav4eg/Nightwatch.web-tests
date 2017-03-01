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

    'blank field. press save button': function (browser) {
        browser
            .clickBySelectorXpath('//button[contains(text(),"Save")]')
            .verify.containsText('(//p)[1]', 'Event Role is required.')
          //  .verify.containsText('(//p)[2]', 'Event Participant is required.');
    },

    'input full name': function (browser) {
        browser
            .clickBySelectorXpath('(//input[@placeholder="Choose participant (min 3 chars)"])[1]')
            .setValueByCss('input[id="eventParticipant"]', 'Alexander')
            .pause(2000)
            .clickBySelectorXpath('//*[contains(text(),"Alexander")]');
    },

});