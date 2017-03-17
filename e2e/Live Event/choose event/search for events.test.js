var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/events/live-events')
    },

    'search by id(blank)': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.searchForEventsTable;
        chooseEventPage
            .setValueBySelector('@searchByIdField', ['', browser.Keys.ENTER])
            .verify.elementNotPresent('@firstRow')
            .verify.elementNotPresent('@sixthRow')
            .verify.elementNotPresent('@seventhRow');
    },

    'search by id(one number)': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.searchForEventsTable;
        chooseEventPage
            .setValueBySelector('@searchByIdField', ['2', browser.Keys.ENTER])
            .verify.containsText('@firstRow', '2')
            .verify.containsText('@secondRow', 'United Arab Emirates')
            .verify.containsText('@thirdRow', 'United Arab Emirates')
            .verify.containsText('@fourthRow', 'Growth Session')
            .verify.containsText('@fifthRow', 'Growth Session')
            .verify.containsText('@sixthRow', '2015-03-04 08:00:00')
            .verify.containsText('@seventhRow', '2015-03-04 18:00:00');
    },

    'search by id(3 numbers)': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.searchForEventsTable;
        chooseEventPage
            .setValueBySelector('@searchByIdField', ['212', browser.Keys.ENTER])
            .verify.containsText('@firstRow', '212')
            .verify.containsText('@secondRow', 'Germany')
            .verify.containsText('@thirdRow', 'Germany')
            .verify.containsText('@fourthRow', 'IndustryForum')
            .verify.containsText('@fifthRow', 'IndustryForum')
            .verify.containsText('@sixthRow', '2012-05-09 08:00:00')
            .verify.containsText('@seventhRow', '2012-05-10 18:00:00');
    },

    'search by business unit(blank)': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.searchForEventsTable;
        chooseEventPage
            .setValueBySelector('@searchByIdField', ['', browser.Keys.ENTER])
            .setValueBySelector('@searchByBusinessUnitField', ['', browser.Keys.ENTER])
            .verify.elementNotPresent('@firstRow')
            .verify.elementNotPresent('@sixthRow')
            .verify.elementNotPresent('@seventhRow');
    },

    'search by business unit (one letter)': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.searchForEventsTable;
        chooseEventPage
            .setValueBySelector('@searchByBusinessUnitField', ['A', browser.Keys.ENTER])
            .verify.containsText('@firstColumnOfBusinessUnit', 'Austria')
            .verify.containsText('@secondColumnOfBusinessUnit', 'Austria')
            .verify.containsText('@thirdColumnOfBusinessUnit', 'Austria')
            .verify.containsText('@fourthColumnOfBusinessUnit', 'Austria')
            .verify.containsText('@fifthColumnOfBusinessUnit', 'Austria');
    },

    'search by business unit (3 letter)': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.searchForEventsTable;
        chooseEventPage
            .setValueBySelector('@searchByBusinessUnitField', ['Fin', browser.Keys.ENTER])
            .verify.containsText('@firstColumnOfBusinessUnit', 'Finland')
            .verify.containsText('@secondColumnOfBusinessUnit', 'Finland')
            .verify.containsText('@thirdColumnOfBusinessUnit', 'Finland')
            .verify.containsText('@fourthColumnOfBusinessUnit', 'Finland')
            .verify.containsText('@fifthColumnOfBusinessUnit', 'Finland');
    },

    'search by country (blank)': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.searchForEventsTable;
        chooseEventPage
            .setValueBySelector('@searchByBusinessUnitField', ['', browser.Keys.ENTER])
            .setValueBySelector('@searchByCountryField', ['', browser.Keys.ENTER])
            .verify.elementNotPresent('@firstRow')
            .verify.elementNotPresent('@sixthRow')
            .verify.elementNotPresent('@seventhRow');
    },

    'search by country (one letter)': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.searchForEventsTable;
        chooseEventPage
            .setValueBySelector('@searchByCountryField', ['A', browser.Keys.ENTER])
            .verify.containsText('@firstColumnOfCountry', 'United Arab Emirates')
            .verify.containsText('@secondColumnOfCountry', 'United Arab Emirates')
            .verify.containsText('@thirdColumnOfCountry', 'United Arab Emirates')
            .verify.containsText('@fourthColumnOfCountry', 'Austria')
            .verify.containsText('@fifthColumnOfCountry', 'Austria');
    },

    'search by event name (blank)': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.searchForEventsTable;
        chooseEventPage
            .setValueBySelector('@searchByCountryField', ['', browser.Keys.ENTER])
            .setValueBySelector('@searchByEventNameField', ['', browser.Keys.ENTER])
            .verify.elementNotPresent('@firstRow')
            .verify.elementNotPresent('@sixthRow')
            .verify.elementNotPresent('@seventhRow');
    },

    'search by event name (one letter)': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.searchForEventsTable;
        chooseEventPage
            .setValueBySelector('@searchByEventNameField', ['F', browser.Keys.ENTER])
            .verify.containsText('@firstColumnOfEventName', 'Growth Session Dubai Breakfast March 2015')
            .verify.containsText('@secondColumnOfEventName', 'IndustryForum Machinery')
            .verify.containsText('@thirdColumnOfEventName', 'IndustryForum Banking')
            .verify.containsText('@fourthColumnOfEventName', 'IndustryForum Banking')
            .verify.containsText('@fifthColumnOfEventName', 'IndustryForum Energy');
    },

    'search by event name (3 letter)': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.searchForEventsTable;
        chooseEventPage
            .setValueBySelector('@searchByEventNameField', ['For', browser.Keys.ENTER])
            .verify.containsText('@firstColumnOfEventName', 'IndustryForum Machinery')
            .verify.containsText('@secondColumnOfEventName', 'IndustryForum Banking')
            .verify.containsText('@thirdColumnOfEventName', 'IndustryForum Banking')
            .verify.containsText('@fourthColumnOfEventName', 'IndustryForum Energy')
            .verify.containsText('@fifthColumnOfEventName', 'IndustryForum Energy');
    },

    'search by start date (blank)': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.searchForEventsTable;
        chooseEventPage
            .setValueBySelector('@searchByEventNameField', ['', browser.Keys.ENTER])
            .setValueBySelector('@searchByStartDateField', ['', browser.Keys.ENTER])
            .verify.elementNotPresent('@firstRow')
            .verify.elementNotPresent('@sixthRow')
            .verify.elementNotPresent('@seventhRow');
    },

    'search by start date(one number)': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.searchForEventsTable;
        chooseEventPage
            .setValueBySelector('@searchByStartDateField', ['2', browser.Keys.ENTER])
            .verify.containsText('@firstColumnOfStartDateField', '2013-12-16 08:00:00')
            .verify.containsText('@secondColumnOfStartDateField', '2015-03-04 08:00:00')
            .verify.containsText('@thirdColumnOfStartDateField', '2015-03-04 08:00:00')
            .verify.containsText('@fourthColumnOfStartDateField', '2006-06-07 08:00:00')
            .verify.containsText('@fifthColumnOfStartDateField', '2006-11-22 08:00:00');
    },

    'search by start date(3 numbers)': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.searchForEventsTable;
        chooseEventPage
            .setValueBySelector('@searchByStartDateField', ['200', browser.Keys.ENTER])
            .verify.containsText('@firstColumnOfStartDateField', '2006-06-07 08:00:00')
            .verify.containsText('@secondColumnOfStartDateField', '2006-11-22 08:00:00')
            .verify.containsText('@thirdColumnOfStartDateField', '2007-11-20 08:00:00')
            .verify.containsText('@fourthColumnOfStartDateField', '2006-10-04 08:00:00')
            .verify.containsText('@fifthColumnOfStartDateField', '2007-10-09 08:00:00');
    },

    'search by end date (blank)': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.searchForEventsTable;
        chooseEventPage
            .setValueBySelector('@searchByStartDateField', ['', browser.Keys.ENTER])
            .setValueBySelector('@searchByEndDate', ['', browser.Keys.ENTER])
            .verify.elementNotPresent('@firstRow')
            .verify.elementNotPresent('@sixthRow')
            .verify.elementNotPresent('@seventhRow');
    },

    'search by end date(one number)': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.searchForEventsTable;
        chooseEventPage
            .setValueBySelector('@searchByEndDate', ['1', browser.Keys.ENTER])
            .verify.containsText('@firstColumnOfEndDate', '2013-12-17 18:00:00')
            .verify.containsText('@secondColumnOfEndDate', '2015-03-04 18:00:00')
            .verify.containsText('@thirdColumnOfEndDate', '2015-03-04 18:00:00')
            .verify.containsText('@fourthColumnOfEndDate', '2006-06-08 18:00:00')
            .verify.containsText('@fifthColumnOfEndDate', '2006-11-23 18:00:00');
    },

    'search by end date(3 numbers)': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.searchForEventsTable;
        chooseEventPage
            .setValueBySelector('@searchByEndDate', ['200', browser.Keys.ENTER])
            .verify.containsText('@firstColumnOfEndDate', '2006-06-08 18:00:00')
            .verify.containsText('@secondColumnOfEndDate', '2006-11-23 18:00:00')
            .verify.containsText('@thirdColumnOfEndDate', '2007-11-21 18:00:00')
            .verify.containsText('@fourthColumnOfEndDate', '2006-10-05 18:00:00')
            .verify.containsText('@fifthColumnOfEndDate', '2007-10-10 18:00:00');
    },


    'chose conference type ': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.eventTypeFilter;
        chooseEventPage
            .clickBySelector('@conference');
    },

    'sort by id UP ': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.sortForEventsTable;
        chooseEventPage
            .clickBySelector('@sortById')
            .verify.containsText('@firstColumnOfId', '31')
            .verify.containsText('@secondColumnOfId', '42')
            .verify.containsText('@thirdColumnOfId', '331')
            .verify.containsText('@fourthColumnOfId', '332')
            .verify.containsText('@fifthColumnOfId', '333');
    },


    'sort by id Down ': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.sortForEventsTable;
        chooseEventPage
            .clickBySelector('@sortById')
            .verify.containsText('@firstColumnOfId', '1652')
            .verify.containsText('@secondColumnOfId', '1650')
            .verify.containsText('@thirdColumnOfId', '1631')
            .verify.containsText('@fourthColumnOfId', '1628')
            .verify.containsText('@fifthColumnOfId', '1627');
    },

    'sort by business unit down ': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.sortForEventsTable;
        chooseEventPage
            .clickBySelector('@sortByBusinessUnit')
            .verify.containsText('@firstColumnOfBusinessUnit', 'The Netherlands')
            .verify.containsText('@secondColumnOfBusinessUnit', 'The Netherlands')
            .verify.containsText('@thirdColumnOfBusinessUnit', 'The Netherlands')
            .verify.containsText('@fourthColumnOfBusinessUnit', 'The Netherlands')
            .verify.containsText('@fifthColumnOfBusinessUnit', 'The Netherlands');
    },
    'sort by business unit up ': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.sortForEventsTable;
        chooseEventPage
            .clickBySelector('@sortByBusinessUnit')
            .verify.containsText('@firstColumnOfBusinessUnit', 'Austria')
            .verify.containsText('@secondColumnOfBusinessUnit', 'Austria')
            .verify.containsText('@thirdColumnOfBusinessUnit', 'Denmark')
            .verify.containsText('@fourthColumnOfBusinessUnit', 'Denmark')
            .verify.containsText('@fifthColumnOfBusinessUnit', 'Denmark');
    },

    'sort by country up': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.sortForEventsTable;
        chooseEventPage
            .clickBySelector('@sortByCountry')
            .verify.containsText('@firstColumnOfCountry', 'Austria')
            .verify.containsText('@secondColumnOfCountry', 'Austria')
            .verify.containsText('@thirdColumnOfCountry', 'Denmark')
            .verify.containsText('@fourthColumnOfCountry', 'Denmark')
            .verify.containsText('@fifthColumnOfCountry', 'Denmark');
    },

    'sort by country down ': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.sortForEventsTable;
        chooseEventPage
            .clickBySelector('@sortByCountry')
            .verify.containsText('@firstColumnOfCountry', 'The Netherlands')
            .verify.containsText('@secondColumnOfCountry', 'The Netherlands')
            .verify.containsText('@thirdColumnOfCountry', 'The Netherlands')
            .verify.containsText('@fourthColumnOfCountry', 'The Netherlands')
            .verify.containsText('@fifthColumnOfCountry', 'The Netherlands');
    },

    'sort by event type down': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.sortForEventsTable;
        chooseEventPage
            .clickBySelector('@sortByEventType')
            .verify.containsText('@firstColumnOfEventType', 'Conference')
            .verify.containsText('@secondColumnOfEventType', 'Conference')
            .verify.containsText('@thirdColumnOfEventType', 'Conference')
            .verify.containsText('@fourthColumnOfEventType', 'Conference')
            .verify.containsText('@fifthColumnOfEventType', 'Conference');
    },

    'sort by event type up': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.sortForEventsTable;
        chooseEventPage
            .clickBySelector('@sortByEventType')
            .verify.containsText('@firstColumnOfEventType', 'Conference')
            .verify.containsText('@secondColumnOfEventType', 'Conference')
            .verify.containsText('@thirdColumnOfEventType', 'Conference')
            .verify.containsText('@fourthColumnOfEventType', 'Conference')
            .verify.containsText('@fifthColumnOfEventType', 'Conference');
    },

    'sort by event name up': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.sortForEventsTable;
        chooseEventPage
            .clickBySelector('@sortByEventName')
            .verify.containsText('@firstColumnOfEventName', '600Minutes Public Sector Finance')
            .verify.containsText('@secondColumnOfEventName', 'Conference After Sales')
            .verify.containsText('@thirdColumnOfEventName', 'Conference Board Management & Leadership Development')
            .verify.containsText('@fourthColumnOfEventName', 'Conference Board Management & Leadership Development')
            .verify.containsText('@fifthColumnOfEventName', 'Conference Board Management & Leadership Development');
    },

    'sort by event name down': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.sortForEventsTable;
        chooseEventPage
            .clickBySelector('@sortByEventName')
            .verify.containsText('@firstColumnOfEventName', 'Conference W. Chan Kim: Blue Ocean Strategy')
            .verify.containsText('@secondColumnOfEventName', 'Conference Tom Peters: Look Beyond Change - New Markets, New Trends and the Pursuit of Excellence')
            .verify.containsText('@thirdColumnOfEventName', 'Conference System Integration')
            .verify.containsText('@fourthColumnOfEventName', 'Conference Storage Management')
            .verify.containsText('@fifthColumnOfEventName', 'Conference Storage Management');
    },

    'sort by start date down': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.sortForEventsTable;
        chooseEventPage
            .clickBySelector('@sortByStartDate')
            .verify.containsText('@firstColumnOfStartDate', '2009-12-08 08:00:00')
            .verify.containsText('@secondColumnOfStartDate', '2009-12-03 08:00:00')
            .verify.containsText('@thirdColumnOfStartDate', '2009-11-18 08:00:00')
            .verify.containsText('@fourthColumnOfStartDate', '2009-11-12 08:00:00')
            .verify.containsText('@fifthColumnOfStartDate', '2009-11-11 08:00:00');
    },

    'sort by start date up': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.sortForEventsTable;
        chooseEventPage
            .clickBySelector('@sortByStartDate')
            .verify.containsText('@firstColumnOfStartDate', '2005-05-31 08:00:00')
            .verify.containsText('@secondColumnOfStartDate', '2005-08-30 08:00:00')
            .verify.containsText('@thirdColumnOfStartDate', '2005-10-11 08:00:00')
            .verify.containsText('@fourthColumnOfStartDate', '2005-11-01 08:00:00')
            .verify.containsText('@fifthColumnOfStartDate', '2005-11-15 08:00:00');
    },

    'sort by end date up': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.sortForEventsTable;
        chooseEventPage
            .clickBySelector('@sortByEndDate')
            .verify.containsText('@firstColumnOfEndDate', '2005-06-01 18:00:00')
            .verify.containsText('@secondColumnOfEndDate', '2005-08-31 18:00:00')
            .verify.containsText('@thirdColumnOfEndDate', '2005-10-12 18:00:00')
            .verify.containsText('@fourthColumnOfEndDate', '2005-11-02 18:00:00')
            .verify.containsText('@fifthColumnOfEndDate', '2005-11-16 18:00:00');
    },

    'sort by end date down': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.sortForEventsTable;
        chooseEventPage
            .clickBySelector('@sortByEndDate')
            .verify.containsText('@firstColumnOfEndDate', '2009-12-09 18:00:00')
            .verify.containsText('@secondColumnOfEndDate', '2009-12-03 18:00:00')
            .verify.containsText('@thirdColumnOfEndDate', '2009-11-19 18:00:00')
            .verify.containsText('@fourthColumnOfEndDate', '2009-11-12 18:00:00')
            .verify.containsText('@fifthColumnOfEndDate', '2009-11-12 18:00:00');
    },

    'page count 20': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.pageFilter;
        chooseEventPage
            .clickBySelector('@twentyCount')
            .verify.elementPresent('@pageText')
            .verify.elementPresent('@firstPage')
            .verify.elementPresent('@secondPage')
            .verify.elementPresent('@thirdPage')
            .verify.elementPresent('@fourthPage')
            .verify.elementPresent('@fifthPage')
            .verify.elementPresent('@nextPage')
            .verify.elementPresent('@lastPage')
            .verify.elementPresent('@totalPageNumbersFor20');
    },

    'page count 50': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.pageFilter;
        chooseEventPage
            .clickBySelector('@fiftyCount')
            .verify.elementPresent('@pageText')
            .verify.elementPresent('@firstPage')
            .verify.elementPresent('@secondPage')
            .verify.elementPresent('@thirdPage')
            .verify.elementPresent('@totalPageNumbersFor50');
    },

    'page count 100': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.pageFilter;
        chooseEventPage
            .clickBySelector('@hundredCount')
            .verify.elementPresent('@pageText')
            .verify.elementPresent('@firstPage')
            .verify.elementPresent('@firstPage')
            .verify.elementPresent('@totalPageNumbersFor100');
    },

    'check eventType filter': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.eventTypeFilter;
        chooseEventPage
            .relUrl('/events/live-events')
            .clickBySelector('@industryForum')
            .verify.containsText('@firstColumnOfEventType', 'IndustryForum')
            .verify.containsText('@secondColumnOfEventType', 'IndustryForum')
            .verify.containsText('@thirdColumnOfEventType', 'IndustryForum')
            .verify.containsText('@fourthColumnOfEventType', 'IndustryForum')
            .verify.containsText('@fifthColumnOfEventType', 'IndustryForum')

            .clickBySelector('@minutes')
            .verify.containsText('@firstColumnOfEventType', '600Minutes')
            .verify.containsText('@secondColumnOfEventType', '600Minutes')
            .verify.containsText('@thirdColumnOfEventType', '600Minutes')
            .verify.containsText('@fourthColumnOfEventType', '600Minutes')
            .verify.containsText('@fifthColumnOfEventType', '600Minutes')

            .clickBySelector('@summit')
            .verify.containsText('@firstColumnOfEventType', 'Summit')
            .verify.containsText('@secondColumnOfEventType', 'Summit')
            .verify.containsText('@thirdColumnOfEventType', 'Summit')
            .verify.containsText('@fourthColumnOfEventType', 'Summit')
            .verify.containsText('@fifthColumnOfEventType', 'Summit')

            .clickBySelector('@kongressi')
            .verify.containsText('@firstColumnOfEventType', 'Kongressi')
            .verify.containsText('@secondColumnOfEventType', 'Kongressi')
            .verify.containsText('@thirdColumnOfEventType', 'Kongressi')
            .verify.containsText('@fourthColumnOfEventType', 'Kongressi')
            .verify.containsText('@fifthColumnOfEventType', 'Kongressi')

            .clickBySelector('@managementForum')
            .verify.containsText('@firstColumnOfEventType', 'ManagementForum')
            .verify.containsText('@secondColumnOfEventType', 'ManagementForum')
            .verify.containsText('@thirdColumnOfEventType', 'ManagementForum')
            .verify.containsText('@fourthColumnOfEventType', 'ManagementForum')
            .verify.containsText('@fifthColumnOfEventType', 'ManagementForum')

            .clickBySelector('@emailApproval')
            .verify.containsText('@firstColumnOfEventType', 'Email approval')

            .clickBySelector('@businessLounge')
            .verify.containsText('@firstColumnOfEventType', 'BusinessLounge')
            .verify.containsText('@secondColumnOfEventType', 'BusinessLounge')
            .verify.containsText('@thirdColumnOfEventType', 'BusinessLounge')
            .verify.containsText('@fourthColumnOfEventType', 'BusinessLounge')
            .verify.containsText('@fifthColumnOfEventType', 'BusinessLounge')

            .clickBySelector('@executiveForum')
            .verify.containsText('@firstColumnOfEventType', 'ExecutiveForum')
            .verify.containsText('@secondColumnOfEventType', 'ExecutiveForum')
            .verify.containsText('@thirdColumnOfEventType', 'ExecutiveForum')
            .verify.containsText('@fourthColumnOfEventType', 'ExecutiveForum')
            .verify.containsText('@fifthColumnOfEventType', 'ExecutiveForum')

            .clickBySelector('@ideaGarden')
            .verify.containsText('@firstColumnOfEventType', 'IdeaGarden')
            .verify.containsText('@secondColumnOfEventType', 'IdeaGarden')
            .verify.containsText('@thirdColumnOfEventType', 'IdeaGarden')
            .verify.containsText('@fourthColumnOfEventType', 'IdeaGarden')
            .verify.containsText('@fifthColumnOfEventType', 'IdeaGarden')

            .clickBySelector('@strategyForum')
            .verify.containsText('@firstColumnOfEventType', 'StrategyForum')
            .verify.containsText('@secondColumnOfEventType', 'StrategyForum')
            .verify.containsText('@thirdColumnOfEventType', 'StrategyForum')
            .verify.containsText('@fourthColumnOfEventType', 'StrategyForum')
            .verify.containsText('@fifthColumnOfEventType', 'StrategyForum')

            .clickBySelector('@growthSession')
            .verify.containsText('@firstColumnOfEventType', 'Growth Session')
            .verify.containsText('@secondColumnOfEventType', 'Growth Session')
            .verify.containsText('@thirdColumnOfEventType', 'Growth Session')
            .verify.containsText('@fourthColumnOfEventType', 'Growth Session')
            .verify.containsText('@fifthColumnOfEventType', 'Growth Session')

            .clickBySelector('@needSeeker')
            .verify.containsText('@firstColumnOfEventType', 'NeedSeeker')
            .verify.containsText('@secondColumnOfEventType', 'NeedSeeker')
            .verify.containsText('@thirdColumnOfEventType', 'NeedSeeker');
    },
});