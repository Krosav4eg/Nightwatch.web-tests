var eventRolesCommands = {
    addAwardsCandidateRole: function(text) {
        var locatorTextInput = '//*[contains(text(),"' + text + '")]';
        this.section.allInformation
            .clickBySelector('@addNewRoleButton')

        this.section.eventParticipantRole
            .clickBySelector('@awardsCandidateOption')
            .setValueBySelector('@eventParticipantInput', text)

            .clickBySelectorXpath(locatorTextInput)
            .clickBySelector('@saveButton');
    },
    deleteFirstRole: function(text) {
        var locatorTextInput = '//option[contains(text(),"' + text + '")]';
        this
            .clickBySelectorXpath(locatorTextInput)
            .click('(//*[@class="btn btn-danger"])[1]');
    }
};
module.exports = {
    commands: [eventRolesCommands],
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
                addNewRoleButton: {
                    selector: '//button[text()="Add new role"]',
                    locateStrategy: 'xpath'
                },
                awardsCandidateText: {
                    selector: '//div[contains(text(),"Awards candidate")]',
                    locateStrategy: 'xpath'
                },
                awardsCandidateCount: {
                    selector: '//div[contains(text(),"Awards candidate")]/../div[2]',
                    locateStrategy: 'xpath'
                },
                assignedRolesCount: {
                    selector: '//*[contains(text(),"Assigned roles")]/span',
                    locateStrategy: 'xpath'
                },
                eventRoleStatsIndex: {
                    selector: '(//a[@id="EventRoleStatsIndex"])[2]',
                    locateStrategy: 'xpath'
                },
            }
        },
        eventParticipantRole: {
            selector: '//h4[text()="Event Participant Role"]',
            locateStrategy: 'xpath',
            elements: {
                awardsCandidateOption: {
                    selector: '//*[contains(text(), "Event Role")]/..//option[text()="Awards candidate"]',
                    locateStrategy: 'xpath'
                },
                eventParticipantInput: {
                    selector: '//input[@id="eventParticipant"]',
                    locateStrategy: 'xpath'
                },
                saveButton: {
                    selector: '//button[text()="Save"]',
                    locateStrategy: 'xpath'
                },
            }
        },
        eventRoleColumn: {
            selector: '//tr[1]/th[2]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr[1]/th[2]',
                    locateStrategy: 'xpath'
                },
                awardsCandidateOption: {
                    selector: '//option[contains(text(),"Awards candidate")]',
                    locateStrategy: 'xpath'
                },
            }
        }
    }
};