var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to delegates': function (browser) {
        browser
            .relUrl('/event/200/delegates')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'choose one delegate from the list': function (browser) {
        browser
            .clickBySelectorXpath('(//tr/td/input[@type="checkbox"])[1]')
            .verify.attributeEquals('(//tr/td/input[@type="checkbox"])[1]', 'checked', 'true')
            .verify.cssProperty('(//tr[@class="hover participation-status-other select"])[1]', 'background-color', 'rgba(5, 158, 255, 1)');
    },

    'choose all': function (browser) {
        browser
            .clickBySelectorXpath('(//input[@type="checkbox"])[1]')

            .elements('css selector', 'input[type="checkbox"]', function (result) {
                var count = (result.value.length) / 2;
                console.log("count=" + count);
                for (var countVerify = 1; countVerify < count; countVerify++) {
                    var selector = '(//input[@type="checkbox"])[' + countVerify + ']';
                    this.verify.attributeEquals(selector, 'checked', 'true');
                }
            });
    },

    'unselected  all': function (browser) {
        browser
            .clickBySelectorXpath('//*[@class="btn btn-default btn-primary clear-selection-btn-margin"]')

            .elements('css selector', 'input[type="checkbox"]', function (result) {
                var count = (result.value.length) / 2;
                console.log("count=" + count);
                for (var countVerify = 1; countVerify < count; countVerify++) {
                    var selector = '(//input[@type="checkbox"])[' + countVerify + ']';
                    this.expect.element(selector).to.not.be.selected;
                }
            });
    },

    'choose all delegates from the list then cancel mark': function (browser) {
        browser
            .clickBySelectorXpath('(//tr/td/input[@type="checkbox"])[2]')
            .verify.attributeEquals('(//tr/td/input[@type="checkbox"])[2]', 'checked', 'true')
            .verify.cssProperty('(//tr[@class="alt hover participation-status-cancelled select"])[1]', 'background-color', 'rgba(231, 60, 60, 0.65098)')

            .clickBySelectorXpath('(//tr/td/input[@type="checkbox"])[5]')
            .verify.attributeEquals('(//tr/td/input[@type="checkbox"])[5]', 'checked', 'true')
            .verify.cssProperty('(//tr[@class="hover participation-status-cancelled select"])[1]', 'background-color', 'rgba(231, 60, 60, 0.65098)')

            .clickBySelectorXpath('(//tr/td/input[@type="checkbox"])[10]')
            .verify.attributeEquals('(//tr/td/input[@type="checkbox"])[10]', 'checked', 'true')
            .verify.cssProperty('(//tr[@class="alt hover participation-status-cancelled select"])[2]', 'background-color', 'rgba(231, 60, 60, 0.65098)')

            .clickBySelectorXpath('(//tr/td/input[@type="checkbox"])[11]')
            .verify.attributeEquals('(//tr/td/input[@type="checkbox"])[11]', 'checked', 'true')
            .verify.cssProperty('(//tr[@class="hover participation-status-cancelled select"])[2]', 'background-color', 'rgba(231, 60, 60, 0.65098)');
    },

    'check that number of result is correct': function (browser) {
        browser
            .verify.elementPresent('//h4[contains(text(),"Delegates 4/32")]');
    },

});