var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/partners/25')
    },

    'verify Event Deadlines': function (browser) {
        var eventDeadlines = browser.page.partnersEdit().section.eventDeadlines;
        eventDeadlines
            .clickBySelector('@nameSection')
            .expect.element('@partnerDeadline').to.not.be.visible;

        eventDeadlines
            .clickBySelector('@nameSection')
            .expect.element('@partnerDeadline').to.be.visible;
    },
});