var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/218/agenda')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'creation container': function (browser) {
        browser
            .containerCreationForAgenda();
    },

    'delete start time': function (browser) {
        browser
            .clickBySelectorCss('i.fa.fa-pencil.edit-container')
            .useXpath()
            .verify.elementPresent('//h4[contains(text(),"Container form")]')
            .setValueByCss('#containerStartHour input')
            .clickBySelectorCss('input#subHeading')
            .useXpath()
            .verify.containsText("//*[contains(text(), 'Start time')]/../..", "Start Hour is required")
            .setValueByCss('#containerStartHour input', ['7:59', browser.Keys.ENTER])
            .useXpath()
            .verify.containsText("//*[contains(text(), 'Start time')]/../..", "Date should be between 08:00 and 23:59")
            .clickBySelectorXpath('//button[1][@class="btn btn-default pull-right"]');
    },

    'delete container': function (browser) {
        browser
            .deleteContainerForAgenda();
    },
});
