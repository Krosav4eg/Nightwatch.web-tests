var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to delegates': function (browser) {
        browser
            .relUrl('/event/212/delegates')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'check event participants data': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//p[contains(text(),"Total delegates: 890")]')
            .verify.elementPresent('//p[contains(text(),"Total participants: 64")]')
            .verify.elementPresent('//p[contains(text(),"Total cancelled: 20")]')
    },
});