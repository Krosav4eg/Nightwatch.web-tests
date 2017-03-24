module.exports = {
    elements: {
        masterIdInput: {
            selector: '//*[contains(text(), "Master Contact ID")]/../div/span',
            locateStrategy: 'xpath'
        },
        lastNameInput: {
            selector: '//*[contains(text(), "Last Name")]/../div/span',
            locateStrategy: 'xpath'
        },
        firstNameInput: {
            selector: '//*[contains(text(), "First Name")]/../div/span',
            locateStrategy: 'xpath'
        },
        companyInput: {
            selector: '//*[contains(text(), "Company")]/../div/span',
            locateStrategy: 'xpath'
        },
        meAccountInput: {
            selector: '//*[contains(text(), "ME Account")]/../div/span',
            locateStrategy: 'xpath'
        },
        mobileInput: {
            selector: '//*[contains(text(), "Mobile")]/../div/span',
            locateStrategy: 'xpath'
        },
        countryInput: {
            selector: '//*[contains(text(), "Country")]/../div/span',
            locateStrategy: 'xpath'
        },
        languageInput: {
            selector: '//*[contains(text(), "Language")]/../div/span',
            locateStrategy: 'xpath'
        },

        cancelledOption: {
            selector: '//option[contains(text(), "Cancelled")]',
            locateStrategy: 'xpath'
        },
        confirmedRebookOption: {
            selector: '//option[contains(text(), "Confirmed Rebook")]',
            locateStrategy: 'xpath'
        },
        lateCancellationOption: {
            selector: '//option[contains(text(), "Late cancellation")]',
            locateStrategy: 'xpath'
        },
        noShowOption: {
            selector: '//option[contains(text(), "No show")]',
            locateStrategy: 'xpath'
        },
        unconfirmedOption: {
            selector: '//option[contains(text(), "Unconfirmed")]',
            locateStrategy: 'xpath'
        },
        unconfirmedRebookOption: {
            selector: '//option[contains(text(), "Unconfirmed Rebook")]',
            locateStrategy: 'xpath'
        },
        confirmedOption: {
            selector: '//option[contains(text(), "Confirmed")]',
            locateStrategy: 'xpath'
        },

        group2VioletOption: {
            selector: '//option[contains(text(), "Group 2 - violet")]',
            locateStrategy: 'xpath'
        },
        group1OrangeOption: {
            selector: '//option[contains(text(), "Group 1 - orange")]',
            locateStrategy: 'xpath'
        },
        noGroupOption: {
            selector: '//option[contains(text(), "[No group]")]',
            locateStrategy: 'xpath'
        },

        availabilityFrom: {
            selector: '//*[contains(text(), "Availability From")]/../div/span',
            locateStrategy: 'xpath'
        },
        availabilityTo: {
            selector: '//*[contains(text(), "Availability To")]/../div/span',
            locateStrategy: 'xpath'
        },

        saveButtom: {
            selector: '//button[text()="Save"]',
            locateStrategy: 'xpath'
        },
        cancelButtom: {
            selector: '//button[text()="Cancel"]',
            locateStrategy: 'xpath'
        },

        successMassage: {
            selector: '//div[@class="simple-notification toast-notification success"]',
            locateStrategy: 'xpath'
        },
    }
};