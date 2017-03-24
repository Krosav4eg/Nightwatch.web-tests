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

                showAllFilterOption: {
                    selector: '//h4[text()="Filters"]/../..//option[@value=1]',
                    locateStrategy: 'xpath'
                },
                showCancelledFilterOption: {
                    selector: '//h4[text()="Filters"]/../..//option[@value=2]',
                    locateStrategy: 'xpath'
                },
                showOnlyActiveFilterOption: {
                    selector: '//h4[text()="Filters"]/../..//option[@value=0]',
                    locateStrategy: 'xpath'
                },
                resetButton: {
                    selector: '//button[@class="btn btn-default btn-block filter-button-margins"]',
                    locateStrategy: 'xpath'
                },

                option20Page: {
                    selector: '//option[1][@value="20"]',
                    locateStrategy: 'xpath'
                },
                option50Page: {
                    selector: '//option[@value="50"]',
                    locateStrategy: 'xpath'
                },
                option100Page: {
                    selector: '//option[@value="100"]',
                    locateStrategy: 'xpath'
                },
                pageNumberCount: {
                    selector: '//span[text()="1 of 1"]',
                    locateStrategy: 'xpath'
                },
                pageNumber2Count: {
                    selector: '//span[text()="1 of 2"]',
                    locateStrategy: 'xpath'
                },
                nextLink: {
                    selector: '//a[text()="Next"]',
                    locateStrategy: 'xpath'
                },
                lastLink: {
                    selector: '//a[text()="Last"]',
                    locateStrategy: 'xpath'
                },
            }
        },

        companyNameColumn: {
            selector: '//tr[1]/th[1]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr[1]/th[1]',
                    locateStrategy: 'xpath'
                },
                seachColumn: {
                    selector: '//tr[1]/td[1]/input[@type="text"]',
                    locateStrategy: 'xpath'
                },
                firstRow: {
                    selector: '//tr[1]/td[1]/span',
                    locateStrategy: 'xpath'
                },
                secondRow: {
                    selector: '//tr[2]/td[1]/span',
                    locateStrategy: 'xpath'
                },
                thirdRow: {
                    selector: '//tr[3]/td[1]/span',
                    locateStrategy: 'xpath'
                },
                fourthRow: {
                    selector: '//tr[4]/td[1]/span',
                    locateStrategy: 'xpath'
                },
                fifthRow: {
                    selector: '//tr[5]/td[1]/span',
                    locateStrategy: 'xpath'
                },
                noResultsFound: {
                    selector: '//*[contains(text(),"No results found")]',
                    locateStrategy: 'xpath'
                }
            },
        },
        participationStatusColumn: {
            selector: '//tr[1]/th[2]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr[1]/th[2]',
                    locateStrategy: 'xpath'
                },

                allOption: {
                    selector: '//tr[1]/td[2]/span',
                    locateStrategy: 'xpath'
                },
                confirmedOption: {
                    selector: '//option[text()="Confirmed"]',
                    locateStrategy: 'xpath'
                },
                unconfirmedOption: {
                    selector: '//option[text()="Unconfirmed"]',
                    locateStrategy: 'xpath'
                },
                confirmedRebookOption: {
                    selector: '//option[text()="Confirmed (rebook)"]',
                    locateStrategy: 'xpath'
                },
                unconfirmedRebookOption: {
                    selector: '//option[text()="Unconfirmed (rebook)"]',
                    locateStrategy: 'xpath'
                },
                firstRow: {
                    selector: '//tr[1]/td[2]/span',
                    locateStrategy: 'xpath'
                },
                secondRow: {
                    selector: '//tr[2]/td[2]/span',
                    locateStrategy: 'xpath'
                },
                thirdRow: {
                    selector: '//tr[3]/td[2]/span',
                    locateStrategy: 'xpath'
                },
                fourthRow: {
                    selector: '//tr[4]/td[2]/span',
                    locateStrategy: 'xpath'
                },
                noResultsFound: {
                    selector: '//*[contains(text(),"No results found")]',
                    locateStrategy: 'xpath'
                }
            },
        },
        representativesColumn: {
            selector: '//tr[1]/th[5]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr[1]/th[5]',
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
                    selector: '//tr[2]/td[5]/span',
                    locateStrategy: 'xpath'
                },
                thirdRow: {
                    selector: '//tr[3]/td[5]/span',
                    locateStrategy: 'xpath'
                },
                fourthRow: {
                    selector: '//tr[4]/td[5]/span',
                    locateStrategy: 'xpath'
                },
                fifthRow: {
                    selector: '//tr[5]/td[5]/span',
                    locateStrategy: 'xpath'
                },
                noResultsFound: {
                    selector: '//*[contains(text(),"No results found")]',
                    locateStrategy: 'xpath'
                }
            },
        },
        guaranteeValidColumn: {
            selector: '//tr[1]/th[6]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr[1]/th[6]',
                    locateStrategy: 'xpath'
                },
                allOption: {
                    selector: '(//option)[9]',
                    locateStrategy: 'xpath'
                },
                yesOption: {
                    selector: '//option[text()="Yes"]',
                    locateStrategy: 'xpath'
                },
                noOption: {
                    selector: '//option[text()="No"]',
                    locateStrategy: 'xpath'
                },
                firstRow: {
                    selector: '//tr[1]/td[6]/span',
                    locateStrategy: 'xpath'
                },
                secondRow: {
                    selector: '//tr[2]/td[6]/span',
                    locateStrategy: 'xpath'
                },
                thirdRow: {
                    selector: '//tr[3]/td[6]/span',
                    locateStrategy: 'xpath'
                },
                fourthRow: {
                    selector: '//tr[4]/td[6]/span',
                    locateStrategy: 'xpath'
                },
                fifthRow: {
                    selector: '//tr[5]/td[6]/span',
                    locateStrategy: 'xpath'
                },
                noResultsFound: {
                    selector: '//*[contains(text(),"No results found")]',
                    locateStrategy: 'xpath'
                }
            },
        },
    }
};