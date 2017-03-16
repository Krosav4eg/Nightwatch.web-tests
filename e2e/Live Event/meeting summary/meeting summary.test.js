var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to live-events': function (browser) {
        browser
            .relUrl('/events/live-events');
    },

    'go to meeting-summary': function (browser) {
        var nameEvents = browser.page.meetingSummary().section.nameEvents;
        nameEvents
            .clickBySelector('@NordicStrategyForumEvents');

        var leftMenu = browser.page.leftMenu();
        leftMenu
            .clickBySelector('@meetingsSummary');
    },

    'check information': function (browser) {
        var allInformationPage = browser.page.meetingSummary().section.allInformation;
        allInformationPage
            .verify.containsText('@titleEvent', 'Event (#2339)')
            .verify.containsText('@nameEvent', 'Nordic StrategyForum Supply Chain and Procurement')
            .verify.containsText('@localName', 'Local name: Nordic StrategyForum Supply Chain and Procurement')
            .verify.containsText('@dates', 'Dates: 2017-03-16 08:00:00 - 2017-03-17 18:00:00')
            .verify.containsText('@venue', 'Venue: Radisson Blu Hotel Latvija, Riga')
            .verify.containsText('@titleTable', 'Results - ')
            .verify.containsText('@titleTable', ' 245 / 552');
    },

    'verifi link in left menu': function (browser) {
        var allInformationPage = browser.page.meetingSummary().section.allInformation;
        allInformationPage
            .verify.elementPresent('@linkMeetingSummaryInLeftMenu');
    },
});