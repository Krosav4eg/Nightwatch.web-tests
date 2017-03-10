var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/events/2316/helpdesk');
    },

    'check information': function (browser) {
        var allInformationPage = browser.page.helpdesk().section.allInformation;
        allInformationPage
            .verify.containsText('@titleEvent', 'Event (#2316)')
            .verify.containsText('@nameEvent', 'Business Analytics')
            .verify.containsText('@localName', 'Local name: Business Analytics')
            .verify.containsText('@dates', 'Dates: 2017-02-14 08:00:00 - 2017-02-14 18:00:00')
            .verify.containsText('@venue', 'Venue: Crowne Plaza, Helsinki')
            .verify.containsText('@titleTable', 'Delegates - 146 / 230');
    },
});