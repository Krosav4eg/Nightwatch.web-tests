var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to table-settings': function (browser) {
        browser
            .relUrl('/events/2312/table-settings/3')
    },

    'add new table': function (browser) {
        browser
            .clickBySelectorXpath('//button[text()="Add new table"]')
            .verify.elementNotPresent('(//table[@class="table table-bordered"])[2]')
    },
});
