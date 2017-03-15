module.exports = {
    elements: {
        totalName: {
            selector: '//span[contains(text(),"228/IndustryForum Retail - Event settings")]',
            locateStrategy: 'xpath'
        },
        totalNameFor212Event: {
            selector: '//span[contains(text(),"212/IndustryForum Energy - Event settings")]',
            locateStrategy: 'xpath'
        },
        totalName212Event: {
            selector: '//h4[text()="Event (#212)"]',
            locateStrategy: 'xpath'
        },
        munchenText: {
            selector: '//div[text()="München, "]',
            locateStrategy: 'xpath'
        },
        germanyText: {
            selector: '//div[text()="Germany"]',
            locateStrategy: 'xpath'
        },
        noneSelectedText: {
            selector: '//div[text()="[none selected]"]',
            locateStrategy: 'xpath'
        },
        eventSettingsTemplateText: {
            selector: '//div[text()="Event settings template"]',
            locateStrategy: 'xpath'
        },
        timeText: {
            selector: '//h5[text()="09.05 - 10.05.2012"]',
            locateStrategy: 'xpath'
        },

        agendaText: {
            selector: '//legend[text()="Agenda"]',
            locateStrategy: 'xpath'
        },
        availabilityText: {
            selector: '//label[text()="Availability"]',
            locateStrategy: 'xpath'
        },
        availabilityYesCheckbox: {
            selector: '//input[@data-marker="me-event-settings-agenda-availability__input__radio__1"]',
            locateStrategy: 'xpath'
        },
        delegatesblockingEnabledForMEUsersCheckbox: {
            selector: '//input[@data-marker="me-event-settings-agenda-blocking-delegates__input__checkbox__for-me-users"]',
            locateStrategy: 'xpath'
        },
        delegatesblockingEnabledForDelegatesCheckbox: {
            selector: '//input[@data-marker="me-event-settings-agenda-blocking-delegates__input__checkbox__for-delegates"]',
            locateStrategy: 'xpath'
        },
        providersblockingEnabledForMEUsersCheckbox: {
            selector: '//input[@data-marker="me-event-settings-agenda-blocking-solution-provider__input__checkbox__for-me-users"]',
            locateStrategy: 'xpath'
        },
        providersblockingEnabledForSolutionProvidersCheckbox: {
            selector: '//input[@data-marker="me-event-settings-agenda-blocking-solution-provider__input__checkbox__for-solution-providers"]',
            locateStrategy: 'xpath'
        },
        groupQtyText: {
            selector: '//label[text()="Group Qty"]',
            locateStrategy: 'xpath'
        },

        groupQtyInput: {
            selector: '//input[@data-marker="me-event-settings-agenda-group-qty__input__text"]',
            locateStrategy: 'xpath'
        },
        firstCheckbox: {
            selector: '//*[@data-marker="me-groups-managed-automatically__input__checkbox__1"]/div/input',
            locateStrategy: 'xpath'
        },
        secondCheckbox: {
            selector: '//*[@data-marker="me-groups-managed-automatically__input__checkbox__3"]/div/input',
            locateStrategy: 'xpath'
        },
        thirdCheckbox: {
            selector: '//*[@data-marker="me-groups-managed-automatically__input__checkbox__3"]/div/input',
            locateStrategy: 'xpath'
        },
        fourthCheckbox: {
            selector: '//*[@data-marker="me-groups-managed-automatically__input__checkbox__4"]/div/input',
            locateStrategy: 'xpath'
        },
        fifthCheckbox: {
            selector: '//*[@data-marker="me-groups-managed-automatically__input__checkbox__5"]/div/input',
            locateStrategy: 'xpath'
        },
        sixthCheckbox: {
            selector: '//*[@data-marker="me-groups-managed-automatically__input__checkbox__6"]/div/input',
            locateStrategy: 'xpath'
        },

        saveButton: {
            selector: '(//button[text()="Save"])[2]',
            locateStrategy: 'xpath'
        },
        cancleButton: {
            selector: '//div/button[text()="Cancel"]',
            locateStrategy: 'xpath'
        },

        eventLeftMenu: {
            selector: '//span[text()="Event"]',
            locateStrategy: 'xpath'
        },
        industryForumEnergyLeftMenu: {
            selector: '//span[text()="Event"]/../..//span[text()="IndustryForum Energy"]',
            locateStrategy: 'xpath'
        },
        generalLeftMenu: {
            selector: '//span[text()="General"]',
            locateStrategy: 'xpath'
        },
    }
};