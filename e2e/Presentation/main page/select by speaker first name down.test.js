var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
    },
    
    'select by speaker last name up': function (browser) {
        browser
            .useXpath()
            .getLocationInView('//tr/th[9]', function (result) {
                this.verify.equal(typeof result, "object")
                this.verify.equal(result.status, 0)
                this.verify.equal(result.value.x, 1350)
                this.verify.equal(result.value.y, 421)
                this.clickBySelectorXpath('//tr/th[9]')

                    .useXpath()
                    .verify.containsText('//tr[1]/td[9]/span','Boris')
                    .verify.containsText('//tr[2]/td[9]/span','Boris')
                    .verify.containsText('//tr[3]/td[9]/span','Boris')
                    .verify.containsText('//tr[4]/td[9]/span','Boris')
                    .verify.containsText('//tr[5]/td[9]/span','Boris')
                    .verify.containsText('//tr[6]/td[9]/span','Boris');
            });
    },

    'select by speaker last name down': function (browser) {
        browser
            .useXpath()
            .clickBySelectorXpath('//tr/th[9]')
            .useXpath()
            .verify.containsText('//tr[1]/td[9]/span','Ingo')
            .verify.containsText('//tr[2]/td[9]/span','Holger')
            .verify.containsText('//tr[3]/td[9]/span','Boris')
            .verify.containsText('//tr[4]/td[9]/span','Boris')
            .verify.containsText('//tr[5]/td[9]/span','Boris')
            .verify.containsText('//tr[6]/td[9]/span','Boris');
    },
});