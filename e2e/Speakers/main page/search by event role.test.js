var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/214/speakers')
    },

    'check event data': function (browser) {
        var eventSection = browser.page.speaker().section.event;
        eventSection
            .waitForElementVisible('@totalName214', 3000);
    },

    'sort by event roles up': function (browser) {
        var eventRolesColumnSection = browser.page.speaker().section.eventRolesColumn;
        eventRolesColumnSection
            .moveToElement('@nameColumn', 1298, 597)
            .clickBySelector('@nameColumn')

            .verify.elementPresent('@secondOneRow', "Group discussion initiator")
            .verify.elementPresent('@secondTwoRow', "Host delegate")
            .verify.elementPresent('@thirdOneRow', "Host delegate")
    },

    'sort by event roles down': function (browser) {
        var eventRolesColumnSection = browser.page.speaker().section.eventRolesColumn;
        eventRolesColumnSection
            .moveToElement('@nameColumn', 1298, 597)
            .clickBySelector('@nameColumn')

            .verify.elementPresent('@firstRow', "Keynote speaker")
            .verify.elementPresent('@secondOneRow', "Keynote speaker")
            .verify.elementPresent('@thirdOneRow', "Host delegate")
    },

    'drop down list verify': function (browser) {
        var eventRolesColumnSection = browser.page.speaker().section.eventRolesColumn;
        eventRolesColumnSection
            .moveToElement('@nameColumn', 1298, 597)

            .clickBySelector('@allOption')
            .verify.containsText('@firstEmptyOption', '')
            .verify.containsText('@hostedTableHostOption', 'Hosted table host')
            .verify.containsText('@groupDiscussionHostOption', 'Group discussion host')
            .verify.containsText('@advisoryBoardMemberOption', 'Advisory board member')
            .verify.containsText('@awardsCandidateOption', 'Awards candidate')
            .verify.containsText('@caseExpertSpeakerOption', 'Case / expert speaker')
            .verify.containsText('@chairmanOption', 'Chairman')
            .verify.containsText('@crossFunctionKeynoteSpeakerOption', 'Cross-function keynote speaker')
            .verify.containsText('@debateSpeakerOption', 'Debate speaker')
            .verify.containsText('@fishBowlSpeakerOption', 'FishBowl speaker')
            .verify.containsText('@groupDiscussionInitiatorOption', 'Group discussion initiator')
            .verify.containsText('@hostDelegateOption', 'Host delegate')
            .verify.containsText('@keynoteSpeakerOption', 'Keynote speaker')
            .verify.containsText('@panelSpeakerOption', 'Panel speaker')
            .verify.containsText('@leadershipSpeakerOption', 'Leadership speaker')
            .verify.containsText('@testimonialOption', 'Testimonial')
            .verify.containsText('@lunchHostOption', 'Lunch host')
            .verify.containsText('@dinnerHostOption', 'Dinner host');
    },

    'check blank': function (browser) {
        var eventRolesColumnSection = browser.page.speaker().section.eventRolesColumn;
        eventRolesColumnSection
            .verify.containsText('@numberOfLines', "5")

            .verify.elementPresent('@firstRow')
            .verify.elementPresent('@secondOneRow')
            .verify.elementPresent('@thirdOneRow')
            .verify.elementPresent('@fourthRow')
            .verify.elementPresent('@fifthRow')
    },

    'check Hosted table host role': function (browser) {
        var eventRolesColumnSection = browser.page.speaker().section.eventRolesColumn;
        eventRolesColumnSection
            .clickBySelector('@hostedTableHostOption')
            .verify.containsText('@numberOfLines', "0");
    },

    'check Group discussion host': function (browser) {
        var eventRolesColumnSection = browser.page.speaker().section.eventRolesColumn;
        eventRolesColumnSection
            .clickBySelector('@groupDiscussionHostOption')
            .verify.containsText('@numberOfLines', "0");
    },

    'check Advisory board member ': function (browser) {
        var eventRolesColumnSection = browser.page.speaker().section.eventRolesColumn;
        eventRolesColumnSection
            .clickBySelector('@advisoryBoardMemberOption')
            .verify.containsText('@numberOfLines', "0");
    },

    'check Awards candidate': function (browser) {
        var eventRolesColumnSection = browser.page.speaker().section.eventRolesColumn;
        eventRolesColumnSection
            .clickBySelector('@awardsCandidateOption')
            .verify.containsText('@numberOfLines', "0");
    },

    'check Case / expert speaker': function (browser) {
        var eventRolesColumnSection = browser.page.speaker().section.eventRolesColumn;
        eventRolesColumnSection
            .clickBySelector('@caseExpertSpeakerOption')
            .verify.containsText('@numberOfLines', "0");
    },

    'check Chairman': function (browser) {
        var eventRolesColumnSection = browser.page.speaker().section.eventRolesColumn;
        eventRolesColumnSection
            .clickBySelector('@chairmanOption')
            .verify.containsText('@numberOfLines', "0");
    },

    'check Cross-function keynote speaker': function (browser) {
        var eventRolesColumnSection = browser.page.speaker().section.eventRolesColumn;
        eventRolesColumnSection
            .clickBySelector('@crossFunctionKeynoteSpeakerOption')
            .verify.containsText('@numberOfLines', "0");
    },

    'check Debate speaker': function (browser) {
        var eventRolesColumnSection = browser.page.speaker().section.eventRolesColumn;
        eventRolesColumnSection
            .clickBySelector('@debateSpeakerOption')
            .verify.containsText('@numberOfLines', "1")

            .verify.containsText("@firstRow", "Debate speaker")
    },

    'check FishBowl speaker': function (browser) {
        var eventRolesColumnSection = browser.page.speaker().section.eventRolesColumn;
        eventRolesColumnSection
            .clickBySelector('@fishBowlSpeakerOption')
            .verify.containsText('@numberOfLines', "0");
    },

    'check Group discussion initiator': function (browser) {
        var eventRolesColumnSection = browser.page.speaker().section.eventRolesColumn;
        eventRolesColumnSection
            .clickBySelector('@groupDiscussionInitiatorOption')
            .verify.containsText('@numberOfLines', "1")

            .verify.containsText("@firstRow", "Group discussion initiator")
    },

    'check Host delegate': function (browser) {
        var eventRolesColumnSection = browser.page.speaker().section.eventRolesColumn;
        eventRolesColumnSection
            .clickBySelector('@hostDelegateOption')
            .verify.containsText('@numberOfLines', "2")

            .verify.containsText("@firstRow", "Host delegate")
            .verify.containsText("@secondTwoRow", "Host delegate");
    },

    'check Keynote speaker': function (browser) {
        var eventRolesColumnSection = browser.page.speaker().section.eventRolesColumn;
        eventRolesColumnSection
            .clickBySelector('@keynoteSpeakerOption')
            .verify.containsText('@numberOfLines', "3")

            .verify.containsText("@firstRow", "Keynote speaker")
            .verify.containsText("@secondOneRow", "Keynote speaker")
            .verify.containsText("@thirdTwoRow", "Keynote speaker");
    },

    'check Panel': function (browser) {
        var eventRolesColumnSection = browser.page.speaker().section.eventRolesColumn;
        eventRolesColumnSection
            .clickBySelector('@panelSpeakerOption')
            .verify.containsText('@numberOfLines', "0");
    },

    'check Leadership speaker': function (browser) {
        var eventRolesColumnSection = browser.page.speaker().section.eventRolesColumn;
        eventRolesColumnSection
            .clickBySelector('@leadershipSpeakerOption')
            .verify.containsText('@numberOfLines', "0");
    },

    'check Testimonial': function (browser) {
        var eventRolesColumnSection = browser.page.speaker().section.eventRolesColumn;
        eventRolesColumnSection
            .clickBySelector('@testimonialOption')
            .verify.containsText('@numberOfLines', "0");
    },

    'check Lunch host': function (browser) {
        var eventRolesColumnSection = browser.page.speaker().section.eventRolesColumn;
        eventRolesColumnSection
            .clickBySelector('@lunchHostOption')
            .verify.containsText('@numberOfLines', "0");
    },

    'check Dinner host': function (browser) {
        var eventRolesColumnSection = browser.page.speaker().section.eventRolesColumn;
        eventRolesColumnSection
            .clickBySelector('@dinnerHostOption')
            .verify.containsText('@numberOfLines', "0");
    },

});