module.exports = {
    sections: {
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