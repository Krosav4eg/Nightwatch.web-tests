var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {


    'redirection to the event-participant-roles': function (browser) {
        browser
            .relUrl('/event/212/event-participant-roles')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'Advisory board member. check that number  is correct and the same as in list': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//option[4][text()="Advisory board member"]', 5000)
            .click('//option[4][text()="Advisory board member"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h4/span[text()="4"]', 5000)
            .waitForElementVisible('//tr[1]/td[2]/span[text()="Advisory board member"]', 5000)
            .waitForElementVisible('//tr[2]/td[2]/span[text()="Advisory board member"]', 5000)
            .waitForElementVisible('//tr[3]/td[2]/span[text()="Advisory board member"]', 5000)
            .waitForElementVisible('//tr[4]/td[2]/span[text()="Advisory board member"]', 5000);

    },


    'Awards candidate. check that number  is correct and the same as in list': function (browser) {
        browser
            .waitForElementVisible('//option[5][text()="Awards candidate"]', 5000)
            .click('//option[5][text()="Awards candidate"]')
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h4/span[text()="1"]', 5000)
            .waitForElementVisible('//tr[1]/td[2]/span[text()="Awards candidate"]', 5000);

    },
    ' Case / expert speaker. check that number  is correct and the same as in list': function (browser) {
        browser
            .waitForElementVisible('//option[6][text()="Case / expert speaker"]', 5000)
            .click('//option[6][text()="Case / expert speaker"]')
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h4/span[text()="2"]', 5000)
            .waitForElementVisible('//tr[1]/td[2]/span[text()="Case / expert speaker"]', 5000)
            .waitForElementVisible('//tr[2]/td[2]/span[text()="Case / expert speaker"]', 5000);


    },
    'Chairman . check that number  is correct and the same as in list': function (browser) {
        browser
            .waitForElementVisible('//option[7][text()="Chairman"]', 5000)
            .click('//option[7][text()="Chairman"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h4/span[text()="2"]', 5000)
            .waitForElementVisible('//tr[1]/td[2]/span[text()="Chairman"]', 5000)
            .waitForElementVisible('//tr[2]/td[2]/span[text()="Chairman"]', 5000);

    },
    'Cross-function keynote speaker. check that number  is correct and the same as in list': function (browser) {
        browser
            .waitForElementVisible('//option[8][text()="Cross-function keynote speaker"]', 5000)
            .click('//option[8][text()="Cross-function keynote speaker"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h4/span[text()="1"]', 5000)
            .waitForElementVisible('//tr[1]/td[2]/span[text()="Cross-function keynote speaker"]', 5000);

    },
    'debate speaker. check that number  is correct and the same as in list': function (browser) {
        browser
            .waitForElementVisible('//option[9][text()="Debate speaker"]', 5000)
            .click('//option[9][text()="Debate speaker"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h4/span[text()="4"]', 5000)
            .waitForElementVisible('//tr[1]/td[2]/span[text()="Debate speaker"]', 5000)
            .waitForElementVisible('//tr[2]/td[2]/span[text()="Debate speaker"]', 5000)
            .waitForElementVisible('//tr[3]/td[2]/span[text()="Debate speaker"]', 5000)
            .waitForElementVisible('//tr[4]/td[2]/span[text()="Debate speaker"]', 5000);

    },
    ' FishBowl speaker. check that number  is correct and the same as in list': function (browser) {
        browser
            .waitForElementVisible('//option[10][text()="FishBowl speaker"]', 5000)
            .click('//option[10][text()="FishBowl speaker"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h4/span[text()="1"]', 5000)
            .waitForElementVisible('//tr[1]/td[2]/span[text()="FishBowl speaker"]', 5000);

    },
    ' Group discussion initiator. check that number  is correct and the same as in list': function (browser) {
        browser
            .waitForElementVisible('//option[11][text()="Group discussion initiator"]', 5000)
            .click('//option[11][text()="Group discussion initiator"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h4/span[text()="2"]', 5000)
            .waitForElementVisible('//tr[1]/td[2]/span[text()="Group discussion initiator"]', 5000)
            .waitForElementVisible('//tr[2]/td[2]/span[text()="Group discussion initiator"]', 5000);

    },
    'Host delegate. check that number  is correct and the same as in list': function (browser) {
        browser
            .waitForElementVisible('//option[12][text()="Host delegate"]', 5000)
            .click('//option[12][text()="Host delegate"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h4/span[text()="2"]', 5000)
            .waitForElementVisible('//tr[1]/td[2]/span[text()="Host delegate"]', 5000)
            .waitForElementVisible('//tr[2]/td[2]/span[text()="Host delegate"]', 5000);

    },
    'Keynote speaker. check that number  is correct and the same as in list': function (browser) {
        browser
            .waitForElementVisible('//option[13][text()="Keynote speaker"]', 5000)
            .click('//option[13][text()="Keynote speaker"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h4/span[text()="1"]', 5000)
            .waitForElementVisible('//tr[1]/td[2]/span[text()="Keynote speaker"]', 5000);

    },
    'Leadership speaker. check that number  is correct and the same as in list': function (browser) {
        browser
            .waitForElementVisible('//option[15][text()="Leadership speaker"]', 5000)
            .click('//option[15][text()="Leadership speaker"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h4/span[text()="2"]', 5000)
            .waitForElementVisible('//tr[1]/td[2]/span[text()="Leadership speaker"]', 5000)
            .waitForElementVisible('//tr[1]/td[2]/span[text()="Leadership speaker"]', 5000);

    },
    'panel speaker. check that number  is correct and the same as in list': function (browser) {
        browser
            .waitForElementVisible('//option[14][text()="Panel speaker"]', 5000)
            .click('//option[14][text()="Panel speaker"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h4/span[text()="4"]', 5000)
            .waitForElementVisible('//tr[1]/td[2]/span[text()="Panel speaker"]', 5000)
            .waitForElementVisible('//tr[2]/td[2]/span[text()="Panel speaker"]', 5000)
            .waitForElementVisible('//tr[3]/td[2]/span[text()="Panel speaker"]', 5000)
            .waitForElementVisible('//tr[4]/td[2]/span[text()="Panel speaker"]', 5000);

    },
    ' Testimonial. check that number  is correct and the same as in list': function (browser) {
        browser
            .waitForElementVisible('//option[16][text()="Testimonial"]', 5000)
            .click('//option[16][text()="Testimonial"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h4/span[text()="2"]', 5000)
            .waitForElementVisible('//tr[1]/td[2]/span[text()="Testimonial"]', 5000)
            .waitForElementVisible('//tr[2]/td[2]/span[text()="Testimonial"]', 5000);

    },

});
