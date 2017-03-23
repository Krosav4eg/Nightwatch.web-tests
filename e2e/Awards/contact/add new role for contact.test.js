var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {
    'redirection to participant-roles': function (browser) {
        browser
            .relUrl('/event/1484/event-participant-roles')
    },

    'add new role': function (browser) {
        var eventRoles = browser.page.eventRoles()
        eventRoles
            .addAwardsCandidateRole("Solbrekke");
    },

    'verification  of Awards Candidate': function (browser) {

        var allInformation = browser.page.eventRoles().section.allInformation;
        var eventRoleColumn = browser.page.eventRoles().section.eventRoleColumn;
        allInformation
            .waitForElementVisible('@awardsCandidateText', 10000)
            .verify.containsText('@awardsCandidateCount', '1');

        eventRoleColumn
            .clickBySelector('@awardsCandidateOption');

        allInformation
            .verify.containsText('@assignedRolesCount', '1');

        browser.elements('css selector','table tbody tr', function (result) {
                var assignedRolesLength = result.value.length - 1;
                this.verify.equal(assignedRolesLength, 1);
            });
    },

    'redirection to Awards': function (browser) {
        browser.pause(1000)
            .relUrl('/event/1484/awards')
    },

    'check elements availability': function (browser) {
        var allInformation = browser.page.awards().section.allInformation;
        allInformation
            .verify.containsText('@titleEvent', 'Event (#1484)')
            .verify.containsText('@nameEvent', '600Minutes Executive IT')
            .verify.containsText('@localName', 'Local name: 600Minutes Executive IT')
            .verify.containsText('@dates', 'Dates: 2016-10-27 08:00:00 - 2016-10-27 18:00:00')
            .verify.containsText('@venue', 'Venue: Hotel Bristol, Oslo');

        browser.elements('css selector', 'div[class="panel panel-primary"]', function (result) {
                this.verify.equal(result.value.length, 4);
            });
    },

    'verify Candidates': function (browser) {
        var awardSectoin = browser.page.awards().section.awardSectoin;
        awardSectoin
            .clickBySelector('@contactRadioButton')
            .clickBySelector('@onButton')
            .clickBySelector('@saveButton')

            .waitForElementVisible('@succesMasseg', 30000)

        var candidatesSectoin = browser.page.awards().section.candidatesSectoin;
        candidatesSectoin

            .verify.containsText('@candidatesBlock', "Candidate 1")
            .verify.containsText('@candidatesBlock', "Last Name")
            .verify.containsText('@candidatesBlock', "First Name")
            .verify.containsText('@candidatesBlock', "Function title")
            .verify.containsText('@candidatesBlock', "English Function title")
            .verify.containsText('@candidatesBlock', "Academic title")
            .verify.containsText('@candidatesBlock', "Company")
            .verify.containsText('@candidatesBlock', "Country")
            .verify.containsText('@candidatesBlock', "Introduction")
            .verify.containsText('@candidatesBlock', "Modified:")
            .verify.containsText('@candidatesBlock', "Modified by:")
            .verify.elementPresent('@defaultLogo');
    },

    'redirection to role': function (browser) {
        browser
            .relUrl('/event/1484/event-participant-roles');
    },

    'delete role': function (browser) {
        // var eventRoles = browser.page.eventRoles()
        // eventRoles
        //     .deleteFirstRole("Awards candidate");
        browser.deleteRole("Awards candidate");
    },
});
