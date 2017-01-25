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
    
    'select by presenter down': function (browser) {
        browser
            .clickBySelectorXpath('//tr/th[2]')
            .clickBySelectorXpath('//tr/th[2]')

            .useXpath()
            .waitForElementVisible('//tr[1]/td[2]/span[contains(text(),"Delegate")]',5000)
            .verify.elementPresent('//tr[1]/td[2]/span[contains(text(),"Delegate")]')
            .verify.elementPresent('//tr[2]/td[2]/span[contains(text(),"Delegate")]')
            .verify.elementPresent('//tr[3]/td[2]/span[contains(text(),"Delegate")]')
            .verify.elementPresent('//tr[4]/td[2]/span[contains(text(),"Delegate")]')
            .verify.elementPresent('//tr[5]/td[2]/span[contains(text(),"Delegate")]')
            .verify.elementPresent('//tr[6]/td[2]/span[contains(text(),"Delegate")]')
            .verify.elementPresent('//tr[7]/td[2]/span[contains(text(),"Delegate")]')
            .verify.elementPresent('//tr[8]/td[2]/span[contains(text(),"Delegate")]')
            .verify.elementPresent('//tr[9]/td[2]/span[contains(text(),"Delegate")]')
            .verify.elementPresent('//tr[10]/td[2]/span[contains(text(),"Delegate")]')
            .verify.elementPresent('//tr[11]/td[2]/span[contains(text(),"Delegate")]')
            .verify.elementPresent('//tr[12]/td[2]/span[contains(text(),"Delegate")]')
            .verify.elementPresent('//tr[13]/td[2]/span[contains(text(),"Delegate")]')
            .verify.elementPresent('//tr[14]/td[2]/span[contains(text(),"Delegate")]')
            .verify.elementPresent('//tr[15]/td[2]/span[contains(text(),"Delegate")]')
            .verify.elementPresent('//tr[16]/td[2]/span[contains(text(),"Delegate")]')
            .verify.elementPresent('//tr[17]/td[2]/span[contains(text(),"Delegate")]')
            .verify.elementPresent('//tr[18]/td[2]/span[contains(text(),"Delegate")]')
            .verify.elementPresent('//tr[19]/td[2]/span[contains(text(),"Delegate")]');
            // .verify.elementPresent('//tr[20]/td[2]/span[text()="         Delegate       "]')
    },
});