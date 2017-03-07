var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
    },
    
    'select by presentation headings down': function (browser) {
        browser
            .clickBySelectorXpath('//tr/th[5]')
            .clickBySelectorXpath('//tr/th[5]')

            .useXpath()
            .verify.elementNotPresent('//tr[1]/td[5]/span/div[contains(text(),"Some heading")]')
            .verify.elementNotPresent('//tr[2]/td[5]/span/div[contains(text(),"New Heading")]');
    },

    'select by presentation headings up': function (browser) {
        browser
            .clickBySelectorXpath('//tr/th[5]')

            .useXpath()
            .verify.containsText('//tr[1]/td[5]/span','')
            .verify.containsText('//tr[2]/td[5]/span','')
            .verify.containsText('//tr[3]/td[5]/span','')
            .verify.containsText('//tr[4]/td[5]/span','')
            .verify.containsText('//tr[5]/td[5]/span','')
            .verify.containsText('//tr[6]/td[5]/span','');
    },
});