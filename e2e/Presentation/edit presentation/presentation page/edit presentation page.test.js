var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
    },

    'check event data': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h4[text()="Event (#212)"]', 3000)
    },

    'go to the edit presentation': function (browser) {
        browser
            .clickBySelectorXpath('//a[@href="/presentations/edit/628"]')
    },

    'check edit page information': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h1[text()="Edit Presentation (#628)"]', 3000)
            .waitForElementVisible('//label[text()="Organizer "]', 3000)

            .waitForElementVisible('//span[contains(text(),"Management Events")]', 3000)
            .waitForElementVisible('//label[text()="Presentation Type "]', 3000)

            .waitForElementVisible('//label[text()="Heading "]', 3000)
            .waitForElementVisible('//input[@placeholder="Heading"]', 3000)
            .waitForElementVisible('//label[text()="Sub heading 1 "]', 3000)
            .waitForElementVisible('//label[text()="Sub heading 2 "]', 3000)
            .waitForElementVisible('//label[text()="Sub heading 3 "]', 3000)
            .waitForElementVisible('//label[text()="Notes "]', 3000)

            .waitForElementVisible('//label[text()="Created "]', 3000)
            .waitForElementVisible('(//span[text()="2016-10-06 17:20:41"])[1]', 3000)

            .waitForElementVisible('//label[text()="Created By "]', 3000)
            .waitForElementVisible('(//span[contains(text(),",")])[1]', 3000)

            .waitForElementVisible('//label[text()="Modified "]', 3000)
            .waitForElementVisible('(//span[text()="2016-10-06 17:20:41"])[2]', 3000)

            .waitForElementVisible('//label[text()="Modified By "]', 3000)
            .waitForElementVisible('//button[text()="Cancel"]', 3000)
            .waitForElementVisible('//button[text()="Save"]', 3000);
    },
});