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

    'check Availability': function (browser) {
        var informationDelegate = browser.page.helpdesk().section.informationDelegate;
        informationDelegate
            .verify.containsText('@availability', '2017-02-14 08:00:00 - 2017-02-14 17:00:00')
            .verify.elementPresent('@availabilityEditLink')
            .clickBySelector('@availabilityEditLink');

        browser
            .window_handles(function(result) {
                var handle = result.value[1];
                browser.switchWindow(handle)
                this.verify.urlContains("/delegates/edit/96328");

                browser.closeWindow(handle);
                handle = result.value[0];
                browser.switchWindow(handle);})
    },
});