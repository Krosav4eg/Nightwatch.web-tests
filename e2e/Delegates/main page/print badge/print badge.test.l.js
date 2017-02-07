var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/212/delegates')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'click print badge button': function (browser) {
        browser
            .clickBySelectorXpath('(//tr/td/input[@type="checkbox"])[1]')
            .verify.elementPresent('//h4[contains(text(),"Delegates 1/66")]')
            .clickBySelectorXpath('//span[contains(text(),"Print badge")]')
            .clickBySelectorXpath('//*[text()="Candidates"]/../..//a[contains(@href,"MasterCompany")]')
            .pause(1000)
            .closeWindow()
            .window_handles(function (result) {
                var handle = result.value[0];
                browser.switchWindow(handle)
                    
            })
    },

});
