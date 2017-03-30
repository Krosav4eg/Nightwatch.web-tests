var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to helpdesk': function (browser) {
        browser
            .relUrl('/events/2316/helpdesk')
    },

    'sort by lastName up': function (browser) {
        var lastNameColumn = browser.page.helpdesk().section.lastNameColumn;
        lastNameColumn
            .clickBySelector('@firstRowLogo');

        browser
            .window_handles(function(result) {
                var handle = result.value[1];
                browser.switchWindow(handle);})
    },

    'verify redirection': function (browser) {
        var appPage = browser.page.appPage();
        appPage
            .waitForElementVisible('@location', 30000)
            .verify.containsText('@location', 'Crowne Plaza')
            .verify.containsText('@location', 'Helsinki')
            .verify.containsText('@time', '08:00 - 17:00');

        browser
            .verify.urlContains('app.managementevents.com/#/event/');
    },
});