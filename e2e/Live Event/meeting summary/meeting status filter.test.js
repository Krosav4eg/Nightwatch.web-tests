var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to meeting-summary': function (browser) {
        browser
            .relUrl('/events/2339/meeting-summary');
    },

    'choose meetingStatusFilter': function (browser) {
        var meetingStatusFilter = browser.page.meetingSummary().section.meetingStatusFilter;
        meetingStatusFilter

            .clickBySelector('@cancelledOption')
            .clickBySelector('@suggestedOption')
            .clickBySelector('@delegateCancellationOption')
            .clickBySelector('@queuedOption')
            .clickBySelector('@openOption')
            .clickBySelector('@rejectedOption')
            .clickBySelector('@allOption')
            .clickBySelector('@bookedOption');

        var meetingTypeColumn = browser.page.meetingSummary().section.meetingTypeColumn;
        meetingTypeColumn
            .verify.containsText('@firstRow', '')
            .verify.containsText('@secondRow', '')
            .verify.containsText('@thirdRow', '')
            .verify.containsText('@fourthRow', '');
    },

    'choose queuedOption': function (browser) {
        var meetingStatusFilter = browser.page.meetingSummary().section.meetingStatusFilter;
        meetingStatusFilter

            .clickBySelector('@queuedOption')

       //после исправления бага проверить что фильтр Meeting time не доступен
    },


});