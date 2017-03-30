var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to hosting roles': function (browser) {
        browser
            .relUrl('/event/150/partners/7588')
    },

    'participation info': function (browser) {
        var additionalContacts = browser.page.partnersEdit().section.additionalContacts;
        additionalContacts
            .verify.containsText('@nameSection', "Additional contacts")
            .clickBySelector('@nameSection')
            .expect.element('@addButton').to.not.be.visible;

        additionalContacts
            .clickBySelector('@nameSection')
            .expect.element('@addButton').to.be.visible;
    },

    'add button': function (browser) {
        var additionalContacts = browser.page.partnersEdit().section.additionalContacts;
        additionalContacts
            .setValueBySelector('@emailInput', 'test')
            .sendKeys('@emailInput', '@sd')
            .sendKeys('@emailInput', '.com')
            .clickBySelector('@addButton')

            .verify.elementPresent('@deleteButton')
            .verify.elementPresent('@editButton')

            .verify.elementPresent('@secondemailInput')
            .verify.elementPresent('@addButton')

            .setValueBySelector('@secondemailInput', 'auto')
            .sendKeys('@secondemailInput', '@at')
            .setValue('@secondemailInput', '.ru')

            .clickBySelector('@addButton');
    },

    'delete button': function (browser) {
        var additionalContacts = browser.page.partnersEdit().section.additionalContacts;
        additionalContacts
            .clickBySelector('@deleteButton')
            .verify.elementPresent('@deleteSuccessMassege')

            .clickBySelector('@deleteButton')
            .verify.elementNotPresent('@secondemailInput')
            .verify.elementPresent('@deleteSuccessMassege');
    },
});