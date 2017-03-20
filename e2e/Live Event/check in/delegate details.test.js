var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/events/2339/check-in')
    },

    'click Last Name for any of the delegates': function (browser) {
        var lastNameColumn = browser.page.checkIn().section.lastNameColumn;
        lastNameColumn
            .clickBySelector('@firstRow');
    },

    'check Delegate Details': function (browser) {
        var delegateDetailsPage = browser.page.checkIn().section.delgatesInfo;
        delegateDetailsPage
            .verify.containsText('@delegateName', 'Maria Göransson')
            .verify.containsText('@partnerId', 'E#94420')
            .verify.containsText('@masterId', 'M#157558')
            .verify.containsText('@title', 'Swedbank AB')
            .verify.containsText('@company', 'Purchasing Manager, acting CPO');
    },

    'check Contact Numbers': function (browser) {
        var delegateDetailsPage = browser.page.checkIn().section.delgatesInfo;
        delegateDetailsPage
            .verify.containsText('@mobile', '+46725665961')
            .verify.containsText('@telDirect', '+46858593049')
            .verify.containsText('@telSwitchboard', '08- 585 900 00')
    },

    'check Delegate Group': function (browser) {
        var delegateDetailsPage = browser.page.checkIn().section.delgatesInfo;
        delegateDetailsPage
            .verify.containsText('@delegateGroup', '')
    },

    'check Event Roles': function (browser) {
        var delegateDetailsPage = browser.page.checkIn().section.delgatesInfo;
        delegateDetailsPage
            .verify.containsText('@eventRoles', '')
    },

    'click partnerId': function (browser) {
        var delegateDetailsPage = browser.page.checkIn().section.delgatesInfo;
        delegateDetailsPage
            .clickBySelector('@partnerId');
        browser
            .window_handles(function(result) {
                var handle = result.value[1];
                browser.switchWindow(handle);
                browser.page.delegates()
                    .waitForElementVisible('@titleName', 30000)
                    .verify.containsText('@titleName', 'Delegate')
                    .verify.containsText('@titleName', 'Maria Göransson');

                browser.closeWindow(handle);
                handle = result.value[0];
                browser.switchWindow(handle);})
    },

    'click masterId': function (browser) {
        var delegateDetailsPage = browser.page.checkIn().section.delgatesInfo;
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