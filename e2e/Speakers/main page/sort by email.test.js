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

    'sort by email up': function (browser) {
        browser
            .clickBySelectorXpath('//tr[1]/th[6]')
            .useXpath()
            .verify.containsText("//tr[1]/td[6]/span", "alexander.fenzl@bayernwerk.de")
            .verify.containsText("//tr[2]/td[6]/span", "andreadis@ferngas.de")
            .verify.containsText("//tr[3]/td[6]/span", "cathal.kennedy@telenor.no")
            .verify.containsText("//tr[4]/td[6]/span", "go@go.go");
    },

    'sort by email down': function (browser) {
        browser
            .clickBySelectorXpath('//tr[1]/th[6]')
            .useXpath()
            .verify.containsText("//tr[1]/td[6]/span", "Sergey_Potapof@mail.ru")
            .verify.containsText("//tr[2]/td[6]/span", "sandra.vekve@mfa.no")
            .verify.containsText("//tr[3]/td[6]/span", "p.luebcke@mainova.de");
    },
});