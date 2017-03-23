var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to delegates': function (browser) {
        browser
            .relUrl('/event/200/delegates')
    },

    'click save': function (browser) {
        browser
            .clickBySelectorXpath('(//td/span/a)[1]')

            .useXpath()
            .waitForElementVisible('//button[contains(text(),"Save")]', 30000)
            .click('//button[contains(text(),"Save")]')

         .waitForElementVisible('//div[@class="sn-content"]', 30000)
            .verify.containsText('//div[@class="sn-content"]', 'Event Participant saved')
    },
});
