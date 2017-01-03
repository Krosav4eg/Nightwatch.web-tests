var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {
    '@disabled': true,
    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },
    'select by presentation headings up': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//tr/th[5]', 10000)
            .click('//tr/th[5]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//tr[1]/td[5]/span',5000)
            .assert.elementPresent('//tr[1]/td[5]/span')
            .assert.elementPresent('//tr[2]/td[5]/span')
            .assert.elementPresent('//tr[3]/td[5]/span')
            .assert.elementPresent('//tr[4]/td[5]/span')
            .assert.elementPresent('//tr[5]/td[5]/span')
            .assert.elementPresent('//tr[6]/td[5]/span')
            .assert.elementPresent('//tr[7]/td[5]/span')
            .assert.elementPresent('//tr[8]/td[5]/span')
            .assert.elementPresent('//tr[9]/td[5]/span')
            .assert.elementPresent('//tr[10]/td[5]/span')
            .assert.elementPresent('//tr[11]/td[5]/span')
            .assert.elementPresent('//tr[12]/td[5]/span')
            .assert.elementPresent('//tr[13]/td[5]/span')
            .assert.elementPresent('//tr[14]/td[5]/span')
            .assert.elementPresent('//tr[15]/td[5]/span')
            .assert.elementPresent('//tr[16]/td[5]/span')
            .assert.elementPresent('//tr[17]/td[5]/span')
            .assert.elementPresent('//tr[18]/td[5]/span')
            .assert.elementPresent('//tr[19]/td[5]/span')
            .assert.elementPresent('//tr[20]/td[5]/span')

    },


});