var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/events/2339/check-in');
    },

    'check information': function (browser) {
        var allInformationPage = browser.page.checkIn().section.allInformation;
        allInformationPage
            .verify.containsText('@titleEvent', 'Event (#2339)')
            .verify.containsText('@nameEvent', 'Nordic StrategyForum Supply Chain and Procurement')
            .verify.containsText('@localName', 'Local name: Nordic StrategyForum Supply Chain and Procurement')
            .verify.containsText('@dates', 'Dates: 2017-03-16 08:00:00 - 2017-03-17 18:00:00')
            .verify.containsText('@venue', 'Venue: Radisson Blu Hotel Latvija, Riga')
            .verify.containsText('@tableName', 'Delegates')
            .verify.containsText('@tableCountRow', '172');
    },
});