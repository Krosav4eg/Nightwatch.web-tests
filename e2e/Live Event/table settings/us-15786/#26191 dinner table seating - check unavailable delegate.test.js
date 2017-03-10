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

            .clickBySelectorXpath('//span[contains(text(),"Table setting")]');
    },

    'click checkbox for any of the hosted tables': function (browser) {
        browser
            .clickBySelectorXpath('//a[@href="#table-setting-10679"]')

            .verify.elementPresent('(//i[@class="fa fa-ban"])[1]')
            .verify.elementPresent('(//i[@class="fa fa-ban"])[2]')
            .verify.elementPresent('(//i[@class="fa fa-ban"])[3]');
    },
});



