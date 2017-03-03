var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/2314/agenda')
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'search for an event in live event - choose event sidebar navigation': function (browser) {
        browser
            .clickBySelectorXpath('//span[contains(text(),"Live event")]')
            .verify.elementPresent('(//span[contains(text(),"Choose event")])[3]');
    },

    'click event Id for any of the returned search results': function (browser) {
        browser
            .clickBySelectorXpath('(//span[contains(text(),"Choose event")])[3]')
            .clickBySelectorXpath('//a[contains(text(),"IndustryForum Healthcare")]')

            .verify.elementPresent('//h4[contains(text(),"Event (#2314)")]')
            .verify.elementPresent('//h3[contains(text(),"IndustryForum Healthcare")]')

            .clickBySelectorXpath('(//span[contains(text(),"IndustryForum Healthcare")])[4]')

            .verify.elementPresent('//span[contains(text(),"Check-in")]')
            .verify.elementPresent('//span[contains(text(),"HelpDesk")]')
            .verify.elementPresent('//span[contains(text(),"Table setting")]')
            .verify.elementPresent('//span[contains(text(),"Table groups check view")]')
            .verify.elementPresent('//span[contains(text(),"Table groups Summary")]')
            .verify.elementPresent('//span[contains(text(),"Meetings check")]')
            .verify.elementPresent('//span[contains(text(),"Meetings summary")]');
    },

    'check table setting link in live event - event sidebar navigation.': function (browser) {
        browser
            .clickBySelectorXpath('//span[contains(text(),"Table setting")]')

            .verify.elementPresent('//abbr[contains(text(),"Delegates in tables:")]')
            .verify.elementPresent('//abbr[contains(text(),"Delegates not in tables:")]')
            .verify.elementPresent('//abbr[contains(text(),"Representatives in tables:")]')
            .verify.elementPresent('//abbr[contains(text(),"Tables missing representative:")]')
            .verify.elementPresent('//abbr[contains(text(),"Hosted tables:")]');
    },
});

