var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/222/agenda')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'Check that field is required = blank click another field ': function (browser) {
        browser

            .clickBySelectorCss('button.btn.btn-primary.btn-block')
            .useXpath()
            .verify.containsText('//h4[contains(text(),"Container form")]', 'Container form')

            .useCss()
            .clickBySelectorCss('#containerStartHour')
            .clickBySelectorCss('input#subHeading');
    },

    'blank click Save': function (browser) {
        browser
            .useXpath()
            .clickBySelectorXpath('//form/div[2]/div/div/button[contains(text(),"Save")]')

            .verify.elementPresent('//p[text()=" Start Hour is required.           "]')

            .clickBySelectorXpath('//modal[@class="modal fade in"]//button[1][@class="btn btn-default pull-right"]');
    },

    'can not create time before event': function (browser) {
        browser
            .clickBySelectorCss('button.btn.btn-primary.btn-block')

            .useXpath()
            .verify.containsText('//h4[contains(text(),"Container form")]', 'Container form')
            .setValueByCss('#containerStartHour input', ['7:00', browser.Keys.ENTER])

            .useXpath()
            .waitForElementVisible('//p[text()=" Date should be between 08:00 and 18:00           "]', 30000)
            .clickBySelectorXpath('//modal[@class="modal fade in"]//button[1][@class="btn btn-default pull-right"]');
    },

    'creation container': function (browser) {
        browser
            .containerCreationForAgenda();
    },

    'check start time after creation container': function (browser) {
        browser
            .useXpath()
            .verify.containsText('//b[1][contains(text(),"8:00")]', '8:00');
    },

    'delete container': function (browser) {
        browser
            .deleteContainerForAgenda();
    },
});
