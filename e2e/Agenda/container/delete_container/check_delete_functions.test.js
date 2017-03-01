var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/224/agenda')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'container creation': function (browser) {
        browser
            .containerCreationForAgenda();
    },

    'check alert message': function (browser) {
        browser
            .useCss()
            .clickBySelectorCss('.fa.fa-trash-o.delete-container')
            .useXpath()
            .verify.containsText('//h4[contains(text(), "Confirmation")]', 'Confirmation');
    },

    'click NO button': function (browser) {
        browser
            .clickBySelectorXpath('//button[@data-marker="me-confirm__button__button__no"]')
            .useXpath()
            .verify.elementPresent('//b[1][contains(text(),"8:00")]')
            .verify.elementPresent('//b[2][contains(text(),"10:00")]')
            .verify.elementPresent('//b[contains(text(),"test1")]');
    },

    'click OK button': function (browser) {
        browser
            .deleteContainerForAgenda();
    },
});
