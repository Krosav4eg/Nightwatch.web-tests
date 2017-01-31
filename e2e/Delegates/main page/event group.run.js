var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/delegates')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'check event groups data': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//p[contains(text(),"Group 1 - orange - 21")]')
            .verify.elementPresent('//p[contains(text(),"Group 2 - violet - 21")]')
            .verify.elementPresent('//p[contains(text(),"No group - 42 ")]')
    },
});