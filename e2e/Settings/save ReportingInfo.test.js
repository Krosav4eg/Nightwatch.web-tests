var _ = require('lodash');
var presteps = require('./../presteps/presteps.js');
var auth = require('./../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .url('http://alpha.ew.managementevents.com/site/login')
            .setValueByXpath('//*[@id="LoginForm_username"]', 'xsolve')
            .setValueByXpath('//*[@id="LoginForm_password"]', 'xs0lv3')
            .click('//input[@type="submit"]')
            .pause(3000)
            .url('http://alpha.ew.managementevents.com/EW/Event/ReportingInfo/id/2428')
    },

    'choose Uitto': function (browser) {
        browser
            .waitForElementVisible('//*[@id="action-save"]', 10000)
            .click('//*[@id="action-save"]')
            .waitForElementVisible('//div[@class="alert alert-dismissable alert-success message"]', 10000)

            .containsCurrentDataInSelectorXpath('//p/i');
    },
});