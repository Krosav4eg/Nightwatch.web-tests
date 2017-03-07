var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/events/2327/helpdesk')
    },

    'click Last Name for any of the delegates': function (browser) {
        var delegateDetailsPage = browser.page.helpdesk().section.delegateDetails;
        delegateDetailsPage
            .clickBySelector('@lutherDelegate');
    },

    'check Delegate Details': function (browser) {
        var delegateDetailsPage = browser.page.helpdesk().section.delegateDetails;
        delegateDetailsPage
            .verify.containsText('@delegateName', 'Thomas Luther')
            .verify.containsText('@partnerId', 'E#92068')
            .verify.containsText('@masterId', 'M#475576')
            .verify.containsText('@title', 'Sataservice Oy')
            .verify.containsText('@company', 'CEO');
    },

    'check Contact Numbers': function (browser) {
        var delegateDetailsPage = browser.page.helpdesk().section.delegateDetails;
        delegateDetailsPage
            .verify.containsText('@mobile', '+358405344256')
            .verify.containsText('@telDirect', '')
            .verify.containsText('@telSwitchboard', '')
    },

    'check Delegate Group': function (browser) {
        var delegateDetailsPage = browser.page.helpdesk().section.delegateDetails;
        delegateDetailsPage
            .verify.containsText('@delegateGroup', '1- Orange')
    },

    'check Event Roles': function (browser) {
        var delegateDetailsPage = browser.page.helpdesk().section.delegateDetails;
        delegateDetailsPage
            .verify.containsText('@eventRoles', '')
    },

    'click partnerId': function (browser) {
        var delegateDetailsPage = browser.page.helpdesk().section.delegateDetails;
        delegateDetailsPage
            .clickBySelector('@partnerId');
        browser
            .window_handles(function(result) {
                var handle = result.value[1];
                browser.switchWindow(handle);
                browser.page.delegates()
                    .waitForElementVisible('@titleName', 30000)
                    .verify.containsText('@titleName', 'Delegate')
                    .verify.containsText('@titleName', 'Thomas Luther');

                browser.closeWindow(handle);
                handle = result.value[0];
                browser.switchWindow(handle);})
    },

    'click masterId': function (browser) {
        var delegateDetailsPage = browser.page.helpdesk().section.delegateDetails;
        delegateDetailsPage
            .clickBySelector('@masterId');
        browser
            .window_handles(function(result) {
                var handle = result.value[1];
                browser.switchWindow(handle)
                this.verify.urlContains("MasterContact");

                browser.closeWindow(handle);
                handle = result.value[0];
                browser.switchWindow(handle);})
    },
});