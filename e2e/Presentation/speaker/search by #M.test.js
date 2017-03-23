var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to presentations': function (browser) {
        browser
            .relUrl('/event/2008/presentations')
    },

    'go to the edit presentation': function (browser) {
        browser
            .clickBySelectorXpath('//a[@href="/presentations/edit/6053"]')
            .verify.elementPresent('//h1[text()="Edit Presentation (#6053)"]');
    },

    'search by #M ': function (browser) {
        browser
            .setValueByXpath('//me-event-presentation-speaker-list//tr[1]/td[1]/input[@type="text"]', ['188600', browser.Keys.ENTER])
            .verify.elementPresent('//tr[1]/td[1]/span/a[@href="/presentations/6053/master-contact/188600"]');
    },
});