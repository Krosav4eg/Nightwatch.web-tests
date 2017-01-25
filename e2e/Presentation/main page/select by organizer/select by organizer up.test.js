var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'select by organizer down': function (browser) {
        browser
            .clickBySelectorXpath('//tr/th[4]')
           
            .useXpath()
            .waitForElementVisible('//tr[1]/td[3]/span/span[contains(text(),"Management Events")]', 5000)
            .verify.elementPresent('//tr[1]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[2]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[3]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[4]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[5]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[6]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[7]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[8]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[9]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[10]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[11]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[12]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[13]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[14]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[15]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[16]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[17]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[18]/td[3]/span/span[contains(text(),"Management Events")]')
            .verify.elementPresent('//tr[19]/td[3]/span/span[contains(text(),"Management Events")]');
    },
});