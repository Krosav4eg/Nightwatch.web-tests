var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/221/agenda')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'check save button': function (browser) {
        browser
            .containerCreationForAgenda();
    },

    'delete container': function (browser) {
        browser
            .deleteContainerForAgenda();
    },

    'Check that field is required = blank click another field': function (browser) {
        browser
            .clickBySelectorCss('button.btn.btn-primary.btn-block')

            .useXpath()
            .verify.containsText('//h4[contains(text(),"Container form")]', 'Container form')

            .clickBySelectorCss('input#heading')
            .clickBySelectorCss('input#subHeading')

            .useXpath()
            .verify.elementPresent('//p[text()=" Heading is required.           "]')
            .clickBySelectorXpath('//modal[@class="modal fade in"]//button[1][@class="btn btn-default pull-right"]');
    },

    'blank.click Save': function (browser) {
        browser
            .clickBySelectorCss('button.btn.btn-primary.btn-block')

            .useXpath()
            .verify.containsText('//h4[contains(text(),"Container form")]', 'Container form')
            .clickBySelectorXpath('//form/div[2]/div/div/button[contains(text(),"Save")]')

            .verify.elementPresent('//p[text()=" Heading is required.           "]')

            .clickBySelectorXpath('//modal[@class="modal fade in"]//form/div[2]/div/div/button[contains(text(),"Cancel")]')
            .useCss()
            .waitForElementNotVisible('div.modal-content', 4000);
    },
});
