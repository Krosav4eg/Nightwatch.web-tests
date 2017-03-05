var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/2473/speakers')
    },

    'check event data': function (browser) {
        var eventSection = browser.page.speaker().section.event;
        eventSection
            .waitForElementVisible('@totalName2473', 3000);
    },

    'sort by company up': function (browser) {
        var companyColumnSection = browser.page.speaker().section.companyColumn;
        companyColumnSection
            .clickBySelector('@nameColumn')

            .verify.containsText("@firstRow", "HiQ Finland")
            .verify.containsText("@secondRow", "Management Events")
            .verify.containsText("@thirdRow", "Nordea Pankki Suomi Oyj")
    },

    'sort by company down': function (browser) {
        var companyColumnSection = browser.page.speaker().section.companyColumn;
        companyColumnSection
            .clickBySelector('@nameColumn')

            .verify.containsText("@firstRow", "Nordea Pankki Suomi Oyj")
            .verify.containsText("@secondRow", "Management Events")
            .verify.containsText("@thirdRow", "HiQ Finland")
    },

    'search by company ': function (browser) {
        var companyColumnSection = browser.page.speaker().section.companyColumn;
        companyColumnSection
            .setValueBySelector('@seachColumn', ['HiQ Finland', browser.Keys.ENTER])

            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "HiQ Finland")
    },
});