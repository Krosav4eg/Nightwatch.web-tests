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
    'select by organizer up': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//tr/th[3]', 10000)
            .click('//tr/th[3]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .click('//tr/th[3]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//tr[1]/td[3]/span/a[text()="           VTT Technical Research Centre of Finland          "]', 5000)
            .assert.elementPresent('//tr[1]/td[3]/span/a[text()="           VTT Technical Research Centre of Finland          "]')
            .assert.elementPresent('//tr[2]/td[3]/span/a[text()="           Tieto Deutschland GmbH         "]')
            .assert.elementPresent('//tr[3]/td[3]/span/a[text()="           Ferranti Computer Systems         "]')
            .assert.elementPresent('//tr[4]/td[3]/span/a[text()="           Ferranti Computer Systems         "]')
            .assert.elementPresent('//tr[5]/td[3]/span/a[text()="           Ferranti Computer Systems         "]')
            .assert.elementPresent('//tr[6]/td[3]/span/a[text()="           Ferranti Computer Systems         "]')
            .assert.elementPresent('//tr[7]/td[3]/span/a[text()="           Ferranti Computer Systems         "]')
            .assert.elementPresent('//tr[8]/td[3]/span/a[text()="           Ferranti Computer Systems         "]')
            .assert.elementPresent('//tr[9]/td[3]/span/a[text()="           Ferranti Computer Systems         "]')
            .assert.elementPresent('//tr[10]/td[3]/span/a[text()="           Ferranti Computer Systems         "]')
            .assert.elementPresent('//tr[11]/td[3]/span/a[text()="           CTG - Corporate Transformation Group GmbH         "]')
            .assert.elementPresent('//tr[12]/td[3]/span/a[text()="           BET Büro für Energiewirtschaft und technische Planung GmbH         "]')
            .assert.elementPresent('//tr[13]/td[3]/span/span[text()="           Management Events         "]')
            .assert.elementPresent('//tr[14]/td[3]/span/span[text()="           Management Events         "]')
            .assert.elementPresent('//tr[15]/td[3]/span/span[text()="           Management Events         "]')
            .assert.elementPresent('//tr[16]/td[3]/span/span[text()="           Management Events         "]')
            .assert.elementPresent('//tr[17]/td[3]/span/span[text()="           Management Events         "]')
            .assert.elementPresent('//tr[18]/td[3]/span/span[text()="           Management Events         "]')
            .assert.elementPresent('//tr[19]/td[3]/span/span[text()="           Management Events         "]')
            .assert.elementPresent('//tr[20]/td[3]/span/span[text()="           Management Events         "]')


    },


});