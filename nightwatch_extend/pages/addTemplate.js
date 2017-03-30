module.exports = {
    elements: {
        namePage: {
            selector: '//h1[text()="Create new Event Setting Template"]',
            locateStrategy: 'xpath'
        },
        nameInput: {
            selector: '//*[@id="template_name"]',
            locateStrategy: 'xpath'
        },
        templateStatusSelect: {
            selector: '//select[@formcontrolname="status"]',
            locateStrategy: 'xpath'
        },
        conferenceCheckbox: {
            selector: '(//checkbox-item/div/input)[1]',
            locateStrategy: 'xpath'
        },
        industryForumCheckbox: {
            selector: '(//checkbox-item/div/input)[2]',
            locateStrategy: 'xpath'
        },
        minutes600Checkbox: {
            selector: '(//checkbox-item/div/input)[3]',
            locateStrategy: 'xpath'
        },
        summitCheckbox: {
            selector: '(//checkbox-item/div/input)[4]',
            locateStrategy: 'xpath'
        },
        kongressiCheckbox: {
            selector: '(//checkbox-item/div/input)[5]',
            locateStrategy: 'xpath'
        },
        managementForumCheckbox: {
            selector: '(//checkbox-item/div/input)[6]',
            locateStrategy: 'xpath'
        },
        emailApprovalCheckbox: {
            selector: '(//checkbox-item/div/input)[7]',
            locateStrategy: 'xpath'
        },
        businessLoungeCheckbox: {
            selector: '(//checkbox-item/div/input)[8]',
            locateStrategy: 'xpath'
        },
        executiveForumCheckbox: {
            selector: '(//checkbox-item/div/input)[9]',
            locateStrategy: 'xpath'
        },
        ideaGardenCheckbox: {
            selector: '(//checkbox-item/div/input)[10]',
            locateStrategy: 'xpath'
        },
        strategyForumCheckbox: {
            selector: '(//checkbox-item/div/input)[11]',
            locateStrategy: 'xpath'
        },
        growthSessionCheckbox: {
            selector: '(//checkbox-item/div/input)[12]',
            locateStrategy: 'xpath'
        },
        needSeekerCheckbox: {
            selector: '(//checkbox-item/div/input)[13]',
            locateStrategy: 'xpath'
        },

        saveButton: {
            selector: '//button[text()="Save"]',
            locateStrategy: 'xpath'
        },
        closeButton: {
            selector: '//button[text()="Close"]',
            locateStrategy: 'xpath'
        },

        showDelegateListYesCheckbox: {
            selector: '(//*[text()="Show delegate list"]/../div/div/label/input)[1]',
            locateStrategy: 'xpath'
        },
        showDelegateListNoCheckbox: {
            selector: '(//*[text()="Show delegate list"]/../div/div/label/input)[2]',
            locateStrategy: 'xpath'
        },

        creditBasedCheckbox: {
            selector: '(//*[text()="Solution provider packages"]/../div/div/div/label/input)[1]',
            locateStrategy: 'xpath'
        },
        eventBasedCheckbox: {
            selector: '(//*[text()="Solution provider packages"]/../div/div/div/label/input)[2]',
            locateStrategy: 'xpath'
        },

        showDelegateWishListYesCheckbox: {
            selector: '(//*[text()="Show delegate wish list"]/../div/div/label/input)[1]',
            locateStrategy: 'xpath'
        },
        showDelegateWishListNoCheckbox: {
            selector: '(//*[text()="Show delegate wish list"]/../div/div/label/input)[2]',
            locateStrategy: 'xpath'
        },

        rejectedMeetingsYesCheckbox: {
            selector: '(//*[text()="Rejected meetings"]/../div/div/label/input)[1]',
            locateStrategy: 'xpath'
        },
        rejectedMeetingsNoCheckbox: {
            selector: '(//*[text()="Rejected meetings"]/../div/div/label/input)[2]',
            locateStrategy: 'xpath'
        },

        suggested1ToManyMeetingsYesCheckbox: {
            selector: '(//*[text()="Suggested 1-to-many meetings"]/../div/div/label/input)[1]',
            locateStrategy: 'xpath'
        },
        suggested1ToManyMeetingsNoCheckbox: {
            selector: '(//*[text()="Suggested 1-to-many meetings"]/../div/div/label/input)[2]',
            locateStrategy: 'xpath'
        },

        suggested1ToManyMeetingsQtyInput: {
            selector: '//*[text()="Suggested 1-to-many meeting Qty"]/../div/span/label/input',
            locateStrategy: 'xpath'
        },

        suggestedMeetingsYesCheckbox: {
            selector: '(//*[text()="Suggested meetings"]/../div/div/label/input)[1]',
            locateStrategy: 'xpath'
        },
        suggestedMeetingsNoCheckbox: {
            selector: '(//*[text()="Suggested meetings"]/../div/div/label/input)[2]',
            locateStrategy: 'xpath'
        },

        suggestedMeetingsQtyInput: {
            selector: '//*[text()="Suggested meeting Qty"]/../div/span/label/input',
            locateStrategy: 'xpath'
        },

        anonymizedMeetingBookingYesCheckbox: {
            selector: '(//*[text()="Anonymized meeting booking"]/../div/div/label/input)[1]',
            locateStrategy: 'xpath'
        },
        anonymizedMeetingBookingNoCheckbox: {
            selector: '(//*[text()="Anonymized meeting booking"]/../div/div/label/input)[2]',
            locateStrategy: 'xpath'
        },

        queuingMeetingsYesCheckbox: {
            selector: '(//*[text()="Queuing meetings"]/../div/div/label/input)[1]',
            locateStrategy: 'xpath'
        },
        queuingMeetingsNoCheckbox: {
            selector: '(//*[text()="Anonymized meeting booking"]/../div/div/label/input)[2]',
            locateStrategy: 'xpath'
        },

        anonymiseQueueForSolutionProvidersYesCheckbox: {
            selector: '(//*[text()="Anonymise queue for solution providers"]/../div/div/label/input)[1]',
            locateStrategy: 'xpath'
        },
        anonymiseQueueForSolutionProvidersNoCheckbox: {
            selector: '(//*[text()="Anonymise queue for solution providers"]/../div/div/label/input)[2]',
            locateStrategy: 'xpath'
        },

        availabilityIsUsedByTheMeetingBookingAlgorithmYesCheckbox: {
            selector: '(//*[text()="Availability is used by the meeting booking algorithm"]/../div/div/label/input)[1]',
            locateStrategy: 'xpath'
        },
        availabilityIsUsedByTheMeetingBookingAlgorithmNoCheckbox: {
            selector: '(//*[text()="Availability is used by the meeting booking algorithm"]/../div/div/label/input)[2]',
            locateStrategy: 'xpath'
        },

        blockingDelegatesAgendaUserCheckbox: {
            selector: '(//*[text()="Blocking delegates\' agenda"]/../div/div/div/label/input)[1]',
            locateStrategy: 'xpath'
        },
        blockingDelegatesAgendaDelegateCheckbox: {
            selector: '(//*[text()="Blocking delegates\' agenda"]/../div/div/div/label/input)[2]',
            locateStrategy: 'xpath'
        },

        blockingSolutionProvidersUserCheckbox: {
            selector: '(//*[text()="Blocking solution providers\' agenda"]/../div/div/div/label/input)[1]',
            locateStrategy: 'xpath'
        },
        blockingSolutionProvidersProvidersCheckbox: {
            selector: '(//*[text()="Blocking solution providers\' agenda"]/../div/div/div/label/input)[2]',
            locateStrategy: 'xpath'
        },

        groupQtyInput: {
            selector: '//*[text()="Group Qty"]/../div/span/label/input',
            locateStrategy: 'xpath'
        },

        testTemplate: {
            selector: '//a[@href="/event-settings-templates/edit/11"]',
            locateStrategy: 'xpath'
        },
    }
};