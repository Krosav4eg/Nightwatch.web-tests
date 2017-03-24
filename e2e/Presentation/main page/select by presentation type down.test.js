var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {


    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
    },

    'sort': function (browser) {
        var presentationTypeColumn = browser.page.presentations().section.presentationTypeColumn;
        presentationTypeColumn
            .clickBySelector('@nameColumn')

            .verify.containsText("@firstRow", "Case presentation")
            .verify.containsText("@secondRow", "Case presentation")
            .verify.containsText("@thirdRow", "Chairman speech")
            .verify.containsText("@fourthRow", "Cross-function keynote")

            .clickBySelector('@nameColumn')

            .verify.containsText("@firstRow", 'Panel discussion')
            .verify.containsText("@secondRow", "Leadership presentation")
            .verify.containsText("@thirdRow", "Keynote")
            .verify.containsText("@fourthRow", "Group discussion initiation")
    },

    'select by presentation type down': function (browser) {
        var presentationTypeColumn = browser.page.presentations().section.presentationTypeColumn;
        presentationTypeColumn

            .clickBySelector('@delegateCasePresentationOption')
            .verify.containsText("@firstRow", 'Case presentation')
            .verify.containsText("@secondRow", "Case presentation")

            .clickBySelector('@delegateChairmanSpeechOption')
            .verify.containsText("@firstRow", 'Chairman speech')

            .clickBySelector('@delegateCrossFunctionOption')
            .verify.containsText("@firstRow", 'Cross-function keynote')
            .verify.containsText("@secondRow", "Cross-function keynote")

            .clickBySelector('@delegateDebateOption')
            .verify.containsText("@firstRow", 'Debate')
            .verify.containsText("@secondRow", "Debate")

            .clickBySelector('@delegateFishBowlOption')
            .verify.containsText("@firstRow", 'FishBowl')

            .clickBySelector('@delegateGroupDiscussionOption')
            .verify.containsText("@firstRow", 'Group discussion initiation')

            .clickBySelector('@delegateKeynoteOption')
            .verify.containsText("@firstRow", 'Keynote')

            .clickBySelector('@delegateLeadershipPresentationOption')
            .verify.containsText("@firstRow", 'Leadership presentation')

            .clickBySelector('@delegatePanelDiscussionOption')
            .verify.containsText("@firstRow", 'Panel discussion')

            .clickBySelector('@partnerCaseParallelOption')
            .verify.elementPresent('@noResultsFound')

            .clickBySelector('@partnerCaseWholeAudienceOption')
            .verify.elementPresent('@noResultsFound')

            .clickBySelector('@partnerGoldSpotlightOption')
            .verify.elementPresent('@noResultsFound')

            .clickBySelector('@partnerPlatinumSpotlightOption')
            .verify.elementPresent('@noResultsFound')

            .clickBySelector('@partnerPresentationParallelOption')
            .verify.elementPresent('@noResultsFound')

            .clickBySelector('@partnerPresentationWholeAudienceOption')
            .verify.elementPresent('@noResultsFound')

            .clickBySelector('@partnerSnapShotOption')
            .verify.elementPresent('@noResultsFound')

            .clickBySelector('@allOption')
            .verify.containsText("@firstRow", 'Panel discussion')
            .verify.containsText("@secondRow", "Leadership presentation")
            .verify.containsText("@thirdRow", "Keynote")
            .verify.containsText("@fourthRow", "Group discussion initiation")
    },
});