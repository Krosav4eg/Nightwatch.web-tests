module.exports = {
    elements: {
        totalName: {
            selector: '//span[contains(text(),"228/IndustryForum Retail - Event settings")]',
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
        }
    }
};