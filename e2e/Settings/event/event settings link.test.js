var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to rebooking': function (browser) {
        browser
            .relUrl('/event/212/partners/7588')
    },

    'redirection to rebooking': function (browser) {
        var leftMenu = browser.page.leftMenu();
        leftMenu
            .clickBySelector('@settings')
            .clickBySelector('@templates')
            .clickBySelector('@eventSettings')

            .verify.elementPresent('@addTemplate')
            .verify.elementPresent('@searchTemplate');
    },

    'open add Templater': function (browser) {
        var leftMenu = browser.page.leftMenu();
        leftMenu
            .clickBySelector('@addTemplate');

        var addTemplate = browser.page.addTemplate();
        addTemplate
            .verify.elementPresent('@namePage')
            .verify.elementPresent('@nameInput');

    },
    'open  searchTemplate': function (browser) {
        var leftMenu = browser.page.leftMenu();
        leftMenu
            .clickBySelector('@searchTemplate');

        var searchTemplate = browser.page.searchTemplate();
        searchTemplate
            .verify.elementPresent('@namePage')

            .clickBySelector('@addTemplateButton');

        var addTemplate = browser.page.addTemplate();
        addTemplate
            .verify.elementPresent('@namePage')
    },
});