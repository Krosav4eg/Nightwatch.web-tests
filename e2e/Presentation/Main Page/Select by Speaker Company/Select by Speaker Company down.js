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
    'select by speaker company up': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//tr/th[7]', 10000)
            .click('//tr/th[7]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//tr/th[7]', 10000)
            .click('//tr/th[7]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//tr[1]/td[7]/span/ul/li[text()="             Telenor ASA           "]', 5000)
            .assert.elementPresent('//tr[1]/td[7]/span/ul/li[text()="             Telenor ASA           "]')
            .assert.elementPresent('//tr[2]/td[7]/span/ul/li[text()="             EWE AG           "]')
            .assert.elementPresent('//tr[2]/td[7]/span/ul/li[2][text()="             SpareBank 1 Gruppen AS           "]')
            
    },


});