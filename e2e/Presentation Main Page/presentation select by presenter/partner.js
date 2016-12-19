var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {
    '@disabled': false,
    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'select by partner': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//tr/td[2]/select/option[3]', 10000)
            .click('//tr/td[2]/select/option[3]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//tr[1]/td[2]/span[text()="         Partner       "]', 5000)
            .assert.elementPresent('//tr[1]/td[2]/span[text()="         Partner       "]')
            .assert.elementPresent('//tr[2]/td[2]/span[text()="         Partner       "]')
            .assert.elementPresent('//tr[3]/td[2]/span[text()="         Partner       "]')
            .assert.elementPresent('//tr[4]/td[2]/span[text()="         Partner       "]')
            .assert.elementPresent('//tr[5]/td[2]/span[text()="         Partner       "]')
            .assert.elementPresent('//tr[6]/td[2]/span[text()="         Partner       "]')
            .assert.elementPresent('//tr[7]/td[2]/span[text()="         Partner       "]')
            .assert.elementPresent('//tr[8]/td[2]/span[text()="         Partner       "]')
            .assert.elementPresent('//tr[9]/td[2]/span[text()="         Partner       "]')
            .assert.elementPresent('//tr[10]/td[2]/span[text()="         Partner       "]')
            .assert.elementPresent('//tr[11]/td[2]/span[text()="         Partner       "]')
            .assert.elementPresent('//tr[12]/td[2]/span[text()="         Partner       "]')


    },


});