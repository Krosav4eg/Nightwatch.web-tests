var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/217/event-participant-roles')
    },
    'search by full name of created ': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h1[text()="Event role"]', 3000)
            .setValueByXpath('//tr[1]/td[9]/input[@type="text"]', ['2016-10-06 17:16:46', browser.Keys.ENTER])
            .waitForElementVisible('//span[contains(text(), "2016-10-06 17:16:46")]', 3000)
            .verify.containsText("//tr[1]/td[9]/span", "2016-10-06 17:16:46");
    },
});