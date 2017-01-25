var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/speakers')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },
    
    'check event data': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h4[text()="Event (#212)"]', 3000)
    },

    'sort by organizer up': function (browser) {
        browser
            .clickBySelectorXpath('//tr[1]/th[9]')
            .useXpath()
            .waitForElementVisible('//tr[1]/td[9]/span/ul/li/span[contains(text(),"Management Events")]', 7000)
            .waitForElementVisible('//tr[2]/td[9]/span/ul/li/span[contains(text(),"Management Events")]', 7000)
            .waitForElementVisible('//tr[3]/td[9]/span/ul/li/span[contains(text(),"Management Events")]', 7000)
            .waitForElementVisible('//tr[4]/td[9]/span/ul/li/span[contains(text(),"Management Events")]', 7000);
    },

    'sort by organizer down': function (browser) {
        browser
            .clickBySelectorXpath('//tr[1]/th[9]')
            .useXpath()
            .waitForElementVisible('//tr[1]/td[9]/span/ul/li/a[@href="http://alpha.ew.managementevents.com/EW/MasterCompany/cruII/id/62904"]', 7000)
            .waitForElementVisible('//tr[2]/td[9]/span/ul/li/span[contains(text(),"Management Events")]', 7000)
            .waitForElementVisible('//tr[3]/td[9]/span/ul/li/span[contains(text(),"Management Events")]', 7000)
            .waitForElementVisible('//tr[4]/td[9]/span/ul/li/span[contains(text(),"Management Events")]', 7000);
    },
});