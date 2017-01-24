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

    'advisory board member. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('//option[4][text()="Advisory board member"]')
            .useXpath()
            .waitForElementVisible('//h4/span[text()="4"]', 5000)
            .waitForElementVisible('//tr[1]/td[2]/span[text()="Advisory board member"]', 5000)
            .waitForElementVisible('//tr[2]/td[2]/span[text()="Advisory board member"]', 5000)
            .waitForElementVisible('//tr[3]/td[2]/span[text()="Advisory board member"]', 5000)
            .waitForElementVisible('//tr[4]/td[2]/span[text()="Advisory board member"]', 5000);
    },

    'awards candidate. check that number  is correct and the same as in list': function (browser) {
        browser
            .waitForElementVisible('//option[5][text()="Awards candidate"]', 5000)
            .clickBySelectorXpath('//option[5][text()="Awards candidate"]')
            .useXpath()
            .waitForElementVisible('//h4/span[text()="1"]', 5000)
            .waitForElementVisible('//tr[1]/td[2]/span[text()="Awards candidate"]', 5000);
    },

    ' case / expert speaker. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('//option[6][text()="Case / expert speaker"]')
            .useXpath()
            .waitForElementVisible('//h4/span[text()="2"]', 5000)
            .waitForElementVisible('//tr[1]/td[2]/span[text()="Case / expert speaker"]', 5000)
            .waitForElementVisible('//tr[2]/td[2]/span[text()="Case / expert speaker"]', 5000);
    },

    'chairman . check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('//option[7][text()="Chairman"]')
            .useXpath()
            .waitForElementVisible('//h4/span[text()="2"]', 5000)
            .waitForElementVisible('//tr[1]/td[2]/span[text()="Chairman"]', 5000)
            .waitForElementVisible('//tr[2]/td[2]/span[text()="Chairman"]', 5000);
    },

    'cross-function keynote speaker. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('//option[8][text()="Cross-function keynote speaker"]')
            .useXpath()
            .waitForElementVisible('//h4/span[text()="1"]', 5000)
            .waitForElementVisible('//tr[1]/td[2]/span[text()="Cross-function keynote speaker"]', 5000);
    },

    'debate speaker. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('//option[9][text()="Debate speaker"]')
            .useXpath()
            .waitForElementVisible('//h4/span[text()="4"]', 5000)
            .waitForElementVisible('//tr[1]/td[2]/span[text()="Debate speaker"]', 5000)
            .waitForElementVisible('//tr[2]/td[2]/span[text()="Debate speaker"]', 5000)
            .waitForElementVisible('//tr[3]/td[2]/span[text()="Debate speaker"]', 5000)
            .waitForElementVisible('//tr[4]/td[2]/span[text()="Debate speaker"]', 5000);
    },

    ' fishBowl speaker. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('//option[10][text()="FishBowl speaker"]')
            .useXpath()
            .waitForElementVisible('//h4/span[text()="1"]', 5000)
            .waitForElementVisible('//tr[1]/td[2]/span[text()="FishBowl speaker"]', 5000);
    },

    ' group discussion initiator. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('//option[11][text()="Group discussion initiator"]')
            .useXpath()
            .waitForElementVisible('//h4/span[text()="2"]', 5000)
            .waitForElementVisible('//tr[1]/td[2]/span[text()="Group discussion initiator"]', 5000)
            .waitForElementVisible('//tr[2]/td[2]/span[text()="Group discussion initiator"]', 5000);
    },

    'host delegate. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('//option[12][text()="Host delegate"]')
            .useXpath()
            .waitForElementVisible('//h4/span[text()="2"]', 5000)
            .waitForElementVisible('//tr[1]/td[2]/span[text()="Host delegate"]', 5000)
            .waitForElementVisible('//tr[2]/td[2]/span[text()="Host delegate"]', 5000);
    },

    'keynote speaker. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('//option[13][text()="Keynote speaker"]')
            .useXpath()
            .waitForElementVisible('//h4/span[text()="1"]', 5000)
            .waitForElementVisible('//tr[1]/td[2]/span[text()="Keynote speaker"]', 5000);
    },

    'leadership speaker. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('//option[15][text()="Leadership speaker"]')
            .useXpath()
            .waitForElementVisible('//h4/span[text()="2"]', 5000)
            .waitForElementVisible('//tr[1]/td[2]/span[text()="Leadership speaker"]', 5000)
            .waitForElementVisible('//tr[1]/td[2]/span[text()="Leadership speaker"]', 5000);
    },

    'panel speaker. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('//option[14][text()="Panel speaker"]')
            .useXpath()
            .waitForElementVisible('//h4/span[text()="4"]', 5000)
            .waitForElementVisible('//tr[1]/td[2]/span[text()="Panel speaker"]', 5000)
            .waitForElementVisible('//tr[2]/td[2]/span[text()="Panel speaker"]', 5000)
            .waitForElementVisible('//tr[3]/td[2]/span[text()="Panel speaker"]', 5000)
            .waitForElementVisible('//tr[4]/td[2]/span[text()="Panel speaker"]', 5000);
    },

    ' testimonial. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('//option[16][text()="Testimonial"]')
            .useXpath()
            .waitForElementVisible('//h4/span[text()="2"]', 5000)
            .waitForElementVisible('//tr[1]/td[2]/span[text()="Testimonial"]', 5000)
            .waitForElementVisible('//tr[2]/td[2]/span[text()="Testimonial"]', 5000);
    },
});
