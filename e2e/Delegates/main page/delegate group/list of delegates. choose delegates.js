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

    'choose all delegates from the list': function (browser) {
        browser
            .clickBySelectorXpath('(//tr/th)[1]')
            .verify.attributeEquals('(//tr/td/input[@type="checkbox"])[1]', 'checked', 'true')
            .verify.cssProperty('(//tr[@class="hover participation-status-other select"])[1]', 'background-color', 'rgba(5, 158, 255, 1)')

            .verify.attributeEquals('(//tr/td/input[@type="checkbox"])[2]', 'checked', 'true')
            .verify.cssProperty('(//tr[@class="hover participation-status-other select"])[2]', 'background-color', 'rgba(5, 158, 255, 1)')

            .verify.attributeEquals('(//tr/td/input[@type="checkbox"])[3]', 'checked', 'true')
            .verify.cssProperty('(//tr[@class="hover participation-status-other select"])[3]', 'background-color', 'rgba(5, 158, 255, 1)')

            .verify.attributeEquals('(//tr/td/input[@type="checkbox"])[4]', 'checked', 'true')
            .verify.cssProperty('(//tr[@class="hover participation-status-other select"])[4]', 'background-color', 'rgba(5, 158, 255, 1)')

            .verify.attributeEquals('(//tr/td/input[@type="checkbox"])[5]', 'checked', 'true')
            .verify.cssProperty('(//tr[@class="hover participation-status-other select"])[5]', 'background-color', 'rgba(5, 158, 255, 1)')

            .verify.attributeEquals('(//tr/td/input[@type="checkbox"])[6]', 'checked', 'true')
            .verify.cssProperty('(//tr[@class="hover participation-status-other select"])[6]', 'background-color', 'rgba(5, 158, 255, 1)')

            .verify.attributeEquals('(//tr/td/input[@type="checkbox"])[7]', 'checked', 'true')
            .verify.cssProperty('(//tr[@class="hover participation-status-other select"])[7]', 'background-color', 'rgba(5, 158, 255, 1)')

            .verify.attributeEquals('(//tr/td/input[@type="checkbox"])[8]', 'checked', 'true')
            .verify.cssProperty('(//tr[@class="hover participation-status-other select"])[8]', 'background-color', 'rgba(5, 158, 255, 1)')

            .verify.attributeEquals('(//tr/td/input[@type="checkbox"])[9]', 'checked', 'true')
            .verify.cssProperty('(//tr[@class="alt hover participation-status-other select"])[1]', 'background-color', 'rgba(5, 158, 255, 1)')

            .verify.attributeEquals('(//tr/td/input[@type="checkbox"])[10]', 'checked', 'true')
            .verify.cssProperty('(//tr[@class="alt hover participation-status-other select"])[2]', 'background-color', 'rgba(5, 158, 255, 1)')

            .verify.attributeEquals('(//tr/td/input[@type="checkbox"])[11]', 'checked', 'true')
            .verify.cssProperty('(//tr[@class="alt hover participation-status-other select"])[3]', 'background-color', 'rgba(5, 158, 255, 1)')

            .verify.attributeEquals('(//tr/td/input[@type="checkbox"])[12]', 'checked', 'true')
            .verify.cssProperty('(//tr[@class="alt hover participation-status-other select"])[4]', 'background-color', 'rgba(5, 158, 255, 1)')

            .verify.attributeEquals('(//tr/td/input[@type="checkbox"])[13]', 'checked', 'true')
            .verify.cssProperty('(//tr[@class="alt hover participation-status-other select"])[5]', 'background-color', 'rgba(5, 158, 255, 1)')

            .verify.attributeEquals('(//tr/td/input[@type="checkbox"])[14]', 'checked', 'true')
            .verify.cssProperty('(//tr[@class="alt hover participation-status-other select"])[6]', 'background-color', 'rgba(5, 158, 255, 1)')

            .verify.attributeEquals('(//tr/td/input[@type="checkbox"])[15]', 'checked', 'true')
            .verify.cssProperty('(//tr[@class="alt hover participation-status-other select"])[7]', 'background-color', 'rgba(5, 158, 255, 1)')

            .verify.attributeEquals('(//tr/td/input[@type="checkbox"])[16]', 'checked', 'true')
            .verify.cssProperty('(//tr[@class="alt hover participation-status-other select"])[8]', 'background-color', 'rgba(5, 158, 255, 1)')

            .verify.attributeEquals('(//tr/td/input[@type="checkbox"])[17]', 'checked', 'true')

            .verify.attributeEquals('(//tr/td/input[@type="checkbox"])[18]', 'checked', 'true')

            .verify.attributeEquals('(//tr/td/input[@type="checkbox"])[19]', 'checked', 'true')

            .verify.attributeEquals('(//tr/td/input[@type="checkbox"])[20]', 'checked', 'true');
    },

    'choose all delegates from the list then cancel mark': function (browser) {
        browser
            .clickBySelectorXpath('(//tr/th)[1]')

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