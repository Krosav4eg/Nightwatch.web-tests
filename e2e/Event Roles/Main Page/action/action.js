var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {
    '@disabled': false,

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/event-participant-roles')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },
    'click delete and cancel ': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//button[@class="btn btn-danger"]', 3000)
            .click('//button[@class="btn btn-danger"]')
            .dismissAlert()
            .pause(1500)
            .assert.elementPresent('//a[@href="/delegates/edit/116561"]')
            .assert.elementPresent('//span[text()="       Ingo     "]')


    },
    'click add new role ': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//button[text()="Add new role"]', 3000)
            .click('//button[text()="Add new role"]')
            .waitForElementVisible('//h4[text()="Event Participant Role"]', 3000)

    },


});