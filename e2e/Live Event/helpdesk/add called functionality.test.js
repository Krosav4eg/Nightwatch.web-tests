var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to check-in': function (browser) {
        browser
            .relUrl('/events/2008/helpdesk')
    },

    'open first delegate': function (browser) {
        var lastNameColumn = browser.page.helpdesk().section.lastNameColumn;
        lastNameColumn
            .clickBySelector('@firstRowWithLastName');
    },

    'click by called': function (browser) {
        var delgatesInfo = browser.page.checkIn().section.delgatesInfo;
        delgatesInfo
            .clickBySelector('@calledButton');

        browser.refresh()
            .useXpath()
            .waitForElementNotVisible('//*[@id="thisIsMainLoader"]', 100000);
    },

    'verify called': function (browser) {
        var calledColumn = browser.page.helpdesk().section.calledColumn;
        calledColumn
            .containsCurrentData('@firstRow');

        var lastNameColumn = browser.page.helpdesk().section.lastNameColumn;
        lastNameColumn
            .clickBySelector('@firstRowWithLastName');

        var delgatesInfo = browser.page.checkIn().section.delgatesInfo;
        delgatesInfo
            .containsCurrentData('@calledText');
    },
});