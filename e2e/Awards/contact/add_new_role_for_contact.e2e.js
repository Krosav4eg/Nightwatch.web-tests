var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');


module.exports = _.assign(presteps, auth, {
    'redirection to participant-roles': function (browser) {
        browser
            .relUrl('/event/1484/event-participant-roles')
            .waitForElementVisible('#thisIsMainLoader', 100000)
            .waitForElementNotVisible('#thisIsMainLoader', 100000);
    },

    'add new role': function (browser) {
        browser
            .addNewRole("Risem");
    },

    'verification  of Awards Candidate': function (browser) {
        var shared = {};

        browser
            .useXpath()
            .waitForElementVisible('//div[contains(text(),"Awards candidate")]', 10000)
            .getText('//div[contains(text(),"Awards candidate")]/../div[2]', function(result) {
                shared.eventRolesCount = result.value;
            })

            .clickBySelectorXpath('(//select[@class="ng-untouched ng-pristine ng-valid"])[1]')
            .clickBySelectorXpath('//option[contains(text(),"Awards candidate")]')

            .waitForElementVisible('//*[contains(text(),"Assigned roles")]/span', 10000)
            .getText('//*[contains(text(),"Assigned roles")]/span', function(result) {
                shared.assignedRolesCount = result.value;
                this.verify.equal(shared.eventRolesCount, shared.assignedRolesCount);
            })

            .elements('css selector','table tbody tr', function (result) {
                shared.assignedRolesLength = result.value.length - 1;
                this.verify.equal(shared.assignedRolesCount, shared.assignedRolesLength);
            });;
    },

    'redirection to Awards': function (browser) {
        browser.pause(1000)
            .relUrl('/event/1484/awards')
    },

    'Check elements availability': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//*[@class="panel panel-primary"]/div/h4[contains(text(),"Event")]', 10000)
            .verify.elementPresent('//*[@class="panel panel-primary"]/div/h4[contains(text(),"Event")]')
            .verify.elementPresent('//*[@class="panel panel-primary"]/div/h4[contains(text(),"Votes")]')
            .verify.elementPresent('//*[@class="panel panel-primary"]/div/h4[contains(text(),"Awards")]')
            .verify.elementPresent('//*[@class="panel panel-primary"]/div/h4[contains(text(),"Candidates")]')
            .useCss()
            .elements('css selector','div[class="panel panel-primary"]', function (result) {
                this.verify.equal(result.value.length, 4);
            });
    },

    'verify Candidates': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//*[text()="Candidates"]/../..', 10000)
            .clickBySelectorXpath('//*[@type="radio" and @id="1"]')
            .clickBySelectorXpath('//label[text()="On"]')
            .clickBySelectorXpath('//*[text()="Awards"]/../..//button[text()="Save"]')

            .waitForElementVisible('//div[@class="toast-content"]', 10000)

            .verify.containsText('//*[text()="Candidates"]/../..', "Candidate 1")
            .verify.containsText('//*[text()="Candidates"]/../..', "Last Name")
            .verify.containsText('//*[text()="Candidates"]/../..', "First Name")
            .verify.containsText('//*[text()="Candidates"]/../..', "Function title")
            .verify.containsText('//*[text()="Candidates"]/../..', "English Function title")
            .verify.containsText('//*[text()="Candidates"]/../..', "Academic title")
            .verify.containsText('//*[text()="Candidates"]/../..', "Company")
            .verify.containsText('//*[text()="Candidates"]/../..', "Country")
            .verify.containsText('//*[text()="Candidates"]/../..', "Introduction")
            .verify.containsText('//*[text()="Candidates"]/../..', "Modified:")
            .verify.containsText('//*[text()="Candidates"]/../..', "Modified by:")
            .verify.elementPresent('//*[text()="Candidates"]/../..//a[contains(@href,"MasterContact")]')
            .verify.elementPresent('//*[text()="Candidates"]/../..//img');
    },

    'redirection to role': function (browser) {
        browser
            .clickBySelectorXpath('//a[@href="EventRoleStatsIndex"]')
    },

    'Delete role': function (browser) {
        browser
            .clickBySelectorXpath('(//select[@class="ng-untouched ng-pristine ng-valid"])[1]')
            .clickBySelectorXpath('//option[contains(text(),"Awards candidate")]')
            .pause(2000)

            .click('(//*[@class="btn btn-danger"])[1]')
            .acceptAlert()
            .pause(2000);
    },
});
