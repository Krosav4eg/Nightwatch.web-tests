var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/2308/agenda')
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'search for an event in live event - choose event sidebar navigation': function (browser) {
        browser
            .clickBySelectorXpath('//span[contains(text(),"Live event")]')
            .verify.elementPresent('(//span[contains(text(),"Choose event")])[3]')
            .clickBySelectorXpath('(//span[contains(text(),"600Minutes Public IT")])[4]')

            .verify.elementPresent('//span[contains(text(),"Check-in")]')
            .verify.elementPresent('//span[contains(text(),"HelpDesk")]')
            .verify.elementPresent('//span[contains(text(),"Table setting")]')
            .verify.elementPresent('//span[contains(text(),"Table groups check view")]')
            .verify.elementPresent('//span[contains(text(),"Table groups Summary")]')
            .verify.elementPresent('//span[contains(text(),"Meetings check")]')
            .verify.elementPresent('//span[contains(text(),"Meetings summary")]')

            .clickBySelectorXpath('//span[contains(text(),"Table setting")]');
    },

    'inspect buttons displayed.': function (browser) {
        browser
            .clickBySelectorXpath('//a[@href="#table-setting-10679"]')

            .verify.elementPresent('//button[contains(text(),"Add new table")]')
            .verify.elementPresent('//button[contains(text(),"Place orphans to table")]')
            .verify.elementPresent('//button[contains(text(),"Regenerate tables")]')

            .verify.elementPresent('(//button[contains(text(),"Save seating")])[1]')
    },
});

