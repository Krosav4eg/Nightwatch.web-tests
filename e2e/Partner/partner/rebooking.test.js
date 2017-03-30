var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to rebooking': function (browser) {
        browser
            .relUrl('/event/212/partners/7588')
    },

    'rebooking comment field': function (browser) {
        var participationInfo = browser.page.partnersEdit().section.participationInfo;
        participationInfo
            .clickBySelector('@rebookResponsibleInput')
            .sendKeys('@rebookResponsibleInput', 'Mari Alén')
            .clickBySelector('@MariAlén')
            .click('@saveButton');

        var rebooking = browser.page.partnersEdit().section.rebooking;
        rebooking
            .clickBySelector('@nameSection')
            .verify.containsText('@rebookResponsible', "Mari Alén")

            .setValueBySelector('@rebookComments', 'Hi!')
            .clickBySelector('@saveButton')
            .verify.elementPresent('@successMassege');
    },

    'participation info not visible': function (browser) {
        var rebooking = browser.page.partnersEdit().section.rebooking;
        rebooking
            .clickBySelector('@nameSection')
            .expect.element('@rebookResponsible').to.not.be.visible;
    },

    'participation info visible': function (browser) {
        var rebooking = browser.page.partnersEdit().section.rebooking;
        rebooking
            .clickBySelector('@nameSection')
            .expect.element('@rebookResponsible').to.be.visible;
    },

    'rebooking button': function (browser) {
        var rebooking = browser.page.partnersEdit().section.rebooking;
        rebooking
            .verify.containsText('@rebookButton', 'Rebook')
            .verify.cssProperty('@rebookButton', 'background-color', 'rgba(241, 196, 15, 1)')
            .clickBySelector('@rebookButton')
            .verify.containsText('@rebookedButton', 'Rebooked')
            .verify.cssProperty('@rebookedButton', 'background-color', 'rgba(108, 166, 50, 1)')
            .clickBySelector('@rebookedButton')
    },
});
