var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/partner-meeting-status')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'check event data': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h4[text()="Event (#2)"]', 3000)
            .verify.elementPresent('//h3[text()="Growth Session Dubai Breakfast March 2015"]')
            .verify.elementPresent('//div[text()="Local name: Growth Session Dubai Breakfast March 2015"]')
            .verify.elementPresent('//div[text()="Dates: 2015-03-04 08:00:00 - 2015-03-04 18:00:00"]')
            .verify.elementPresent('//div[text()="Venue: Le Royal Méridien Beach Resort & Spa, Dubai"]');
    },
});
