var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/2/representatives')
    },

    'page count 20': function (browser) {
        var allInformation = browser.page.representatives().section.allInformation;
        allInformation
            .clickBySelector('@option20Page')
            .verify.elementPresent('@pageNumber3Count')
            .verify.elementPresent('@nextLink')
            .verify.elementPresent('@lastLink');
    },

    'page count 50': function (browser) {
        var allInformation = browser.page.representatives().section.allInformation;
        allInformation
            .clickBySelector('@option50Page')
            .verify.elementPresent('@pageNumberCount')
            .verify.elementNotPresent('@nextLink')
            .verify.elementNotPresent('@lastLink');
    },

    'page count 100': function (browser) {
        var allInformation = browser.page.representatives().section.allInformation;
        allInformation
            .clickBySelector('@option100Page')
            .verify.elementPresent('@pageNumberCount')
            .verify.elementNotPresent('@nextLink')
            .verify.elementNotPresent('@lastLink');
    },
});