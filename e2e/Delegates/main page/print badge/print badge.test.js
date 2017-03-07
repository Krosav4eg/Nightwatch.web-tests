var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/212/delegates')
    },

    'click print badge button': function (browser) {
        browser
            .clickBySelectorXpath('(//tr/td/input[@type="checkbox"])[1]')
            .clickBySelectorXpath('//span[contains(text(),"Print badge")]')
            .pause(1000)
            .closeWindow()
            .window_handles(function (result) {
                var handle = result.value[0];
                browser.switchWindow(handle)
                    .verify.urlContains("data:application/pdf;base64,");
            })
    },
});
