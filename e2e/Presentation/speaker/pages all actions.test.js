var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to presentations': function (browser) {
        browser
            .relUrl('/event/212/presentations')
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'go to the edit presentation': function (browser) {
        browser
            .clickBySelectorXpath('//a[@href="/presentations/edit/628"]')

            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'check edit page information': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//h1[text()="Edit Presentation (#628)"]')

            .verify.elementPresent('//label[text()="Organizer "]')
            .verify.elementPresent('//span[contains(text(),"Management Events")]')

            .verify.elementPresent('//label[text()="Presentation Type "]')
            .verify.elementPresent('//span[text()="Debate"]')

            .verify.elementPresent('//label[text()="Heading "]')
            .verify.elementPresent('//input[@placeholder="Heading"]')

            .verify.elementPresent('//label[text()="Sub heading 1 "]')
            .verify.elementPresent('//input[@data-marker="me-event-presentation-form__input__subheading0"]')

            .verify.elementPresent('//label[text()="Sub heading 2 "]')
            .verify.elementPresent('//input[@data-marker="me-event-presentation-form__input__subheading1"]')

            .verify.elementPresent('//label[text()="Sub heading 3 "]')
            .verify.elementPresent('//input[@data-marker="me-event-presentation-form__input__subheading2"]')

            .verify.elementPresent('//label[text()="Notes "]')
            .verify.elementPresent('//textarea[@data-marker="me-event-presentation-form__textarea__notes"]')


            .verify.elementPresent('//label[text()="Created "]')
            .verify.elementPresent('(//span[text()="2016-10-06 17:20:41"])[1]')

            .verify.elementPresent('//label[text()="Created By "]')
            .verify.elementPresent('(//span[contains(text(),",")])[2]')

            .verify.elementPresent('//label[text()="Modified "]')
            .verify.elementPresent('(//span[text()="2016-10-06 17:20:41"])[2]')

            .verify.elementPresent('//label[text()="Modified By "]')
            .verify.elementPresent('(//span[contains(text(),",")])[1]')

            .verify.elementPresent('//button[text()="Cancel"]')
            .verify.elementPresent('//button[text()="Save"]');
    },

    'page count': function (browser) {
        browser
            .useXpath()
            .clickBySelectorXpath('//option[1][@value="20"]')
            .verify.elementPresent('//span[text()="1 of 1"]')

            .clickBySelectorXpath('//option[2][@value="50"]')
            .useXpath()
            .verify.elementPresent('//span[text()="1 of 1"]')

            .clickBySelectorXpath('//option[3][@value="100"]')
            .useXpath()
            .verify.elementPresent('//span[text()="1 of 1"]');
    },

});