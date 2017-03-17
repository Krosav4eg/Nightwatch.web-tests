var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/events/live-events')
    },

    'check chevron button': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.liveEventsTable;
        chooseEventPage
            .clickBySelector('//i[@class="glyphicon glyphicon-chevron-down"]')
        chooseEventPage.expect.element('//th[contains(text(),"Country Name")]').to.not.be.visible
        chooseEventPage.expect.element('(//th[contains(text(),"Name")])[3]').to.not.be.visible
        chooseEventPage.expect.element('(//th[contains(text(),"Start date")])[2]').to.not.be.visible
        chooseEventPage.expect.element('(//th[contains(text(),"End date")])[2]').to.not.be.visible;
    },

    'search by country name(blank)': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.liveEventsTable;
        chooseEventPage
            .setValueBySelector('@searchByCountryName', ['', browser.Keys.ENTER])
            .verify.elementPresent('@noFoundResults');
    },

    'search by country name(1 letter)': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.liveEventsTable;
        chooseEventPage
            .setValueBySelector('@searchByCountryName', ['G', browser.Keys.ENTER])
            .verify.containsText('@firstRowForCountryName', 'Germany')
            .verify.containsText('@secondRowForCountryName', 'Germany')
            .verify.containsText('@thirdRowForCountryName', 'Germany')
            .verify.containsText('@fourthRowForCountryName', 'Germany')
            .verify.containsText('@fifthRowForCountryName', 'Germany');
    },

    'search by country name(3 letter)': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.liveEventsTable;
        chooseEventPage
            .setValueBySelector('@searchByCountryName', ['Ger', browser.Keys.ENTER])
            .verify.containsText('@firstRowForCountryName', 'Germany')
            .verify.containsText('@firstRowForCountryName', 'Germany')
            .verify.containsText('@firstRowForCountryName', 'Germany')
            .verify.containsText('@firstRowForCountryName', 'Germany')
            .verify.containsText('@firstRowForCountryName', 'Germany');
    },

    'search by name(blank)': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.liveEventsTable;
        chooseEventPage
            .setValueBySelector('@searchByName', ['', browser.Keys.ENTER])
            .verify.elementPresent('@noFoundResults');
    },

    'search by name(1 letter)': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.liveEventsTable;
        chooseEventPage
            .setValueBySelector('@searchByName', ['6', browser.Keys.ENTER])
            .verify.containsText('@firstRowForName', '600Minutes Service Business')
            .verify.containsText('@secondRowForName', '600Minutes Service Business')
            .verify.containsText('@thirdRowForName', '600Minutes Service Business')
            .verify.containsText('@fourthRowForName', '600Minutes Service Business')
            .verify.containsText('@fifthRowForName', '600Minutes Service Business');
    },

    'search by name(3 letter)': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.liveEventsTable;
        chooseEventPage
            .setValueBySelector('@searchByName', ['600', browser.Keys.ENTER])
            .verify.containsText('@firstRowForName', '600Minutes Service Business')
            .verify.containsText('@secondRowForName', '600Minutes Service Business')
            .verify.containsText('@thirdRowForName', '600Minutes Service Business')
            .verify.containsText('@fourthRowForName', '600Minutes Service Business')
            .verify.containsText('@fifthRowForName', '600Minutes Service Business');
    },

    'search by start date(blank)': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.liveEventsTable;
        chooseEventPage
            .setValueBySelector('@searchByStartDate', ['', browser.Keys.ENTER])
            .verify.elementPresent('@noFoundResults');
    },

    'search by start date(1 letter)': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.liveEventsTable;
        chooseEventPage
            .setValueBySelector('@searchByStartDate', ['2', browser.Keys.ENTER])
            .verify.containsText('@firstRowForStartDate', '')
            .verify.containsText('@secondRowForStartDate', '')
            .verify.containsText('@thirdRowForStartDate', '')
            .verify.containsText('@fourthRowForStartDate', '')
            .verify.containsText('@fifthRowForStartDate', '');
    },

    'search by start date(3 letter)': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.liveEventsTable;
        chooseEventPage
            .setValueBySelector('@searchByStartDate', ['201', browser.Keys.ENTER])
            .verify.containsText('@firstRowForStartDate', '')
            .verify.containsText('@secondRowForStartDate', '')
            .verify.containsText('@thirdRowForStartDate', '')
            .verify.containsText('@fourthRowForStartDate', '')
            .verify.containsText('@fifthRowForStartDate', '');
    },

    'search by end date(blank)': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.liveEventsTable;
        chooseEventPage
            .setValueBySelector('@searchByEndDate', ['', browser.Keys.ENTER])
            .verify.elementPresent('@noFoundResults');
    },

    'search by end date(1 letter)': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.liveEventsTable;
        chooseEventPage
            .setValueBySelector('@searchByEndDate', ['2', browser.Keys.ENTER])
            .verify.containsText('@firstRowForEndDate', '2017-03-21 18:00:00')
            .verify.containsText('@secondRowForEndDate', '')
            .verify.containsText('@thirdRowForEndDate', '')
            .verify.containsText('@fourthRowForEndDate', '')
            .verify.containsText('@fifthRowForEndDate', '');
    },

    'search by end date(3 letter)': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.liveEventsTable;
        chooseEventPage
            .setValueBySelector('@searchByEndDate', ['201', browser.Keys.ENTER])
            .verify.containsText('@firstRowForEndDate', '')
            .verify.containsText('@secondRowForEndDate', '')
            .verify.containsText('@thirdRowForEndDate', '')
            .verify.containsText('@fourthRowForEndDate', '')
            .verify.containsText('@fifthRowForEndDate', '');
    },

    'sort by country name up': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.liveEventsTable;
        chooseEventPage
            .clickBySelector('@sortByCountryName')
            .verify.containsText('@firstRowForCountryName', '')
            .verify.containsText('@secondRowForCountryName', '')
            .verify.containsText('@thirdRowForCountryName', '')
            .verify.containsText('@fourthRowForCountryName', '')
            .verify.containsText('@fifthRowForCountryName', '');
    },

    'sort by country name Down': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.liveEventsTable;
        chooseEventPage
            .clickBySelector('@sortByCountryName')
            .verify.containsText('@firstRowForCountryName', '')
            .verify.containsText('@secondRowForCountryName', '')
            .verify.containsText('@thirdRowForCountryName', '')
            .verify.containsText('@fourthRowForCountryName', '')
            .verify.containsText('@fifthRowForCountryName', '');
    },

    'sort by name down': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.liveEventsTable;
        chooseEventPage
            .clickBySelector('@sortByName')
            .verify.containsText('@firstRowForName', '')
            .verify.containsText('@secondRowForName', '')
            .verify.containsText('@thirdRowForName', '')
            .verify.containsText('@fourthRowForName', '')
            .verify.containsText('@fifthRowForName', '');
    },

    'sort by name up': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.liveEventsTable;
        chooseEventPage
            .clickBySelector('@sortByName')
            .verify.containsText('@firstRowForName', '')
            .verify.containsText('@secondRowForName', '')
            .verify.containsText('@thirdRowForName', '')
            .verify.containsText('@fourthRowForName', '')
            .verify.containsText('@fifthRowForName', '');
    },

    'sort by start date up': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.liveEventsTable;
        chooseEventPage
            .clickBySelector('@sortByStartDate')
            .verify.containsText('@firstRowForStartDate', '')
            .verify.containsText('@secondRowForStartDate', '')
            .verify.containsText('@thirdRowForStartDate', '')
            .verify.containsText('@fourthRowForStartDate', '')
            .verify.containsText('@fifthRowForStartDate', '');
    },

    'sort by start date down': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.liveEventsTable;
        chooseEventPage
            .clickBySelector('@sortByStartDate')
            .verify.containsText('@firstRowForStartDate', '')
            .verify.containsText('@secondRowForStartDate', '')
            .verify.containsText('@thirdRowForStartDate', '')
            .verify.containsText('@fourthRowForStartDate', '')
            .verify.containsText('@fifthRowForStartDate', '');
    },
    'sort by end date down': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.liveEventsTable;
        chooseEventPage
            .clickBySelector('@sortByEndDate')
            .verify.containsText('@firstRowForEndDate', '')
            .verify.containsText('@secondRowForEndDate', '')
            .verify.containsText('@thirdRowForEndDate', '')
            .verify.containsText('@fourthRowForEndDate', '')
            .verify.containsText('@fifthRowForEndDate', '');
    },

    'sort by end date up': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.liveEventsTable;
        chooseEventPage
            .clickBySelector('@sortByEndDate')
            .verify.containsText('@firstRowForEndDate', '')
            .verify.containsText('@secondRowForEndDate', '')
            .verify.containsText('@thirdRowForEndDate', '')
            .verify.containsText('@fourthRowForEndDate', '')
            .verify.containsText('@fifthRowForEndDate', '');
    },

    'page count verifying': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.liveEventsTable;
        chooseEventPage
            .clickBySelector('@twentyPages')
            .verify.elementPresent('@pageText2')
            .clickBySelector('@fiftyPages')
            .clickBySelector('@hundredPages')
    },
});