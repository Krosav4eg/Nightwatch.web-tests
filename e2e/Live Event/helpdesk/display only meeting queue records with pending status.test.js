var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/events/2316/helpdesk')
    },

    'click Last Name for any of the delegates': function (browser) {
        var delegateDetailsPage = browser.page.helpdesk().section.delegateDetails;
        delegateDetailsPage
            .clickBySelector('@LaaksonenDelegate');
    },

    'check meeting status': function (browser) {
        var queuingMeetingsPage = browser.page.helpdesk().section.queuingMeetings;
        queuingMeetingsPage
            .clickBySelector('@titleName')

            .verify.containsText('@dataMeeting', 'HiQ Finland')
            .verify.containsText('@dataMeeting', 'Mikko Mölsä');
    },
});