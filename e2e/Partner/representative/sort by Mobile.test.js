var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/representatives')
    },

    'sort by Mobile up': function (browser) {
        var mobileColumn = browser.page.representatives().section.mobileColumn;
        mobileColumn
            .moveToElement('@nameColumn', 1298, 597)
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '+ 971 4-363-6821')
            .verify.containsText('@secondRow', '+ 971 4-370-9482')
            .verify.containsText('@thirdRow', '+ 971 4-388-3913')
            .verify.containsText('@fourthRow', '+ 971 4-812-2022')

            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '9714-4563983')
            .verify.containsText('@secondRow', '358405657227')
            .verify.containsText('@thirdRow', '000')
            .verify.containsText('@fourthRow', '+971566860672')
    },

    'search by Mobile Blank': function (browser) {
        var mobileColumn = browser.page.representatives().section.mobileColumn;
        mobileColumn
            .setValueBySelector('@seachColumn', ['358405657227', browser.Keys.ENTER])

            .verify.containsText('@firstRow', '358405657227')
    },

    'search by Mobile 3 numbers': function (browser) {
        var mobileColumn = browser.page.representatives().section.mobileColumn;
        mobileColumn
            .setValueBySelector('@seachColumn', ['358', browser.Keys.ENTER])

            .verify.containsText('@firstRow', '358405657227')
    },
});
