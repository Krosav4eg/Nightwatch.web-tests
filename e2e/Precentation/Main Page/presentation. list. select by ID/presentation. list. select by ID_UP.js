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
    'select by id up': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//tr/th[1]', 10000)
            .useCss()
            .waitForElementVisible('a[href="/presentations/edit/3696"]', 5000)
            .assert.elementPresent('a[href="/presentations/edit/3696"]')
            .assert.elementPresent('a[href="/presentations/edit/3716"]')
            .assert.elementPresent('a[href="/presentations/edit/3723"]')
            .assert.elementPresent('a[href="/presentations/edit/3725"]')
            .assert.elementPresent('a[href="/presentations/edit/3726"]')
            .assert.elementPresent('a[href="/presentations/edit/3727"]')
            .assert.elementPresent('a[href="/presentations/edit/3729"]')
            .assert.elementPresent('a[href="/presentations/edit/3752"]')
            .assert.elementPresent('a[href="/presentations/edit/3753"]')
            .assert.elementPresent('a[href="/presentations/edit/3756"]')
            .assert.elementPresent('a[href="/presentations/edit/3757"]')
            .assert.elementPresent('a[href="/presentations/edit/3758"]')
            .assert.elementPresent('a[href="/presentations/edit/3759"]')
            .assert.elementPresent('a[href="/presentations/edit/3760"]')
            .assert.elementPresent('a[href="/presentations/edit/3761"]')
            .assert.elementPresent('a[href="/presentations/edit/3762"]')
            .assert.elementPresent('a[href="/presentations/edit/3763"]')
            .assert.elementPresent('a[href="/presentations/edit/3795"]')
            .assert.elementPresent('a[href="/presentations/edit/3795"]')
            .assert.elementPresent('a[href="/presentations/edit/3810"]')


    },


});