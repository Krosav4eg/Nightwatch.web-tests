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
            .clickBySelectorCss('div.modal-footer>button.btn.btn-danger')
            .useXpath()
            .verify.elementPresent('//b[contains(text(), "test1")]');
    },

    'click OK button': function (browser) {
        browser
            .deleteContainerForAgenda();
    },
});
