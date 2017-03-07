var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
    },

    'select by presenter up': function (browser) {
        browser
            .clickBySelectorXpath('//tr/th[2]')

            .useXpath()
            .verify.containsText('//tr[1]/td[2]','Delegate')
            .verify.containsText('//tr[2]/td[2]','Delegate')
            .verify.containsText('//tr[3]/td[2]','Delegate')
            .verify.containsText('//tr[4]/td[2]','Delegate')
            .verify.containsText('//tr[5]/td[2]','Delegate')
            .verify.containsText('//tr[6]/td[2]','Delegate')
            .verify.containsText('//tr[7]/td[2]','Delegate');

    },

    'select by presenter down': function (browser) {
        browser
            .clickBySelectorXpath('//tr/th[2]')

            .useXpath()
            .verify.containsText('//tr[1]/td[2]','Delegate')
            .verify.containsText('//tr[2]/td[2]','Delegate')
            .verify.containsText('//tr[3]/td[2]','Delegate')
            .verify.containsText('//tr[4]/td[2]','Delegate')
            .verify.containsText('//tr[5]/td[2]','Delegate')
            .verify.containsText('//tr[6]/td[2]','Delegate')
            .verify.containsText('//tr[7]/td[2]','Delegate');
    },
});