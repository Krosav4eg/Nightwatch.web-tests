var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {


    'redirection to the event-participant-roles': function (browser) {
        browser
            .relUrl('/event/212/event-participant-roles')
    },

    'advisory board member. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('(//option[text()="Advisory board member"])[1]')
            .useXpath()
            .verify.containsText("//tr[1]/td[2]/span", "Advisory board member")
            .verify.containsText("//tr[2]/td[2]/span", "Advisory board member")
            .verify.containsText("//tr[3]/td[2]/span", "Advisory board member")
            .verify.containsText("//tr[4]/td[2]/span", "Advisory board member");
    },

    'awards candidate. check that number  is correct and the same as in list': function (browser) {
        browser
            .waitForElementVisible('(//option[text()="Awards candidate"])[1]', 5000)
            .clickBySelectorXpath('(//option[text()="Awards candidate"])[1]')
            .useXpath()
            .verify.elementNotPresent("//tr[1]/td[2]/span", "Awards candidate");
    },

    ' case / expert speaker. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('(//option[text()="Case / expert speaker"])[1]')
            .useXpath()
            .verify.containsText("//tr[1]/td[2]/span", "Case / expert speaker");
    },

    'chairman . check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('(//option[text()="Chairman"])[1]')
            .useXpath()
            .verify.elementNotPresent("//tr[1]/td[2]/span", "Chairman");
    },

    'cross-function keynote speaker. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('(//option[text()="Cross-function keynote speaker"])[1]')
            .useXpath()
            .verify.elementNotPresent("//tr[1]/td[2]/span", "Cross-function keynote speaker");
    },

    'debate speaker. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('(//option[text()="Debate speaker"])[1]')
            .useXpath()
            .verify.containsText("//tr[1]/td[2]/span", "Debate speaker");
    },

    ' fishBowl speaker. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('(//option[text()="FishBowl speaker"])[1]')
            .useXpath()
            .verify.elementNotPresent("//tr[1]/td[2]/span", "FishBowl speaker");
    },

    ' group discussion initiator. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('(//option[text()="Group discussion initiator"])[1]')
            .useXpath()
            .verify.elementNotPresent("//tr[1]/td[2]/span", "Group discussion initiator")
            .verify.elementNotPresent("//tr[2]/td[2]/span", "Group discussion initiator");
    },

    'host delegate. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('(//option[text()="Host delegate"])[1]')
            .useXpath()
            .verify.containsText("//tr[1]/td[2]/span", "Host delegate");
    },

    'keynote speaker. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('(//option[text()="Keynote speaker"])[1]')
            .useXpath()
            .verify.elementNotPresent("//tr[1]/td[2]/span", "Keynote speaker");
    },

    'leadership speaker. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('(//option[text()="Leadership speaker"])[1]')
            .useXpath()
            .verify.elementNotPresent("//tr[1]/td[2]/span", "Leadership speaker");
    },

    'panel speaker. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('(//option[text()="Panel speaker"])[1]')
            .useXpath()
            .verify.elementNotPresent("//tr[1]/td[2]/span", "Panel speaker")
            .verify.elementNotPresent("//tr[2]/td[2]/span", "Panel speaker")
            .verify.elementNotPresent("//tr[3]/td[2]/span", "Panel speaker")
            .verify.elementNotPresent("//tr[4]/td[2]/span", "Panel speaker");
    },

    ' testimonial. check that number  is correct and the same as in list': function (browser) {
        browser
            .clickBySelectorXpath('(//option[text()="Testimonial"])[1]')
            .useXpath()
            .verify.elementNotPresent("//tr[1]/td[2]/span", "Testimonial")
            .verify.elementNotPresent("//tr[2]/td[2]/span", "Testimonial");
    },
});
