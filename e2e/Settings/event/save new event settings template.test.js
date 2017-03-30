var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to rebooking': function (browser) {
        browser
            .relUrl('/event-settings-templates/add')
    },

    'add new templates': function (browser) {
        var addTemplate = browser.page.addTemplate();
        addTemplate
            .setValueBySelector('@nameInput', 'test1234')
            .clickBySelector('@conferenceCheckbox')
            .clickBySelector('@industryForumCheckbox')
            .clickBySelector('@minutes600Checkbox')
            .clickBySelector('@summitCheckbox')
            .clickBySelector('@kongressiCheckbox')
            .clickBySelector('@managementForumCheckbox')
            .clickBySelector('@emailApprovalCheckbox')
            .clickBySelector('@businessLoungeCheckbox')
            .clickBySelector('@executiveForumCheckbox')
            .clickBySelector('@ideaGardenCheckbox')
            .clickBySelector('@strategyForumCheckbox')
            .clickBySelector('@growthSessionCheckbox')
            .clickBySelector('@needSeekerCheckbox')

            .verify.elementPresent('@saveButton')
            .clickBySelector('@closeButton');
    },

    'verify status': function (browser) {
        var addTemplate = browser.page.addTemplate();
        addTemplate
            .clickBySelector('@testTemplate')

            .waitForElementVisible('@templateStatusSelect', 30000)
            .verify.containsText('@templateStatusSelect', 'Draft')
            .expect.element('@showDelegateListYesCheckbox').to.not.be.selected;
        addTemplate
            .expect.element('@showDelegateListNoCheckbox').to.not.be.selected;

        addTemplate
            .expect.element('@creditBasedCheckbox').to.not.be.selected;
        addTemplate
            .expect.element('@eventBasedCheckbox').to.not.be.selected;

        addTemplate
            .expect.element('@showDelegateWishListYesCheckbox').to.not.be.selected;
        addTemplate
            .expect.element('@showDelegateWishListNoCheckbox').to.not.be.selected;

        addTemplate
            .expect.element('@rejectedMeetingsYesCheckbox').to.not.be.selected;
        addTemplate
            .expect.element('@rejectedMeetingsNoCheckbox').to.not.be.selected;

        addTemplate
            .expect.element('@suggested1ToManyMeetingsYesCheckbox').to.not.be.selected;
        addTemplate
            .expect.element('@suggested1ToManyMeetingsNoCheckbox').to.not.be.selected;

        addTemplate
            .expect.element('@suggestedMeetingsYesCheckbox').to.not.be.selected;
        addTemplate
            .expect.element('@suggestedMeetingsNoCheckbox').to.not.be.selected;

        addTemplate
            .expect.element('@anonymizedMeetingBookingYesCheckbox').to.not.be.selected;
        addTemplate
            .expect.element('@anonymizedMeetingBookingNoCheckbox').to.not.be.selected;

        addTemplate
            .expect.element('@queuingMeetingsYesCheckbox').to.not.be.selected;
        addTemplate
            .expect.element('@queuingMeetingsNoCheckbox').to.not.be.selected;

        addTemplate
            .expect.element('@anonymiseQueueForSolutionProvidersYesCheckbox').to.not.be.selected;
        addTemplate
            .expect.element('@anonymiseQueueForSolutionProvidersNoCheckbox').to.not.be.selected;

        addTemplate
            .expect.element('@availabilityIsUsedByTheMeetingBookingAlgorithmYesCheckbox').to.not.be.selected;
        addTemplate
            .expect.element('@availabilityIsUsedByTheMeetingBookingAlgorithmNoCheckbox').to.not.be.selected;

        addTemplate
            .expect.element('@blockingDelegatesAgendaUserCheckbox').to.not.be.selected;
        addTemplate
            .expect.element('@blockingDelegatesAgendaDelegateCheckbox').to.not.be.selected;

        addTemplate
            .expect.element('@blockingSolutionProvidersUserCheckbox').to.not.be.selected;
        addTemplate
            .expect.element('@blockingSolutionProvidersProvidersCheckbox').to.not.be.selected;
    },
});