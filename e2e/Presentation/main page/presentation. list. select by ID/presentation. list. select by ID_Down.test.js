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
    'select by id down': function (browser) {
        browser
            .clickBySelectorXpath('//tr/th[1]')
            .waitForElementVisible('a[href="/presentations/edit/3985"]',5000)
            .verify.elementPresent('a[href="/presentations/edit/3985"]')
            .verify.elementPresent('a[href="/presentations/edit/3984"]')
            .verify.elementPresent('a[href="/presentations/edit/3983"]')
            .verify.elementPresent('a[href="/presentations/edit/3982"]')
            .verify.elementPresent('a[href="/presentations/edit/3975"]')
            .verify.elementPresent('a[href="/presentations/edit/3821"]')
            .verify.elementPresent('a[href="/presentations/edit/3820"]')
            .verify.elementPresent('a[href="/presentations/edit/3819"]')
            .verify.elementPresent('a[href="/presentations/edit/3818"]')
            .verify.elementPresent('a[href="/presentations/edit/3817"]')
            .verify.elementPresent('a[href="/presentations/edit/3816"]')
            .verify.elementPresent('a[href="/presentations/edit/3815"]')
            .verify.elementPresent('a[href="/presentations/edit/3814"]')
            .verify.elementPresent('a[href="/presentations/edit/3811"]')
            .verify.elementPresent('a[href="/presentations/edit/3810"]')
            .verify.elementPresent('a[href="/presentations/edit/3795"]')
            .verify.elementPresent('a[href="/presentations/edit/3763"]')
            .verify.elementPresent('a[href="/presentations/edit/3762"]')
            .verify.elementPresent('a[href="/presentations/edit/3761"]')
            .verify.elementPresent('a[href="/presentations/edit/3760"]')
    },
});