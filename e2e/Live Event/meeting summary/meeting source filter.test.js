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
        meetingSourceFilter

            .clickBySelector('@requestOption')
            .clickBySelector('@additionalOption')
            .clickBySelector('@suggestedOption')
            .clickBySelector('@allOption')

        var meetingTypeColumn = browser.page.meetingSummary().section.meetingTypeColumn;
        meetingTypeColumn
            .verify.containsText('@firstRow', '')
            .verify.containsText('@secondRow', '')
            .verify.containsText('@thirdRow', '')
            .verify.containsText('@fourthRow', '');
    },

    'choose suggestedOption': function (browser) {
        var meetingStatusFilter = browser.page.meetingSummary().section.meetingStatusFilter;
        meetingStatusFilter

            .clickBySelector('@suggestedOption');

        var meetingTypeFilter = browser.page.meetingSummary().section.meetingTypeFilter;
        meetingTypeFilter

            .clickBySelector('@to1meetingOption');

        //после исправления бага проверить что фильтр Meeting time не доступен
    },


});