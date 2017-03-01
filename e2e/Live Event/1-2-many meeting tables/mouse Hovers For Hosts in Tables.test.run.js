var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to table-settings': function (browser) {
        browser
            .url('https://ya.ru/')
            .useXpath()
            .pause(3000)
            .setValue('//*[@class="input__control input__input"]', 'привет')
            .pause(3000)
            .click('//*[@type="submit"]')

            .pause(3000)
            .moveToElement('(//*[@class="service__name"])[2]', 10, 10)
            .pause(3000)
            .moveToElement('(//*[@class="service__name"])[3]', 10, 10)
            .pause(3000)
            .moveToElement('(//*[@class="service__name"])[4]', 10, 10)
            .pause(3000);
    },
    //
    // 'redirection to table-settings': function (browser) {
    //     browser
    //         .relUrl('/events/2312/table-settings/1')
    //         .waitForElementVisible('#thisIsMainLoader', 80000)
    //         .waitForElementNotVisible('#thisIsMainLoader', 80000);
    // },
    //
    // 'mous move': function (browser) {
    //     browser
    //         .useXpath()
    //         .verify.elementNotPresent('//*[@class="tooltip-inner"]')
    //         .moveTo('(//*[@class="info isPartner"])[1]')
    //         .pause(6000)
    //
    //         .moveToElement('(//*[@class="info isPartner"])[1]', 1, 1, function() {
    //             browser
    //                 .moveToElement('(//*[@class="info isPartner"])[1]', 7, 7)
    //                 .pause(1000)
    //                 .moveToElement('(//*[@class="info isPartner"])[1]', 10, 10)
    //                 .pause(1000)
    //                 .waitForElementVisible('//*[@class="tooltip-inner"]', 5000, function () {
    //                     browser.verify.elementPresent('//*[@class="tooltip-inner"]');
    //         });
    //    })
    //        // .verify.elementPresent('//*[@class="tooltip-inner"]');
    // },
});