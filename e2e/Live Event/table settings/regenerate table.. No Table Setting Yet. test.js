var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to table-settings': function (browser) {
        browser
            .relUrl('/events/2312/table-settings/3')
    },

    'regenerator table': function (browser) {
        browser
            .useXpath()
            .clickBySelectorXpath('//button[text()="Regenerate tables"]')
            .clickBySelectorXpath('//*[text()="Lunch  1"]/../input')

            .setValueByXpath('(//*[text()="Lunch  1"]/../../../div/label/input)[2]', "9")
            .clickBySelectorXpath('//button[text()="(Re)Generate"]')
    },

    'verify add new table': function (browser) {
        browser
            .elements('css selector','.table.table-bordered', function (result) {
                var count = result.value.length;
                this.verify.equal(count, 31);
            })
    },
});