var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to delegates': function (browser) {
        browser
            .relUrl('/event/212/delegates')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'redirection master contact info': function (browser) {
        browser
            .useXpath()
            .clickBySelectorXpath('//a[contains(text(),"Prospects")]')
            .verify.elementPresent('//h4[contains(text(),"Prospects 0/809")]')

            .clickBySelectorXpath('(//a[@href="/prospects/edit/431395"])[1]')
            .verify.containsText('(//h4)[1]', 'Adam Hans Georg (#431395)');
    },

    'check master contact info': function (browser) {
        browser
            .verify.elementPresent('//label[contains(text(),"Master Contact ID")]')
            .verify.elementPresent('//div/span/a[contains(text(),"94269")]')

            .verify.elementPresent('//label[contains(text(),"Last Name")]')
            .verify.elementPresent('//div/span[contains(text(),"Adam")]')

            .verify.elementPresent('//label[contains(text(),"First Name")]')
            .verify.elementPresent('//div/span[contains(text(),"Hans Georg")]')

            .verify.elementPresent('//label[contains(text(),"Company")]')
            .verify.elementPresent('//div/span[contains(text(),"RWE AG")]')

            .verify.elementPresent('//label[contains(text(),"ME Account")]')
            .verify.elementPresent('//div/span[contains(text(),"No")]')

            .verify.elementPresent('//label[contains(text(),"Function Title")]')
            .verify.elementPresent('//div/span[contains(text(),"Leiter internationale Politik")]')

            .verify.elementPresent('//label[contains(text(),"Mobile")]')
            .verify.containsText('(//div/span)[8]', '')

            .verify.elementPresent('//label[contains(text(),"Country")]')
            .verify.elementPresent('//div/span[contains(text(),"Germany")]')

            .verify.elementPresent('//label[contains(text(),"Language")]')
            .verify.elementPresent('//div/span[contains(text(),"German")]');
    },

    'participation Information': function (browser) {
        browser
            .verify.elementPresent('//label[contains(text(),"Participation status")]')
            .verify.containsText('//select[@id="participationStatus"]', 'Prospect')

            .clickBySelectorXpath('//select[@id="participationStatus"]')
            .verify.containsText('//option[@value="1"]', 'Confirmed')
            .verify.containsText('//option[@value="2"]', 'Confirmed Rebook')
            .verify.containsText('//option[@value="%00"]', 'Prospect')
            .verify.containsText('//option[@value="0"]', 'Unconfirmed')
            .verify.containsText('//option[@value="6"]', 'Unconfirmed Rebook')

            .clickBySelectorXpath('//option[@value="1"]')
            .clickBySelectorXpath('//option[@value="2"]')
            .clickBySelectorXpath('//option[@value="%00"]')
            .clickBySelectorXpath('//option[@value="0"]')
            .clickBySelectorXpath('//option[@value="6"]');
    },

    'check contact info in delegate page': function (browser) {
        browser
            .relUrl('/event/212/delegates')
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)

            .useXpath()
            .clickBySelectorXpath('//a[contains(text(),"Prospects")]')
            .verify.containsText('(//tr[3]/td[2]/span)[2]', 'Adam')
            .verify.containsText('(//tr[3]/td[3]/span)[2]', 'Hans Georg')
            .verify.containsText('(//tr[3]/td[4]/span)[2]', 'Leiter internationale Politik')
            .verify.containsText('(//tr[3]/td[5]/span)[2]', 'RWE AG')
            .verify.containsText('(//tr[3]/td[6]/span)[2]', 'hans-georg.adam@rwe.com')
            .verify.containsText('(//tr[3]/td[7]/span)[2]', 'Germany')

            .moveToElement('(//tr/th[10])[2]', 1340, 640)
            .verify.containsText('(//tr[3]/td[10]/span)[2]', 'No');
    },
});
