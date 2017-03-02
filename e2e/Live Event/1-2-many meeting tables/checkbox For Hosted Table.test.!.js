var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {
    'redirection to table-settings': function (browser) {
        browser
            .relUrl('/events/2312/table-settings/1')
            .waitForElementVisible('#thisIsMainLoader', 80000)
            .waitForElementNotVisible('#thisIsMainLoader', 80000);
    },
});