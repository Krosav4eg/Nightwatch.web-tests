module.exports = {
    sections : {
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
                tableCountRow: {
                    selector: '//h4/span',
                    locateStrategy: 'xpath'
                },
                tableName: {
                    selector: '(//h4)[2]',
                    locateStrategy: 'xpath'
                },
            }
        },
        filter: {
            selector: '//div[@class="panel-heading" and contains(text(), "Filters")]',
            locateStrategy: 'xpath',
            elements: {
                filterSelect: {
                    selector: '//select[@class="form-control ng-valid ng-dirty ng-touched"]',
                    locateStrategy: 'xpath'
                },
                showAllOption: {
                    selector: '//option[contains(text(),"Show all")]',
                    locateStrategy: 'xpath'
                },
                noShowCallsOption: {
                    selector: '//option[contains(text(),"No show calls")]',
                    locateStrategy: 'xpath'
                },
                showOnlyConfirmedOption: {
                    selector: '//option[contains(text(),"Show only confirmed")]',
                    locateStrategy: 'xpath'
                },

                resetAllButton: {
                    selector: '//button[@class="btn btn-default btn-block filter-button-margins"]',
                    locateStrategy: 'xpath'
                }
            }
        },

        attendanceStatusesColumn: {
            selector: '//tr/th[1]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr/th[1]',
                    locateStrategy: 'xpath'
                },
                selectElement: {
                    selector: '(//td/select)[1]',
                    locateStrategy: 'xpath'
                },
                allOption: {
                    selector: '(//option)[4]',
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
                    selector: '//tr[1]/td[1]/span',
                    locateStrategy: 'xpath'
                },
                secondRow: {
                    selector: '//tr[2]/td[1]',
                    locateStrategy: 'xpath'
                },
                thirdRow: {
                    selector: '//tr[3]/td[1]',
                    locateStrategy: 'xpath'
                },
                fourthRow: {
                    selector: '//tr[4]/td[1]',
                    locateStrategy: 'xpath'
                },
                noResultsFound: {
                    selector: '//*[contains(text(),"No results found")]',
                    locateStrategy: 'xpath'
                }
            }
        },
        lastNameColumn: {
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
                    selector: '//tr[1]/td[2]/span/a',
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
        firstNameColumn: {
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
                }
            }
        },
        companyColumn: {
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
        calledColumn: {
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
        callingNotesColumn: {
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
        participationNotesColumn: {
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
        participationStatusesColumn: {
            selector: '//tr/th[8]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr/th[8]',
                    locateStrategy: 'xpath'
                },
                selectElement: {
                    selector: '(//td/select)[2]',
                    locateStrategy: 'xpath'
                },
                allOption: {
                    selector: '(//option)[11]',
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
                unconfirmedOption: {
                    selector: '//option[text()="Unconfirmed"]',
                    locateStrategy: 'xpath'
                },
                unconfirmedRebookOption: {
                    selector: '//option[text()="Unconfirmed Rebook"]',
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
                },
                noResultsFound: {
                    selector: '//*[contains(text(),"No results found")]',
                    locateStrategy: 'xpath'
                }
            }
        },
        firstMeetingTimeColumn: {
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

        delgatesInfo: {
            selector: '//h4[@class="modal-title"]',
            locateStrategy: 'xpath',
            elements: {
                partnerName: {
                    selector: '//h4',
                    locateStrategy: 'xpath'
                },
                delegateName: {
                    selector: '//h4[@class="modal-title"]',
                    locateStrategy: 'xpath'
                },
                partnerId: {
                    selector: '(//a[@href="/delegates/edit/94420"])[1]',
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
                calledText: {
                    selector: '//*[text()="Called"]/../../div[2]',
                    locateStrategy: 'xpath'
                },
                calledButton: {
                    selector: '//button[text()="Called"]',
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
                    selector: '//select[@formcontrolname="attendanceStatus"]',
                    locateStrategy: 'xpath'
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

                saveButton: {
                    selector: '//button[text()="Save"]',
                    locateStrategy: 'xpath'
                },
                cancelButton: {
                    selector: '//button[text()="Cancel"]',
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
    }
};