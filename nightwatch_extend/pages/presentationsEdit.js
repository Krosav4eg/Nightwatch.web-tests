module.exports = {
    sections: {
        presentation: {
            selector: '//h4[contains(text(), "Presentation")]',
            locateStrategy: 'xpath',
            elements: {
                organizerText: {
                    selector: '//label[contains(text(),"Organizer ")]',
                    locateStrategy: 'xpath'
                },
                managementEventsText: {
                    selector: '//span[contains(text(),"Management Events")]',
                    locateStrategy: 'xpath'
                },
                presentationTypeText: {
                    selector: '//label[contains(text(),"Presentation Type")]',
                    locateStrategy: 'xpath'
                },
                panelDiscussionText: {
                    selector: '//span[contains(text(),"Panel discussion")]',
                    locateStrategy: 'xpath'
                },
                headingText: {
                    selector: '//label[contains(text(),"Heading")]',
                    locateStrategy: 'xpath'
                },
                headingInput: {
                    selector: '//input[@data-marker="me-event-presentation-form__input__heading"]',
                    locateStrategy: 'xpath'
                },
                subheading1Text: {
                    selector: '//label[contains(text(),"Sub heading 1")]',
                    locateStrategy: 'xpath'
                },
                subheading1Input: {
                    selector: '//input[@data-marker="me-event-presentation-form__input__subheading0"]',
                    locateStrategy: 'xpath'
                },
                subheading2Text: {
                    selector: '//label[contains(text(),"Sub heading 2")]',
                    locateStrategy: 'xpath'
                },
                subheading2Input: {
                    selector: '//input[@data-marker="me-event-presentation-form__input__subheading1"]',
                    locateStrategy: 'xpath'
                },
                subheading3Text: {
                    selector: '//label[contains(text(),"Sub heading 3")]',
                    locateStrategy: 'xpath'
                },
                subheading3Input: {
                    selector: '//input[@data-marker="me-event-presentation-form__input__subheading2"]',
                    locateStrategy: 'xpath'
                },
                notesText: {
                    selector: '//label[contains(text(),"Notes")]',
                    locateStrategy: 'xpath'
                },
                notesInput: {
                    selector: '//textarea[@data-marker="me-event-presentation-form__textarea__notes"]',
                    locateStrategy: 'xpath'
                },
                createdText: {
                    selector: '//label[contains(text(),"Created")]',
                    locateStrategy: 'xpath'
                },
                createdByText: {
                    selector: '//label[contains(text(),"Created By")]',
                    locateStrategy: 'xpath'
                },
                modifiedText: {
                    selector: '//label[contains(text(),"Modified")]',
                    locateStrategy: 'xpath'
                },
                modifiedByText: {
                    selector: '//label[text()="Modified By "]',
                    locateStrategy: 'xpath'
                },
                cancelButton: {
                    selector: '(//div[@class="btn-toolbar"]//button[contains(text(),"Cancel")])[1]',
                    locateStrategy: 'xpath'
                },
                saveButton: {
                    selector: '(//div[@class="btn-toolbar"]//button[contains(text(),"Save")])[1]',
                    locateStrategy: 'xpath'
                },
            }
        },
        tableSpeaker: {
            selector: '//h4[text()="Speakers"]',
            locateStrategy: 'xpath',
            elements: {
                firstRowInColumnM: {
                    selector: '//a[@href="/presentations/1875/master-contact/126606"]',
                    locateStrategy: 'xpath'
                },
                firstRowInColumnContactType: {
                    selector: '(//tr[@class="hover"]//span)[2]',
                    locateStrategy: 'xpath'
                },
                firstRowInColumnCompanyName: {
                    selector: '(//tr[@class="hover"]//span)[3]',
                    locateStrategy: 'xpath'
                },
                firstRowInColumnLastName: {
                    selector: '(//tr[@class="hover"]//span)[4]',
                    locateStrategy: 'xpath'
                },
                firstRowInColumnFirstName: {
                    selector: '(//tr[@class="hover"]//span)[5]',
                    locateStrategy: 'xpath'
                },
                firstRowInColumnTitle: {
                    selector: '(//tr[@class="hover"]//span)[7]',
                    locateStrategy: 'xpath'
                },
                firstRowInColumnEmail: {
                    selector: '(//tr[@class="hover"]//span)[8]',
                    locateStrategy: 'xpath'
                },
            }
        }
    }
};