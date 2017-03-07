var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
    },

    'select by id blank': function (browser) {
        browser
            .setValueByXpath('//tr/td[1]/input[@type="text"]', ['', browser.Keys.ENTER])
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .verify.elementPresent('a[href="/presentations/edit/628"]')
            .verify.elementPresent('a[href="/presentations/edit/629"]')
            .verify.elementPresent('a[href="/presentations/edit/5712"]')
            .verify.elementPresent('a[href="/presentations/edit/5713"]')
            .verify.elementPresent('a[href="/presentations/edit/5714"]')
            .verify.elementPresent('a[href="/presentations/edit/5715"]')
            .verify.elementPresent('a[href="/presentations/edit/5716"]')
            .verify.elementPresent('a[href="/presentations/edit/5717"]')
            .verify.elementPresent('a[href="/presentations/edit/5718"]')
            .verify.elementPresent('a[href="/presentations/edit/5719"]')
            .verify.elementPresent('a[href="/presentations/edit/5720"]');
    },

    'select by id blank 3 number': function (browser) {
        browser
            .setValueByXpath('//tr/td[1]/input[@type="text"]', ['#57', browser.Keys.ENTER])
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .verify.elementPresent('a[href="/presentations/edit/5712"]')
            .verify.elementPresent('a[href="/presentations/edit/5713"]')
            .verify.elementPresent('a[href="/presentations/edit/5714"]')
            .verify.elementPresent('a[href="/presentations/edit/5715"]')
            .verify.elementPresent('a[href="/presentations/edit/5716"]')
            .verify.elementPresent('a[href="/presentations/edit/5717"]')
            .verify.elementPresent('a[href="/presentations/edit/5718"]')
            .verify.elementPresent('a[href="/presentations/edit/5719"]')
            .verify.elementPresent('a[href="/presentations/edit/5720"]');
    },
});