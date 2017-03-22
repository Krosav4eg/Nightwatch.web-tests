module.exports = {
    elements: {
        totalName: {
            selector: '(//h4)[1]',
            locateStrategy: 'xpath'
        },
        nameInput: {
            selector: '//*[@id="MasterCompany_Name"]',
            locateStrategy: 'xpath'
        },
        countryInput: {
            selector: '//*[@id="MasterCompany_Country"]',
            locateStrategy: 'xpath'
        },
        companyPictureInput: {
            selector: '//input[@name="CompanyPicture"]',
            locateStrategy: 'xpath'
        },
        cropCompanyPicture: {
            selector: '//img[@alt="[]"]',
            locateStrategy: 'xpath'
        },
        cropButton: {
            selector: '//*[@id="action_done_cropping"]',
            locateStrategy: 'xpath'
        },
        webLogo: {
            selector: '//*[@id="logo"]',
            locateStrategy: 'xpath'
        },
    }
};