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
            .assert.elementPresent('//h3[text()="IndustryForum Energy"]')
            .assert.elementPresent('//div[text()="Local name: StrategyCircle Energie"]')
            .assert.elementPresent('//div[text()="Dates: 2012-05-09 08:00:00 - 2012-05-10 18:00:00"]')
            .assert.elementPresent('//div[text()="Venue: , "]');
    },

    'check case-parallel presentations': function (browser) {
        browser
            .useXpath()
            .moveToElement('//tr[1]/td[10]/span/ul/li[text()="             Panel discussion           "]', 1298, 597)
            .waitForElementVisible('//option[text()="Case - parallel"]', 30000)
            .click('//option[text()="Case - parallel"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h4/span[text()="3"]', 3000)
            .waitForElementVisible('//tr[1]/td[10]/span/ul/li[text()="             Case - parallel           "]', 3000)
            .waitForElementVisible('//tr[2]/td[10]/span/ul/li[text()="             Case - parallel           "]', 3000)
            .waitForElementVisible('//tr[3]/td[10]/span/ul/li[text()="             Case - parallel           "]', 3000);

    },

    'check whole-audience presentations': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//option[text()="Case - whole audience"]', 30000)
            .click('//option[text()="Case - whole audience"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h4/span[text()="1"]', 3000)
            .waitForElementVisible('//tr[1]/td[10]/span/ul/li[text()="             Case - whole audience           "]', 3000);

    },
    'check case presentations': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//option[text()="Case presentation"]', 30000)
            .click('//option[text()="Case presentation"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h4/span[text()="3"]', 3000)
            .waitForElementVisible('//tr[1]/td[10]/span/ul/li[text()="             Case presentation           "]', 3000)
            .waitForElementVisible('//tr[2]/td[10]/span/ul/li[text()="             Case presentation           "]', 3000)
            .waitForElementVisible('//tr[3]/td[10]/span/ul/li[text()="             Case presentation           "]', 3000);

    },

    'check chairman speach': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//option[text()="Chairman speach"]', 30000)
            .click('//option[text()="Chairman speach"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h4/span[text()="2"]', 3000)
            .waitForElementVisible('//tr[1]/td[10]/span/ul/li[text()="             Chairman speach           "]', 3000)
            .waitForElementVisible('//tr[2]/td[10]/span/ul/li[text()="             Chairman speach           "]', 3000);
    },
    'check Cross-function keynote': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//option[text()="Cross-function keynote"]', 30000)
            .click('//option[text()="Cross-function keynote"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h4/span[text()="1"]', 3000)
            .waitForElementVisible('//tr[1]/td[10]/span/ul/li[text()="             Cross-function keynote           "]', 3000);

    },
    'check debate': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//option[text()="Debate"]', 30000)
            .click('//option[text()="Debate"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h4/span[text()="4"]', 3000)
            .waitForElementVisible('//tr[1]/td[10]/span/ul/li[text()="             Debate           "]', 3000)
            .waitForElementVisible('//tr[2]/td[10]/span/ul/li[text()="             Debate           "]', 3000)
            .waitForElementVisible('//tr[3]/td[10]/span/ul/li[text()="             Debate           "]', 3000)
            .waitForElementVisible('//tr[4]/td[10]/span/ul/li[text()="             Debate           "]', 3000);

    },
    'check FishBowl': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//option[text()="FishBowl"]', 30000)
            .click('//option[text()="FishBowl"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h4/span[text()="1"]', 3000)
            .waitForElementVisible('//tr[1]/td[10]/span/ul/li[text()="             FishBowl           "]', 3000);

    },
    'check group discussion initiation': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//option[text()="Group discussion initiation"]', 30000)
            .click('//option[text()="Group discussion initiation"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h4/span[text()="2"]', 3000)
            .waitForElementVisible('//tr[1]/td[10]/span/ul/li[text()="             Group discussion initiation           "]', 3000)
            .waitForElementVisible('//tr[2]/td[10]/span/ul/li[text()="             Group discussion initiation           "]', 3000);

    },
    'check group leadership presentation': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//option[text()="Leadership presentation"]', 30000)
            .click('//option[text()="Leadership presentation"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h4/span[text()="2"]', 3000)
            .waitForElementVisible('//tr[1]/td[10]/span/ul/li[text()="             Leadership presentation           "]', 3000)
            .waitForElementVisible('//tr[2]/td[10]/span/ul/li[text()="             Leadership presentation           "]', 3000);

    },
    'check group panel discussion': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//option[text()="Panel discussion"]', 30000)
            .click('//option[text()="Panel discussion"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h4/span[text()="6"]', 3000)
            .waitForElementVisible('//tr[1]/td[10]/span/ul/li[text()="             Panel discussion           "]', 3000)
            .waitForElementVisible('//tr[2]/td[10]/span/ul/li[text()="             Panel discussion           "]', 3000)
            .waitForElementVisible('//tr[3]/td[10]/span/ul/li[text()="             Panel discussion           "]', 3000)
            .waitForElementVisible('//tr[4]/td[10]/span/ul/li[text()="             Panel discussion           "]', 3000);

    },

});