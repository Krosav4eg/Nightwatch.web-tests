var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to delegates': function (browser) {
        browser
            .relUrl('/event/188/delegates')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'verify event group': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//div[contains(text(),"Event Groups")]')

            .verify.elementPresent('//p[contains(text(),"Group 1 - orange - 2")]')
            .verify.elementPresent('//p[contains(text(),"Group 2 - violet - 4")]')
            .verify.elementPresent('//p[contains(text(),"No group - 0 ")]');
    },

    'check that when you open this page group is the same as in list on main page': function (browser) {
        browser
            .verify.elementPresent('//h4[contains(text(),"Delegates 0/6")]')

            .verify.elementPresent('//tr[1]/td[2]/span')
            .verify.elementPresent('//tr[2]/td[2]/span')
            .verify.elementPresent('//tr[3]/td[2]/span')
            .verify.elementPresent('//tr[4]/td[2]/span')
            .verify.elementPresent('//tr[5]/td[2]/span')
            .verify.elementPresent('//tr[6]/td[2]/span')
    },

    'choose group 1': function (browser) {
        browser
            .moveToElement('(//tr/th[12])[1]', 1340, 640)
            .clickBySelectorXpath('(//tr[1]/td[12])[1]')
            .verify.elementPresent('(//option[contains(text(),"Group 1 - orange")])[1]')
            .verify.elementPresent('(//option[contains(text(),"Group 2 - violet")])[1]')
            .verify.containsText('(//option)[9]', '')

            .clickBySelectorXpath('(//option[contains(text(),"Group 1 - orange")])[1]')

            .verify.elementPresent('//h4[contains(text(),"Delegates 0/2")]')
            .verify.elementPresent('//tr[1]/td[2]/span')
            .verify.elementPresent('//tr[2]/td[2]/span')
            .verify.elementNotPresent('//tr[3]/td[2]/span')
            .verify.elementNotPresent('//tr[4]/td[2]/span')
            .verify.elementNotPresent('//tr[5]/td[2]/span')
            .verify.elementNotPresent('//tr[6]/td[2]/span');
    },

    'choose group 2': function (browser) {
        browser
            .clickBySelectorXpath('(//option[contains(text(),"Group 2 - violet")])[1]')

            .verify.elementPresent('//h4[contains(text(),"Delegates 0/4")]')
            .verify.elementPresent('//tr[1]/td[2]/span')
            .verify.elementPresent('//tr[2]/td[2]/span')
            .verify.elementPresent('//tr[3]/td[2]/span')
            .verify.elementPresent('//tr[4]/td[2]/span')
            .verify.elementNotPresent('//tr[5]/td[2]/span')
            .verify.elementNotPresent('//tr[6]/td[2]/span');
    },

    'choose no group': function (browser) {
        browser
            .clickBySelectorXpath('(//option)[9]')

            .verify.elementPresent('//h4[contains(text(),"Delegates 0/6")]')
            .verify.elementPresent('//tr[1]/td[2]/span')
            .verify.elementPresent('//tr[2]/td[2]/span')
            .verify.elementPresent('//tr[3]/td[2]/span')
            .verify.elementPresent('//tr[4]/td[2]/span')
            .verify.elementPresent('//tr[5]/td[2]/span')
            .verify.elementPresent('//tr[6]/td[2]/span');
    },

});