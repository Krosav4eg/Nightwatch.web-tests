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

    'selected one table': function (browser) {
        browser
            .useXpath()
            .expect.element('(//*[@type="checkbox"])[1]').to.not.be.selected;
        browser
            .expect.element('(//*[@type="checkbox"])[2]').to.not.be.selected;
        browser
            .clickBySelectorXpath('(//*[@type="checkbox"])[1]')

            .verify.attributeEquals('(//*[@type="checkbox"])[1]', 'checked', 'true');
        browser
            .expect.element('(//*[@type="checkbox"])[2]').to.not.be.selected;
    },

    'selected two table': function (browser) {

        browser
            .clickBySelectorXpath('(//*[@type="checkbox"])[2]')

            .verify.attributeEquals('(//*[@type="checkbox"])[1]', 'checked', 'true')
            .verify.attributeEquals('(//*[@type="checkbox"])[2]', 'checked', 'true')
    },

    're-selected': function (browser) {

        browser
            .clickBySelectorXpath('(//*[@type="checkbox"])[1]')
            .clickBySelectorXpath('(//*[@type="checkbox"])[2]')

            .expect.element('(//*[@type="checkbox"])[1]').to.not.be.selected;
        browser
            .expect.element('(//*[@type="checkbox"])[2]').to.not.be.selected;
    },
});