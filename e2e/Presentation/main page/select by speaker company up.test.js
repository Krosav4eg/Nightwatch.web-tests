var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');
module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },
    
    'select by speaker company up': function (browser) {
        browser
            .clickBySelectorXpath('//tr/th[7]')
            
            .useXpath()
            .verify.containsText('//tr[1]/td[7]/span','Citiworks AG')
            .verify.containsText('//tr[2]/td[7]/span','Citiworks AG')
            .verify.containsText('//tr[3]/td[7]/span','Citiworks AG')
            .verify.containsText('//tr[4]/td[7]/span','Citiworks AG')
            .verify.containsText('//tr[5]/td[7]/span','Citiworks AG')
            .verify.containsText('//tr[6]/td[7]/span','Citiworks AG')
            .verify.containsText('//tr[7]/td[7]/span','Citiworks AG')
            .verify.containsText('//tr[8]/td[7]/span','Citiworks AG')
            .verify.containsText('//tr[9]/td[7]/span','Citiworks AG');
    },

    'select by speaker company down': function (browser) {
        browser
            .clickBySelectorXpath('//tr/th[7]')
            .useXpath()
            .verify.containsText('//tr[1]/td[7]/span','RWE Group Business Services GmbH')
            .verify.containsText('//tr[2]/td[7]/span','RWE GBS GmbH')
            .verify.containsText('//tr[3]/td[7]/span','Citiworks AG')
            .verify.containsText('//tr[4]/td[7]/span','Citiworks AG')
            .verify.containsText('//tr[5]/td[7]/span','Citiworks AG')
            .verify.containsText('//tr[6]/td[7]/span','Citiworks AG')
            .verify.containsText('//tr[7]/td[7]/span','Citiworks AG')
            .verify.containsText('//tr[8]/td[7]/span','Citiworks AG')
            .verify.containsText('//tr[9]/td[7]/span','Citiworks AG');
    },
});