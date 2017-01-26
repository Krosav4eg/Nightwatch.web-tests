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
});