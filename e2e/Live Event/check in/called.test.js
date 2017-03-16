var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to check-in': function (browser) {
        browser
            .relUrl('/events/2336/check-in')
    },

    'open first delegate': function (browser) {
        var lastNameColumn = browser.page.checkIn().section.lastNameColumn;
        lastNameColumn
            .clickBySelector('@firstRow');
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
        var calledColumn = browser.page.checkIn().section.calledColumn;
        calledColumn
            .containsCurrentData('@firstRow');

        var lastNameColumn = browser.page.checkIn().section.lastNameColumn;
        lastNameColumn
            .clickBySelector('@firstRow');

        var delgatesInfo = browser.page.checkIn().section.delgatesInfo;
        delgatesInfo
            .containsCurrentData('@calledText');
    },
});