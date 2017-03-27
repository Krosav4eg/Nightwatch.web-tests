var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/representatives')
    },

    'sort by Company name up': function (browser) {
        var companyNameColumn = browser.page.representatives().section.companyNameColumn;
        companyNameColumn

            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '4power Infocom Free Zone Company LLC')
            .verify.containsText('@secondRow', 'Management Events')
            .verify.containsText('@thirdRow', 'Villen testi')
            .verify.containsText('@fourthRow', 'Villen testi')
    },

    'sort by Company name down': function (browser) {
        var companyNameColumn = browser.page.representatives().section.companyNameColumn;
        companyNameColumn

            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Villen testi')
            .verify.containsText('@secondRow', 'Villen testi')
            .verify.containsText('@thirdRow', 'Villen testi')
            .verify.containsText('@fourthRow', 'Villen testi')
    },

    'search by Company name Blank': function (browser) {
        var companyNameColumn = browser.page.representatives().section.companyNameColumn;
        companyNameColumn
            .setValueBySelector('@seachColumn', ['Management', browser.Keys.ENTER])

            .verify.containsText('@firstRow', 'Management Events')
    },

    'search by Company name 3 numbers': function (browser) {
        var companyNameColumn = browser.page.representatives().section.companyNameColumn;
        companyNameColumn
            .setValueBySelector('@seachColumn', ['Man', browser.Keys.ENTER])

            .verify.containsText('@firstRow', 'Management Events')
    },
});
