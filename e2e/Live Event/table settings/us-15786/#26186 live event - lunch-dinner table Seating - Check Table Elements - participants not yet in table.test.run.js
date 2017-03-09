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

    'check elements for table labeled: participants not yet in table': function (browser) {
        browser
            .clickBySelectorXpath('//a[@href="#table-setting-10679"]')

            .verify.elementPresent('//th[contains(text(),"Participants not in table yet (3)")]')

            .verify.elementPresent('(//td[contains(text(),"AB")])[16]')
            .verify.elementPresent('(//td/b[contains(text(),"Bidstrup Henrik Ejby")])')
            .verify.elementPresent('(//span[contains(text(),"IT-Universitetet i København")])[1]')
            .verify.elementPresent('(//span[contains(text(),"(3/0)")])[1]')

            .verify.elementPresent('(//td[contains(text(),"AB")])[17]')
            .verify.elementPresent('(//td/b[contains(text(),"Hansen Klaus Kvorning")])')
            .verify.elementPresent('(//span[contains(text(),"Københavns Universitet")])[8]')
            .verify.elementPresent('(//span[contains(text(),"(5/0)")])[1]')

            .verify.elementPresent('(//td[contains(text(),"D")])[106]')
            .verify.elementPresent('(//td/b[contains(text(),"Bengtson Marianne")])')
            .verify.elementPresent('(//span[contains(text(),"Københavns Universitet")])[9]')
            .verify.elementPresent('(//span[contains(text(),"(4/0)")])[1]');
    },
});

