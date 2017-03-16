var meetinCommands = {
    clickByDateOption: function(data, time) {
        var selector = '//option[contains(text(), "' + data + '") and contains(text(), "' + time +'")]';
        this.clickBySelectorXpath(selector);
    }
};

module.exports = {
    commands: [meetinCommands],
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

                linkMeetingSummaryInLeftMenu: {
                    selector: '//a[@id="MeetingSummaryIndex"]',
                    locateStrategy: 'xpath'
                },
            }
        },
        meetingTypeFilter: {
            selector: '//label[text()="Meeting type"]',
            locateStrategy: 'xpath',
            elements: {
                meetingTypeSelect: {
                    selector: '//select[@name="meetingType"]',
                    locateStrategy: 'xpath'
                },
                allOption: {
                    selector: '(//option[contains(text(), "All")])[1]',
                    locateStrategy: 'xpath'
                },
                to1meetingOption: {
                    selector: '//option[contains(text(), "1-to-1 meeting")]',
                    locateStrategy: 'xpath'
                },
                hostedTableMeetingOption: {
                    selector: '//option[contains(text(), "Hosted table meeting")]',
                    locateStrategy: 'xpath'
                },
            }
        },
        meetingStatusFilter: {
            selector: '//label/span[text()="Meeting status"]',
            locateStrategy: 'xpath',
            elements: {
                meetingTypeSelect: {
                    selector: '//select[@name="meetingStatus"]',
                    locateStrategy: 'xpath'
                },
                allOption: {
                    selector: '(//option[contains(text(), "All")])[2]',
                    locateStrategy: 'xpath'
                },
                bookedOption: {
                    selector: '//option[contains(text(), "Booked")]',
                    locateStrategy: 'xpath'
                },
                cancelledOption: {
                    selector: '(//option[contains(text(), "Cancelled")])[1]',
                    locateStrategy: 'xpath'
                },
                suggestedOption: {
                    selector: '(//option[contains(text(), "Suggested")])[1]',
                    locateStrategy: 'xpath'
                },
                delegateCancellationOption: {
                    selector: '//option[contains(text(), "Delegate Cancellation")]',
                    locateStrategy: 'xpath'
                },
                queuedOption: {
                    selector: '//option[contains(text(), "Queued")]',
                    locateStrategy: 'xpath'
                },
                openOption: {
                    selector: '//option[contains(text(), "Open")]',
                    locateStrategy: 'xpath'
                },
                rejectedOption: {
                    selector: '//option[contains(text(), "Rejected")]',
                    locateStrategy: 'xpath'
                },
            }
        },
        meetingSourceFilter: {
            selector: '//label/span[text()="Meeting source"]',
            locateStrategy: 'xpath',
            elements: {
                meetingTypeSelect: {
                    selector: '//select[@name="meetingSource"]',
                    locateStrategy: 'xpath'
                },
                allOption: {
                    selector: '(//option[contains(text(), "All")])[3]',
                    locateStrategy: 'xpath'
                },
                requestOption: {
                    selector: '//option[contains(text(), "Request")]',
                    locateStrategy: 'xpath'
                },
                additionalOption: {
                    selector: '//option[contains(text(), "Additional")]',
                    locateStrategy: 'xpath'
                },
                suggestedOption: {
                    selector: '(//option[contains(text(), "Suggested")])[2]',
                    locateStrategy: 'xpath'
                },
            }
        },
        meetingTimeFilter: {
            selector: '//label/span[text()="Meeting time"]',
            locateStrategy: 'xpath',
            elements: {
                meetingTypeSelect: {
                    selector: '//me-agenda-datetime-selection-dropdown/select[@class="full-size"]',
                    locateStrategy: 'xpath'
                },
                nowButton: {
                    selector: '//button[@name="removePastMeetings"]',
                    locateStrategy: 'xpath'
                },
                allOption: {
                    selector: '//option[text()="All"]',
                    locateStrategy: 'xpath'
                },
                firstDay: {
                    selector: '(//span[text()="Meeting time"]/../..//option[contains(text(), "All")])[2]',
                    locateStrategy: 'xpath'
                },
                secondDay: {
                    selector: '(//span[text()="Meeting time"]/../..//option[contains(text(), "All")])[3]',
                    locateStrategy: 'xpath'
                },
            }
        },

        detailsColumn: {
            selector: '//tr/th[1]',
            locateStrategy: 'xpath',
            elements: {
                firstRowDetails: {
                    selector: '//tr[1]/td[1]/span/a',
                    locateStrategy: 'xpath'
                },
            }
        },
        meetingTimeColumn: {
            selector: '//tr/th[2]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr/th[2]',
                    locateStrategy: 'xpath'
                },
                seachColumn: {
                    selector: '//tr[1]/td[2]/input[@type="text"]',
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
                }
            }
        },
        meetingTypeColumn: {
            selector: '//tr/th[3]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr/th[3]',
                    locateStrategy: 'xpath'
                },
                seachColumn: {
                    selector: '//tr[1]/td[3]/input[@type="text"]',
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
        durationColumn: {
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
        attendanceStatusColumn: {
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
        checkingStatusColumn: {
            selector: '//tr/th[6]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr/th[6]',
                    locateStrategy: 'xpath'
                },

                allOption: {
                    selector: '(//tr/td/select/option)[1]',
                    locateStrategy: 'xpath'
                },
                okOption: {
                    selector: '//option[text()="OK"]',
                    locateStrategy: 'xpath'
                },
                cancelledOption: {
                    selector: '//option[text()="Cancelled"]',
                    locateStrategy: 'xpath'
                },
                rescheduleOption: {
                    selector: '//option[text()="Reschedule"]',
                    locateStrategy: 'xpath'
                },

                firstRow: {
                    selector: '//tr[1]/td[6]/span',
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
        partnerCompanyColumn: {
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
        representativeColumn: {
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
        delegateColumn: {
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
                },
                noResultsFound: {
                    selector: '//*[contains(text(),"No results found")]',
                    locateStrategy: 'xpath'
                }
            }
        },
        delegateCompanyColumn: {
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

        meetingDetails: {
            selector: '//h4[contains(text(), "Meeting")]',
            locateStrategy: 'xpath',
            elements: {
                nameModalWindow: {
                    selector: '//h4[contains(text(), "Meeting")]',
                    locateStrategy: 'xpath'
                },
                meetingTime: {
                    selector: '//*[text()="Meeting Time "]/../../div[2]',
                    locateStrategy: 'xpath'
                },
                delegate: {
                    selector: '//*[text()="Delegate "]/../../div[2]',
                    locateStrategy: 'xpath'
                },
                delegateMobile: {
                    selector: '//*[text()="Delegate mobile"]/../../div[2]',
                    locateStrategy: 'xpath'
                },
                representative: {
                    selector: '//*[text()="Representative "]/../../div[2]',
                    locateStrategy: 'xpath'
                },
                representativeMobile: {
                    selector: '//*[text()="Representative mobile "]/../../div[2]',
                    locateStrategy: 'xpath'
                },
                meetingStatus: {
                    selector: '//*[text()="Meeting Status"]/../../div[2]',
                    locateStrategy: 'xpath'
                },
                meetingType: {
                    selector: '//*[text()="Meeting Type"]/../../div[2]',
                    locateStrategy: 'xpath'
                },
                meetingInitiated: {
                    selector: '//*[text()="Meeting initiated"]/../../div[2]',
                    locateStrategy: 'xpath'
                },
                meetingRequest: {
                    selector: '//*[text()="Meeting Request/suggestion sent"]/../../div[2]',
                    locateStrategy: 'xpath'
                },
                meetingBooked: {
                    selector: '//*[text()="Meeting Booked"]/../../div[2]',
                    locateStrategy: 'xpath'
                },
                modified: {
                    selector: '//*[text()="Modified"]/../../div[2]',
                    locateStrategy: 'xpath'
                },
                participationStatus: {
                    selector: '//*[text()="Participation Status"]/../../div[2]',
                    locateStrategy: 'xpath'
                },
                attendanceStatus: {
                    selector: '//*[text()="Attendance Status"]/../../div[2]',
                    locateStrategy: 'xpath'
                },

                checkingStatusSelect: {
                    selector: '//*[text()="Checking Status"]/../../div/select',
                    locateStrategy: 'xpath'
                },
                undefinedOption: {
                    selector: '//option[contains(text(), "Undefined")]',
                    locateStrategy: 'xpath'
                },
                okOption: {
                    selector: '//*[text()="Checking Status"]/../..//option[contains(text(), "OK")]',
                    locateStrategy: 'xpath'
                },
                canceledOption: {
                    selector: '//option[contains(text(), "Canceled")]',
                    locateStrategy: 'xpath'
                },

                delegateMobileService: {
                    selector: '//*[text()="Delegate mobile service"]/../../div[2]/a',
                    locateStrategy: 'xpath'
                },
                representativeMobileService: {
                    selector: '//*[text()="Representative mobile service"]/../../div[2]/a',
                    locateStrategy: 'xpath'
                },
                sms: {
                    selector: '//*[text()="SMS"]/../../div[2]',
                    locateStrategy: 'xpath'
                },
                called: {
                    selector: '//*[text()="Called"]/../../div[2]',
                    locateStrategy: 'xpath'
                },
                participationNotesInput: {
                    selector: '//*[text()="Participation notes"]/../../div[2]/textarea',
                    locateStrategy: 'xpath'
                },
                callingNotesInput: {
                    selector: '//*[text()="Calling notes"]/../../div[2]/textarea',
                    locateStrategy: 'xpath'
                },
                closeButton: {
                    selector: '//button[text()="Close"]',
                    locateStrategy: 'xpath'
                },
                saveButton: {
                    selector: '//button[text()="Save"]',
                    locateStrategy: 'xpath'
                },
            }
        },
        nameEvents: {
            selector: '//a[@href="/events/2339/helpdesk"]',
            locateStrategy: 'xpath',
            elements: {
                NordicStrategyForumEvents: {
                    selector: '//a[@href="/events/2339/helpdesk"]',
                    locateStrategy: 'xpath'
                },
            }
        },
    }
};