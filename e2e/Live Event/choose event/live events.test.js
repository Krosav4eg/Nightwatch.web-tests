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
            .clickBySelector('@chevronDown')
        chooseEventPage.expect.element('@countryNameColumn').to.not.be.visible
        chooseEventPage.expect.element('@nameColumn').to.not.be.visible
        chooseEventPage.expect.element('@startDateColumn').to.not.be.visible
        chooseEventPage.expect.element('@endDateColumn').to.not.be.visible
        chooseEventPage.clickBySelector('@chevronDown');
    },

    'check countryName column data': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.liveEventsTable;
        chooseEventPage
            .verify.containsText('@firstRowForCountryName', 'Germany')
            .verify.containsText('@secondRowForCountryName', 'Finland');
    },

    'check name column data': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.liveEventsTable;
        chooseEventPage
            .verify.containsText('@firstRowForName', '600Minutes Supply Chain')
            .verify.containsText('@secondRowForName', '600Minutes Service Business');
    },

    'check stat date column data': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.liveEventsTable;
        chooseEventPage
            .verify.containsText('@firstRowForStartDate', '2017-03-22 08:00:00')
            .verify.containsText('@secondRowForStartDate', '2017-03-21 08:00:00');
    },

    'check end date column data': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.liveEventsTable;
        chooseEventPage
            .verify.containsText('@firstRowForEndDate', '2017-03-22 18:00:00')
            .verify.containsText('@secondRowForEndDate', '2017-03-21 18:00:00');
    },

});