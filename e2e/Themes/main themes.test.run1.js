var _ = require('lodash');
var presteps = require('./../presteps/presteps.js');
var auth = require('./../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/2338/themes')
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'verify main themes': function (browser) {
        browser
            .verify.valueContains('(//*[text()="Theme #1"]/../../div/div/input)[1]', 'Experience design and end-to-end customer journey; omni-channel service experience and design')
            .verify.valueContains('(//*[text()="Theme #1"]/../../div/div/input)[1]', 'Experience design and end-to-end customer journey; omni-channel service experience and design')

            .verify.valueContains('(//*[text()="Theme #2"]/../../div/div/input)[1]', 'Design-driven culture; embedding experience design in culture')
            .verify.valueContains('(//*[text()="Theme #2"]/../../div/div/input)[1]', 'Design-driven culture; embedding experience design in culture')

    },

});