var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to presentations': function (browser) {
        browser
            .relUrl('/event/212/presentations')
    },

    'delegate - Case presentation. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Delegate - Case presentation"]')

            .verify.elementPresent('//h4/span[text()="2"]')
            .verify.containsText('//tr[1]/td[4]/span', 'Case presentation')
            .verify.containsText('//tr[2]/td[4]/span', 'Case presentation');
    },

    'case parallel. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Partner - Case - parallel"]')
            .verify.elementPresent('//h4/span[text()="0"]');
    },

    'case - whole audience. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Partner - Case - whole audience"]')
            .verify.elementPresent('//h4/span[text()="0"]');
    },

    'delegate - Chairman speach . check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Delegate - Chairman speech"]')
            .verify.elementPresent('//h4/span[text()="1"]')
            .verify.containsText('//tr[1]/td[4]/span', 'Chairman speech');
    },

    'delegate - Cross-function keynote. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Delegate - Cross-function keynote"]')
            .verify.containsText('//tr[1]/td[4]/span', 'Cross-function keynote');
    },

    'delegate - Debate. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Delegate - Debate"]')
            .verify.elementPresent('//h4/span[text()="2"]')
            .verify.containsText('//tr[1]/td[4]/span', 'Debate')
            .verify.containsText('//tr[2]/td[4]/span', 'Debate');
    },

    ' delegate - FishBowl. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Delegate - FishBowl"]')
            .verify.elementPresent('//h4/span[text()="1"]')
            .verify.containsText('//tr[1]/td[4]/span', 'FishBowl');
    },

    ' delegate - Gold spotlight. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Partner - Gold spotlight"]')
            .verify.elementPresent('//h4/span[text()="0"]');
    },

    ' delegate - Group discussion initiation. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Delegate - Group discussion initiation"]')
            .verify.elementPresent('//h4/span[text()="1"]')
            .verify.containsText('//tr[1]/td[4]/span', 'Group discussion initiation');
    },

    ' delegate - Keynote. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Delegate - Keynote"]')
            .waitForElementVisible('//h4/span[text()="1"]', 5000)
            .verify.containsText('//tr[1]/td[4]/span', 'Keynote');
    },

    ' delegate - Leadership presentation. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Delegate - Leadership presentation"]')
            .verify.elementPresent('//h4/span[text()="1"]')
            .verify.containsText('//tr[1]/td[4]/span', 'Leadership presentation');
    },

    ' delegate - panel discussion. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Delegate - Panel discussion"]')
            .verify.elementPresent('//h4/span[text()="1"]')
            .verify.containsText('//tr[1]/td[4]/span', 'Panel discussion');
    },

    ' partner - SnapShot. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Partner - SnapShot"]')
            .verify.elementPresent('//h4/span[text()="0"]');
    },
});
