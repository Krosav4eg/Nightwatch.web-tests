var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'select by id blank': function (browser) {
        browser
            .setValueBySelectorXpath('//tr/td[1]/input[@type="text"]', ['', browser.Keys.ENTER])
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .verify.elementPresent('a[href="/presentations/edit/3696"]')
            .verify.elementPresent('a[href="/presentations/edit/3723"]')
            .verify.elementPresent('a[href="/presentations/edit/3726"]')
            .verify.elementPresent('a[href="/presentations/edit/3814"]')
            .verify.elementPresent('a[href="/presentations/edit/3729"]')
            .verify.elementPresent('a[href="/presentations/edit/3733"]')
            .verify.elementPresent('a[href="/presentations/edit/3752"]')
            .verify.elementPresent('a[href="/presentations/edit/3753"]')
            .verify.elementPresent('a[href="/presentations/edit/3756"]')
            .verify.elementPresent('a[href="/presentations/edit/3757"]')
            .verify.elementPresent('a[href="/presentations/edit/3758"]')
            .verify.elementPresent('a[href="/presentations/edit/3760"]')
            .verify.elementPresent('a[href="/presentations/edit/3761"]')
            .verify.elementPresent('a[href="/presentations/edit/3762"]')
            .verify.elementPresent('a[href="/presentations/edit/3763"]')
            .verify.elementPresent('a[href="/presentations/edit/3795"]')
            .verify.elementPresent('a[href="/presentations/edit/3811"]')
            .verify.elementPresent('a[href="/presentations/edit/3810"]')
    },
});