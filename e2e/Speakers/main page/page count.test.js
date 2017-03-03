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
            .waitForElementVisible('@totalName212', 3000);
    },

    'page count 20': function (browser) {
        var pageCountSection = browser.page.speaker().section.pageCount;
        pageCountSection
            .clickBySelector('@show20RowsOption')

            .verify.elementPresent('@currentPage')
            .verify.elementPresent('@nextPage')
            .verify.elementPresent('@lastPage');
    },

    'page count 50': function (browser) {
        var pageCountSection = browser.page.speaker().section.pageCount;
        pageCountSection
            .clickBySelector('@show50RowsOption')

            .verify.elementPresent('@owePage')
            .verify.elementNotPresent('@nextPage')
            .verify.elementNotPresent('@lastPage');
    },

    'page count 100': function (browser) {
        var pageCountSection = browser.page.speaker().section.pageCount;
        pageCountSection
            .clickBySelector('@show100RowsOption')

            .verify.elementPresent('@owePage')
            .verify.elementNotPresent('@nextPage')
            .verify.elementNotPresent('@lastPage');
    },
});