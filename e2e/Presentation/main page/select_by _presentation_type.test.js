var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {


    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'delegate - Case presentation. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Delegate - Case presentation"]')

            .useXpath()
            .waitForElementVisible('//h4/span[text()="2"]', 5000)
            .waitForElementVisible('//tr[1]/td[4]/span[contains(text(),"Case presentation")]', 5000)
            .waitForElementVisible('//tr[2]/td[4]/span[contains(text(),"Case presentation")]', 5000)
    },

    'case parallel. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Partner - Case - parallel"]')
            .useXpath()
            .waitForElementVisible('//h4/span[text()="3"]', 5000);
    },

    'case - whole audience. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Partner - Case - whole audience"]')
            .useXpath()
            .waitForElementVisible('//h4/span[text()="1"]', 5000);
    },

    'delegate - Chairman speach . check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Delegate - Chairman speach"]')
            .useXpath()
            .waitForElementVisible('//h4/span[text()="2"]', 5000)
            .waitForElementVisible('//tr[1]/td[4]/span[contains(text(),"Chairman speach")]', 5000)
            .waitForElementVisible('//tr[2]/td[4]/span[contains(text(),"Chairman speach")]', 5000);
    },

    'delegate - Cross-function keynote. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Delegate - Cross-function keynote"]')
            .useXpath()
            .waitForElementVisible('//h4/span[text()="1"]', 5000)
            .waitForElementVisible('//tr[1]/td[4]/span[contains(text(),"Cross-function keynote")]', 5000);
    },

    'delegate - Debate. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Delegate - Debate"]')
            .useXpath()
            .waitForElementVisible('//h4/span[text()="4"]', 5000)
            .waitForElementVisible('//tr[1]/td[4]/span[contains(text(),"Debate")]', 5000)
            .waitForElementVisible('//tr[2]/td[4]/span[contains(text(),"Debate")]', 5000)
            .waitForElementVisible('//tr[3]/td[4]/span[contains(text(),"Debate")]', 5000)
            .waitForElementVisible('//tr[4]/td[4]/span[contains(text(),"Debate")]', 5000);
    },

    ' delegate - FishBowl. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Delegate - FishBowl"]')
            .useXpath()
            .waitForElementVisible('//h4/span[text()="1"]', 5000)
            .waitForElementVisible('//tr[1]/td[4]/span[contains(text(),"FishBowl")]', 5000);
    },

    ' delegate - Gold spotlight. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Partner - Gold spotlight"]')
            .useXpath()
            .waitForElementVisible('//h4/span[text()="3"]', 5000);
    },

    ' delegate - Group discussion initiation. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Delegate - Group discussion initiation"]')
            .useXpath()
            .waitForElementVisible('//h4/span[text()="2"]', 5000)
            .waitForElementVisible('//tr[1]/td[4]/span[contains(text(),"Group discussion initiation")]', 5000)
            .waitForElementVisible('//tr[2]/td[4]/span[contains(text(),"Group discussion initiation")]', 5000);
    },

    ' delegate - Keynote. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Delegate - Keynote"]')
            .useXpath()
            .waitForElementVisible('//h4/span[text()="1"]', 5000)
            .waitForElementVisible('//tr[1]/td[4]/span[contains(text(),"Keynote")]', 5000);
    },

    ' delegate - Leadership presentation. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Delegate - Leadership presentation"]')
            .useXpath()
            .waitForElementVisible('//h4/span[text()="2"]', 5000)
            .waitForElementVisible('//tr[1]/td[4]/span[contains(text(),"Leadership presentation")]', 5000)
            .waitForElementVisible('//tr[2]/td[4]/span[contains(text(),"Leadership presentation")]', 5000);
    },

    ' delegate - panel discussion. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Delegate - Panel discussion"]')
            .useXpath()
            .waitForElementVisible('//h4/span[text()="4"]', 5000)
            .waitForElementVisible('//tr[1]/td[4]/span[contains(text(),"Panel discussion")]', 5000)
            .waitForElementVisible('//tr[2]/td[4]/span[contains(text(),"Panel discussion")]', 5000)
            .waitForElementVisible('//tr[3]/td[4]/span[contains(text(),"Panel discussion")]', 5000)
            .waitForElementVisible('//tr[4]/td[4]/span[contains(text(),"Panel discussion")]', 5000);
    },

    ' partner - SnapShot. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Partner - SnapShot"]')
            .useXpath()
            .waitForElementVisible('//h4/span[text()="2"]', 5000);
    },

    ' partner - Keynote. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Partner - Keynote"]')
            .useXpath()
            .waitForElementVisible('//h4/span[text()="3"]', 5000)
            .waitForElementVisible('//tr[1]/td[4]/span[contains(text(),"Keynote")]', 5000)
            .waitForElementVisible('//tr[2]/td[4]/span[contains(text(),"Keynote")]', 5000)
            .waitForElementVisible('//tr[3]/td[4]/span[contains(text(),"Keynote")]', 5000);
    },
});
