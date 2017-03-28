var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/partners')
    },

    'check event data': function (browser) {
        var allInformation = browser.page.partners().section.allInformation;
        allInformation
            .verify.containsText('@titleEvent', "Event (#2)")
            .verify.containsText('@nameEvent', "Growth Session Dubai Breakfast March 2015")
            .verify.containsText('@localName', "Local name: Growth Session Dubai Breakfast March 2015")
            .verify.containsText('@dates', "Dates: 2015-03-04 08:00:00 - 2015-03-04 18:00:00")
            .verify.containsText('@venue', "Venue: Le Royal Méridien Beach Resort & Spa, Dubai");
    },
});
