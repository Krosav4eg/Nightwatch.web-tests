var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
    },

    'select by presenter up': function (browser) {
        var presenterColumn = browser.page.presentations().section.presenterColumn;
        presenterColumn
            .clickBySelector('@nameColumn')
            .verify.containsText("@firstRow", "Delegate")
            .verify.containsText("@secondRow", "Delegate")
            .verify.containsText("@thirdRow", "Delegate")
            .verify.containsText("@fourthRow", "Delegate")

            .clickBySelector('@nameColumn')

            .verify.containsText("@firstRow", "Delegate")
            .verify.containsText("@secondRow", "Delegate")
            .verify.containsText("@thirdRow", "Delegate")
            .verify.containsText("@fourthRow", "Delegate");
    },

    'select by  blank': function (browser) {
        var presenterColumn = browser.page.presentations().section.presenterColumn;
        presenterColumn
            .clickBySelector('@allOption')
            .verify.containsText("@firstRow", "Delegate")
            .verify.containsText("@secondRow", "Delegate")
            .verify.containsText("@thirdRow", "Delegate")
            .verify.containsText("@fourthRow", "Delegate");
    },

    'select by delegate': function (browser) {
        var presenterColumn = browser.page.presentations().section.presenterColumn;
        presenterColumn
            .clickBySelector('@delegateOption')
            .verify.containsText("@firstRow", "Delegate")
            .verify.containsText("@secondRow", "Delegate")
            .verify.containsText("@thirdRow", "Delegate")
            .verify.containsText("@fourthRow", "Delegate");
    },

    'select by partner': function (browser) {
        var presenterColumn = browser.page.presentations().section.presenterColumn;
        presenterColumn
            .clickBySelector('@partnerOption')
            .verify.elementPresent("@noResultsFound");
    },
});