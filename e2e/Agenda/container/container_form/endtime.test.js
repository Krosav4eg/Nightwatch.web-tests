var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/220/agenda')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'Check that field is required = blank click another field': function (browser) {
        browser
            .clickBySelectorCss('button.btn.btn-primary.btn-block')
            .useXpath()
            .verify.elementPresent('//h4[contains(text(),"Container form")]')
            .useCss()
            .clickBySelectorCss('#containerEndHour')
            .clickBySelectorCss('input#subHeading');
    },

    'blank click Save': function (browser) {
        browser
            .clickBySelectorXpath('//form/div[2]/div/div/button[contains(text(),"Save")]')
            .verify.elementPresent('//p[text()=" End Hour is required.           "]')
            .clickBySelectorXpath('//modal[@class="modal fade in"]//button[1][@class="btn btn-default pull-right"]');
    },

    'check end time after event': function (browser) {
        browser
            .clickBySelectorCss('button.btn.btn-primary.btn-block')
            .useXpath()
            .verify.elementPresent('//h4[contains(text(),"Container form")]')
            .setValueByCss('#containerEndHour input', ['00:00', browser.Keys.ENTER])

            .useXpath()
            .waitForElementVisible('//p[text()=" Date should be between 08:00 and 18:00           "]', 30000)
            .clickBySelectorXpath('//modal[@class="modal fade in"]//button[1][@class="btn btn-default pull-right"]');
    },

    'check end time after creation container': function (browser) {
        browser
            .clickBySelectorCss('button.btn.btn-primary.btn-block')

            .useXpath()
            .verify.containsText('//h4[contains(text(),"Container form")]', 'Container form')

            .setValueByCss('input#heading', 'autotest5')
            .setValueByCss('input#subHeading', 'test')
            .setValueByCss('#containerStartHour input', '8:00')
            .setValueByCss('#containerEndHour input', '10:00')

            .clickBySelectorXpath('//form/div[2]/div/div/button[contains(text(),"Save")]')
            .verify.containsText('//b[2][contains(text(),"10:00")]', '10:00');
    },

    'check that only container was create ': function (browser) {
        browser
            .verify.elementPresent('//b[contains(text(), "autotest5")]')

            .verify.containsText('//b[1][contains(text(),"8:00")]', '8:00')
            .verify.containsText('//b[2][contains(text(),"10:00")]', '10:00');
    },

    'that information message appears': function (browser) {
        browser
            .verify.elementPresent('//div[text()=" You don`t have any elements into container                 "]');

    },

    'delete container': function (browser) {
        browser
            .deleteContainerForAgenda()
            .verify.elementNotPresent('//b[contains(text(), "autotest5")]');
    },

    'container without time 8:00-8:00': function (browser) {
        browser
            .clickBySelectorCss('button.btn.btn-primary.btn-block')

            .useXpath()
            .verify.containsText('//h4[contains(text(),"Container form")]', 'Container form')

            .setValueByCss('input#heading', 'autotest5 ')
            .setValueByCss('input#subHeading', 'test')
            .setValueByCss('#containerStartHour input', '8:00')
            .setValueByCss('#containerEndHour input', '8:00')

            .clickBySelectorXpath('//form/div[2]/div/div/button[contains(text(),"Save")]')

            .useXpath()
            .verify.elementPresent('//b[contains(text(), "autotest5")]')
            .verify.containsText('//b[1][contains(text(),"8:00")]', '8:00')
            .verify.containsText('//b[2][contains(text(),"8:00")]', '8:00');
    },

    'remove container': function (browser) {
        browser
            .deleteContainerForAgenda()

            .verify.elementNotPresent('//b[contains(text(), "autotest5")]');
    },
});
