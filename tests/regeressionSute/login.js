var _ = require('lodash');
var presteps = require('./../presteps/presteps.js');

module.exports = _.assign(presteps, {
    'authorization': function (browser) {
        browser
            .relUrl('/event/2008/delegates')
            .assert.title('Skynet 2')
            .waitForElementVisible('input[name="username"]', 4000)
            .setValue('input[name="username"]', 'xsolve')
            .waitForElementVisible('input[type="password"]', 4000)
            .setValue('input[type="password"]', 'xs0lv3')
            .waitForElementVisible('button[type="submit"]', 4000)
            .click('button[type="submit"]')
            .waitForElementPresent('me-nav', 10000);
    },
    'ceck delegate': function (browser) {
        browser
            .relUrl('/event/2008/delegates')
            .useXpath()
            .waitForElementVisible('//tbody/tr/td[13]/select', 4000)
            .click('//tbody/tr/td[13]/select')
            .waitForElementVisible('//tbody/tr/td[13]/select/option[@value=1]', 4000)
            .click('//tbody/tr/td[13]/select/option[@value=1]')
            .pause(5000)
            .waitForElementVisible('//tbody/tr/td[3]/span/a[@href="/delegates/edit/107986"]', 4000)
            .click('//tbody/tr/td[3]/span/a[@href="/delegates/edit/107986"]')
            .pause(5000)
            .waitForElementVisible('//a[@href="http://alpha.ew.managementevents.com/EW/MasterContact/cruII/id/335773"]', 4000)
            .click('//a[@href="http://alpha.ew.managementevents.com/EW/MasterContact/cruII/id/335773"]')
            .pause(10000)
            .waitForElementVisible('//h4[contains(text(),"ME account")]', 4000)
            .pause()
        // .useXpath()
        // .waitForElementVisible('',4000)


    }
});



