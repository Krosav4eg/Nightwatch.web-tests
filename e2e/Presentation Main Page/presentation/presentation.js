var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {
    '@disabled': true,
    
    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'delegate - Case presentation. check that number  is correct and the same as in list': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//option[text()="Delegate - Case presentation"]', 5000)
            .click('//option[text()="Delegate - Case presentation"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h4/span[text()="3"]', 5000);

    },


    'Case parallel. check that number  is correct and the same as in list': function (browser) {
        browser
            .waitForElementVisible('//option[text()="Partner - Case - parallel"]', 5000)
            .click('//option[text()="Partner - Case - parallel"]')
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h4/span[text()="3"]', 5000);

    },
    'case - whole audience. check that number  is correct and the same as in list': function (browser) {
        browser
            .waitForElementVisible('//option[text()="Partner - Case - whole audience"]', 5000)
            .click('//option[text()="Partner - Case - whole audience"]')
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h4/span[text()="1"]', 5000);

    },
    'delegate - Chairman speach . check that number  is correct and the same as in list': function (browser) {
        browser
            .waitForElementVisible('//option[text()="Delegate - Chairman speach"]', 5000)
            .click('//option[text()="Delegate - Chairman speach"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h4/span[text()="2"]', 5000);

    },
    'delegate - Cross-function keynote. check that number  is correct and the same as in list': function (browser) {
        browser
            .waitForElementVisible('//option[text()="Delegate - Cross-function keynote"]', 5000)
            .click('//option[text()="Delegate - Cross-function keynote"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h4/span[text()="1"]', 5000);

    },
    'delegate - Debate. check that number  is correct and the same as in list': function (browser) {
        browser
            .waitForElementVisible('//option[text()="Delegate - Debate"]', 5000)
            .click('//option[text()="Delegate - Debate"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h4/span[text()="4"]', 5000);

    },
    ' delegate - FishBowl. check that number  is correct and the same as in list': function (browser) {
        browser
            .waitForElementVisible('//option[text()="Delegate - FishBowl"]', 5000)
            .click('//option[text()="Delegate - FishBowl"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h4/span[text()="1"]', 5000);

    },
    ' delegate - Gold spotlight. check that number  is correct and the same as in list': function (browser) {
        browser
            .waitForElementVisible('//option[text()="Partner - Gold spotlight"]', 5000)
            .click('//option[text()="Partner - Gold spotlight"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h4/span[text()="3"]', 5000);

    },
    ' delegate - Group discussion initiation. check that number  is correct and the same as in list': function (browser) {
        browser
            .waitForElementVisible('//option[text()="Delegate - Group discussion initiation"]', 5000)
            .click('//option[text()="Delegate - Group discussion initiation"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h4/span[text()="2"]', 5000);

    },
    ' delegate - Keynote. check that number  is correct and the same as in list': function (browser) {
        browser
            .waitForElementVisible('//option[text()="Delegate - Keynote"]', 5000)
            .click('//option[text()="Delegate - Keynote"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h4/span[text()="2"]', 5000);

    },
    ' delegate - Leadership presentation. check that number  is correct and the same as in list': function (browser) {
        browser
            .waitForElementVisible('//option[text()="Delegate - Leadership presentation"]', 5000)
            .click('//option[text()="Delegate - Leadership presentation"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h4/span[text()="2"]', 5000);

    },
    ' delegate - panel discussion. check that number  is correct and the same as in list': function (browser) {
        browser
            .waitForElementVisible('//option[text()="Delegate - Panel discussion"]', 5000)
            .click('//option[text()="Delegate - Panel discussion"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h4/span[text()="5"]', 5000);

    },
    ' partner - SnapShot. check that number  is correct and the same as in list': function (browser) {
        browser
            .waitForElementVisible('//option[text()="Partner - SnapShot"]', 5000)
            .click('//option[text()="Partner - SnapShot"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h4/span[text()="2"]', 5000);

    },
    ' Partner - Keynote. check that number  is correct and the same as in list': function (browser) {
        browser
            .waitForElementVisible('//option[text()="Partner - Keynote"]', 5000)
            .click('//option[text()="Partner - Keynote"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h4/span[text()="3"]', 5000);

    },
});
