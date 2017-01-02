var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');
module.exports = _.assign(presteps, auth, {
    '@disabled': false,
    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },
    'select by speaker company up': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//tr/th[7]', 10000)
            .click('//tr/th[7]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//tr[1]/td[7]/span',5000)
            .assert.elementPresent('//tr[1]/td[7]/span')
            .assert.elementPresent('//tr[2]/td[7]/span')
            .assert.elementPresent('//tr[3]/td[7]/span')
            .assert.elementPresent('//tr[4]/td[7]/span')
            .assert.elementPresent('//tr[5]/td[7]/span')
            .assert.elementPresent('//tr[6]/td[7]/span')
            .assert.elementPresent('//tr[7]/td[7]/span')
            .assert.elementPresent('//tr[8]/td[7]/span')
            .assert.elementPresent('//tr[9]/td[7]/span')


    },


});