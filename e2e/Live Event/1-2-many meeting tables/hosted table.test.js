var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to table-settings': function (browser) {
        browser
            .relUrl('/events/2312/table-settings/1')
    },

    'verify Table number': function (browser) {
        browser
            .useXpath()
            .verify.containsText('(//*[@class="table table-bordered"]/thead/tr)[1]/th[1]', '#1')
            .verify.containsText('(//*[@class="table table-bordered"]/thead/tr)[2]/th[1]', '#2')
    },

    'verify amount of seats in the table': function (browser) {
        browser
            .elements('xpath', '(//*[@class="table table-bordered"])[1]/tbody/tr', function (result) {
                var count = result.value.length;
                this
                    .useXpath()
                    .verify.containsText('(//*[@class="table table-bordered"])[1]/thead/tr/th/div/div[2]', count);
            });
    },

    'verify Amount of people in table': function (browser) {
        browser
            .elements('xpath', '(//*[@class="table table-bordered"])[1]/tbody/tr[@class]', function (result) {
                var count = result.value.length;
                this
                    .useXpath()
                    .verify.containsText('(//*[@class="table table-bordered"])[1]/thead/tr/th/div/div[2]', count);
            });
    },

    'verify name': function (browser) {
        browser
            .useXpath()
            .verify.containsText('(//*[@class="info isPartner"])[1]', 'Pfeiffer Michael')
            .verify.containsText('(//*[@class="info isPartner"])[1]', 'Papirfly AS')

            .verify.containsText('(//*[@class="isDelegate"])[1]', 'Quistorff-Refn Tobias')
            .verify.containsText('(//*[@class="isDelegate"])[1]', 'DHL Express A/S')

    },
});