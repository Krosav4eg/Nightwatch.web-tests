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
    
    'select by presentation headings down': function (browser) {
        browser
            .clickBySelectorXpath('//tr/th[5]')
            .clickBySelectorXpath('//tr/th[5]')

            .useXpath()
            .waitForElementVisible('//tr[1]/td[5]/span/div[contains(text(),"Some heading")]',5000)
            .verify.elementPresent('//tr[1]/td[5]/span/div[contains(text(),"Some heading")]')
            .verify.elementPresent('//tr[2]/td[5]/span/div[contains(text(),"New Heading")]');
    },

    'select by presentation headings up': function (browser) {
        browser
            .clickBySelectorXpath('//tr/th[5]')

            .useXpath()
            .waitForElementVisible('//tr[1]/td[5]/span',5000)
            .verify.elementPresent('//tr[1]/td[5]/span')
            .verify.elementPresent('//tr[2]/td[5]/span')
            .verify.elementPresent('//tr[3]/td[5]/span')
            .verify.elementPresent('//tr[4]/td[5]/span')
            .verify.elementPresent('//tr[5]/td[5]/span')
            .verify.elementPresent('//tr[6]/td[5]/span')
            .verify.elementPresent('//tr[7]/td[5]/span')
            .verify.elementPresent('//tr[8]/td[5]/span')
            .verify.elementPresent('//tr[9]/td[5]/span')
            .verify.elementPresent('//tr[10]/td[5]/span')
            .verify.elementPresent('//tr[11]/td[5]/span')
            .verify.elementPresent('//tr[12]/td[5]/span')
            .verify.elementPresent('//tr[13]/td[5]/span')
            .verify.elementPresent('//tr[14]/td[5]/span')
            .verify.elementPresent('//tr[15]/td[5]/span')
            .verify.elementPresent('//tr[16]/td[5]/span')
            .verify.elementPresent('//tr[17]/td[5]/span')
            .verify.elementPresent('//tr[18]/td[5]/span')
            .verify.elementPresent('//tr[19]/td[5]/span')
            .verify.elementPresent('//tr[20]/td[5]/span')
    },
});