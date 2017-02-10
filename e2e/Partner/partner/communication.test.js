var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/partners/25')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
    },

    'verify Communication': function (browser) {
        browser
            .useXpath()
            .verify.containsText('(//h4)[10]', "Communication")

            .clickBySelectorXpath('(//h4)[10]')
            .expect.element('(//button[@class="btn btn-primary btn-lg communication-participant-btn"])[1]').to.not.be.visible;

        browser.clickBySelectorXpath('(//h4)[10]')
            .expect.element('(//button[@class="btn btn-primary btn-lg communication-participant-btn"])[1]').to.be.visible;
    },
});