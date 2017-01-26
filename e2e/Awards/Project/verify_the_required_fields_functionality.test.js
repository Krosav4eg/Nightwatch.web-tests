var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to awards': function (browser) {
        browser
            .relUrl('/event/1608/awards')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'select project radio button ': function (browser) {
        browser
            .selectProjectRadioButton();
    },

    'add candidate 1': function (browser) {
        browser
            .clickBySelectorXpath('//button[text()="Add a new candidate"]')

            .verify.elementPresent('//h3[contains(text(), "Candidate 1")]')

            .verify.elementPresent('//label[contains(text(), "Project local name ")]')
            .verify.elementPresent('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="localName"]')
            .clickBySelectorXpath('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="localName"]')

            .verify.elementPresent('//label[contains(text(), "Project English name ")]')
            .verify.elementPresent('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="englishName"]')
            .clickBySelectorXpath('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="englishName"]')

            .verify.containsText('//*[contains(text(), "Project local name")]/..', 'Project local name is required.')

            .verify.elementPresent('//label[contains(text(), "Country")]')
            .verify.elementPresent('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="country"]')
            .clickBySelectorXpath('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="country"]')
            .clickBySelectorXpath('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="englishName"]')

            .verify.containsText('//*[contains(text(), "Project English name")]/..', 'Project English name is required.')

            .verify.elementPresent('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="englishName"]')

            .verify.containsText('//*[contains(text(), "Country")]/..', 'Country is required')
            .refresh();

    },

    'click Save button': function (browser) {
        browser
            .clickBySelectorXpath('//*[text()="Candidate 1"]/../../../../../..//button[text()="Save"]')

            .verify.containsText('//*[contains(text(), "Project English name")]/..', 'Project English name is required.')
            .verify.containsText('//*[contains(text(), "Project English name")]/..', 'Project English name is required.')
            .verify.containsText('//*[contains(text(), "Country")]/..', 'Country is required')
    },

    'enter the local name': function (browser) {
        browser
            .setValueByXpath('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="localName"]', 'Тестовый проект_2')

            .clickBySelectorXpath('//*[text()="Candidate 1"]/../../../../../..//button[text()="Save"]')

            .verify.containsText('//*[contains(text(), "Project English name")]/..', 'Project English name is required.')
            .verify.containsText('//*[contains(text(), "Country")]/..', 'Country is required');
    },

    'enter the English name': function (browser) {
        browser
            .setValueByXpath('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="englishName"]', 'Test Project_2')

            .clickBySelectorXpath('//*[text()="Candidate 1"]/../../../../../..//button[text()="Save"]')

            .verify.containsText('//*[contains(text(), "Country")]/..', 'Country is required');
    },

    'enter the country': function (browser) {
        browser
            .addNewCandidateProject('Russia');
    },

    'added candidate is displayed': function (browser) {
        browser
            .candidateIsDispalyedInTheProject();
    },

    'delete candidate': function (browser) {
        browser
            .deleteCandidateFromProject()
            .deleteCandidateFromProject()

            .verify.elementNotPresent('//[contains(text(), "Candidate 2")]')
            .verify.elementNotPresent('//[contains(text(), "Candidate 1")]')

            .verify.elementNotPresent('//label[contains(text(), "Project local name ")]')
            .verify.elementNotPresent('//label[contains(text(), "Project English name")]')
            .verify.elementNotPresent('//label[contains(text(), "Country")]')
            .verify.elementNotPresent('//label[contains(text(), "Introduction")]');
    },
});
