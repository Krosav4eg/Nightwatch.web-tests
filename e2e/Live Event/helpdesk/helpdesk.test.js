var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/events/2316/helpdesk')
    },

    'choose Uitto': function (browser) {
        browser
            .clickBySelectorXpath('//a[text()="Uitto"]');
    },

    'verify Uitto': function (browser) {
        browser
            .waitForElementVisible('(//span[@class="left-oriented"])[1]', 3000)
            .verify.containsText('(//span[@class="left-oriented"])[1]', 'Fonecta Oy')
            .verify.containsText('(//span[@class="left-oriented"])[1]', '2017-02-14 10:15 - 10:30')
            .verify.containsText('(//span[@class="left-oriented"])[1]', 'Arttu-Matti Matinlauri')

            .verify.containsText('(//span[@class="left-oriented"])[2]', 'Perigeum Oy')
            .verify.containsText('(//span[@class="left-oriented"])[2]', '2017-02-14 10:30 - 10:45')
            .verify.containsText('(//span[@class="left-oriented"])[2]', 'Teemu Ojalehto')

            .verify.containsText('(//span[@class="left-oriented"])[3]', 'Solita Oy')
            .verify.containsText('(//span[@class="left-oriented"])[3]', '2017-02-14 13:45 - 14:00')
            .verify.containsText('(//span[@class="left-oriented"])[3]', 'Jyrki Nurminen');
    },

    'click by Reschedule for Solita Oy': function (browser) {
        browser
            .clickBySelectorXpath('(//span[@class="left-oriented"])[3]')
            .clickBySelectorXpath('(//button[text()="Reschedule"])[3]');
    },

    'select time for rescheduling': function (browser) {
        browser
            .clickBySelectorXpath('//option[@value="2017-02-14 10:30:00"]')
            .waitForElementVisible('//span[@class="form_text"]/b', 3000)

            .verify.containsText('//span[@class="form_text"]/b', '2017-02-14 10:30:00');
    },

    'click by Reschedule': function (browser) {
        browser
            .clickBySelectorXpath('//*[text()="Select time for rescheduling"]/../../../..//button[text()="Reschedule"]')

            .waitForElementVisible('//div[@class="toast-content"]', 5000)
            .verify.containsText('//div[@class="toast-title"]', 'Success!')
            .verify.containsText('//div[@class="toast-message"]', 'Meeting is rescheduled.');
    },

    'verify after rescheduled': function (browser) {
        browser
            .waitForElementVisible('(//span[@class="left-oriented"])[1]', 3000)

            .verify.containsText('(//span[@class="left-oriented"])[1]', 'Fonecta Oy')
            .verify.containsText('(//span[@class="left-oriented"])[1]', '2017-02-14 10:15 - 10:30')
            .verify.containsText('(//span[@class="left-oriented"])[1]', 'Arttu-Matti Matinlauri')

            .verify.containsText('(//span[@class="left-oriented"])[2]', 'Perigeum Oy')
            .verify.containsText('(//span[@class="left-oriented"])[2]', '2017-02-14 10:30 - 10:45')
            .verify.containsText('(//span[@class="left-oriented"])[2]', 'Teemu Ojalehto')

            .verify.containsText('(//span[@class="left-oriented"])[3]', 'Solita Oy')
            .verify.containsText('(//span[@class="left-oriented"])[3]', '2017-02-14 10:30 - 10:45')
            .verify.containsText('(//span[@class="left-oriented"])[3]', 'Jyrki Nurminen');
    },
});