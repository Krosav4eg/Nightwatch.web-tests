var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to speaker': function (browser) {
        browser
            .relUrl('/event/212/speakers');
    },

    'check event data': function (browser) {
        var eventSection = browser.page.speaker().section.event;

        eventSection
            .waitForElementVisible('@totalName212', 6000);
    },

    'choose all people in the list': function (browser) {
        var checkBoxSection = browser.page.speaker().section.checkBox;

        checkBoxSection
            .clickBySelector('@allcheckBox')
            .verify.attributeEquals('@firstcheckBox', 'checked', 'true')
            .verify.attributeEquals('@secondcheckBox', 'checked', 'true')
            .verify.attributeEquals('@thirdcheckBox', 'checked', 'true')
    },

    'choose one person from the list': function (browser) {
        var checkBoxSection = browser.page.speaker().section.checkBox;

        checkBoxSection
            .clickBySelector('@allcheckBox')
            .clickBySelector('@firstcheckBox')
            .verify.attributeEquals('@firstcheckBox', 'checked', 'true');
    },
});