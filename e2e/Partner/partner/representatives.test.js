var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/212/partners/7588')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'participation info': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//div[contains(text(),"Representatives")]')

            .clickBySelectorXpath('(//h4/a/div)[6]')
            .expect.element('(//label[contains(text(),"Contact / Search")])[2]').to.not.be.visible

        browser
            .clickBySelectorXpath('(//h4/a/div)[6]')
            .verify.elementPresent('(//label[contains(text(),"Contact / Search")])[2]');
    },

    'information': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//a[contains(text(),"Möller Markus")]')
            .verify.elementPresent('(//td[contains(text(),"Confirmed")])[1]')
            .verify.elementPresent('//div[contains(text(),"markus.moeller@bblaw.com")]')
            .verify.elementPresent('//div[contains(text(),"+49 160 6751398")]')

            .clickBySelectorXpath('//a[contains(text(),"Möller Markus")]')
            .window_handles(function (result) {
                var handle = result.value[1];
                browser.switchWindow(handle)
                    .verify.urlContains("http://alpha.ew.managementevents.com/EW/MasterContact/cruII/id/283126")
                    .waitForElementVisible('//h4[contains(text(),"Person   - Möller Markus (#283126)")]',10000)
                    .verify.valueContains('//input[@value="Möller"]', 'Möller')
                    .verify.valueContains('//input[@value="Markus"]', 'Markus')
                    .verify.valueContains('//input[@value="markus.moeller@bblaw.com"]', 'markus.moeller@bblaw.com')
                    .verify.valueContains('//input[@value="+49 160 6751398"]', '+49 160 6751398')

                browser.closeWindow(handle);
                handle = result.value[0];
                browser.switchWindow(handle);
            })
    },

    'action': function (browser) {
        browser
            .clickBySelectorXpath('(//button[contains(text(),"Cancel")])[1]')

            .verify.elementPresent('(//h4[contains(text(),"Delete contact")])[2]')
            .clickBySelectorXpath('(//button[contains(text(),"No")])[2]')
            .expect.element('(//h4[contains(text(),"Delete contact")])[2]').to.not.be.visible
        browser
            .clickBySelectorXpath('(//button[contains(text(),"Replace")])[2]')
            .verify.elementPresent('(//div)[208]')
            .verify.elementPresent('(//select)[3]')
            .verify.elementPresent('(//button[contains(text(),"Replace")])[1]');
    },

    'search': function (browser) {
        browser
            .clickBySelectorXpath('(//input[@placeholder="Search contact"])[2]')
            .setValueByCss('.auto-complete input', 'Thomas Bula')
            .pause(3000)
            .clickBySelectorXpath('//*[contains(text(),"Thomas Bula")]');

    },

});