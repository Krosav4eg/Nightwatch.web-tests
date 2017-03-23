var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to delegates': function (browser) {
        browser
            .relUrl('/event/200/delegates')
    },

    'check event participants data': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//p[contains(text(),"Total delegates: 388")]')
            .verify.elementPresent('//p[contains(text(),"Total participants: 27")]')
            .verify.elementPresent('//p[contains(text(),"Total cancelled: 5")]');
    },
});