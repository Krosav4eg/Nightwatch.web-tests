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
        allInformation: {
            selector: '//h4',
            locateStrategy: 'xpath',
            elements: {
                titleEvent: {
                    selector: '(//h4)[1]',
                    locateStrategy: 'xpath'
                },
                nameEvent: {
                    selector: '(//h3)[1]',
                    locateStrategy: 'xpath'
                },
                localName: {
                    selector: '(//h3/../div)[1]',
                    locateStrategy: 'xpath'
                },
                dates: {
                    selector: '(//h3/../div)[2]',
                    locateStrategy: 'xpath'
                },
                venue: {
                    selector: '(//h3/../div)[3]',
                    locateStrategy: 'xpath'
                },
                titleTable: {
                    selector: '(//h4)[2]',
                    locateStrategy: 'xpath'
                },
                firstDay: {
                    selector: '//a[@class="btn btn-default day active"]',
                    locateStrategy: 'xpath'
                },
                secondDay: {
                    selector: '//a[@class="btn btn-default day"]',
                    locateStrategy: 'xpath'
                }
            }
        },
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
                massegeHeadingInputError: {
                    selector: '(//*[contains(text(), "Heading")]/../..)[1]',
                    locateStrategy: 'xpath'
                },
                massegeSubHeadingInputError: {
                    selector: '//p[text()=" Sub Heading is required."]',
                    locateStrategy: 'xpath'
                },
                massegeStartTimeError: {
                    selector: "//*[contains(text(), 'Start time')]/../..",
                    locateStrategy: 'xpath'
                },
                massegeEndTimeError: {
                    selector: "//*[contains(text(), 'End time')]/../..",
                    locateStrategy: 'xpath'
                },
                saveButton: {
                    selector: '//form/div[2]/div/div/button[contains(text(),"Save")]',
                    locateStrategy: 'xpath'
                },
                cancelButton: {
                    selector: '//form/div[2]/div/div/button[contains(text(),"Cancel")]',
                    locateStrategy: 'xpath'
                },
                startTime: {
                    selector: '//b[1][contains(text(),"8:00")]',
                    locateStrategy: 'xpath'
                },
                start10Time: {
                    selector: '//b[1][contains(text(),"10:00")]',
                    locateStrategy: 'xpath'
                },
                endTime: {
                    selector: '//b[2][contains(text(),"10:00")]',
                    locateStrategy: 'xpath'
                },
                end8Time: {
                    selector: '//b[2][contains(text(),"8:00")]',
                    locateStrategy: 'xpath'
                },
                end18Time: {
                    selector: '//b[2][contains(text(),"18:00")]',
                    locateStrategy: 'xpath'
                },
                textInContainer: {
                    selector: '//b[contains(text(),"test1")]',
                    locateStrategy: 'xpath'
                },
                textAutotest5InContainer: {
                    selector: '//b[contains(text(),"autotest5")]',
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
                },
                addElementButton: {
                    selector: '//*[@data-marker="me-event-agenda__button__button__add0"]',
                    locateStrategy: 'xpath'
                },

                alertInfo: {
                    selector: '//div[@class="alert alert-info text-center"]',
                    locateStrategy: 'xpath'
                },
                timeElementText: {
                    selector: '(//h5)[2]',
                    locateStrategy: 'xpath'
                },
                namePlaceholderText: {
                    selector: '(//h5)[3]',
                    locateStrategy: 'xpath'
                },
                addRoomButton: {
                    selector: '//button[contains(text(), "Add room")]',
                    locateStrategy: 'xpath'
                },
                blueBlockColorForEvent: {
                    selector: '//*[@class="panel-heading blueBlockColorForEvent"]',
                    locateStrategy: 'xpath'
                },
                greenBlockColorForEvent: {
                    selector: '//div[@class="panel-heading greenBlockColorForEvent"]',
                    locateStrategy: 'xpath'
                },
                orangeBlockColorForEvent: {
                    selector: '//div[@class="panel-heading orangeBlockColorForEvent"]',
                    locateStrategy: 'xpath'
                },
                orangeGroupColorForEvent: {
                    selector: '//span[@class="label orangeGroupColorForEvent"]',
                    locateStrategy: 'xpath'
                },
                violetGroupColorForEvent: {
                    selector: '//span[@class="label violetGroupColorForEvent"]',
                    locateStrategy: 'xpath'
                },
                blueGroupColorForEvent: {
                    selector: '//span[@class="label blueGroupColorForEvent"]',
                    locateStrategy: 'xpath'
                },
                greenGroupColorForEvent: {
                    selector: '//span[@class="label greenGroupColorForEvent"]',
                    locateStrategy: 'xpath'
                },
                redGroupColorForEvent: {
                    selector: '//span[@class="label redGroupColorForEvent"]',
                    locateStrategy: 'xpath'
                },
                grayBlockColorForEvent: {
                    selector: '//span[@class="label grayBlockColorForEvent"]',
                    locateStrategy: 'xpath'
                },
                deleteElementButton: {
                    selector: '//i[@class="fa fa-trash-o delete-element"]/..',
                    locateStrategy: 'xpath'
                },
                massegeForDeleteElement: {
                    selector: '//modal-content[contains(text(),"Do you really want to delete element 1-TO-1 Placeholder?")]',
                    locateStrategy: 'xpath'
                },
                confitmYesButton: {
                    selector: '//button[@data-marker="me-confirm__button__button__yes"]',
                    locateStrategy: 'xpath'
                },
                myRoomButton: {
                    selector: '//button[contains(text(), "MyRoom")]',
                    locateStrategy: 'xpath'
                },
                editElementButton: {
                    selector: '//a[2]/i[@class="fa fa-pencil edit-element"]',
                    locateStrategy: 'xpath'
                },
                deleteElementButton:{
                    selector: '//i[@class="fa fa-trash-o delete-element"]',
                    locateStrategy: 'xpath'
                },
                addPresentationButton: {
                    selector: '//button[text()="Add content "]',
                    locateStrategy: 'xpath'
                },
                namePresentation: {
                    selector: '(//table[@class="table table-striped"]//li)[1]',
                    locateStrategy: 'xpath'
                },
                editPresentationButton: {
                    selector: '(//i[@class="fa fa-pencil edit-element"])[2]',
                    locateStrategy: 'xpath'
                },
                deletePresentationButton: {
                    selector: '(//i[@class="fa fa-trash-o delete-element"])[2]',
                    locateStrategy: 'xpath'
                },
                plusPresentationButton: {
                    selector: '//i[@class="fa fa-plus"]',
                    locateStrategy: 'xpath'
                },
            }
        },
        addElement: {
            selector: '//h4[contains(text(),"Element form")]',
            locateStrategy: 'xpath',
            elements: {
                totalNameElementForm: {
                    selector: '//h4[contains(text(),"Element form")]',
                    locateStrategy: 'xpath'
                },
                agendaElementType: {
                    selector: '//label[contains(text(),"Agenda Element Entry Type")]',
                    locateStrategy: 'xpath'
                },
                TO1PlaceholderOption: {
                    selector: '//option[@value="25"]',
                    locateStrategy: 'xpath'
                },
                staticAgendaElementOption: {
                    selector: '//option[contains(text(),"Static agenda element")]',
                    locateStrategy: 'xpath'
                },
                meetingElementOption: {
                    selector: '//option[contains(text(),"Meeting element")]',
                    locateStrategy: 'xpath'
                },
                elementRequiringTableSettingOption: {
                    selector: '//option[contains(text(),"Element requiring table setting")]',
                    locateStrategy: 'xpath'
                },
                agendaElementTypeSelect: {
                    selector: '//select[@id="agendaElementTypeId"]',
                    locateStrategy: 'xpath'
                },

                presentationKeynoteOption: {
                    selector: '//option[@value="1"]',
                    locateStrategy: 'xpath'
                },
                headlineOption: {
                    selector: '//option[@value="2"]',
                    locateStrategy: 'xpath'
                },
                presentationPanelDiscussionOption: {
                    selector: '//option[@value="17"]',
                    locateStrategy: 'xpath'
                },
                presentationDebateOption: {
                    selector: '//option[@value="18"]',
                    locateStrategy: 'xpath'
                },
                presentationChairmanOption: {
                    selector: '//option[@value="19"]',
                    locateStrategy: 'xpath'
                },
                presentationSpotlightOption: {
                    selector: '//option[@value="21"]',
                    locateStrategy: 'xpath'
                },
                hostedTablePlaceholderOption: {
                    selector: '//option[@value="23"]',
                    locateStrategy: 'xpath'
                },
                presentationCaseOption: {
                    selector: '//option[@value="27"]',
                    locateStrategy: 'xpath'
                },
                presentationCrossFunctionKeynoteOption: {
                    selector: '//option[@value="28"]',
                    locateStrategy: 'xpath'
                },
                presentationFishBowlOption: {
                    selector: '//option[@value="29"]',
                    locateStrategy: 'xpath'
                },
                presentationLeadershipOption: {
                    selector: '//option[@value="30"]',
                    locateStrategy: 'xpath'
                },
                presentationSnapshotOption: {
                    selector: '//option[@value="31"]',
                    locateStrategy: 'xpath'
                },
                lunchPlaceholderOption: {
                    selector: '//option[@value="32"]',
                    locateStrategy: 'xpath'
                },
                groupDiscussionPlaceholderOption: {
                    selector: '//option[@value="33"]',
                    locateStrategy: 'xpath'
                },
                dinnerPlaceholderOption: {
                    selector: '//option[@value="34"]',
                    locateStrategy: 'xpath'
                },
                awardsPanelOption: {
                    selector: '//option[@value="35"]',
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
                endTimeText: {
                    selector: '//label[contains(text(),"End time")]',
                    locateStrategy: 'xpath'
                },
                endTimeInput: {
                    selector: '//input[@placeholder="End time"]',
                    locateStrategy: 'xpath'
                },
                startTimeText: {
                    selector: '//label[contains(text(),"Start time")]',
                    locateStrategy: 'xpath'
                },
                startTimeInput: {
                    selector: '//input[@placeholder="Start time"]',
                    locateStrategy: 'xpath'
                },
                massegeStartTimeError: {
                    selector: "//*[contains(text(), 'Start time')]/../..",
                    locateStrategy: 'xpath'
                },
                massegeEndTimeError: {
                    selector: "//*[contains(text(), 'End time')]/../..",
                    locateStrategy: 'xpath'
                },
                meetingAllowedText: {
                    selector: '//label[contains(text(),"Meeting allowed")]',
                    locateStrategy: 'xpath'
                },
                primaryMeetingHourOption: {
                    selector: '//option[contains(text(),"Primary meeting hour")]',
                    locateStrategy: 'xpath'
                },
                noMeetingsAllowedOption: {
                    selector: '//option[contains(text(),"No meetings allowed")]',
                    locateStrategy: 'xpath'
                },
                groupsUsedText: {
                    selector: '//label[contains(text(),"Groups Used")]',
                    locateStrategy: 'xpath'
                },
                eventGroupsText: {
                    selector: '//label[contains(text(),"Event Groups")]',
                    locateStrategy: 'xpath'
                },
                groupOrangeCheckbox: {
                    selector: '(//div[@class="checkbox-item"])[1]',
                    locateStrategy: 'xpath'
                },
                groupVioletCheckbox: {
                    selector: '(//div[@class="checkbox-item"])[2]',
                    locateStrategy: 'xpath'
                },
                groupBlueCheckbox: {
                    selector: '(//div[@class="checkbox-item"])[3]',
                    locateStrategy: 'xpath'
                },
                groupGreenCheckbox: {
                    selector: '(//div[@class="checkbox-item"])[4]',
                    locateStrategy: 'xpath'
                },
                groupRedCheckbox: {
                    selector: '(//div[@class="checkbox-item"])[5]',
                    locateStrategy: 'xpath'
                },
                groupWiteCheckbox: {
                    selector: '(//div[@class="checkbox-item"])[6]',
                    locateStrategy: 'xpath'
                },
                showInCalendarsText: {
                    selector: '//label[contains(text(),"Show in calendars")]',
                    locateStrategy: 'xpath'
                },
                delegatesCheckbox: {
                    selector: '(//label)[9]',
                    locateStrategy: 'xpath'
                },
                providerRepresentativesCheckbox: {
                    selector: '(//label)[10]',
                    locateStrategy: 'xpath'
                },
                publishWWWText: {
                    selector: '//label[contains(text(),"Publish WWW")]',
                    locateStrategy: 'xpath'
                },
                visibilityPublishWWWYesCheckbox: {
                    selector: '//*[@id="visibilityPublishWWWYes"]',
                    locateStrategy: 'xpath'
                },
                visibilityPublishWWWNoCheckbox: {
                    selector: '//*[@id="visibilityPublishWWWNo"]',
                    locateStrategy: 'xpath'
                },
                roomText: {
                    selector: '//div[@class="form-group"]/div/label[contains(text(),"Room")]',
                    locateStrategy: 'xpath'
                },
                roomInput: {
                    selector: '//input[@id="room"]',
                    locateStrategy: 'xpath'
                },
                attachButton: {
                    selector: '//me-event-agenda-element-presentation/div/div[2]/button[text()="Attach"]',
                    locateStrategy: 'xpath'
                },
                attachButtonOnAddElementForm: {
                    selector: '//me-event-agenda-element-host-topics/div/div/button',
                    locateStrategy: 'xpath'
                },
                attachCancelWindowButton: {
                    selector: '(//div[@class="modal in fade"]//span[contains(text(),"×")])[2]',
                    locateStrategy: 'xpath'
                },
                saveButton: {
                    selector: '//div[@class="col-sm-12 container_btn_group"]/button[2][contains(text(),"Save")]',
                    locateStrategy: 'xpath'
                },
                cancelButton: {
                    selector: '//button[contains(text(),"Cancel")]',
                    locateStrategy: 'xpath'
                },
                errorMassegeElementTypeSelect: {
                    selector: '(//p[@class="help-block"])[1]',
                    locateStrategy: 'xpath'
                },
                errorMassegeStartHour: {
                    selector: '(//p[@class="help-block"])[2]',
                    locateStrategy: 'xpath'
                },
                errorMassegeEndtHour: {
                    selector: '(//p[@class="help-block"])[3]',
                    locateStrategy: 'xpath'
                },
                namePresentation: {
                    selector: '(//table[@class="table table-striped"]//li)[1]',
                    locateStrategy: 'xpath'
                },
                editPresentationButton: {
                    selector: '(//i[@class="fa fa-pencil edit-element"])[1]',
                    locateStrategy: 'xpath'
                },
                deletePresentationButton: {
                    selector: '(//i[@class="fa fa-trash-o delete-element"])[1]',
                    locateStrategy: 'xpath'
                },
                plusPresentationButton: {
                    selector: '//i[@class="fa fa-plus"]',
                    locateStrategy: 'xpath'
                },
                TOMANYMEETINGhostsText: {
                    selector: '//label[contains(text(),"1 TO MANY MEETING hosts")]',
                    locateStrategy: 'xpath'
                },
                tableSizeText: {
                    selector: '//label[contains(text(),"Table size")]',
                    locateStrategy: 'xpath'
                },
                tableSizeInput: {
                    selector: '//input[@id="tableSize"]',
                    locateStrategy: 'xpath'
                },

            }
        },
        addRoom: {
            selector: '//h4[contains(text(),"Add room for Awards Panel 25-04-2013 08:59:00 - 09:59:00")]',
            locateStrategy: 'xpath',
            elements: {
                totalNameElementForm: {
                    selector: '//h4[contains(text(),"Add room for Awards Panel 25-04-2013 08:59:00 - 09:59:00")]',
                    locateStrategy: 'xpath'
                },
                nameRoomInput: {
                    selector: '//input[@name="room"]',
                    locateStrategy: 'xpath'
                },
                saveButton: {
                    selector: '//button[@class="btn btn-primary pull-left"]',
                    locateStrategy: 'xpath'
                }
            }
        },
        addPresentation: {
            selector: '//h4[text()="Add presentation to "]',
            locateStrategy: 'xpath',
            elements: {
                totalName: {
                    selector: '//h4[text()="Add presentation to "]',
                    locateStrategy: 'xpath'
                },
                checkbox: {
                    selector: '//input[@data-marker="me-modal-attach-presentation-to-element__input__checkbox__1670"]',
                    locateStrategy: 'xpath'
                },
                checkbox629: {
                    selector: '//input[@data-marker="me-modal-attach-presentation-to-element__input__checkbox__629"]',
                    locateStrategy: 'xpath'
                },
                saveButton: {
                    selector: '//button[@data-marker="me-modal-attach-presentation-to-element__input__button__save"]',
                    locateStrategy: 'xpath'
                },
                cancelButton: {
                    selector: '//button[@data-marker="me-modal-attach-presentation-to-element__input__button__cancel"]',
                    locateStrategy: 'xpath'
                }
            }
        },
        attachTemplate: {
            selector: '//button[text()="Attach template"]',
            locateStrategy: 'xpath',
            elements: {
                addattachTemplateButton: {
                    selector: '//button[text()="Attach template"]',
                    locateStrategy: 'xpath'
                },
                continiumButton: {
                    selector: '//button[@class="btn btn-primary pull-right"]',
                    locateStrategy: 'xpath'
                },
                firstRadioButton: {
                    selector: '(//input[@class="radio-item-input"])[1]',
                    locateStrategy: 'xpath'
                },
                doneButton: {
                    selector: '//button[@class="btn btn-success pull-right"]',
                    locateStrategy: 'xpath'
                },
                rowAgendaContainer: {
                    selector: '//div[@class="row agenda-container"]',
                    locateStrategy: 'xpath'
                },
                deleteButton: {
                    selector: '//i[@class="fa fa-trash-o delete-container"]',
                    locateStrategy: 'xpath'
                },
                confirmationSuccess: {
                    selector: '//*[contains(text(), "Confirmation")]/../../../..//*[@class="btn btn-success"]',
                    locateStrategy: 'xpath'
                },
            }
        },
        addHostTopics: {
            selector: '//h4[contains(text(), "Add host topics to")]',
            locateStrategy: 'xpath',
            elements: {
                nameModalWindow: {
                    selector: '//b[contains(text(),"Hosted table placeholder")]',
                    locateStrategy: 'xpath'
                },
            }
        },
    }
};