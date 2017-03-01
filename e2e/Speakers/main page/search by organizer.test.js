var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/214/speakers')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },
    
    'check event data': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h4[text()="Event (#214)"]', 3000)
    },

    'sort by organizer up': function (browser) {
        browser
            .clickBySelectorXpath('//tr[1]/th[9]')
            .useXpath()
            .waitForElementVisible('//tr[1]/td[9]/span/ul/li/span[contains(text(),"Management Events")]', 3000)
            .waitForElementVisible('//tr[2]/td[9]/span/ul/li/span[contains(text(),"Management Events")]', 500)
            .waitForElementVisible('//tr[3]/td[9]/span/ul/li/span[contains(text(),"Management Events")]', 500)
            .waitForElementVisible('//tr[4]/td[9]/span/ul/li/span[contains(text(),"Management Events")]', 500);
    },

    'sort by organizer down': function (browser) {
        browser
            .clickBySelectorXpath('//tr[1]/th[9]')
            .useXpath()
            .waitForElementVisible('//tr[1]/td[9]/span/ul/li/span[contains(text(),"Management Events")]', 3000)
            .waitForElementVisible('//tr[2]/td[9]/span/ul/li/span[contains(text(),"Management Events")]', 500)
            .waitForElementVisible('//tr[3]/td[9]/span/ul/li/span[contains(text(),"Management Events")]', 500)
            .waitForElementVisible('//tr[4]/td[9]/span/ul/li/span[contains(text(),"Management Events")]', 500);
    },

    'search by country ': function (browser) {
        browser
            .setValueByXpath('//tr[1]/td[9]/input[@type="text"]', ['Management ', browser.Keys.ENTER])
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//tr[1]/td[9]/span/ul/li/span', 3000)
            .verify.containsText("//tr[1]/td[9]/span/ul/li/span", "Management Events")
    },
});