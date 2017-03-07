var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/partners/25')
    },

    'verify Communication': function (browser) {
        browser
            .useXpath()
            .verify.containsText('(//*[@class="panel-title card-title"])[10]', "Communication")

            .clickBySelectorXpath('(//*[@class="panel-title card-title"])[10]')
            .expect.element('(//button[@class="btn btn-primary btn-lg btn-block"])[1]').to.not.be.visible;

        browser.clickBySelectorXpath('(//*[@class="panel-title card-title"])[10]')
            .expect.element('(//button[@class="btn btn-primary btn-lg btn-block"])[1]').to.be.visible;
    },
});