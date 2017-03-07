var _ = require('lodash');
var presteps = require('../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/2472/agenda')
    },
    'add attach': function (browser) {
        browser
            .clickBySelectorXpath('//button[text()="Attach template"]')
            .clickBySelectorXpath('//button[@class="btn btn-primary pull-right"]')
            .clickBySelectorXpath('(//input[@class="radio-item-input"])[1]')
            .clickBySelectorXpath('//button[@class="btn btn-success pull-right"]')

            .waitForElementVisible('//div[@class="simple-notification toast-notification success"]', 10000)
            .verify.containsText('//div[@class="sn-title"]', 'Success!')
            .verify.containsText('//div[@class="sn-content"]', 'The selected template has been attached')
            .clickBySelectorXpath('//div[@class="simple-notification toast-notification success"]')

            .verify.elementPresent('//div[@class="row agenda-container"]')

            .clickBySelectorXpath('//i[@class="fa fa-trash-o delete-container"]')
            .clickBySelectorXpath('//*[contains(text(), "Confirmation")]/../../../..//*[@class="btn btn-success"]')
            .verify.elementNotPresent('//div[@class="row agenda-container"]');
    },
});
