var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/representatives')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'choose one partner': function (browser) {
        browser
            .clickBySelectorXpath('(//input[@type="checkbox"])[2]')


            .verify.attributeEquals('(//input[@type="checkbox"])[2]', 'checked', 'true')
            .expect.element('(//input[@type="checkbox"])[1]').to.not.be.selected;
    },

    'choose several partner ': function (browser) {
        browser
            .clickBySelectorXpath('(//input[@type="checkbox"])[3]')
            .clickBySelectorXpath('(//input[@type="checkbox"])[4]')

            .verify.attributeEquals('(//input[@type="checkbox"])[2]', 'checked', 'true')
            .verify.attributeEquals('(//input[@type="checkbox"])[3]', 'checked', 'true')
            .verify.attributeEquals('(//input[@type="checkbox"])[4]', 'checked', 'true')
            .expect.element('(//input[@type="checkbox"])[5]').to.not.be.selected;
    },

    'choose all': function (browser) {
        browser
            .clickBySelectorXpath('(//input[@type="checkbox"])[1]')

            .elements('css selector','input[type="checkbox"]', function (result) {
                 var count = result.value.length;
                 for(var countVerify = 1; countVerify < count; countVerify++ ){
                     var selector = '(//input[@type="checkbox"])[' + countVerify + ']';
                     this.verify.attributeEquals(selector, 'checked', 'true');
                 }
            });
    },

    'cancel all': function (browser) {
        browser
            .clickBySelectorXpath('//*[@class="btn btn-default btn-primary clear-selection-btn-margin"]')

            .elements('css selector','input[type="checkbox"]', function (result) {
                var count = result.value.length;
                for(var countVerify = 1; countVerify < count; countVerify++ ){
                    var selector = '(//input[@type="checkbox"])[' + countVerify + ']';
                    this.expect.element(selector).to.not.be.selected;
                }
            });
    },
});
