var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to meeting-summary': function (browser) {
        browser
            .relUrl('/events/2339/meeting-summary');
    },

    'choose meetingStatusFilter': function (browser) {
        var meetingSourceFilter = browser.page.meetingSummary().section.meetingSourceFilter;
        var meetingTypeColumn = browser.page.meetingSummary().section.meetingTypeColumn;
        var meetingTypeFilter = browser.page.meetingSummary().section.meetingTypeFilter;

        meetingSourceFilter.clickBySelector('@requestOption');
        meetingTypeColumn.verify.elementPresent('@noResultsFound');

        meetingSourceFilter.clickBySelector('@additionalOption');
        meetingTypeColumn.verify.elementPresent('@noResultsFound');

        meetingSourceFilter.clickBySelector('@suggestedOption');
        meetingTypeColumn.verify.elementPresent('@noResultsFound');

        meetingSourceFilter.clickBySelector('@allOption');

        //var meetingTypeColumn = browser.page.meetingSummary().section.meetingTypeColumn;
        meetingTypeColumn
            .verify.containsText('@firstRow', '1-to-1 meeting')
            .verify.containsText('@secondRow', '1-to-1 meeting')
            .verify.containsText('@thirdRow', '1-to-1 meeting')
            .verify.containsText('@fourthRow', '1-to-1 meeting');
    },

    'choose suggestedOption': function (browser) {
        var meetingStatusFilter = browser.page.meetingSummary().section.meetingSourceFilter;
        meetingStatusFilter

            .clickBySelector('@suggestedOption');

        var meetingTypeFilter = browser.page.meetingSummary().section.meetingTypeFilter;
        meetingTypeFilter

            .clickBySelector('@to1meetingOption');

        //после исправления бага проверить что фильтр Meeting time не доступен
    },


});