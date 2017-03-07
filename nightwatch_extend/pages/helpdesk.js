module.exports = {
    sections: {
        delegateDetails: {
            selector: '//tr[2]/td[6]/span/a[1]',
            locateStrategy: 'xpath',
            elements: {
                lutherDelegate: {
                    selector: '//a[text()="Luther"]',
                    locateStrategy: 'xpath'
                },
                LaaksonenDelegate:{
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
                    selector: '//h4',
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

                participationStatus:{
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
                    selector: '//button[text()="Cancel"]',
                    locateStrategy: 'xpath'
                },
            }
        }
    }
};