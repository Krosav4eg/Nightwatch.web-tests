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


    'check name column data': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.liveEventsTable;
        chooseEventPage
            .verify.containsText('@firstRowForName', '600Minutes Supply Chain')
            .verify.containsText('@secondRowForName', '600Minutes Service Business')
            .verify.containsText('@thirdRowForName', 'Nordic StrategyForum Supply Chain and Procurement');
    },

    'check stat date column data': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.liveEventsTable;
        chooseEventPage
            .verify.containsText('@firstRowForStartDate', '2017-03-22 08:00:00')
            .verify.containsText('@secondRowForStartDate', '2017-03-21 08:00:00')
            .verify.containsText('@thirdRowForStartDate', '2017-03-16 08:00:00');
    },

    'check end date column data': function (browser) {
        var chooseEventPage = browser.page.chooseEvent().section.liveEventsTable;
        chooseEventPage
            .verify.containsText('@firstRowForEndDate', '2017-03-22 18:00:00')
            .verify.containsText('@secondRowForEndDate', '2017-03-21 18:00:00')
            .verify.containsText('@thirdRowForEndDate', '2017-03-17 18:00:00');
    },

});