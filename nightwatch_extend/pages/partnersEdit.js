module.exports = {
    sections: {
        participationInfo: {
            selector: '//div[contains(text(), "Participation info")]',
            locateStrategy: 'xpath',
            elements: {
                confirmedOption: {
                    selector: '(//option[@value=1])[1]',
                    locateStrategy: 'xpath'
                },
                saveButton: {
                    selector: '(//*[text()="Save"])[1]',
                    locateStrategy: 'xpath'
                },
                successMassege: {
                    selector: '//div[@class="simple-notification toast-notification success"]',
                    locateStrategy: 'xpath'
                },
            }
        },
        hostingRoles: {
            selector: '//div[contains(text(), "Hosting Roles")]',
            locateStrategy: 'xpath',
            elements: {
                editButton: {
                    selector: '//div[contains(text(), "Hosting Roles")]/../../../..//button[contains(text(), "Edit")]',
                    locateStrategy: 'xpath'
                },
                subjectInput: {
                    selector: '//*[text()="Subject:"]/../../div/input',
                    locateStrategy: 'xpath'
                },
                saveButton: {
                    selector: '//h4[text()="Edit hosting role"]/../../../..//button[text()="Save"]',
                    locateStrategy: 'xpath'
                },
            }
        },
    }
};