var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/events/2316/helpdesk')
    },

    'select orangeOption': function (browser) {
        var eventGroupFilterPage = browser.page.helpdesk().section.eventGroupFilter;
        eventGroupFilterPage
            .clickBySelector('@orangeOption')

        var eventGroupColumnColumnPage = browser.page.helpdesk().section.eventGroupColumn;
        eventGroupColumnColumnPage
            .verify.containsText('@firstRow', '1- Orange')
            .verify.containsText('@secondRow', '1- Orange')
            .verify.containsText('@thirdRow', '1- Orange')
            .verify.containsText('@fourthRow', '1- Orange')
    },

    'select purpleOption': function (browser) {
        var eventGroupFilterPage = browser.page.helpdesk().section.eventGroupFilter;
        eventGroupFilterPage
            .clickBySelector('@purpleOption')

        var eventGroupColumnColumnPage = browser.page.helpdesk().section.eventGroupColumn;
        eventGroupColumnColumnPage
            .verify.containsText('@firstRow', '2- Purple')
            .verify.containsText('@secondRow', '2- Purple')
            .verify.containsText('@thirdRow', '2- Purple')
            .verify.containsText('@fourthRow', '2- Purple')
    },

    'select allOption': function (browser) {
        var eventGroupFilterPage = browser.page.helpdesk().section.eventGroupFilter;
        eventGroupFilterPage
            .clickBySelector('@allOption')

        var eventGroupColumnColumnPage = browser.page.helpdesk().section.eventGroupColumn;
        eventGroupColumnColumnPage
            .verify.containsText('@firstRow', '1- Orange')
            .verify.containsText('@secondRow', '2- Purple')
            .verify.containsText('@thirdRow', '1- Orange')
            .verify.containsText('@fourthRow', '')
    },
});