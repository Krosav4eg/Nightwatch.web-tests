var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to awards': function (browser) {
        browser
            .relUrl('/event/212/awards')
    },

    'select company radio button ': function (browser) {
        browser
            .selectCompanyRadioButton();
    },

    'to return everything to its original position ': function (browser) {
        browser
            .clickBySelectorXpath('//radio-item[@id=1]')
            .clickBySelectorXpath('//button[@type="submit"]');
    },
});
