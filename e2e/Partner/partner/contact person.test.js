var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/212/partners/25')
    },

    'verify Contact person': function (browser) {
        var contactPerson = browser.page.partnersEdit().section.contactPerson;
        contactPerson
            .clickBySelector('@nameSection')
            .expect.element('@toAppButton').to.not.be.visible;

        contactPerson
            .clickBySelector('@nameSection')
            .expect.element('@toAppButton').to.be.visible;
    },

    'search Contact person': function (browser) {
        browser.page.partnersEdit()
            .addContact('Rehab', '1');
    },

    'verify grid Contact person': function (browser) {
        var contactPerson = browser.page.partnersEdit().section.contactPerson;
        contactPerson
            .verify.containsText('@nameColumn','Name')
            .verify.containsText('@roleColumn','Role')
            .verify.containsText('@contactInfoColumn','Contact info')
            .verify.containsText('@actionColumn','Action')

            .verify.containsText('@nameContactColumn','Rehab E.M. Abdullah')
            .verify.containsText('@roleContactColumn','Marketing coordinator')
            .verify.containsText('@contactInfoContactColumn','rehab@4power.biz')
            .verify.containsText('@contactInfoContactColumn','+ 971 4-363-6821')

            .clickBySelector('@toAppButton');

        browser
            .window_handles(function(result) {
                var handle = result.value[1];
                browser.switchWindow(handle)
                this.verify.urlContains("app.managementevents.com/#/");

                browser.closeWindow(handle);
                handle = result.value[0];
                browser.switchWindow(handle);
            })
    },

    'delete Contact person': function (browser) {
        var contactPerson = browser.page.partnersEdit().section.contactPerson;
        contactPerson
            .clickBySelector('@deleteButton')
            .clickBySelector('@confitYesButton');
    },

    'add Content coordinator': function (browser) {
        browser.page.partnersEdit()
            .addContact('Rehab', '2');

        var contactPerson = browser.page.partnersEdit().section.contactPerson;
        contactPerson
            .verify.containsText('@roleContactColumn','Content coordinator')

            .clickBySelector('@deleteButton')
            .clickBySelector('@confitNoButton')
            .clickBySelector('@deleteButton')
            .clickBySelector('@confitYesButton');
    },

    'add Sales coordinator': function (browser) {
        browser.page.partnersEdit()
            .addContact('Rehab', '3');

        var contactPerson = browser.page.partnersEdit().section.contactPerson;
        contactPerson

            .verify.containsText('@roleContactColumn','Sales coordinator')
            .clickBySelector('@toAppButton')

            .waitForElementVisible('@alertMassege', 10000)

            .clickBySelector('@deleteButton')
            .clickBySelector('@confitYesButton');
    },
});