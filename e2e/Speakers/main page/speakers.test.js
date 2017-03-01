var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/speakers')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'check event data': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h4[text()="Event (#212)"]', 3000)
    },

    'choose all people in the list': function (browser) {
        browser
            .clickBySelectorXpath('//thead/tr[1]/th[1]')
            .verify.attributeEquals('//table/tbody/tr[1]/td[1]/input', 'checked', 'true')
            .verify.attributeEquals('//table/tbody/tr[2]/td[1]/input', 'checked', 'true')
            .verify.attributeEquals('//table/tbody/tr[3]/td[1]/input', 'checked', 'true')
    },

    'choose one person from the list': function (browser) {
        browser
            .clickBySelectorXpath('//thead/tr[1]/th[1]')
            .clickBySelectorXpath('//table/tbody/tr[1]/td[1]/input')
            .verify.attributeEquals('//table/tbody/tr[1]/td[1]/input', 'checked', 'true');
    },
});