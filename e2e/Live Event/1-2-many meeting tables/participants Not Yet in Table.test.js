var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to table-settings': function (browser) {
        browser
            .relUrl('/events/2312/table-settings/1')
    },

    'verify number': function (browser) {
        browser
            .elements('xpath','(//*[contains(text(), "Participants not in table yet")]/../../../tbody/tr[@class])', function (result) {
                var count = result.value.length;
                this
                    .useXpath()
                    .verify.containsText('//*[contains(text(), "Participants not in table yet")]', count);
            });
    },
});