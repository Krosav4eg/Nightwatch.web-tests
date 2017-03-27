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
                noResultsFound: {
                    selector: '//*[contains(text(),"No results found")]',
                    locateStrategy: 'xpath'
                }
            },
        },
        matchedHostedTablesColumn: {
            selector: '//tr/th[9]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr/th[9]',
                    locateStrategy: 'xpath'
                },
                allOption: {
                    selector: '(//option)[10]',
                    locateStrategy: 'xpath'
                },
                okOption: {
                    selector: '//td[9]//option[text()="OK"]',
                    locateStrategy: 'xpath'
                },
                pendingOption: {
                    selector: '//td[9]//option[text()="PENDING"]',
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
    }
};