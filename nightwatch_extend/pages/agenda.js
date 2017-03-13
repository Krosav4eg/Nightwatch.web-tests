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
                endTime: {
                    selector: '//b[2][contains(text(),"10:00")]',
                    locateStrategy: 'xpath'
                },
                end8Time: {
                    selector: '//b[2][contains(text(),"8:00")]',
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
                    selector: '//a[3]/i[@class="fa fa-trash-o delete-element"]',
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
                }
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
                hostedTablePlaceholderOption: {
                    selector: '//option[@value="23"]',
                    locateStrategy: 'xpath'
                },
                awardsPanelOption: {
                    selector: '//option[@value="35"]',
                    locateStrategy: 'xpath'
                },
                dinnerPlaceholderOption: {
                    selector: '//option[@value="34"]',
                    locateStrategy: 'xpath'
                },
                groupDiscussionPlaceholderOption: {
                    selector: '//option[@value="33"]',
                    locateStrategy: 'xpath'
                },
                lunchPlaceholderOption: {
                    selector: '//option[@value="32"]',
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
                saveButton: {
                    selector: '//div[@class="col-sm-12 container_btn_group"]/button[2][contains(text(),"Save")]',
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
        }
    }
};