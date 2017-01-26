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
            .click('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="localName"]')

            .verify.elementPresent('//label[contains(text(), "Project English name ")]')
            .verify.elementPresent('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="englishName"]')
            .click('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="englishName"]')

            .waitForElementVisible('//p[text()="               Project local name is required.             "]', 10000)

            .verify.elementPresent('//label[contains(text(), "Country")]')
            .verify.elementPresent('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="country"]')
            .click('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="country"]')

            .waitForElementVisible('//p[text()="               Project English name is required.             "]', 10000)

            .verify.elementPresent('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="englishName"]')
            .click('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="englishName"]')

            .waitForElementVisible('//p[text()="               Country is required             "]', 10000)
            .refresh();

    },

    'click Save button': function (browser) {
        browser
            .waitForElementVisible('//*[text()="Candidate 1"]/../../../../../..//button[text()="Save"]', 20000)
            .click('//*[text()="Candidate 1"]/../../../../../..//button[text()="Save"]')

            .waitForElementVisible('//p[text()="               Project local name is required.             "]', 30000)

            .waitForElementVisible('//p[text()="               Project English name is required.             "]', 30000)

            .waitForElementVisible('//p[text()="               Country is required             "]', 30000);
    },

    'enter the local name': function (browser) {
        browser
            .setValueByXpath('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="localName"]', 'Тестовый проект_2')

            .waitForElementVisible('//*[text()="Candidate 1"]/../../../../../..//button[text()="Save"]', 30000)
            .click('//*[text()="Candidate 1"]/../../../../../..//button[text()="Save"]')

            .waitForElementVisible('//p[text()="               Project English name is required.             "]', 30000)
            .waitForElementVisible('//p[text()="               Country is required             "]', 30000);
    },

    'enter the English name': function (browser) {
        browser
            .setValueByXpath('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="englishName"]', 'Test Project_2')

            .waitForElementVisible('//*[text()="Candidate 1"]/../../../../../..//button[text()="Save"]', 30000)
            .click('//*[text()="Candidate 1"]/../../../../../..//button[text()="Save"]')

            .waitForElementVisible('//p[text()="               Country is required             "]', 30000);
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
