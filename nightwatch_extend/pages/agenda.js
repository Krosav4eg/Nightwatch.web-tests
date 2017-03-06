var agendaCommands = {
    containerCreation: function() {
        this.section.addCotainer
            .clickBySelector('@addCotainerButton')

            .waitForElementVisible('@totalNameContainer', 10000)
            .setValueBySelector('@headingInput', 'test1')
            .setValueBySelector('@subHeadingInput', 'test')
            .setValueBySelector('@startTimeInput', '8:00')
            .setValueBySelector('@endTimeInput', '10:00')
            .clickBySelector('@headingInput')

            .clickBySelector('@saveButton')

            .verify.elementPresent('@startTime')
            .verify.elementPresent('@endTime')
            .verify.elementPresent('@textInContainer')
            .verify.elementPresent('@savedContainer')
            .verify.elementPresent('@deleteButton')
            .verify.elementPresent('@editButton');
    },
    containerDelete: function() {
        this.section.addCotainer
            .clickBySelector('@deleteButton')
            .clickBySelector('@confirmYesButton')

            .verify.elementNotPresent('@textInContainer')
            .verify.elementPresent('@massegeAfterDeleted');
    }
};
module.exports = {
    commands: [agendaCommands],
    sections: {
        addCotainer: {
            selector: 'button.btn.btn-primary.btn-block',
            elements: {
                addCotainerButton: {
                    selector: '//button[@class="btn btn-primary btn-block"]',
                    locateStrategy: 'xpath'
                },
                totalNameContainer: {
                    selector: '//h4[contains(text(),"Container form")]',
                    locateStrategy: 'xpath'
                },
                headingInput: {
                    selector: '//*[@id="heading"]',
                    locateStrategy: 'xpath'
                },
                subHeadingInput: {
                    selector: '//*[@id="subHeading"]',
                    locateStrategy: 'xpath'
                },
                startTimeInput: {
                    selector: '//*[@id="containerStartHour"]/input',
                    locateStrategy: 'xpath'
                },
                endTimeInput: {
                    selector: '//*[@id="containerEndHour"]/input',
                    locateStrategy: 'xpath'
                },
                saveButton: {
                    selector: '//form/div[2]/div/div/button[contains(text(),"Save")]',
                    locateStrategy: 'xpath'
                },
                startTime: {
                    selector: '//b[1][contains(text(),"8:00")]',
                    locateStrategy: 'xpath'
                },
                endTime: {
                    selector: '//b[2][contains(text(),"10:00")]',
                    locateStrategy: 'xpath'
                },
                textInContainer: {
                    selector: '//b[contains(text(),"test1")]',
                    locateStrategy: 'xpath'
                },
                savedContainer: {
                    selector: '//div[contains(text(),"Container saved")]',
                    locateStrategy: 'xpath'
                },
                deleteButton: {
                    selector: '//i[@class="fa fa-trash-o delete-container"]',
                    locateStrategy: 'xpath'
                },
                nameDeletedWindow: {
                    selector: '//h4[contains(text(),"Confirmation")]',
                    locateStrategy: 'xpath'
                },
                confirmNoButton: {
                    selector: '//button[@data-marker="me-confirm__button__button__no"]',
                    locateStrategy: 'xpath'
                },
                confirmYesButton: {
                    selector: '//button[@data-marker="me-confirm__button__button__yes"]',
                    locateStrategy: 'xpath'
                },
                massegeAfterDeleted: {
                    selector: '//div[contains(text(), "Container deleted")]',
                    locateStrategy: 'xpath'
                },
                editButton: {
                    selector: '//i[@class="fa fa-pencil edit-container"]',
                    locateStrategy: 'xpath'
                }
            }
        },
    }
};