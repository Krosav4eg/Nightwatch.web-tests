module.exports = {
    elements: {
        username: {
            selector: '//*[@id="LoginForm_username"]',
            locateStrategy: 'xpath'
        },
        password: {
            selector: '//*[@id="LoginForm_password"]',
            locateStrategy: 'xpath'
        },
        submit: {
            selector: '//input[@type="submit"]',
            locateStrategy: 'xpath'
        },

        saveButton: {
            selector: '//*[@id="action-save"]',
            locateStrategy: 'xpath'
        },
        alertSuccessMessage: {
            selector: '//div[@class="alert alert-dismissable alert-success message"]',
            locateStrategy: 'xpath'
        },
        editDate: {
            selector: '//p/i',
            locateStrategy: 'xpath'
        },
    }
};