var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to helpdesk': function (browser) {
        browser
            .relUrl('/events/2008/helpdesk');
    },

    'verifying booked meeting column': function (browser) {
        var bookedMeetingsColumn = browser.page.helpdesk().section.bookedMeetingsColumn;
        bookedMeetingsColumn
            .verify.containsText('@nameColumn','Booked Meetings')
    },
});
