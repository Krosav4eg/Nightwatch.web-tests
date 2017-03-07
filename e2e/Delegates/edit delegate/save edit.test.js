var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to delegates': function (browser) {
        browser
            .relUrl('/delegates/edit/107422')
    },

    'click save': function (browser) {
        browser
            .clickBySelectorXpath('//button[contains(text(),"Save")]')

            .waitForElementVisible('//div[@class="simple-notification toast-notification success"]', 30000)
            .verify.containsText('//div[@class="sn-title"]', 'Success!')
            .verify.containsText('//div[@class="sn-content"]', 'Event Participant saved')
            .clickBySelectorXpath('//div[@class="simple-notification toast-notification success"]')

            .waitForElementVisible('//h4[text()="Event (#2338)"]', 3000)
    },


});
