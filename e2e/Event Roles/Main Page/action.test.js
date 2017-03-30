var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/event-participant-roles')
    },

    'click delete and cancel ': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//button[@class="btn btn-danger"]', 3000)
            .click('//button[@class="btn btn-danger"]')
            .dismissAlert()
            .pause(1500)
            .verify.elementPresent('//a[@href="/delegates/edit/116561"]')
    },

    'click add new role ': function (browser) {
        browser
            .clickBySelectorXpath('//button[text()="Add new role"]')
            .waitForElementVisible('//h4[text()="Event Participant Role"]', 3000)
    },
});