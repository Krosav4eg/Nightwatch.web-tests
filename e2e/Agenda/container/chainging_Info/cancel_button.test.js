var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/215/agenda')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },
    'creation container': function (browser) {
        browser
            .containerCreationForAgenda();
    },

    'click on (edit button) ': function (browser) {
        browser
            .clickBySelectorCss('i.fa.fa-pencil.edit-container')
            .useXpath()
            .verify.elementPresent('//h4[contains(text(),"Container form")]');
    },

    'click NO button on form': function (browser) {
        browser
            .waitForElementVisible('//modal[@class="modal fade in"]//button[1][@class="btn btn-default pull-right"]', 2000)
            .clickBySelectorXpath('//modal[@class="modal fade in"]//button[1][@class="btn btn-default pull-right"]')
    },

    'no change was made assertion': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//b[contains(text(), "test1")]')
            .verify.elementPresent('//b[1][contains(text(),"8:00")]')
            .verify.elementPresent('//b[2][contains(text(),"10:00")]');
    },

    'delete container': function (browser) {
        browser
            .deleteContainerForAgenda();
    },
});
