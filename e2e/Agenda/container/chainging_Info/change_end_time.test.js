var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/216/agenda')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'creation container': function (browser) {
        browser
            .containerCreationForAgenda();
    },

    'delete end time': function (browser) {
        browser
            .clickBySelectorCss('i.fa.fa-pencil.edit-container')
            .useXpath()
            .verify.elementPresent('//h4[contains(text(),"Container form")]')
            .useCss()
            .setValueByCss('#containerEndHour input', '')
            .clickBySelectorCss('input#subHeading')
            .useXpath()
            .verify.containsText("//*[contains(text(), 'End time')]/../..", "End Hour is required")
            .useCss()
            .setValueByCss('#containerEndHour input', ['00:00', browser.Keys.ENTER])
            .useXpath()
            .verify.containsText("//*[contains(text(), 'End time')]/../..", "Date should be between 08:00 and 23:59")
            .clickBySelectorXpath('//modal[@class="modal fade in"]//button[1][@class="btn btn-default pull-right"]');
    },

    'delete container': function (browser) {
        browser
            .deleteContainerForAgenda();
    },
});
