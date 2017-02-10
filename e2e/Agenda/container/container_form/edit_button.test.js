var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/219/agenda')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'creation container': function (browser) {
        browser
            .containerCreationForAgenda();
    },

    'click edit button': function (browser) {
        browser
            .clickBySelectorCss('i.fa.fa-pencil.edit-container')
            .useXpath()
            .verify.elementPresent('//h4[contains(text(),"Container form")]');
    },

    'blank.click another field': function (browser) {
        browser
            .clickBySelectorCss('input#heading')
            .clickBySelectorCss('input#subHeading');
    },

    'blank click Save': function (browser) {
        browser
            .clickBySelectorXpath('//form/div[2]/div/div/button[contains(text(),"Save")]');
    },

    'click NO button': function (browser) {
        browser
            .clickBySelectorCss('i.fa.fa-pencil.edit-container')

            .clickBySelectorXpath('//modal[@class="modal fade in"]//button[1][@class="btn btn-default pull-right"]')

            .verify.elementPresent('//b[contains(text(), "test1")]')
            .verify.elementPresent('//b[1][contains(text(),"8:00")]', '8:00')
            .verify.elementPresent('//b[2][contains(text(),"10:00")]', '10:00');
    },

    'delete container': function (browser) {
        browser
            .deleteContainerForAgenda()
            .useXpath()
            .verify.elementNotPresent('//b[contains(text(), "test1")]');
    },
});
