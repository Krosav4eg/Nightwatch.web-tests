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

    'select by presentation type down': function (browser) {
        browser
            .clickBySelectorXpath('//tr/th[4]')
            .clickBySelectorXpath('//tr/th[4]')

            .useXpath()
            .waitForElementVisible('//tr[1]/td[4]/span[contains(text(),"SnapShot")]', 5000)
            .verify.elementPresent('//tr[1]/td[4]/span[contains(text(),"SnapShot")]')
            .verify.elementPresent('//tr[2]/td[4]/span[contains(text(),"SnapShot")]')
            .verify.elementPresent('//tr[3]/td[4]/span[contains(text(),"Keynote")]')
            .verify.elementPresent('//tr[4]/td[4]/span[contains(text(),"Keynote")]')
            .verify.elementPresent('//tr[5]/td[4]/span[contains(text(),"Keynote")]')
            .verify.elementPresent('//tr[6]/td[4]/span[contains(text(),"Gold spotlight")]')
            .verify.elementPresent('//tr[7]/td[4]/span[contains(text(),"Gold spotlight")]')
            .verify.elementPresent('//tr[8]/td[4]/span[contains(text(),"Gold spotlight")]')
            .verify.elementPresent('//tr[9]/td[4]/span[contains(text(),"Case - parallel")]')
            .verify.elementPresent('//tr[10]/td[4]/span[contains(text(),"Case - parallel")]')
            .verify.elementPresent('//tr[11]/td[4]/span[contains(text(),"Case - parallel")]')
            .verify.elementPresent('//tr[12]/td[4]/span[contains(text(),"Case - whole audience")]')
            .verify.elementPresent('//tr[13]/td[4]/span[contains(text(),"Panel discussion")]')
            .verify.elementPresent('//tr[14]/td[4]/span[contains(text(),"Panel discussion")]')
            .verify.elementPresent('//tr[15]/td[4]/span[contains(text(),"Panel discussion")]')
            .verify.elementPresent('//tr[16]/td[4]/span[contains(text(),"Panel discussion")]')
            .verify.elementPresent('//tr[17]/td[4]/span[contains(text(),"Leadership presentation")]')
            .verify.elementPresent('//tr[18]/td[4]/span[contains(text(),"Leadership presentation")]')
            .verify.elementPresent('//tr[19]/td[4]/span[contains(text(),"Keynote")]')
            .verify.elementPresent('//tr[20]/td[4]/span[contains(text(),"Group discussion initiation")]')
    },
});