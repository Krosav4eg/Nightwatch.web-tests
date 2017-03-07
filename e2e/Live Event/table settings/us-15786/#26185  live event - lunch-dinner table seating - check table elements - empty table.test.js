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

    'click add new table Button.': function (browser) {
        browser
            .clickBySelectorXpath('//a[@href="#table-setting-10679"]')
            .verify.containsText('(//p)[6]', '6')

            .clickBySelectorXpath('//button[contains(text(),"Add new table")]')
            .verify.elementPresent('//th[contains(text(),"#16")]')
            .verify.elementPresent('(//div[contains(text(),"0/10")])[11]')
            .verify.containsText('((//table[@class="table table-bordered"])[16]//tbody/tr/td[2])[1]', '')
            .verify.containsText('((//table[@class="table table-bordered"])[16]//tbody/tr/td[2])[2]', '')
            .verify.containsText('((//table[@class="table table-bordered"])[16]//tbody/tr/td[2])[3]', '')
            .verify.containsText('((//table[@class="table table-bordered"])[16]//tbody/tr/td[2])[4]', '')
            .verify.containsText('((//table[@class="table table-bordered"])[16]//tbody/tr/td[2])[5]', '')
            .verify.containsText('((//table[@class="table table-bordered"])[16]//tbody/tr/td[2])[6]', '')
            .verify.containsText('((//table[@class="table table-bordered"])[16]//tbody/tr/td[2])[7]', '')
            .verify.containsText('((//table[@class="table table-bordered"])[16]//tbody/tr/td[2])[8]', '')
            .verify.containsText('((//table[@class="table table-bordered"])[16]//tbody/tr/td[2])[9]', '')
            .verify.containsText('((//table[@class="table table-bordered"])[16]//tbody/tr/td[2])[10]', '')
    },

    'click save seating button.': function (browser) {
        browser

            .clickBySelectorXpath('(//button[contains(text(),"Save seating")])[1]')
            .verify.containsText('(//p)[6]', '7');
    },

    'return everything to original order ': function (browser) {
        browser
            .clickBySelectorXpath('//button[contains(text(),"Regenerate tables")]')
            .verify.elementPresent('//h4[contains(text(),"(Re)Generate table seating")]')

            .clickBySelectorXpath('(//input[@type="checkbox"])[17]')
            .setValueByXpath('//input[@name="tableSize"]', '9')
            .clickBySelectorXpath('//button[contains(text(),"(Re)Generate")]')
            .pause(2500);
    },

    'created elements are disappear': function (browser) {
        browser
            .clickBySelectorXpath('//button[contains(text(),"Regenerate tables")]')
            .verify.elementPresent('//h4[contains(text(),"(Re)Generate table seating")]')

            .setValueByXpath('//input[@name="tableSize"]', '10')
            .clickBySelectorXpath('//button[contains(text(),"(Re)Generate")]')
            .verify.containsText('(//p)[6]', '6')
            .verify.elementNotPresent('//th[contains(text(),"#16")]');
    },
});

