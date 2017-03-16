module.exports = {
    sections : {
        allInformation: {
            selector: '//h4',
            locateStrategy: 'xpath',
            elements: {
                tableCountRow: {
                    selector: '//h4/span',
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
        participationStatusesColumn: {
            selector: '//tr/th[8]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr/th[8]',
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

        delgatesInfo: {
            selector: '//h4[@class="modal-title"]',
            locateStrategy: 'xpath',
            elements: {
                calledText: {
                    selector: '//*[text()="Called"]/../../div[2]',
                    locateStrategy: 'xpath'
                },
                calledButton: {
                    selector: '//button[text()="Called"]',
                    locateStrategy: 'xpath'
                },
            }
        },
    }
};