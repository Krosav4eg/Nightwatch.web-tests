var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'select by id blank': function (browser) {
        browser
            .setValueByXpath('//tr/td[1]/input[@type="text"]', ['', browser.Keys.ENTER])
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .verify.elementPresent('a[href="/presentations/edit/3984"]')
            .verify.elementPresent('a[href="/presentations/edit/3983"]')
            .verify.elementPresent('a[href="/presentations/edit/3756"]')
            .verify.elementPresent('a[href="/presentations/edit/3757"]')
            .verify.elementPresent('a[href="/presentations/edit/3758"]')
            .verify.elementPresent('a[href="/presentations/edit/3759"]')
            .verify.elementPresent('a[href="/presentations/edit/3760"]')
            .verify.elementPresent('a[href="/presentations/edit/3761"]')
            .verify.elementPresent('a[href="/presentations/edit/3762"]')
            .verify.elementPresent('a[href="/presentations/edit/3763"]')
    },

    'select by id blank 3 number': function (browser) {
        browser
            .setValueByXpath('//tr/td[1]/input[@type="text"]', ['#37', browser.Keys.ENTER])
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .verify.elementPresent('a[href="/presentations/edit/3723"]')
            .verify.elementPresent('a[href="/presentations/edit/3733"]')
            .verify.elementPresent('a[href="/presentations/edit/3726"]')
            .verify.elementPresent('a[href="/presentations/edit/3729"]')
            .verify.elementPresent('a[href="/presentations/edit/3752"]')
    },
});