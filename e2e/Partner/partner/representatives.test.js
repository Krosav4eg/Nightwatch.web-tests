var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/212/partners/7588')
    },

    'participation info not visible': function (browser) {
        var representatives = browser.page.partnersEdit().section.representatives;
        representatives
            .clickBySelector('@nameSection')
            .expect.element('@contactSearchText').to.not.be.visible;
    },

    'participation info visible': function (browser) {
        var representatives = browser.page.partnersEdit().section.representatives;
        representatives
            .clickBySelector('@nameSection')
            .expect.element('@contactSearchText').to.be.visible;
    },

    'add contact': function (browser) {
        var representatives = browser.page.partnersEdit().section.representatives;
        representatives
            .moveToElement('@contactSearchText', 500, 800)

            .clickBySelector('@contactSearchInput')
            .setValueBySelector('@contactSearchInput', 'Möller')
            // .setValueByCss('.auto-complete input', 'Möller')
            // .pause(3000)
            .clickBySelector('@MollerText')
            .clickBySelector('@saveButton');
    },

    'information': function (browser) {
        var representatives = browser.page.partnersEdit().section.representatives;
        representatives
            .verify.elementPresent('@nameMollerMarkusText')
            .verify.elementPresent('@emailMollerMarkusText')
            .verify.elementPresent('@mobileMollerMarkusText')

            .clickBySelector('@idMollerMarkusText');
        browser.window_handles(function (result) {
                var handle = result.value[1];
                browser.switchWindow(handle)
                    .verify.urlContains("http://alpha.ew.managementevents.com/EW/MasterContact/cruII/id/283126");
                browser.page.masterContactEdit()
                    .waitForElementVisible('@lastNameInput', 10000)
                    .verify.valueContains('@lastNameInput', 'Möller')
                    .verify.valueContains('@firstNameInput', 'Markus')
                    .verify.valueContains('@emailInput', 'markus.moeller@bblaw.com')
                    .verify.valueContains('@mobileInput', '+49 160 6751398');

                browser.closeWindow(handle);
                handle = result.value[0];
                browser.switchWindow(handle);
            })
    },

    'action': function (browser) {
        var representatives = browser.page.partnersEdit().section.representatives;
        representatives
            .clickBySelector('@cancelButton')

            .clickBySelector('@confirmNoButton')
            .clickBySelector('@replaceButton')
            .verify.elementPresent('@replaceMarkusText')
            .verify.elementPresent('@replaceSelect')
            .verify.elementPresent('@secondReplaceButton');
    },

    'delete contact': function (browser) {
        var representatives = browser.page.partnersEdit().section.representatives;
        representatives
            .clickBySelector('@cancelButton')

            .clickBySelector('@confirmYesButton')

            .verify.elementNotPresent('@idMollerMarkusText')
            .verify.elementNotPresent('@mobileMollerMarkusText')
            .verify.elementNotPresent('@emailMollerMarkusText');
    },
});

