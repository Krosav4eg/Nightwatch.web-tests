var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to awards': function (browser) {
        browser
            .relUrl('/event/1633/awards')
    },

    'choose "Project" candidate type': function (browser) {
        browser
            .useXpath()
            .clickBySelectorXpath('//radio-item[@id=3]');
    },

    'choose "Company" candidate type': function (browser) {
        browser
            .clickBySelectorXpath('//radio-item[@id=2]');
    },

    'choose "Contact" candidate type': function (browser) {
        browser
            .clickBySelectorXpath('//radio-item[@id=1]');
    },

    'click Save button ': function (browser) {
        browser
            .selectProjectRadioButton();
    },

    'select company radio button again': function (browser) {
        browser
            .selectCompanyRadioButton();
    },

    'select project radio button again': function (browser) {
        browser
            .selectProjectRadioButton();
    },
});
