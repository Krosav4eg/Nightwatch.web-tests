var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to table-settings': function (browser) {
        browser
            .relUrl('/events/2312/table-settings/3')
            .waitForElementVisible('#thisIsMainLoader', 80000)
            .waitForElementNotVisible('#thisIsMainLoader', 80000);
    },

    'regenerator table': function (browser) {
        browser
            .useXpath()
            .clickBySelectorXpath('//button[text()="Regenerate tables"]')
            .clickBySelectorXpath('//*[text()="Lunch  1"]/../input')

            .setValueByXpath('(//*[text()="Lunch  1"]/../../../div/label/input)[2]', "9")
            .clickBySelectorXpath('//button[text()="(Re)Generate"]')
    },
});