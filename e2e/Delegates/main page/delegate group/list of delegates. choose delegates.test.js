var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to delegates': function (browser) {
        browser
            .relUrl('/event/1000/delegates')
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
            .clickBySelectorXpath('(//*[@class="btn btn-default btn-primary clear-selection-btn-margin"])[1]')

            .elements('css selector', 'input[type="checkbox"]', function (result) {
                var count = (result.value.length) / 2;
                console.log("count=" + count);
                for (var countVerify = 1; countVerify < count; countVerify++) {
                    var selector = '(//input[@type="checkbox"])[' + countVerify + ']';
                    this.expect.element(selector).to.not.be.selected;
                }
            });
    },

});