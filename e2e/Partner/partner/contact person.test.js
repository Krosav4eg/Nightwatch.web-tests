var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/212/partners/25')
    },

    'verify Contact person': function (browser) {
        browser
            .useXpath()
            .verify.containsText('(//*[@class="panel-title card-title"])[6]', "Contact person")

            .clickBySelectorXpath('(//*[@class="panel-title card-title"])[6]')
            .expect.element('//a[text()="To App"]').to.not.be.visible;

        browser.clickBySelectorXpath('(//*[@class="panel-title card-title"])[6]')
            .expect.element('//a[text()="To App"]').to.be.visible;
    },

    'search Contact person': function (browser) {
        browser
            .addContactPerson('Benno Engelmann', '1');
    },

    'verify grid Contact person': function (browser) {
        browser
            .verify.containsText('//tr/th[1]','Name')
            .verify.containsText('//tr/th[2]','Role')
            .verify.containsText('//tr/th[3]','Contact info')
            .verify.containsText('//tr/th[4]','Action')

            .verify.containsText('//tr/td[1]','Rehab E.M. Abdullah')
            .verify.containsText('//tr/td[2]','Marketing coordinator')
            .verify.containsText('//tr/td[3]','rehab@4power.biz')
            .verify.containsText('//tr/td[3]','+ 971 4-363-6821')

            .clickBySelectorXpath('//a[text()="To App"]')

            .pause(1000)
            .window_handles(function(result) {
                var handle = result.value[1];
                browser.switchWindow(handle)
                this.verify.urlContains("app.managementevents.com/#/");

                browser.closeWindow(handle);
                handle = result.value[0];
                browser.switchWindow(handle);
            })
    },

    'delete Contact person': function (browser) {
        browser
            .clickBySelectorXpath('//button[text()="Delete"]')
            .clickBySelectorXpath('(//button[text()="Yes"])[1]')
    },

    'add Content coordinator': function (browser) {
        browser
            .addContactPerson('Rehab', '2')

            .verify.containsText('//tr/td[2]','Content coordinator')

            .clickBySelectorXpath('//button[text()="Delete"]')
            .clickBySelectorXpath('(//button[text()="No"])[1]')
            .clickBySelectorXpath('//button[text()="Delete"]')
            .clickBySelectorXpath('(//button[text()="Yes"])[1]');
    },

    'add Sales coordinator': function (browser) {
        browser
            .addContactPerson('Rehab', '3')

            .verify.containsText('//tr/td[2]','Sales coordinator')
            .clickBySelectorXpath('//a[text()="To App"]')

            .waitForElementVisible('//div[@class="toast-content"]', 10000)
            .verify.containsText('//div[@class="toast-title"]', 'Failure')
            .verify.containsText('//div[@class="toast-message"]', 'Please add marketing coordinator to the company.')
            .clickBySelectorXpath('//div[@class="toast-content"]')

            .clickBySelectorXpath('//button[text()="Delete"]')
            .clickBySelectorXpath('(//button[text()="Yes"])[1]');
    },
});