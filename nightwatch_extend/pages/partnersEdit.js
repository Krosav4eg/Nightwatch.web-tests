var parentCommands = {
    addContact: function(name, numberOption) {
        var locatorTextInput = '//*[contains(text(),"' + name + '")]';
        var locatorOption = '(//option[@value=' + numberOption + '])[2]';
        this.section.contactPerson
            .clickBySelector('@contactNameInput')
            .sendKeys('@contactNameInput', name)
            // .useCss()
            // .sendKeys('.auto-complete input', name)
            // .pause(2000)
            .clickBySelectorXpath(locatorTextInput)
            //.pause(2000)
            .clickBySelectorXpath(locatorOption)
            .clickBySelector('@saveButton');
    }

};
module.exports = {
    commands: [parentCommands],
    sections: {
        participationInfo: {
            selector: '//div[contains(text(), "Participation info")]',
            locateStrategy: 'xpath',
            elements: {
                nameSection: {
                    selector: '//div[contains(text(), "Participation info")]',
                    locateStrategy: 'xpath'
                },
                masterCompanyNameText: {
                    selector: '//label[text()="Master company name:"]',
                    locateStrategy: 'xpath'
                },
                masterCompanyNameInput: {
                    selector: '//*[text()="Master company name:"]/../div',
                    locateStrategy: 'xpath'
                },
                masterCompanyIdLink: {
                    selector: '//label[text()="Master company name:"]/../div/a',
                    locateStrategy: 'xpath'
                },
                participationNameInput: {
                    selector: '//label[text()="Participation name:"]/../div/input',
                    locateStrategy: 'xpath'
                },
                participationStatusSelect: {
                    selector: '//label[text()="Participation status:"]/../div/select',
                    locateStrategy: 'xpath'
                },
                unconfirmedOption: {
                    selector: '(//option[@value=0])[1]',
                    locateStrategy: 'xpath'
                },
                confirmedOption: {
                    selector: '(//option[@value=1])[1]',
                    locateStrategy: 'xpath'
                },
                canceledOption: {
                    selector: '(//option[@value=2])[1]',
                    locateStrategy: 'xpath'
                },
                unconfirmedRebookOption: {
                    selector: '(//option[@value=3])[1]',
                    locateStrategy: 'xpath'
                },
                confirmedRebookOption: {
                    selector: '(//option[@value=4])[1]',
                    locateStrategy: 'xpath'
                },
                rebookResponsibleInput: {
                    selector: '//*[text()="Rebook responsible:"]/../div/me-user-autocomplete/div/input',
                    locateStrategy: 'xpath'
                },
                MariAlén: {
                    selector: '//*[contains(text(),"Mari Alén")]',
                    locateStrategy: 'xpath'
                },
                GuaranteeValidYesCheckbox: {
                    selector: '(//radio-item/div/input)[1]',
                    locateStrategy: 'xpath'
                },
                GuaranteeValidNoCheckbox: {
                    selector: '(//radio-item/div/input)[2]',
                    locateStrategy: 'xpath'
                },
                packageNotesInput: {
                    selector: '//*[@formcontrolname="packageNotes"]',
                    locateStrategy: 'xpath'
                },
                saveButton: {
                    selector: '(//*[text()="Save"])[1]',
                    locateStrategy: 'xpath'
                },
                confirmYesButton: {
                    selector: '//button[@data-marker="me-confirm__button__button__yes"]',
                    locateStrategy: 'xpath'
                },
                successMassege: {
                    selector: '//div[@class="simple-notification toast-notification success"]',
                    locateStrategy: 'xpath'
                },
            }
        },
        package: {
            selector: '//div[contains(text(), "Package")]',
            locateStrategy: 'xpath',
            elements: {
                nameSection: {
                    selector: '//div[contains(text(), "Package")]',
                    locateStrategy: 'xpath'
                },
                packageIDInput: {
                    selector: '//*[text()="Package ID"]/../div/div',
                    locateStrategy: 'xpath'
                },
                packagetypeInput: {
                    selector: '//*[text()="Package type"]/../div/div',
                    locateStrategy: 'xpath'
                },
                packageNameInput: {
                    selector: '//*[text()="Package name"]/../div/div',
                    locateStrategy: 'xpath'
                },

                archivedOption: {
                    selector: '//option[text()="Archived"]',
                    locateStrategy: 'xpath'
                },
                activeOption: {
                    selector: '//option[text()="Active"]',
                    locateStrategy: 'xpath'
                },

                createdInput: {
                    selector: '//*[text()="Created"]/../div/div',
                    locateStrategy: 'xpath'
                },
                modifiedInput: {
                    selector: '//*[text()="Modified"]/../div/div',
                    locateStrategy: 'xpath'
                },

                representativesInput: {
                    selector: '//*[text()="Representatives"]/../div/input',
                    locateStrategy: 'xpath'
                },
                groupDiscussionHostsInput: {
                    selector: '//*[text()="Group discussion hosts"]/../div/input',
                    locateStrategy: 'xpath'
                },
                oneToManyMeetingHostsInput: {
                    selector: '//*[text()="One to many meeting hosts"]/../div/input',
                    locateStrategy: 'xpath'
                },
                lunchHostsInput: {
                    selector: '//*[text()="Lunch hosts"]/../div/input',
                    locateStrategy: 'xpath'
                },
                dinnerHostsInput: {
                    selector: '//*[text()="Dinner hosts"]/../div/input',
                    locateStrategy: 'xpath'
                },
                invitedDelegatesInput: {
                    selector: '//*[text()="Invited delegates"]/../div/input',
                    locateStrategy: 'xpath'
                },
                meetingRequestsLeftInput: {
                    selector: '//*[text()="Meeting requests left"]/../div/input',
                    locateStrategy: 'xpath'
                },
                guaranteedMeetingsInput: {
                    selector: '//*[text()="Guaranteed meetings"]/../div/input',
                    locateStrategy: 'xpath'
                },
                matchingYesCheckbox: {
                    selector: '(//*[text()="Matching"]/../div/div/label/input)[1]',
                    locateStrategy: 'xpath'
                },
                matchingNoCheckbox: {
                    selector: '(//*[text()="Matching"]/../div/div/label/input)[2]',
                    locateStrategy: 'xpath'
                },
                targetServiceYesCheckbox: {
                    selector: '(//*[text()="Target service"]/../div/div/label/input)[1]',
                    locateStrategy: 'xpath'
                },
                targetServiceNoCheckbox: {
                    selector: '(//*[text()="Target service"]/../div/div/label/input)[2]',
                    locateStrategy: 'xpath'
                },

                caseWholeAudienceInput: {
                    selector: '//*[text()="Case - whole audience"]/../div/input',
                    locateStrategy: 'xpath'
                },
                caseParallelInput: {
                    selector: '//*[text()="Case - parallel"]/../div/input',
                    locateStrategy: 'xpath'
                },
                goldSpotlightInput: {
                    selector: '//*[text()="Gold spotlight"]/../div/input',
                    locateStrategy: 'xpath'
                },
                keynoteInput: {
                    selector: '//*[text()="Keynote"]/../div/input',
                    locateStrategy: 'xpath'
                },
                platinumSpotlightInput: {
                    selector: '//*[text()="Platinum spotlight"]/../div/input',
                    locateStrategy: 'xpath'
                },
                presentationWholeAudienceInput: {
                    selector: '//*[text()="Presentation - whole audience"]/../div/input',
                    locateStrategy: 'xpath'
                },
                presentationParallelInput: {
                    selector: '//*[text()="Presentation - parallel"]/../div/input',
                    locateStrategy: 'xpath'
                },
                snapShotInput: {
                    selector: '//*[text()="Snap shot"]/../div/input',
                    locateStrategy: 'xpath'
                },

                saveButton: {
                    selector: '(//*[text()="Save"])[2]',
                    locateStrategy: 'xpath'
                },
                successMassege: {
                    selector: '//div[contains(text(), "Success")]',
                    locateStrategy: 'xpath'
                },
            }
        },
        rebooking: {
            selector: '//div[contains(text(), "Rebooking")]',
            locateStrategy: 'xpath',
            elements: {
                nameSection: {
                    selector: '//div[contains(text(), "Rebooking")]',
                    locateStrategy: 'xpath'
                },
                rebookResponsible: {
                    selector: '//div[text()="Rebook responsible"]/../div/span',
                    locateStrategy: 'xpath'
                },
                rebookButton: {
                    selector: '//button[@class="btn btn-sm btn-warning pull-right"]',
                    locateStrategy: 'xpath'
                },
                rebookedButton: {
                    selector: '//button[@class="btn btn-sm btn-success pull-right"]',
                    locateStrategy: 'xpath'
                },
                rebookComments: {
                    selector: '(//textarea)[2]',
                    locateStrategy: 'xpath'
                },
                saveButton: {
                    selector: '(//button[contains(text(),"Save")])[3]',
                    locateStrategy: 'xpath'
                },
                successMassege: {
                    selector: '//div[contains(text(),"Event Participant Rebooking successfully updated")]',
                    locateStrategy: 'xpath'
                },
            }
        },
        eventDeadlines: {
            selector: '//div[contains(text(), "Event Deadlines")]',
            locateStrategy: 'xpath',
            elements: {
                nameSection: {
                    selector: '//div[contains(text(), "Event Deadlines")]',
                    locateStrategy: 'xpath'
                },
                partnerDeadline: {
                    selector: '//label[text()="Partner deadline:"]',
                    locateStrategy: 'xpath'
                },

            }
        },
        companyDescriptionLogos: {
            selector: '//div[contains(text(), "Company description & logos")]',
            locateStrategy: 'xpath',
            elements: {
                nameSection: {
                    selector: '//div[contains(text(), "Company description & logos")]',
                    locateStrategy: 'xpath'
                },
                conpanyDescriptionInput: {
                    selector: '//*[@formcontrolname="participantCompanyDescription"]/div/textarea',
                    locateStrategy: 'xpath'
                },
                saveChangesButton: {
                    selector: '(//button[text()="Save changes"])[1]',
                    locateStrategy: 'xpath'
                },
                successMassege: {
                    selector: '//div[contains(text(),"Description saved successfully")]',
                    locateStrategy: 'xpath'
                },
                logoInput: {
                    selector: '//input[@id="myUnit"]',
                    locateStrategy: 'xpath'
                },
                printlogoInput: {
                    selector: '//input[@name="printlogo"]',
                    locateStrategy: 'xpath'
                },
                cropPictureText: {
                    selector: '//h4[text()="Crop picture"]',
                    locateStrategy: 'xpath'
                },
                cropImage: {
                    selector: '//img[@class="cropImage"]',
                    locateStrategy: 'xpath'
                },
                cropControls: {
                    selector: '//div[@class="cropControls"]',
                    locateStrategy: 'xpath'
                },
                cropZoomIn: {
                    selector: '//a[@class="cropZoomIn"]',
                    locateStrategy: 'xpath'
                },
                cropZoomOut: {
                    selector: '//a[@class="cropZoomOut"]',
                    locateStrategy: 'xpath'
                },
                cropButton: {
                    selector: '//button[text()="Crop"]',
                    locateStrategy: 'xpath'
                },
                imageCroppedText: {
                    selector: '//div[text()="Image cropped"]',
                    locateStrategy: 'xpath'
                },
                contactPicture: {
                    selector: '//img[@class="contact-picture"]',
                    locateStrategy: 'xpath'
                },
                saveChangesLogoButton: {
                    selector: '(//button[text()="Save changes"])[2]',
                    locateStrategy: 'xpath'
                },
                resetToDefaultButton: {
                    selector: '//*[text()="Reset to default"]',
                    locateStrategy: 'xpath'
                },
                alertMassege: {
                    selector: '//div[contains(text(),"Please upload updated print logo aswell")]',
                    locateStrategy: 'xpath'
                },
                extentionProblemMassege: {
                    selector: '//div[contains(text(),"Extention problem")]',
                    locateStrategy: 'xpath'
                },
                successMassege: {
                    selector: '//div[contains(text(),"Logo file successfully created")]',
                    locateStrategy: 'xpath'
                },
            }
        },
        contactPerson: {
            selector: '//div[contains(text(), "Contact person")]',
            locateStrategy: 'xpath',
            elements: {
                nameSection: {
                    selector: '//div[contains(text(), "Contact person")]',
                    locateStrategy: 'xpath'
                },
                toAppButton: {
                    selector: '//a[text()="To App"]',
                    locateStrategy: 'xpath'
                },
                contactNameInput: {
                    selector: '//*[text()="Contact / Search"]/../div/div/div/input',
                    locateStrategy: 'xpath'
                },
                saveButton: {
                    selector: '//*[@class="row-fluid btn btn-primary"]',
                    locateStrategy: 'xpath'
                },

                nameColumn: {
                    selector: '//tr/th[1]',
                    locateStrategy: 'xpath'
                },
                roleColumn: {
                    selector: '//tr/th[2]',
                    locateStrategy: 'xpath'
                },
                contactInfoColumn: {
                    selector: '//tr/th[3]',
                    locateStrategy: 'xpath'
                },
                actionColumn: {
                    selector: '//tr/th[4]',
                    locateStrategy: 'xpath'
                },

                nameContactColumn: {
                    selector: '//tr/td[1]',
                    locateStrategy: 'xpath'
                },
                roleContactColumn: {
                    selector: '//tr/td[2]',
                    locateStrategy: 'xpath'
                },
                contactInfoContactColumn: {
                    selector: '//tr/td[3]',
                    locateStrategy: 'xpath'
                },
                actionColumn: {
                    selector: '//tr/th[4]',
                    locateStrategy: 'xpath'
                },
                deleteButton: {
                    selector: '//button[text()="Delete"]',
                    locateStrategy: 'xpath'
                },
                confitYesButton: {
                    selector: '(//button[text()="Yes"])[1]',
                    locateStrategy: 'xpath'
                },
                confitNoButton: {
                    selector: '(//button[text()="No"])[1]',
                    locateStrategy: 'xpath'
                },
                alertMassege: {
                    selector: '//div[contains(text(),"Please add marketing coordinator to the company")]',
                    locateStrategy: 'xpath'
                },
            }
        },
        representatives: {
            selector: '//div[contains(text(), "Representatives")]',
            locateStrategy: 'xpath',
            elements: {
                nameSection: {
                    selector: '//div[contains(text(), "Representatives")]',
                    locateStrategy: 'xpath'
                },
                contactSearchText: {
                    selector: '//div[contains(text(), "Representatives")]/../../../..//label[contains(text(),"Contact / Search")]',
                    locateStrategy: 'xpath'
                },
                contactSearchInput: {
                    selector: '//div[contains(text(), "Representatives")]/../../../..//input[@placeholder="Search contact"]',
                    locateStrategy: 'xpath'
                },
                MollerText: {
                    selector: '//*[contains(text(),"Möller")]',
                    locateStrategy: 'xpath'
                },
                saveButton: {
                    selector: '//div[contains(text(), "Representatives")]/../../../..//button[contains(text(),"Save")]',
                    locateStrategy: 'xpath'
                },
                nameMollerMarkusText: {
                    selector: '//a[contains(text(),"Möller Markus")]',
                    locateStrategy: 'xpath'
                },
                emailMollerMarkusText: {
                    selector: '//div[contains(text(),"markus.moeller@bblaw.com")]',
                    locateStrategy: 'xpath'
                },
                mobileMollerMarkusText: {
                    selector: '//div[contains(text(),"+49 160 6751398")]',
                    locateStrategy: 'xpath'
                },
                idMollerMarkusText: {
                    selector: '//a[contains(text(),"Möller Markus")]',
                    locateStrategy: 'xpath'
                },
                cancelButton: {
                    selector: '//div[contains(text(), "Representatives")]/../../../..//button[contains(text(),"Cancel")]',
                    locateStrategy: 'xpath'
                },
                confirmNoButton: {
                    selector: '//button[text()="No"]',
                    locateStrategy: 'xpath'
                },
                confirmYesButton: {
                    selector: '//button[text()="Yes"]',
                    locateStrategy: 'xpath'
                },
                replaceButton: {
                    selector: '//div[contains(text(), "Representatives")]/../../../..//button[contains(text(),"Replace")]',
                    locateStrategy: 'xpath'
                },
                secondReplaceButton: {
                    selector: '(//div[contains(text(), "Representatives")]/../../../..//button[contains(text(),"Replace")])[2]',
                    locateStrategy: 'xpath'
                },
                replaceMarkusText: {
                    selector: '//div[text()="Replace Markus Möller with:"]',
                    locateStrategy: 'xpath'
                },
                replaceSelect: {
                    selector: '//div[contains(text(), "Representatives")]/../../../..//select',
                    locateStrategy: 'xpath'
                },
            }
        },
        hostingRoles: {
            selector: '//div[contains(text(), "Hosting Roles")]',
            locateStrategy: 'xpath',
            elements: {
                nameSection: {
                    selector: '//div[contains(text(), "Hosting Roles")]',
                    locateStrategy: 'xpath'
                },
                hostedAgendaElementColumn: {
                    selector: '//th[contains(text(),"Hosted agenda element")]',
                    locateStrategy: 'xpath'
                },
                hostingRepresentativeColumn: {
                    selector: '//th[contains(text(),"Hosting representative")]',
                    locateStrategy: 'xpath'
                },
                contentColumn: {
                    selector: '//th[contains(text(),"Content")]',
                    locateStrategy: 'xpath'
                },
                linkToEventAgenda: {
                    selector: '//div[contains(text(), "Hosting Roles")]/../../../..//a',
                    locateStrategy: 'xpath'
                },
                editButton: {
                    selector: '//div[contains(text(), "Hosting Roles")]/../../../..//button[contains(text(), "Edit")]',
                    locateStrategy: 'xpath'
                },
                deleteButton: {
                    selector: '//div[contains(text(), "Hosting Roles")]/../../../..//button[contains(text(),"Delete")]',
                    locateStrategy: 'xpath'
                },
                cancelDeleteButton: {
                    selector: '//h4[contains(text(), "Delete hosting role")]/../../../..//button[contains(text(),"Cancel")]',
                    locateStrategy: 'xpath'
                },
                representativeText: {
                    selector: '//strong[contains(text(),"Representative:")]',
                    locateStrategy: 'xpath'
                },
                representativeSelect: {
                    selector: '//select[@formcontrolname="representative"]',
                    locateStrategy: 'xpath'
                },
                subjectInput: {
                    selector: '//*[text()="Subject:"]/../../div/input',
                    locateStrategy: 'xpath'
                },
                descriptionInput: {
                    selector: '//*[text()="Description:"]/../..//div/textarea',
                    locateStrategy: 'xpath'
                },
                saveButton: {
                    selector: '//h4[text()="Edit hosting role"]/../../../..//button[text()="Save"]',
                    locateStrategy: 'xpath'
                },
                successMassege: {
                    selector: '//div[contains(text(),"Topic saved")]',
                    locateStrategy: 'xpath'
                },
                subjectText: {
                    selector: '(//strong[contains(text(),"#@$%^123456/.,test subject")])',
                    locateStrategy: 'xpath'
                },
                descriptionText: {
                    selector: '(//tr/td[3]/br[contains(text(),"")])[1]',
                    locateStrategy: 'xpath'
                },
            }
        },
        additionalContacts: {
            selector: '//div[contains(text(), "Additional contacts")]',
            locateStrategy: 'xpath',
            elements: {
                nameSection: {
                    selector: '//div[contains(text(), "Additional contacts")]',
                    locateStrategy: 'xpath'
                },
                addButton: {
                    selector: '//*[text()="Email"]/../../../tbody/tr/td/button[text()="Add"]',
                    locateStrategy: 'xpath'
                },
                emailInput: {
                    selector: '//*[text()="Email"]/../../../tbody/tr/td/input',
                    locateStrategy: 'xpath'
                },
                secondemailInput: {
                    selector: '(//input[@type="email"])[2]',
                    locateStrategy: 'xpath'
                },
                deleteButton: {
                    selector: '(//div[@class="panel-collapse collapse in show"]//button[contains(text(),"Delete")])[1]',
                    locateStrategy: 'xpath'
                },
                editButton: {
                    selector: '(//div[@class="panel-collapse collapse in show"]//button[contains(text(),"Edit")])[1]',
                    locateStrategy: 'xpath'
                },

                deleteSuccessMassege: {
                    selector: '//div[contains(text(),"Additional contact person email deleted successfully")]',
                    locateStrategy: 'xpath'
                },

            }
        },
        communication: {
            selector: '//div[contains(text(), "Communication")]',
            locateStrategy: 'xpath',
            elements: {
                nameSection: {
                    selector: '//div[contains(text(), "Communication")]',
                    locateStrategy: 'xpath'
                },
                sendEmailButton: {
                    selector: '//button[contains(text(), "Send email")]',
                    locateStrategy: 'xpath'
                },
                firstRepresentatives: {
                    selector: '(//input[@type="checkbox"])[1]',
                    locateStrategy: 'xpath'
                },
                template68Option: {
                    selector: '//option[@value="68"]',
                    locateStrategy: 'xpath'
                },
                template97Option: {
                    selector: '//option[@value="97"]',
                    locateStrategy: 'xpath'
                },
                template575Option: {
                    selector: '//option[@value="575"]',
                    locateStrategy: 'xpath'
                },
                template579Option: {
                    selector: '//option[@value="579"]',
                    locateStrategy: 'xpath'
                },
                textSMSInput: {
                    selector: '//textarea[@class="form-control ng-untouched ng-pristine"]',
                    locateStrategy: 'xpath'
                },
                fromEmailInput: {
                    selector: '//*[contains(text(), "From Email:")]/../div/input',
                    locateStrategy: 'xpath'
                },
                fromNameInput: {
                    selector: '//*[contains(text(), "From Name:")]/../div/input',
                    locateStrategy: 'xpath'
                },
                replyToEmailInput: {
                    selector: '//*[contains(text(), "Reply-To Email:")]/../div/input',
                    locateStrategy: 'xpath'
                },
                subjectInput: {
                    selector: '//*[contains(text(), "Subject:")]/../div/input',
                    locateStrategy: 'xpath'
                },
                sendButton: {
                    selector: '(//button[text()="Send"])[1]',
                    locateStrategy: 'xpath'
                },
                cancelButton: {
                    selector: '//button[text()="Cancel"]',
                    locateStrategy: 'xpath'
                },
                sendSMSButton: {
                    selector: '//button[contains(text(), "Send sms")]',
                    locateStrategy: 'xpath'
                },
                sendSMSButtonInModal: {
                    selector: '//h4[text()="Send SMS"]/../../../..//button[text()="Send"]',
                    locateStrategy: 'xpath'
                },
                cancelSMSButtonInModal: {
                    selector: '//h4[text()="Send SMS"]/../../../..//button[text()="Cancel"]',
                    locateStrategy: 'xpath'
                },
                alertMassege: {
                    selector: '//div[contains(text(),"You need to chose Cms Template and recipients")]',
                    locateStrategy: 'xpath'
                },
                successMassege: {
                    selector: '//div[contains(text(),"The email template was sent successfully")]',
                    locateStrategy: 'xpath'
                },
                successSMSMassege: {
                    selector: '//div[contains(text(),"The SMS template was sent successfully")]',
                    locateStrategy: 'xpath'
                },
                lastEdit: {
                    selector: '(//*[@class="col-sm-8"]/p)[1]',
                    locateStrategy: 'xpath'
                },
                lastEditSMS: {
                    selector: '(//*[@class="col-sm-8"]/p)[2]',
                    locateStrategy: 'xpath'
                },
            }
        }
    }
};