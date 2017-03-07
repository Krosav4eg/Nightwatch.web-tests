var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
    },

    'select by speaker email down': function (browser) {
        browser
            .useXpath()
            .getLocationInView("//tr/th[11]", function (result) {
                this.verify.equal(typeof result, "object")
                this.verify.equal(result.status, 0)
                this.verify.equal(result.value.x, 1298)
                this.verify.equal(result.value.y, 421)
                this.clickBySelectorXpath('//tr/th[11]')
                    .clickBySelectorXpath('//tr/th[11]')
                    .useXpath()
                    .verify.elementPresent('//tr/td[11]/span/ul/li[1][contains(text(),"ingo.alpheus@rwe.com")]')
                    .verify.elementPresent('//tr[2]/td[11]/span/ul/li[1][contains(text(),"holger.kink@rwe.com")]')
                    .verify.elementPresent('//tr[3]/td[11]/span/ul/li[1][contains(text(),"boris.funke@citiworks.de")]')
                    .verify.elementPresent('//tr[4]/td[11]/span/ul/li[1][contains(text(),"boris.funke@citiworks.de")]')
                    .verify.elementPresent('//tr[5]/td[11]/span/ul/li[1][contains(text(),"boris.funke@citiworks.de")]')
            });
    },

    'select by speaker email up': function (browser) {
        browser
            .useXpath()
            .clickBySelectorXpath('//tr/th[11]')

            .verify.elementPresent('//tr[1]/td[11]/span/ul/li[1][contains(text(),"boris.funke@citiworks.de")]')
            .verify.elementPresent('//tr[2]/td[11]/span/ul/li[1][contains(text(),"boris.funke@citiworks.de")]')
            .verify.elementPresent('//tr[3]/td[11]/span/ul/li[1][contains(text(),"boris.funke@citiworks.de")]')
            .verify.elementPresent('//tr[4]/td[11]/span/ul/li[1][contains(text(),"boris.funke@citiworks.de")]')
            .verify.elementPresent('//tr[5]/td[11]/span/ul/li[1][contains(text(),"boris.funke@citiworks.de")]');
    },
});