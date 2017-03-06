var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {


    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'select by presentation type up': function (browser) {
        browser
            .clickBySelectorXpath('//tr/th[4]')

            .useXpath()
            .verify.containsText('//tr[1]/td[4]/span','Case presentation')
            .verify.containsText('//tr[2]/td[4]/span','Case presentation')
            .verify.containsText('//tr[3]/td[4]/span','Chairman speech')
            .verify.containsText('//tr[4]/td[4]/span','Cross-function keynote')
            .verify.containsText('//tr[5]/td[4]/span','Debate')
            .verify.containsText('//tr[6]/td[4]/span','Debate')
    },

    'select by presentation type down': function (browser) {
        browser
            .clickBySelectorXpath('//tr/th[4]')

            .useXpath()
            .verify.containsText('//tr[1]/td[4]/span','Panel discussion')
            .verify.containsText('//tr[2]/td[4]/span','Leadership presentation')
            .verify.containsText('//tr[3]/td[4]/span','Keynote')
            .verify.containsText('//tr[4]/td[4]/span','Group discussion initiation')
            .verify.containsText('//tr[5]/td[4]/span','FishBowl')
            .verify.containsText('//tr[6]/td[4]/span','Debate')
            .verify.containsText('//tr[7]/td[4]/span','Debate')
    },
});