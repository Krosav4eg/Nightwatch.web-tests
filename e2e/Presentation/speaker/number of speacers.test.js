var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to delegates': function (browser) {
        browser
            .relUrl('/event/212/delegates')
    },

    'verify numners': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//*[text()="Group 1 - orange - 21"]')
            .verify.elementPresent('//*[text()="Group 2 - violet - 19"]')

            .verify.elementPresent('//*[text()="No group - 26 "]')

            .verify.containsText('(//*[@class="panel-body control-label "]/div)[1]', '21')
            .verify.containsText('(//*[@class="panel-body control-label "]/div/p)[2]', '19')
            .verify.containsText('//*[@id="event-delegates-results"]//h4', 'Delegates 0/66');
    },


});
