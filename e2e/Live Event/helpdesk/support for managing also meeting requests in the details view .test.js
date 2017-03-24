var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to check-in': function (browser) {
        browser
            .relUrl('/events/2008/helpdesk');
    },

    'open first delegate': function (browser) {
        var lastNameColumn = browser.page.helpdesk().section.lastNameColumn;
        lastNameColumn
            .clickBySelector('@firstRowWithLastName');
    },

    'check meeting requests info': function (browser) {
        var meetingsRequests = browser.page.helpdesk().section.meetingsRequests;
        meetingsRequests
            .verify.elementPresent('@titleName')
            .clickBySelector('@chevronDown')

            .verify.containsText('@participatingDelegate1', 'Avigilon ltd, Kaj Långström')
            .verify.elementPresent('@participatingDelegate1Status')

            .verify.containsText('@participatingDelegate2', 'Hedengren Security ab, Timo Nordgren')
            .verify.elementPresent('@participatingDelegate2Status')

            .verify.containsText('@participatingDelegate3', 'AVARN Security, Kaj Ignatjew')
            .verify.elementPresent('@participatingDelegate3Status');
    },

    'check info about 1-st meeting requests participants': function (browser) {
        var meetingsRequests = browser.page.helpdesk().section.meetingsRequests;
        meetingsRequests
            .clickBySelector('@participatingDelegate1')
            .verify.elementPresent('@offeringsForParticipant1')
            .verify.elementPresent('@securitySolutionsForParticipant1')

            .verify.elementPresent('@personalMessageForParticipant1')

            .verify.elementPresent('@bookedMeetingButtonForParticipant1')
            .verify.elementPresent('@rejectedButtonForParticipant1')

            .clickBySelector('@participatingDelegate1');
    },

    'check info about 2-nd meeting requests participants': function (browser) {
        var meetingsRequests = browser.page.helpdesk().section.meetingsRequests;
        meetingsRequests
            .clickBySelector('@participatingDelegate2')
            .verify.elementPresent('@offeringsForParticipant2')
            .verify.elementPresent('@securitySolutionsForParticipant2')

            .verify.elementPresent('@personalMessageForParticipant2')

            .verify.elementPresent('@bookedMeetingButtonForParticipant2')
            .verify.elementPresent('@rejectedButtonForParticipant2')

            .clickBySelector('@participatingDelegate2');
    },

    'check info about 3-rd meeting requests participants': function (browser) {
        var meetingsRequests = browser.page.helpdesk().section.meetingsRequests;
        meetingsRequests
            .clickBySelector('@participatingDelegate3')
            .verify.elementPresent('@offeringsForParticipant3')
            .verify.elementPresent('@securitySolutionsForParticipant3')

            .verify.elementPresent('@personalMessageForParticipant3')

            .verify.elementPresent('@bookedMeetingButtonForParticipant3')
            .verify.elementPresent('@rejectedButtonForParticipant3')

            .clickBySelector('@participatingDelegate3')
            .clickBySelector('@chevronUp');
    },

    'check suggested meetings info': function (browser) {
        var meetingsRequests = browser.page.helpdesk().section.suggestedMeetings;
        meetingsRequests
            .verify.elementPresent('@titleName')
            .clickBySelector('@chevronDown')

            .verify.elementPresent('@popUp')

            .clickBySelector('@chevronUp');
    },

    'check rescheduling button': function (browser) {
        var meetingsRequests = browser.page.helpdesk().section.reschedulingButtonFunctionality;
        meetingsRequests
            .clickBySelector('@firstParticipant')

            .clickBySelector('@reschedulingButton')
            .verify.elementPresent('@selectTimeHeader')

            .verify.elementPresent('@duringTimeHeader')
            .verify.elementPresent('@duringTimeInputField')

            .verify.elementPresent('@overlappingHeader')
            .verify.elementPresent('@overlappingInputField')

            .clickBySelector('@closeButton');
    },
});