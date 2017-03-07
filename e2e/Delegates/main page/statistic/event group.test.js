var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to delegates': function (browser) {
        browser
            .relUrl('/event/200/delegates')
    },

    'check event groups data': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//p[contains(text(),"Group 1 - orange - 7")]')
            .verify.elementPresent('//p[contains(text(),"Group 2 - violet - 12")]')
            .verify.elementPresent('//p[contains(text(),"No group - 0 ")]');
    },
});