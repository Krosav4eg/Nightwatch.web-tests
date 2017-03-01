var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to table-settings': function (browser) {
        browser
            .relUrl('/events/2312/table-settings/1')
            .waitForElementVisible('#thisIsMainLoader', 80000)
            .waitForElementNotVisible('#thisIsMainLoader', 80000);
    },

    'verify statistic Delegates in tables': function (browser) {
        browser
            .elements('css selector','[class="isDelegate"]', function (result) {
                var count = result.value.length;
                this
                    .useXpath()
                    .verify.containsText('//*[text()="Delegates in tables:"]/..', count);
            });
    },

    'verify statistic Delegates not in tables': function (browser) {
        browser
            .elements('xpath','//*[contains(text(), "Participants not in table yet")]/../../..//tr[contains(@class, "isDelegate")]', function (result) {
                var count = result.value.length;
                this
                    .useXpath()
                    .verify.containsText('//*[text()="Delegates not in tables:"]/..', count);
            });
    },

    'verify statistic Representatives in tables': function (browser) {
        browser
            .elements('css selector','[class="info isPartner"]', function (result) {
                var count = result.value.length;
                this
                    .useXpath()
                    .verify.containsText('//*[text()="Representatives in tables:"]/..', count);
            });
    },

    'verify statistic Tables missing representative': function (browser) {
        browser
            .elements('xpath','//*[contains(text(), "Participants not in table yet")]/../../..//tr[contains(@class, "isPartner")]', function (result) {
                var count = result.value.length;
                this
                    .useXpath()
                    .verify.containsText('//*[text()="Tables missing representative:"]/..', count);
            });
    },

    'verify statistic Hosted tables': function (browser) {
        browser
            .elements('css selector','[class="table table-bordered"]', function (result) {
                var count = result.value.length - 1;
                this
                    .useXpath()
                    .verify.containsText('//*[text()="Hosted tables:"]/..', count);
            });
    },
});