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
            .clickBySelectorXpath('(//a[@href="/delegates/edit/77942"])[1]')
            .verify.containsText('(//h4)[1]', 'Mario Müller (#77942)');
    },

    'check master contact info': function (browser) {
        browser
            .verify.elementPresent('//label[contains(text(),"Master Contact ID")]')
            .verify.elementPresent('//div/span/a[contains(text(),"100467")]')

            .verify.elementPresent('//label[contains(text(),"Last Name")]')
            .verify.elementPresent('//div/span[contains(text(),"Müller")]')

            .verify.elementPresent('//label[contains(text(),"First Name")]')
            .verify.elementPresent('//div/span[contains(text(),"Mario")]')

            .verify.elementPresent('//label[contains(text(),"Company")]')
            .verify.elementPresent('//div/span[contains(text(),"Envia Mitteldeutsche Energie AG")]')

            .verify.elementPresent('//label[contains(text(),"ME Account")]')
            .verify.elementPresent('//div/span[contains(text(),"No")]')

            .verify.elementPresent('//label[contains(text(),"Function Title")]')
            .verify.elementPresent('//div/span[contains(text(),"Leiter Geschäftskunden Nord")]')

            .verify.elementPresent('//label[contains(text(),"Mobile")]')
            .verify.elementPresent('//div/span[contains(text(),"+49 173 5686320")]')

            .verify.elementPresent('//label[contains(text(),"Country")]')
            .verify.elementPresent('//div/span[contains(text(),"Germany")]')

            .verify.elementPresent('//label[contains(text(),"Language")]')
            .verify.elementPresent('//div/span[contains(text(),"German")]');
    },

    'check contact info in delegate page': function (browser) {
        browser
            .relUrl('/event/212/delegates')
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)

            .useXpath()
            .verify.containsText('(//tr[1]/td[2]/span)[1]', 'Müller')
            .verify.containsText('(//tr[1]/td[3]/span)[1]', 'Mario')
            .verify.containsText('(//tr[1]/td[4]/span)[1]', 'Leiter Geschäftskunden Nord')
            .verify.containsText('(//tr[1]/td[5]/span)[1]', 'Envia Mitteldeutsche Energie AG')
            .verify.containsText('//tr[1]/td[6]/span[1]', 'mario.mueller@enviam.de')
            .verify.containsText('//tr[1]/td[7]/span[1]', 'Germany')
            .verify.containsText('//tr[1]/td[8]/span[1]', 'Confirmed')
            .verify.containsText('//tr[1]/td[9]/span[1]', '2012-04-24 14:51:27')

            .moveToElement('(//tr/th[13])[1]', 1340, 640)
            .verify.containsText('(//tr[1]/td[13]/span)[1]', 'No')
    },
});
