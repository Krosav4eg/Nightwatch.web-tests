var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {
    '@disabled': true,
    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },
    'select by id down': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//tr/th[1]', 10000)
            .click('//tr/th[1]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .waitForElementVisible('a[href="/presentations/edit/3985"]',5000)
            .assert.elementPresent('a[href="/presentations/edit/3985"]')
            .assert.elementPresent('a[href="/presentations/edit/3984"]')
            .assert.elementPresent('a[href="/presentations/edit/3983"]')
            .assert.elementPresent('a[href="/presentations/edit/3982"]')
            .assert.elementPresent('a[href="/presentations/edit/3975"]')
            .assert.elementPresent('a[href="/presentations/edit/3821"]')
            .assert.elementPresent('a[href="/presentations/edit/3820"]')
            .assert.elementPresent('a[href="/presentations/edit/3819"]')
            .assert.elementPresent('a[href="/presentations/edit/3818"]')
            .assert.elementPresent('a[href="/presentations/edit/3817"]')
            .assert.elementPresent('a[href="/presentations/edit/3816"]')
            .assert.elementPresent('a[href="/presentations/edit/3815"]')
            .assert.elementPresent('a[href="/presentations/edit/3814"]')
            .assert.elementPresent('a[href="/presentations/edit/3811"]')
            .assert.elementPresent('a[href="/presentations/edit/3810"]')
            .assert.elementPresent('a[href="/presentations/edit/3795"]')
            .assert.elementPresent('a[href="/presentations/edit/3763"]')
            .assert.elementPresent('a[href="/presentations/edit/3762"]')
            .assert.elementPresent('a[href="/presentations/edit/3761"]')
            .assert.elementPresent('a[href="/presentations/edit/3760"]')

    },


});