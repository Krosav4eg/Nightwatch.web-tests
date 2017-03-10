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

    'inspect elements for tables with a host/partner representative': function (browser) {
        browser
            .clickBySelectorXpath('//a[@href="#table-setting-10679"]')

            .verify.elementPresent('(//th[contains(text(),"#1")])[1]')
            .verify.elementPresent('(//input[@type="checkbox"])[1]')
            .verify.elementPresent('(//div[contains(text(),"10/10")])[1]')

            .verify.elementPresent('(//td[contains(text(),"P")])[1]')
            .verify.elementPresent('(//td/b[contains(text(),"Lange David")])')
            .verify.elementPresent('(//span[contains(text(),"Fujitsu")])[1]')

            .verify.elementPresent('(//td[contains(text(),"P")])[2]')
            .verify.elementPresent('(//td/b[contains(text(),"Toft Martin")])')
            .verify.elementPresent('(//span[contains(text(),"Fujitsu")])[2]')

            .verify.elementPresent('(//td[contains(text(),"P")])[3]')
            .verify.elementPresent('(//td/b[contains(text(),"Laugesen Mathias")])')
            .verify.elementPresent('(//span[contains(text(),"Fujitsu")])[3]');
    },
});

