var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {
    '@disabled':true ,
    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/agenda')
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000);
    },

    'blank click another field': function (browser) {
        browser
            .waitForElementVisible('button.btn.btn-primary.btn-block',5000)
            .click('button.btn.btn-primary.btn-block')
            .useXpath()
            .assert.elementPresent('//h4[contains(text(), "Container form")]')
            .useCss()
            .waitForElementVisible('input#subHeading', 1000)
            .click('input#subHeading')
            .waitForElementVisible('input#heading', 1000)
            .click('input#heading');
    },

    'Check that field is not required': function (browser) {
        browser
            .useXpath()
            .assert.elementNotPresent('//p[text()=" Sub Heading is required.           "]');
    },

    'blank click Save': function (browser) {
        browser
            .useXpath()
            .click('//form/div[2]/div/div/button[contains(text(),"Save")]')
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 10000);

    },

    'check save button': function (browser) {
        browser
            .waitForElementVisible('button.btn.btn-primary.btn-block', 4000)
            .click('button.btn.btn-primary.btn-block')
            .useXpath()
            .assert.elementPresent('//h4[contains(text(), "Container form")]')
            .useCss()
            .waitForElementVisible('input#heading', 1000)
            .setValue('input#heading', 'new_event2016 ')
            .waitForElementVisible('input#subHeading', 1000)
            .setValue('input#subHeading', 'test')
            .waitForElementVisible('#containerStartHour input', 1000)
            .setValue('#containerStartHour input', '8:00')
            .waitForElementVisible('#containerEndHour input', 1000)
            .setValue('#containerEndHour input', '10:00')
            .useXpath()
            .click('//form/div[2]/div/div/button[contains(text(),"Save")]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .useXpath()
            .assert.elementPresent('//b[contains(text(), "new_event2016")]');
    },

    'delete container': function (browser) {
        browser
            .useCss()
            .click('.fa.fa-trash-o.delete-container')
            .waitForElementVisible('div.modal-footer>button.btn.btn-success', 5000)
            .click('div.modal-footer>button.btn.btn-success')
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .useXpath()
            .assert.elementNotPresent('//b[contains(text(), "new_event2016")]');

    },
});
