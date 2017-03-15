module.exports = {
    elements: {
        titleName: {
            selector: '(//h4)[1]',
            locateStrategy: 'xpath'
        },
    },
    sections : {
        eventGroups: {
            selector: '//div[text()="Event Groups"]',
            locateStrategy: 'xpath',
            elements: {
                totalName: {
                    selector: '//div[text()="Event Groups"]',
                    locateStrategy: 'xpath'
                },
                group1Text: {
                    selector: '//p[contains(text(),"Group 1")]',
                    locateStrategy: 'xpath'
                },
                group2Text: {
                    selector: '//p[contains(text(),"Group 2")]',
                    locateStrategy: 'xpath'
                },
                group3Text: {
                    selector: '//p[contains(text(),"Group 3")]',
                    locateStrategy: 'xpath'
                },
                group4Text: {
                    selector: '//p[contains(text(),"Group 4")]',
                    locateStrategy: 'xpath'
                },
                group5Text: {
                    selector: '//p[contains(text(),"Group 5")]',
                    locateStrategy: 'xpath'
                },
                group6Text: {
                    selector: '//p[contains(text(),"Group 6")]',
                    locateStrategy: 'xpath'
                },

            }
        },
        delegatesEdit: {
            selector: '//legend[text()="Master Contact Information"]',
            locateStrategy: 'xpath',
            elements: {
                totalName: {
                    selector: '//legend[text()="Master Contact Information"]',
                    locateStrategy: 'xpath'
                },
                id105375Link: {
                    selector: '//a[contains(text(),"105375")]',
                    locateStrategy: 'xpath'
                },

                participationInformationText: {
                    selector: '//legend[text()="Participation Information"]',
                    locateStrategy: 'xpath'
                },

                confirmatedOption: {
                    selector: '(//label[text()="Participation status"]/..//option[contains(text(),"Confirmed")])[1]',
                    locateStrategy: 'xpath'
                },
                cancelledOption: {
                    selector: '(//label[text()="Participation status"]/..//option[contains(text(),"Cancelled")])[1]',
                    locateStrategy: 'xpath'
                },

                blockedTimesTotalText: {
                    selector: '//legend[text()="Blocked Times"]',
                    locateStrategy: 'xpath'
                },

                blockedTimesText: {
                    selector: '//label[text()="Blocked time(s)"]',
                    locateStrategy: 'xpath'
                },
                addBlockedTimeButton: {
                    selector: '//button[text()="Add Blocked Time"]',
                    locateStrategy: 'xpath'
                },

                saveButton: {
                    selector: '//*[text()="Save"]',
                    locateStrategy: 'xpath'
                }
            }
        },
    }
};