var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to table-settings': function (browser) {
        browser
            .relUrl('/events/2316/table-settings/3')
    },

    'add table': function (browser) {
        browser
            .elements('css selector','.table.table-bordered', function (result) {
                var count = result.value.length;
                this.verify.equal(count, 23);
            })
            .clickBySelectorXpath('//button[text()="Add new table"]')
            .clickBySelectorXpath('(//button[text()="Save seating"])[1]');
    },

    'verify add new table': function (browser) {
        browser
            .elements('css selector','.table.table-bordered', function (result) {
                var count = result.value.length;
                this.verify.equal(count, 24);
            })
    },
});