var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to awards': function (browser) {
        browser
            .relUrl('/event/1610/awards')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'select project radio button ': function (browser) {
        browser
            .selectProjectRadioButton();
    },

    'add a new candidate verify availability of fields': function (browser) {
        browser
            .clickBySelectorXpath('//button[text()="Add a new candidate"]')
            .useXpath()
            .verify.elementPresent('//h3[text()="Candidate 1"]')

            .verify.elementPresent('//label[text()="Project local name "]')
            .verify.elementPresent('//*[text()="Candidate 1"]/../../../..//input[@formcontrolname="localName"]')

            .verify.elementPresent('//label[text()="Project English name "]')
            .verify.elementPresent('//*[text()="Candidate 1"]/../../../..//input[@formcontrolname="englishName"]')

            .verify.elementPresent('//label[text()="Country "]')
            .verify.elementPresent('//*[text()="Candidate 1"]/../../../..//input[@formcontrolname="country"]')

            .verify.elementPresent('//label[text()="Introduction"]')
            .verify.elementPresent('//*[text()="Candidate 1"]/../../../../../..//textarea[@formcontrolname="introduction"]')

            .verify.elementPresent('//input[@id="myUnit"]')
            .verify.containsText("//p", "Image format: .jpg, image size min. 800x400px")

            .verify.elementPresent('//img[@id="logo"]')
            .verify.attributeContains('//img[@id="logo"]', 'src', 'https://s3-eu-west-1.amazonaws.com/managementevents-app/images/no-image.png')

            .verify.elementPresent('//*[text()="Candidate 1"]/../../../../../..//button[text()="Save"]')
            .verify.elementPresent('//*[text()="Candidate 1"]/../../../../../..//button[text()="Delete"]')
            .verify.elementPresent('//*[text()="Candidate 1"]/../../../../../..//button[text()="Winner"]');
    },

    'delete candidate': function (browser) {
        browser
            .deleteCandidateFromProject();
    },
});