var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/representatives')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'choose Show all': function (browser) {
        browser
            .clickBySelectorXpath('//option[@value=1]')
    },

    'choose Show cancelled': function (browser) {
        browser
            .clickBySelectorXpath('//option[@value=2]')
    },

    'choose Show only active': function (browser) {
        browser
            .clickBySelectorXpath('//option[@value=0]')
    },
});
