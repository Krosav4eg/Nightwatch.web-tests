var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');
module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
    },

    'page count': function (browser) {
        var allInformation = browser.page.presentations().section.allInformation;
        allInformation
            .clickBySelector('@option20Page')
            .waitForElementVisible('@pageNumberCount', 5000)
            .clickBySelector('@option50Page')
            .waitForElementVisible('@pageNumberCount', 5000)
            .clickBySelector('@option100Page')
            .waitForElementVisible('@pageNumberCount', 5000);
    },
});