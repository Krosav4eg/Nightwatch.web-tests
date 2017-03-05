var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/speakers')
    },

    'check event data': function (browser) {
        var eventSection = browser.page.speaker().section.event;
        eventSection
            .waitForElementVisible('@totalName212', 3000)

            .verify.containsText('@nameEvent', "IndustryForum Energy")
            .verify.containsText('@localNameEvent', "Local name: StrategyCircle Energie")
            .verify.containsText('@daes', "Dates: 2012-05-09 08:00:00 - 2012-05-10 18:00:00")
            .verify.containsText('@venue', "Venue: ,");
    },
});