var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to the event-participant-roles': function (browser) {
        browser
            .relUrl('/event/212/event-participant-roles')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'event Role Up Down ': function (browser) {
        browser
            .clickBySelectorXpath('//tr/th[2][contains(text(), "Event role")]')
    },
    
    'participation status Up Down ': function (browser) {
        browser
            .clickBySelectorXpath('//tr/th[3][contains(text(), "Participation status")]')
    },
    
    'last Name Up Down ': function (browser) {
        browser
            .clickBySelectorXpath('//tr/th[4][contains(text(), "Last Name")]')
    },

    'first Name Up Down ': function (browser) {
        browser
            .clickBySelectorXpath('//tr/th[5][contains(text(), "First Name")]')
    },
    
    'function Title  Up Down ': function (browser) {
        browser
            .clickBySelectorXpath('//tr/th[6][contains(text(), "Function Title")]')
    },
    
    'company name Up Down ': function (browser) {
        browser
            .clickBySelectorXpath('//tr/th[7][contains(text(), "Company name")]')
    },
    
    'comment name Up Down ': function (browser) {
        browser
            .clickBySelectorXpath('//tr/th[8][contains(text(), "Comment")]')
    },
    
    'created name Up Down ': function (browser) {
        browser
            .clickBySelectorXpath('//tr/th[9][contains(text(), "Created")]')
    },
    
    'created By Up Down ': function (browser) {
        browser
            .useXpath()
            .getLocationInView('//tr/th[10][contains(text(), "Created by")]', function (result) {
                this.verify.equal(typeof result, "object")
                this.verify.equal(result.status, 0)
                this.verify.equal(result.value.x, 1350)
                this.clickBySelectorXpath('//tr/th[10][contains(text(), "Created by")]')
            });
    },

    'action Up Down ': function (browser) {
        browser
            .useXpath()
            .moveToElement('//tr/th[11]', 1298, 597)
            .verify.containsText("//tr/th[11]", "Action");
    },
});

