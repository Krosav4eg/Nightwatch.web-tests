var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to meeting-summary': function (browser) {
        browser
            .relUrl('/events/2339/meeting-summary')
    },

    'click now button': function (browser) {
        var meetingTimeFilter = browser.page.meetingSummary().section.meetingTimeFilter;
        meetingTimeFilter
            .clickBySelector('@nowButton')

            .verify.containsText('@meetingTypeSelect', 'Now')
            .containsCurrentData('@nowButton');

    },
});