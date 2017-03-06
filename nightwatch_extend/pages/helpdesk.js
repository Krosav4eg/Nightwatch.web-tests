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
        }
    }
};