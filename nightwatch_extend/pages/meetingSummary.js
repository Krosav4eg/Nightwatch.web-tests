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
    }
};