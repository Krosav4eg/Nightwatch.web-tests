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

    'select by presentation type down': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//tr/th[4]', 10000)
            .click('//tr/th[4]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//tr[1]/td[4]/span[text()="         Case - parallel       "]', 5000)
            .assert.elementPresent('//tr[1]/td[4]/span[text()="         Case - parallel       "]')
            .assert.elementPresent('//tr[2]/td[4]/span[text()="         Case - parallel       "]')
            .assert.elementPresent('//tr[3]/td[4]/span[text()="         Case - parallel       "]')
            .assert.elementPresent('//tr[4]/td[4]/span[text()="         Case - whole audience       "]')

            .assert.elementPresent('//tr[5]/td[4]/span[text()="         Case presentation       "]')
            .assert.elementPresent('//tr[6]/td[4]/span[text()="         Case presentation       "]')


            .assert.elementPresent('//tr[7]/td[4]/span[text()="         Chairman speach       "]')
            .assert.elementPresent('//tr[8]/td[4]/span[text()="         Chairman speach       "]')
            .assert.elementPresent('//tr[9]/td[4]/span[text()="         Cross-function keynote       "]')

            .assert.elementPresent('//tr[10]/td[4]/span[text()="         Debate       "]')
            .assert.elementPresent('//tr[11]/td[4]/span[text()="         Debate       "]')
            .assert.elementPresent('//tr[12]/td[4]/span[text()="         Debate       "]')
            .assert.elementPresent('//tr[13]/td[4]/span[text()="         Debate       "]')
            .assert.elementPresent('//tr[14]/td[4]/span[text()="         FishBowl       "]')
            .assert.elementPresent('//tr[15]/td[4]/span[text()="         Gold spotlight       "]')
            .assert.elementPresent('//tr[16]/td[4]/span[text()="         Gold spotlight       "]')
            .assert.elementPresent('//tr[17]/td[4]/span[text()="         Gold spotlight       "]')

            .assert.elementPresent('//tr[18]/td[4]/span[text()="         Group discussion initiation       "]')
            .assert.elementPresent('//tr[19]/td[4]/span[text()="         Group discussion initiation       "]')
            .assert.elementPresent('//tr[20]/td[4]/span[text()="         Keynote       "]');



    },


});