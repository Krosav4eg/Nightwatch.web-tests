var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/212/partners/7588')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
    },

    'verify Event Deadlines': function (browser) {
        browser
            .useXpath()
            .verify.containsText('(//h4)[5]', "Event Deadlines")

            .clickBySelectorXpath('(//h4)[5]')
            .expect.element('//label[text()="Partner deadline:"]').to.not.be.visible;

        browser.clickBySelectorXpath('(//h4)[5]')
            .expect.element('//label[text()="Partner deadline:"]').to.be.visible;
    },
});