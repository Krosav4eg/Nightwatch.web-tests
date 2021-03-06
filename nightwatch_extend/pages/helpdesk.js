module.exports = {
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
            }
        },
        showFilter: {
            selector: '//select[@name="show"]',
            locateStrategy: 'xpath',
            elements: {
                showFilterSelector: {
                    selector: '//select[@name="show"]',
                    locateStrategy: 'xpath'
                },
                allOption: {
                    selector: '(//option[text()="All"])[1]',
                    locateStrategy: 'xpath'
                },
                ShowConfirmedAndUnconfirmedOption: {
                    selector: '(//option[@value=1])[1]',
                    locateStrategy: 'xpath'
                },
                showOnlyAttendingOption: {
                    selector: '(//option[@value=2])[1]',
                    locateStrategy: 'xpath'
                },
            }
        },
        eventGroupFilter: {
            selector: '//select[@name="eventGroupId"]',
            locateStrategy: 'xpath',
            elements: {
                showFilterSelector: {
                    selector: '//select[@name="eventGroupId"]',
                    locateStrategy: 'xpath'
                },
                allOption: {
                    selector: '(//option[text()="All"])[1]',
                    locateStrategy: 'xpath'
                },
                orangeOption: {
                    selector: '(//option[@value=3695])[1]',
                    locateStrategy: 'xpath'
                },
                purpleOption: {
                    selector: '(//option[@value=3696])[1]',
                    locateStrategy: 'xpath'
                },
            }
        },
        delegateDetails: {
            selector: '//tr[1]/td[6]/span/a[1]',
            locateStrategy: 'xpath',
            elements: {
                LimDelegate: {
                    selector: '//a[text()="Lim"]',
                    locateStrategy: 'xpath'
                },
                lutherDelegate: {
                    selector: '//a[text()="Luther"]',
                    locateStrategy: 'xpath'
                },
                LaaksonenDelegate: {
                    selector: '//a[text()="Laaksonen"]',
                    locateStrategy: 'xpath'
                },
                delegateName: {
                    selector: '//h4[@class="modal-title"]',
                    locateStrategy: 'xpath'
                },
                partnerId: {
                    selector: '(//a[@href="/delegates/edit/92068"])[1]',
                    locateStrategy: 'xpath'
                },
                partnerName: {
                    selector: '//h4[@class="modal-title"]',
                    locateStrategy: 'xpath'
                },
                masterId: {
                    selector: '//a[@class="btn-link"]',
                    locateStrategy: 'xpath'
                },
                title: {
                    selector: '//div[@class="margin-top"]',
                    locateStrategy: 'xpath'
                },
                company: {
                    selector: '//div[@class="col-sm-12"]/div[2]',
                    locateStrategy: 'xpath'
                },
                mobile: {
                    selector: '//*[text()="Mobile "]/../../div[2]',
                    locateStrategy: 'xpath'
                },
                telDirect: {
                    selector: '//*[text()="Tel. Direct "]/../../div[2]',
                    locateStrategy: 'xpath'
                },
                telSwitchboard: {
                    selector: '//*[text()="Tel.Switchboard "]/../../div[2]',
                    locateStrategy: 'xpath'
                },
                delegateGroup: {
                    selector: '//*[text()="Delegate Group"]/../../div[2]',
                    locateStrategy: 'xpath'
                },
                eventRoles: {
                    selector: '//*[text()="Event Roles"]/../../div[2]',
                    locateStrategy: 'xpath'
                },
            }
        },
        bookedMeetings: {
            selector: '//div[contains(text(), "Booked Meetings")]',
            locateStrategy: 'xpath',
            elements: {
                titleName: {
                    selector: '//div[contains(text(), "Booked Meetings")]',
                    locateStrategy: 'xpath'
                },
                icon: {
                    selector: '//div[@class="panel panel-green"]//i[@class="fa fa-user"]',
                    locateStrategy: 'xpath'
                },
                dataMeeting: {
                    selector: '//div[@class="panel panel-green"]//*[@class="col-sm-2 panel-heading-meetings-col"]/div[1]',
                    locateStrategy: 'xpath'
                },
                timeMeeting: {
                    selector: '//div[@class="panel panel-green"]//*[@class="col-sm-2 panel-heading-meetings-col"]/div[2]',
                    locateStrategy: 'xpath'
                },
                firstname: {
                    selector: '//div[@class="panel panel-green"]//*[@class="col-sm-7 panel-heading-meetings-col"]/div[1]',
                    locateStrategy: 'xpath'
                },
                lastname: {
                    selector: '//div[@class="panel panel-green"]//*[@class="col-sm-7 panel-heading-meetings-col"]/div[2]',
                    locateStrategy: 'xpath'
                },
                status: {
                    selector: '//div[@class="panel panel-green"]//*[@class="col-sm-2 panel-heading-meetings-col panel-heading-meetings-status bold"]',
                    locateStrategy: 'xpath'
                },
                cancelButton: {
                    selector: '//div[@class="panel panel-green"]//button[text()="Cancel"]',
                    locateStrategy: 'xpath'
                },
                rescheduleButton: {
                    selector: '//div[@class="panel panel-green"]//button[text()="Reschedule"]',
                    locateStrategy: 'xpath'
                },
                changeRepresentativeButton: {
                    selector: '//div[@class="panel panel-green"]//button[text()="Change representative"]',
                    locateStrategy: 'xpath'
                },
                changeRepresentativeHeader: {
                    selector: '//h4[contains(text(),"Change representative")]',
                    locateStrategy: 'xpath'
                },
                changeRepresentativeImportantInfo: {
                    selector: '//span[contains(text(),"* The meeting with original representative will be cancelled ")]',
                    locateStrategy: 'xpath'
                },
                changeRepresentativeButtonInNewWindow: {
                    selector: '(//button[contains(text(),"Change representative")])[7]',
                    locateStrategy: 'xpath'
                },
                changeRepresentativeInputWindow: {
                    selector: '//select[@placeholder="Representative"]',
                    locateStrategy: 'xpath'
                }
            }
        },

        queuingMeetings: {
            selector: '//div[contains(text(), "Queuing Meetings")]',
            locateStrategy: 'xpath',
            elements: {
                titleName: {
                    selector: '//div[contains(text(), "Queuing Meetings")]',
                    locateStrategy: 'xpath'
                },
                dataMeeting: {
                    selector: '//div[contains(text(), "Queuing Meetings")]/../../../..//span[@class="left-oriented"]',
                    locateStrategy: 'xpath'
                },
                bookMeetingButton: {
                    selector: '//div[contains(text(), "Queuing Meetings")]/../../../..//button[text()="Book meeting"]',
                    locateStrategy: 'xpath'
                },
                changeRepresentativeButton: {
                    selector: '//div[contains(text(), "Queuing Meetings")]/../../../..//button[text()="Change representative"]',
                    locateStrategy: 'xpath'
                },
            }
        },

        meetingsRequests: {
            selector: '//div[contains(text(),"Meeting Requests")]',
            locateStrategy: 'xpath',
            elements: {
                titleName: {
                    selector: '//div[contains(text(),"Meeting Requests")]',
                    locateStrategy: 'xpath'
                },
                closeButton: {
                    selector: '//button[@aria-label="Close"]',
                    locateStrategy: 'xpath'
                },
                modalContent: {
                    selector: '//div[@class="modal-content"]',
                    locateStrategy: 'xpath'
                },
                bookedErrorMessage: {
                    selector: '//div[contains(text(),"No matching availability between delegate and partner (ErrorCode: 102)")]',
                    locateStrategy: 'xpath'
                },
                rejectSuccessMessage: {
                    selector: '//div[contains(text(),"Meeting request was rejected")]',
                    locateStrategy: 'xpath'
                },
                chevronDown: {
                    selector: '(//i[@class="pull-right glyphicon accordion-panel-arrow glyphicon-chevron-down"])[2]',
                    locateStrategy: 'xpath'
                },
                participatingDelegate1: {
                    selector: '(//h4[@class="col-lg-12"]/span)[1]',
                    locateStrategy: 'xpath'
                },
                participatingDelegate1Status: {
                    selector: '(//b[contains(text(),"Rejected")])[1]',
                    locateStrategy: 'xpath'
                },
                participatingDelegate2: {
                    selector: '(//h4[@class="col-lg-12"]/span)[3]',
                    locateStrategy: 'xpath'
                },
                participatingDelegate2Status: {
                    selector: '//b[contains(text(),"Open")]',
                    locateStrategy: 'xpath'
                },
                participatingDelegate3: {
                    selector: '(//h4[@class="col-lg-12"]/span)[5]',
                    locateStrategy: 'xpath'
                },
                participatingDelegate3Status: {
                    selector: '(//b[contains(text(),"Rejected")])[2]',
                    locateStrategy: 'xpath'
                },
                offeringsForParticipant1: {
                    selector: '(//b[contains(text(),"Offerings")])[1]',
                    locateStrategy: 'xpath'
                },
                securitySolutionsForParticipant1: {
                    selector: '(//b[contains(text(),"Security solutions")])[1]',
                    locateStrategy: 'xpath'
                },
                personalMessageForParticipant1: {
                    selector: '(//b[contains(text(),"Personal Message")])[1]',
                    locateStrategy: 'xpath'
                },
                bookedMeetingButtonForParticipant1: {
                    selector: '(//button[contains(text(),"Book meeting")])[1]',
                    locateStrategy: 'xpath'
                },
                rejectedButtonForParticipant1: {
                    selector: '(//button[contains(text(),"Reject meeting")])[1]',
                    locateStrategy: 'xpath'
                },
                offeringsForParticipant2: {
                    selector: '(//b[contains(text(),"Offerings")])[2]',
                    locateStrategy: 'xpath'
                },
                securitySolutionsForParticipant2: {
                    selector: '(//b[contains(text(),"Security solutions")])[2]',
                    locateStrategy: 'xpath'
                },
                personalMessageForParticipant2: {
                    selector: '(//b[contains(text(),"Personal Message")])[2]',
                    locateStrategy: 'xpath'
                },
                bookedMeetingButtonForParticipant2: {
                    selector: '(//button[contains(text(),"Book meeting")])[2]',
                    locateStrategy: 'xpath'
                },
                rejectedButtonForParticipant2: {
                    selector: '(//button[contains(text(),"Reject meeting")])[2]',
                    locateStrategy: 'xpath'
                },
                offeringsForParticipant3: {
                    selector: '(//b[contains(text(),"Offerings")])[3]',
                    locateStrategy: 'xpath'
                },
                securitySolutionsForParticipant3: {
                    selector: '(//b[contains(text(),"Security solutions")])[3]',
                    locateStrategy: 'xpath'
                },
                personalMessageForParticipant3: {
                    selector: '(//b[contains(text(),"Personal Message")])[3]',
                    locateStrategy: 'xpath'
                },
                bookedMeetingButtonForParticipant3: {
                    selector: '(//button[contains(text(),"Book meeting")])[3]',
                    locateStrategy: 'xpath'
                },
                rejectedButtonForParticipant3: {
                    selector: '(//button[contains(text(),"Reject meeting")])[3]',
                    locateStrategy: 'xpath'
                },
                chevronUp: {
                    selector: '(//i[@class="pull-right glyphicon accordion-panel-arrow glyphicon-chevron-up"])[2]',
                    locateStrategy: 'xpath'
                },
            }
        },

        suggestedMeetings: {
            selector: '//div[contains(text(),"Suggested Meetings")]',
            locateStrategy: 'xpath',
            elements: {
                titleName: {
                    selector: '//div[contains(text(),"Suggested Meetings")]',
                    locateStrategy: 'xpath'
                },
                popUp: {
                    selector: '(//div[@class="panel-collapse collapse in show"])[2]',
                    locateStrategy: 'xpath'
                },
                chevronDown: {
                    selector: '(//i[@class="pull-right glyphicon accordion-panel-arrow glyphicon-chevron-down"])[3]',
                    locateStrategy: 'xpath'
                },
                chevronUp: {
                    selector: '(//i[@class="pull-right glyphicon accordion-panel-arrow glyphicon-chevron-up"])[2]',
                    locateStrategy: 'xpath'
                },
            }
        },

        reschedulingButtonFunctionality: {
            selector: '(//button[contains(text(),"Reschedule")])[1]',
            locateStrategy: 'xpath',
            elements: {
                reschedulingButton: {
                    selector: '(//button[contains(text(),"Reschedule")])[1]',
                    locateStrategy: 'xpath'
                },

                firstParticipant: {
                    selector: '(//h4/div[3]/div[2])[1]',
                    locateStrategy: 'xpath'
                },
                selectTimeHeader: {
                    selector: '//h4[contains(text(),"Select a time for the meeting")]',
                    locateStrategy: 'xpath'
                },
                duringTimeHeader: {
                    selector: '//label[contains(text(),"During official meeting times")]',
                    locateStrategy: 'xpath'
                },
                duringTimeInputField: {
                    selector: '//select[@formcontrolname="time"]',
                    locateStrategy: 'xpath'
                },
                overlappingHeader: {
                    selector: '//label[contains(text(),"Overlapping with presentation")]',
                    locateStrategy: 'xpath'
                },
                overlappingInputField: {
                    selector: '//select[@formcontrolname="overlappingTime"]',
                    locateStrategy: 'xpath'
                }
            }
        },
        informationDelegate: {
            selector: '//div[@class="modal-content"]',
            locateStrategy: 'xpath',
            elements: {
                called: {
                    selector: '//b[text()="Called"]/../../div[2]',
                    locateStrategy: 'xpath'
                },
                calledButton: {
                    selector: '//b[text()="Called"]/../../div/button',
                    locateStrategy: 'xpath'
                },
                availability: {
                    selector: '//b[text()="Availability"]/../../div[2]',
                    locateStrategy: 'xpath'
                },
                availabilityEditLink: {
                    selector: '//b[text()="Availability"]/../../div/a',
                    locateStrategy: 'xpath'
                },

                participationStatus: {
                    selector: 'select[formcontrolname="participationStatus"]',
                    locateStrategy: 'css selector'
                },
                cancelledOption: {
                    selector: '//select[@formcontrolname="participationStatus"]//option[text()="Cancelled"]',
                    locateStrategy: 'xpath'
                },
                confirmedOption: {
                    selector: '//select[@formcontrolname="participationStatus"]//option[text()="Confirmed"]',
                    locateStrategy: 'xpath'
                },
                confirmedRebookOption: {
                    selector: '//select[@formcontrolname="participationStatus"]//option[text()="Confirmed Rebook"]',
                    locateStrategy: 'xpath'
                },
                lateCancellationOption: {
                    selector: '//select[@formcontrolname="participationStatus"]//option[text()="Late cancellation"]',
                    locateStrategy: 'xpath'
                },
                noShowOption: {
                    selector: '//select[@formcontrolname="participationStatus"]//option[text()="No show"]',
                    locateStrategy: 'xpath'
                },
                unconfirmedOption: {
                    selector: '//select[@formcontrolname="participationStatus"]//option[text()="Unconfirmed"]',
                    locateStrategy: 'xpath'
                },
                unconfirmedRebookOption: {
                    selector: '//select[@formcontrolname="participationStatus"]//option[text()="Unconfirmed Rebook"]',
                    locateStrategy: 'xpath'
                },
                noShowButton: {
                    selector: '//button[text()="No show"]',
                    locateStrategy: 'xpath'
                },

                attendanceStatus: {
                    selector: 'select[formcontrolname="attendanceStatus"]',
                    locateStrategy: 'css selector'
                },
                calledCanceledOption: {
                    selector: '//select[@formcontrolname="attendanceStatus"]//option[text()="Called - Canceled"]',
                    locateStrategy: 'xpath'
                },
                calledDelayedOption: {
                    selector: '//select[@formcontrolname="attendanceStatus"]//option[text()="Called - Delayed"]',
                    locateStrategy: 'xpath'
                },
                calledNotReachedOption: {
                    selector: '//select[@formcontrolname="attendanceStatus"]//option[text()="Called - Not reached"]',
                    locateStrategy: 'xpath'
                },
                checkedInOption: {
                    selector: '//select[@formcontrolname="attendanceStatus"]//option[text()="Checked in"]',
                    locateStrategy: 'xpath'
                },
                leftOption: {
                    selector: '//select[@formcontrolname="attendanceStatus"]//option[text()="Left"]',
                    locateStrategy: 'xpath'
                },
                notArrivedOption: {
                    selector: '//select[@formcontrolname="attendanceStatus"]//option[text()="Not Arrived"]',
                    locateStrategy: 'xpath'
                },

                participationNotes: {
                    selector: '//*[text()="Participation notes"]/../../div/textarea',
                    locateStrategy: 'xpath'
                },
                callingNotes: {
                    selector: '//*[text()="Calling notes"]/../../div/textarea',
                    locateStrategy: 'xpath'
                },

                saveButton: {
                    selector: '//button[text()="Save"]',
                    locateStrategy: 'xpath'
                },
                cancelButton: {
                    selector: '//*[@class="modal-footer"]//button[text()="Cancel"]',
                    locateStrategy: 'xpath'
                },

                confirmYesButton: {
                    selector: '//button[@data-marker="me-confirm__button__button__yes"]',
                    locateStrategy: 'xpath'
                },

                confirmNoButton: {
                    selector: '//button[@data-marker="me-confirm__button__button__no"]',
                    locateStrategy: 'xpath'
                },
            }
        },
        checkboxColmn: {
            selector: '(//input[@type="checkbox"])[1]',
            locateStrategy: 'xpath',
            elements: {
                allCheckbox: {
                    selector: '(//input[@type="checkbox"])[1]',
                    locateStrategy: 'xpath'
                },
                firstRow: {
                    selector: '(//input[@type="checkbox"])[2]',
                    locateStrategy: 'xpath'
                },
                secondRow: {
                    selector: '(//input[@type="checkbox"])[3]',
                    locateStrategy: 'xpath'
                },
                thirdRow: {
                    selector: '(//input[@type="checkbox"])[4]',
                    locateStrategy: 'xpath'
                },
                fourthRow: {
                    selector: '(//input[@type="checkbox"])[5]',
                    locateStrategy: 'xpath'
                }
            }
        },
        attendanceStatusesColumn: {
            selector: '//tr/th[2]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr/th[2]',
                    locateStrategy: 'xpath'
                },
                allOption: {
                    selector: '(//option)[7]',
                    locateStrategy: 'xpath'
                },
                canceledOption: {
                    selector: '//option[text()="Canceled"]',
                    locateStrategy: 'xpath'
                },
                checkedInOption: {
                    selector: '//option[text()="Checked in"]',
                    locateStrategy: 'xpath'
                },
                delayedOption: {
                    selector: '//option[text()="Delayed"]',
                    locateStrategy: 'xpath'
                },
                leftOption: {
                    selector: '//option[text()="Left"]',
                    locateStrategy: 'xpath'
                },
                notArrivedOption: {
                    selector: '//option[text()="Not Arrived"]',
                    locateStrategy: 'xpath'
                },
                notReachedOption: {
                    selector: '//option[text()="Not reached"]',
                    locateStrategy: 'xpath'
                },
                firstRow: {
                    selector: '//tr[1]/td[2]/span',
                    locateStrategy: 'xpath'
                },
                secondRow: {
                    selector: '//tr[2]/td[2]',
                    locateStrategy: 'xpath'
                },
                thirdRow: {
                    selector: '//tr[3]/td[2]',
                    locateStrategy: 'xpath'
                },
                fourthRow: {
                    selector: '//tr[4]/td[2]',
                    locateStrategy: 'xpath'
                },
                noResultsFound: {
                    selector: '//*[contains(text(),"No results found")]',
                    locateStrategy: 'xpath'
                }
            }
        },
        participationStatusesColumn: {
            selector: '//tr/th[3]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr/th[3]',
                    locateStrategy: 'xpath'
                },
                allOption: {
                    selector: '(//option)[14]',
                    locateStrategy: 'xpath'
                },
                cancelledOption: {
                    selector: '//option[text()="Cancelled"]',
                    locateStrategy: 'xpath'
                },
                confirmedOption: {
                    selector: '//option[text()="Confirmed"]',
                    locateStrategy: 'xpath'
                },
                confirmedRebookOption: {
                    selector: '//option[text()="Confirmed Rebook"]',
                    locateStrategy: 'xpath'
                },
                lateCancellationOption: {
                    selector: '//option[text()="Late cancellation"]',
                    locateStrategy: 'xpath'
                },
                noShowOption: {
                    selector: '//option[text()="No show"]',
                    locateStrategy: 'xpath'
                },
                prospectOption: {
                    selector: '//option[text()="Prospect"]',
                    locateStrategy: 'xpath'
                },
                unconfirmedOption: {
                    selector: '//option[text()="Unconfirmed"]',
                    locateStrategy: 'xpath'
                },
                unconfirmedRebookOption: {
                    selector: '//option[text()="Unconfirmed Rebook"]',
                    locateStrategy: 'xpath'
                },
                firstRow: {
                    selector: '//tr[1]/td[3]/span',
                    locateStrategy: 'xpath'
                },
                secondRow: {
                    selector: '//tr[2]/td[3]',
                    locateStrategy: 'xpath'
                },
                thirdRow: {
                    selector: '//tr[3]/td[3]',
                    locateStrategy: 'xpath'
                },
                fourthRow: {
                    selector: '//tr[4]/td[3]',
                    locateStrategy: 'xpath'
                },
                noResultsFound: {
                    selector: '//*[contains(text(),"No results found")]',
                    locateStrategy: 'xpath'
                }
            }
        },
        idColumn: {
            selector: '//tr/th[4]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr/th[4]',
                    locateStrategy: 'xpath'
                },
                seachColumn: {
                    selector: '//tr[1]/td[4]/input[@type="text"]',
                    locateStrategy: 'xpath'
                },
                firstRow: {
                    selector: '//tr[1]/td[4]/span',
                    locateStrategy: 'xpath'
                },
                secondRow: {
                    selector: '//tr[2]/td[4]',
                    locateStrategy: 'xpath'
                },
                thirdRow: {
                    selector: '//tr[3]/td[4]',
                    locateStrategy: 'xpath'
                },
                fourthRow: {
                    selector: '//tr[4]/td[4]',
                    locateStrategy: 'xpath'
                }
            }
        },
        firstNameColumn: {
            selector: '//tr/th[5]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr/th[5]',
                    locateStrategy: 'xpath'
                },
                seachColumn: {
                    selector: '//tr[1]/td[5]/input[@type="text"]',
                    locateStrategy: 'xpath'
                },
                firstRow: {
                    selector: '//tr[1]/td[5]/span',
                    locateStrategy: 'xpath'
                },
                secondRow: {
                    selector: '//tr[2]/td[5]',
                    locateStrategy: 'xpath'
                },
                thirdRow: {
                    selector: '//tr[3]/td[5]',
                    locateStrategy: 'xpath'
                },
                fourthRow: {
                    selector: '//tr[4]/td[5]',
                    locateStrategy: 'xpath'
                }
            }
        },
        lastNameColumn: {
            selector: '//tr/th[6]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr/th[6]',
                    locateStrategy: 'xpath'
                },
                seachColumn: {
                    selector: '//tr[1]/td[6]/input[@type="text"]',
                    locateStrategy: 'xpath'
                },
                firstRow: {
                    selector: '//tr[1]/td[6]/span/a[1]',
                    locateStrategy: 'xpath'
                },
                firstRowLogo: {
                    selector: '//tr[1]/td[6]/span/a[2]',
                    locateStrategy: 'xpath'
                },
                firstRowWithLastName: {
                    selector: '//tr[1]/td[6]//a[contains(text(),"Röynä")]',
                    locateStrategy: 'xpath'
                },
                secondRowWithLastName: {
                    selector: '//tr[2]/td[6]//a',
                    locateStrategy: 'xpath'
                },
                secondRow: {
                    selector: '//tr[2]/td[6]',
                    locateStrategy: 'xpath'
                },
                thirdRow: {
                    selector: '//tr[3]/td[6]',
                    locateStrategy: 'xpath'
                },
                fourthRow: {
                    selector: '//tr[4]/td[6]',
                    locateStrategy: 'xpath'
                }
            }
        },
        companyColumn: {
            selector: '//tr/th[7]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr/th[7]',
                    locateStrategy: 'xpath'
                },
                seachColumn: {
                    selector: '//tr[1]/td[7]/input[@type="text"]',
                    locateStrategy: 'xpath'
                },
                firstRow: {
                    selector: '//tr[1]/td[7]/span',
                    locateStrategy: 'xpath'
                },
                secondRow: {
                    selector: '//tr[2]/td[7]',
                    locateStrategy: 'xpath'
                },
                thirdRow: {
                    selector: '//tr[3]/td[7]',
                    locateStrategy: 'xpath'
                },
                fourthRow: {
                    selector: '//tr[4]/td[7]',
                    locateStrategy: 'xpath'
                }
            }
        },
        eventGroupColumn: {
            selector: '//tr/th[8]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr/th[8]',
                    locateStrategy: 'xpath'
                },
                seachColumn: {
                    selector: '//tr[1]/td[8]/input[@type="text"]',
                    locateStrategy: 'xpath'
                },
                firstRow: {
                    selector: '//tr[1]/td[8]/span',
                    locateStrategy: 'xpath'
                },
                secondRow: {
                    selector: '//tr[2]/td[8]',
                    locateStrategy: 'xpath'
                },
                thirdRow: {
                    selector: '//tr[3]/td[8]',
                    locateStrategy: 'xpath'
                },
                fourthRow: {
                    selector: '//tr[4]/td[8]',
                    locateStrategy: 'xpath'
                }
            }
        },
        bookedMeetingsColumn: {
            selector: '//tr/th[9]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr/th[9]',
                    locateStrategy: 'xpath'
                },
                seachColumn: {
                    selector: '//tr[1]/td[9]/input[@type="text"]',
                    locateStrategy: 'xpath'
                },
                firstRow: {
                    selector: '//tr[1]/td[9]/span',
                    locateStrategy: 'xpath'
                },
                secondRow: {
                    selector: '//tr[2]/td[9]',
                    locateStrategy: 'xpath'
                },
                thirdRow: {
                    selector: '//tr[3]/td[9]',
                    locateStrategy: 'xpath'
                },
                fourthRow: {
                    selector: '//tr[4]/td[9]',
                    locateStrategy: 'xpath'
                }
            }
        },
        open121RequestsColumn: {
            selector: '//tr/th[10]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr/th[10]',
                    locateStrategy: 'xpath'
                },
                seachColumn: {
                    selector: '//tr[1]/td[10]/input[@type="text"]',
                    locateStrategy: 'xpath'
                },
                firstRow: {
                    selector: '//tr[1]/td[10]/span',
                    locateStrategy: 'xpath'
                },
                secondRow: {
                    selector: '//tr[2]/td[10]',
                    locateStrategy: 'xpath'
                },
                thirdRow: {
                    selector: '//tr[3]/td[10]',
                    locateStrategy: 'xpath'
                },
                fourthRow: {
                    selector: '//tr[4]/td[10]',
                    locateStrategy: 'xpath'
                }
            }
        },
        open121suggestionsColumn: {
            selector: '//tr/th[11]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr/th[11]',
                    locateStrategy: 'xpath'
                },
                seachColumn: {
                    selector: '//tr[1]/td[11]/input[@type="text"]',
                    locateStrategy: 'xpath'
                },
                firstRow: {
                    selector: '//tr[1]/td[11]/span',
                    locateStrategy: 'xpath'
                },
                secondRow: {
                    selector: '//tr[2]/td[11]',
                    locateStrategy: 'xpath'
                },
                thirdRow: {
                    selector: '//tr[3]/td[11]',
                    locateStrategy: 'xpath'
                },
                fourthRow: {
                    selector: '//tr[4]/td[11]',
                    locateStrategy: 'xpath'
                }
            }
        },
        openHostedTableSuggestionsColumn: {
            selector: '//tr/th[12]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr/th[12]',
                    locateStrategy: 'xpath'
                },
                seachColumn: {
                    selector: '//tr[1]/td[12]/input[@type="text"]',
                    locateStrategy: 'xpath'
                },
                firstRow: {
                    selector: '//tr[1]/td[12]/span',
                    locateStrategy: 'xpath'
                },
                secondRow: {
                    selector: '//tr[2]/td[12]',
                    locateStrategy: 'xpath'
                },
                thirdRow: {
                    selector: '//tr[3]/td[12]',
                    locateStrategy: 'xpath'
                },
                fourthRow: {
                    selector: '//tr[4]/td[12]',
                    locateStrategy: 'xpath'
                }
            }
        },
        rejectedRequestsColumn: {
            selector: '//tr/th[13]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr/th[13]',
                    locateStrategy: 'xpath'
                },
                seachColumn: {
                    selector: '//tr[1]/td[13]/input[@type="text"]',
                    locateStrategy: 'xpath'
                },
                firstRow: {
                    selector: '//tr[1]/td[13]/span',
                    locateStrategy: 'xpath'
                },
                secondRow: {
                    selector: '//tr[2]/td[13]',
                    locateStrategy: 'xpath'
                },
                thirdRow: {
                    selector: '//tr[3]/td[13]',
                    locateStrategy: 'xpath'
                },
                fourthRow: {
                    selector: '//tr[4]/td[13]',
                    locateStrategy: 'xpath'
                }
            }
        },
        queuingMeetingsColumn: {
            selector: '//tr/th[14]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr/th[14]',
                    locateStrategy: 'xpath'
                },
                seachColumn: {
                    selector: '//tr[1]/td[14]/input[@type="text"]',
                    locateStrategy: 'xpath'
                },
                firstRow: {
                    selector: '//tr[1]/td[14]/span',
                    locateStrategy: 'xpath'
                },
                secondRow: {
                    selector: '//tr[2]/td[14]',
                    locateStrategy: 'xpath'
                },
                thirdRow: {
                    selector: '//tr[3]/td[14]',
                    locateStrategy: 'xpath'
                },
                fourthRow: {
                    selector: '//tr[4]/td[14]',
                    locateStrategy: 'xpath'
                }
            }
        },
        meetingsToRescheduleColumn: {
            selector: '//tr/th[15]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr/th[15]',
                    locateStrategy: 'xpath'
                },
                seachColumn: {
                    selector: '//tr[1]/td[15]/input[@type="text"]',
                    locateStrategy: 'xpath'
                },
                firstRow: {
                    selector: '//tr[1]/td[15]/span',
                    locateStrategy: 'xpath'
                },
                secondRow: {
                    selector: '//tr[2]/td[15]',
                    locateStrategy: 'xpath'
                },
                thirdRow: {
                    selector: '//tr[3]/td[15]',
                    locateStrategy: 'xpath'
                },
                fourthRow: {
                    selector: '//tr[4]/td[15]',
                    locateStrategy: 'xpath'
                }
            }
        },
        calledColumn: {
            selector: '//tr/th[16]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr/th[16]',
                    locateStrategy: 'xpath'
                },
                seachColumn: {
                    selector: '//tr[1]/td[16]/input[@type="text"]',
                    locateStrategy: 'xpath'
                },
                firstRow: {
                    selector: '//tr[1]/td[16]/span',
                    locateStrategy: 'xpath'
                },
                secondRow: {
                    selector: '//tr[2]/td[16]',
                    locateStrategy: 'xpath'
                },
                thirdRow: {
                    selector: '//tr[3]/td[16]',
                    locateStrategy: 'xpath'
                },
                fourthRow: {
                    selector: '//tr[4]/td[16]',
                    locateStrategy: 'xpath'
                }
            }
        },
        participationNotesColumn: {
            selector: '//tr/th[19]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr/th[18]',
                    locateStrategy: 'xpath'
                },
                seachColumn: {
                    selector: '//tr[1]/td[18]/input[@type="text"]',
                    locateStrategy: 'xpath'
                },
                firstRow: {
                    selector: '//tr[1]/td[18]/span',
                    locateStrategy: 'xpath'
                },
                secondRow: {
                    selector: '//tr[2]/td[18]',
                    locateStrategy: 'xpath'
                },
                thirdRow: {
                    selector: '//tr[3]/td[18]',
                    locateStrategy: 'xpath'
                },
                fourthRow: {
                    selector: '//tr[4]/td[18]',
                    locateStrategy: 'xpath'
                }
            }
        },
        callingNotesColumn: {
            selector: '//tr/th[19]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr/th[19]',
                    locateStrategy: 'xpath'
                },
                seachColumn: {
                    selector: '//tr[1]/td[19]/input[@type="text"]',
                    locateStrategy: 'xpath'
                },
                firstRow: {
                    selector: '//tr[1]/td[19]/span',
                    locateStrategy: 'xpath'
                },
                secondRow: {
                    selector: '//tr[2]/td[19]',
                    locateStrategy: 'xpath'
                },
                thirdRow: {
                    selector: '//tr[3]/td[19]',
                    locateStrategy: 'xpath'
                },
                fourthRow: {
                    selector: '//tr[4]/td[19]',
                    locateStrategy: 'xpath'
                }
            }
        },
        templatesInDropDownList: {
            selector: '(//select)[6]',
            locateStrategy: 'xpath',
            elements: {
                dropListButton: {
                    selector: '(//select)[6]',
                    locateStrategy: 'xpath'
                },
                blankField: {
                    selector: '(//option)[28]',
                    locateStrategy: 'xpath'
                },
                directToAppAgenda: {
                    selector: '//option[@value="607"]',
                    locateStrategy: 'xpath'
                },
                linkToMobileService: {
                    selector: '//option[@value="576"]',
                    locateStrategy: 'xpath'
                },
                linkToMobileService1DayBefore: {
                    selector: '//option[@value="577"]',
                    locateStrategy: 'xpath'
                },
                newMeetingBooked: {
                    selector: '//option[@value="97"]',
                    locateStrategy: 'xpath'
                },
                newMeetingBookedRequest: {
                    selector: '//option[@value="99"]',
                    locateStrategy: 'xpath'
                },
                smsRegression: {
                    selector: '//option[@value="608"]',
                    locateStrategy: 'xpath'
                },
                textTemplateArea: {
                    selector: '//div[@class="modal in fade"]//textarea',
                    locateStrategy: 'xpath'
                },
            }
        },
        pageTemplateFieldIsBlank: {
            selector: '(//tr/td/input[@type="checkbox"])[1]',
            locateStrategy: 'xpath',
            elements: {
                firstCheckbox: {
                    selector: '(//tr/td/input[@type="checkbox"])[1]',
                    locateStrategy: 'xpath'
                },
                sendSmS1: {
                    selector: '(//button[contains(text(),"Send SMS")])[1]',
                    locateStrategy: 'xpath'
                },
                selectSmSTemplateHeader: {
                    selector: '//h4[contains(text(),"Select SMS template")]',
                    locateStrategy: 'xpath'
                },
                templateTextName: {
                    selector: '//div[contains(text(),"Template:")]',
                    locateStrategy: 'xpath'
                }

            }
        },
        sendSmSButtonWithoutChosenTemplate: {
            selector: '(//button[contains(text(),"Send SMS")])[2]',
            locateStrategy: 'xpath',
            elements: {
                sendSmS2: {
                    selector: '(//button[contains(text(),"Send SMS")])[2]',
                    locateStrategy: 'xpath'
                },
                choseTemplateAlert: {
                    selector: '//div[contains(text(),"Please choose template.")]',
                    locateStrategy: 'xpath'
                },
                closeButton: {
                    selector: '//button[@class="close"]',
                    locateStrategy: 'xpath'
                },
            }
        },
        informationWouldBeUpdate: {
            selector: '//h1[contains(text(),"Edit Sms Template (#99)")]',
            locateStrategy: 'xpath',
            elements: {
                templateHeader: {
                    selector: '//h1[contains(text(),"Edit Sms Template (#99)")]',
                    locateStrategy: 'xpath'
                },
                name: {
                    selector: '//input[@id="name"]',
                    locateStrategy: 'xpath'
                },
                recipientType: {
                    selector: '//select[@id="recipientType"]',
                    locateStrategy: 'xpath'
                },
                receiverType: {
                    selector: '//select[@formcontrolname="receiverType"]',
                    locateStrategy: 'xpath'
                },
                messageType: {
                    selector: '//select[@formcontrolname="messageType"]',
                    locateStrategy: 'xpath'
                },
                saveButton1: {
                    selector: '(//button[contains(text(),"Save")])[1]',
                    locateStrategy: 'xpath'
                },
                successTemplateAlert: {
                    selector: '//div[contains(text(),"The Template was updated successfully")]',
                    locateStrategy: 'xpath'
                },
                textArea: {
                    selector: '(//textarea)[1]',
                    locateStrategy: 'xpath'
                },
                saveButton2: {
                    selector: '(//button[contains(text(),"Save")])[2]',
                    locateStrategy: 'xpath'
                },
                successLocalizationTemplateAlert: {
                    selector: '//div[contains(text(),"The Localization Template was updated successfully")]',
                    locateStrategy: 'xpath'
                },

            }
        }
    }
};
