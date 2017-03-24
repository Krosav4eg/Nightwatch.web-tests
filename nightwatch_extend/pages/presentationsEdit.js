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

                addFileInput: {
                    selector: '//input[@type="file"]',
                    locateStrategy: 'xpath'
                },
                uploadFileButton: {
                    selector: '//*[text()="Upload file"]',
                    locateStrategy: 'xpath'
                },
                listMaterialItem: {
                    selector: '//li[@class="list-group-item list-material-item"]',
                    locateStrategy: 'xpath'
                },
                deleteButton: {
                    selector: '//p[@class="btn material-delete btn-primary"]',
                    locateStrategy: 'xpath'
                },
                alertYes: {
                    selector: '//button[@class="btn btn-success"]',
                    locateStrategy: 'xpath'
                },
                eventAgendaDocx: {
                    selector: '//me-event-presentation-material-list/ul/li',
                    locateStrategy: 'xpath'
                },
                option20Page: {
                    selector: '//option[1][@value="20"]',
                    locateStrategy: 'xpath'
                },
                option50Page: {
                    selector: '//option[@value="50"]',
                    locateStrategy: 'xpath'
                },
                option100Page: {
                    selector: '//option[@value="100"]',
                    locateStrategy: 'xpath'
                },
                pageNumberCount: {
                    selector: '//span[text()="1 of 1"]',
                    locateStrategy: 'xpath'
                },
            }
        },
        tableSpeaker: {
            selector: '//h4[text()="Speakers"]',
            locateStrategy: 'xpath',
            elements: {
                firstNameColumnM: {
                    selector: '//tr/th[1]',
                    locateStrategy: 'xpath'
                },
                firstSearchColumnM: {
                    selector: '//td[1]/input[1]',
                    locateStrategy: 'xpath'
                },
                firstRowInColumnM: {
                    selector: '//tr/td/span/a[1]',
                    locateStrategy: 'xpath'
                },
                firstRowInColumnContactType: {
                    selector: '(//tr[@class="hover"]//span)[2]',
                    locateStrategy: 'xpath'
                },
                secondRowInColumnContactType: {
                    selector: '//tr[2]/td[2]/span',
                    locateStrategy: 'xpath'
                },
                companyNameColumn: {
                    selector: '//tr/th[3]',
                    locateStrategy: 'xpath'
                },
                companyNameSearchColumn: {
                    selector: '//td[3]/input[1]',
                    locateStrategy: 'xpath'
                },
                firstRowInColumnCompanyName: {
                    selector: '(//tr[@class="hover"]//span)[3]',
                    locateStrategy: 'xpath'
                },
                secondRowInColumnCompanyName: {
                    selector: '//tr[2]/td[3]/span',
                    locateStrategy: 'xpath'
                },
                lastNameColumn: {
                    selector: '//tr/th[4]',
                    locateStrategy: 'xpath'
                },
                lastNameSearchColumn: {
                    selector: '//td[4]/input[1]',
                    locateStrategy: 'xpath'
                },
                firstRowInColumnLastName: {
                    selector: '(//tr[@class="hover"]//span)[4]',
                    locateStrategy: 'xpath'
                },
                secondRowInColumnLastName: {
                    selector: '//tr[2]/td[4]/span',
                    locateStrategy: 'xpath'
                },
                firstNameColumn: {
                    selector: '//tr/th[5]',
                    locateStrategy: 'xpath'
                },
                firstNameSearchColumn: {
                    selector: '//td[5]/input[1]',
                    locateStrategy: 'xpath'
                },
                firstRowInColumnFirstName: {
                    selector: '(//tr[@class="hover"]//span)[5]',
                    locateStrategy: 'xpath'
                },
                secondRowInColumnFirstName: {
                    selector: '//tr[2]/td[5]/span',
                    locateStrategy: 'xpath'
                },
                inAcademicTitleNameColumn: {
                    selector: '//tr/th[6]',
                    locateStrategy: 'xpath'
                },
                inAcademicTitleSearchColumn: {
                    selector: '//td[6]/input[1]',
                    locateStrategy: 'xpath'
                },
                firstRowInAcademicTitleName: {
                    selector: '(//tr[@class="hover"]//span)[6]',
                    locateStrategy: 'xpath'
                },
                secondRowInAcademicTitleName: {
                    selector: '//tr[2]/td[6]/span',
                    locateStrategy: 'xpath'
                },
                titleNameColumn: {
                    selector: '//tr/th[7]',
                    locateStrategy: 'xpath'
                },
                titelSearchColumn: {
                    selector: '//td[7]/input[1]',
                    locateStrategy: 'xpath'
                },
                firstRowInColumnTitle: {
                    selector: '(//tr[@class="hover"]//span)[7]',
                    locateStrategy: 'xpath'
                },
                secondRowInColumnTitle: {
                    selector: '//tr[2]/td[7]/span',
                    locateStrategy: 'xpath'
                },
                emailNameColumn: {
                    selector: '//tr/th[8]',
                    locateStrategy: 'xpath'
                },
                emailSearchColumn: {
                    selector: '//td[8]/input[1]',
                    locateStrategy: 'xpath'
                },
                firstRowInColumnEmail: {
                    selector: '(//tr[@class="hover"]//span)[8]',
                    locateStrategy: 'xpath'
                },
                secondRowInColumnEmail: {
                    selector: '//tr[2]/td[8]/span',
                    locateStrategy: 'xpath'
                },
                firstRowInColumnPresenterType: {
                    selector: '(//tr[@class="hover"]//span)[9]',
                    locateStrategy: 'xpath'
                },
                secondRowInColumnPresenterType: {
                    selector: '//tr[2]/td[9]/span',
                    locateStrategy: 'xpath'
                },

                addSpeakerButton: {
                    selector: '//button[text()="Add speaker"]',
                    locateStrategy: 'xpath'
                },

                deleteSeconSpeaker: {
                    selector: '//tr[2]/td[11]/span/button[@class="btn btn-danger"]',
                    locateStrategy: 'xpath'
                },
                alertYes: {
                    selector: '//button[@class="btn btn-success"]',
                    locateStrategy: 'xpath'
                },
            }
        },
        attachMasterContact: {
            selector: '//h4[text()="Attach Master Contact"]',
            locateStrategy: 'xpath',
            elements: {
                addNewButton: {
                    selector: '//button[contains(text(),"Add new")]',
                    locateStrategy: 'xpath'
                },
            }
        },
        addNewGuestSpeaker: {
            selector: '//h4[text()="Add new guest speaker"]',
            locateStrategy: 'xpath',
            elements: {
                lastNameInput: {
                    selector: '//input[@id="lastName"]',
                    locateStrategy: 'xpath'
                },
                lastNameError: {
                    selector: '//*[contains(text(), "Add new guest speaker")]/../..//*[contains(text(), "Last Name")]/..',
                    locateStrategy: 'xpath'
                },
                firstNameInput: {
                    selector: '//input[@id="firstName"]',
                    locateStrategy: 'xpath'
                },
                firstNameError: {
                    selector: '//*[contains(text(), "Add new guest speaker")]/../..//*[contains(text(), "First Name")]/..',
                    locateStrategy: 'xpath'
                },
                academicTitleInput: {
                    selector: '//input[@id="academicTitle"]',
                    locateStrategy: 'xpath'
                },
                academicTitleError: {
                    selector: '//p[contains(text(),"Academic Title is required")]',
                    locateStrategy: 'xpath'
                },
                functionTitleInput: {
                    selector: '//input[@id="functionTitle"]',
                    locateStrategy: 'xpath'
                },
                functionTitleError: {
                    selector: '//p[contains(text(),"Functional Title is required")]',
                    locateStrategy: 'xpath'
                },
                masterCompanyIdInput: {
                    selector: '//input[@id="masterCompanyId"]',
                    locateStrategy: 'xpath'
                },
                masterCompanyIdError: {
                    selector: '//p[contains(text(),"Company is required")]',
                    locateStrategy: 'xpath'
                },
                countryInput: {
                    selector: '//input[@id="country"]',
                    locateStrategy: 'xpath'
                },
                countryError: {
                    selector: '//*[contains(text(), "Add new guest speaker")]/../..//*[contains(text(), "Country")]/..',
                    locateStrategy: 'xpath'
                },
                countryUkraine: {
                    selector: '//*[contains(text(),"Ukraine")]',
                    locateStrategy: 'xpath'
                },
                mobileInput: {
                    selector: '//input[@id="mobile"]',
                    locateStrategy: 'xpath'
                },
                mobileError: {
                    selector: '//*[contains(text(), "Add new guest speaker")]/../..//*[contains(text(), "Mobile")]/..',
                    locateStrategy: 'xpath'
                },
                emailInput: {
                    selector: '//input[@id="email"]',
                    locateStrategy: 'xpath'
                },
                emailError: {
                    selector: '//*[contains(text(), "Add new guest speaker")]/../..//*[contains(text(), "Email")]/..',
                    locateStrategy: 'xpath'
                },

                saveButton: {
                    selector: '(//button[1][text()="Save"])[2]',
                    locateStrategy: 'xpath'
                },
            }
        }
    }
};