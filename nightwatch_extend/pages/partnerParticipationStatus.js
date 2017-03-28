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

                option20Page: {
                    selector: '//option[1][@value="20"]',
                    locateStrategy: 'xpath'
                },
                option50Page: {
                    selector: '//div/select/option[@value="50"]',
                    locateStrategy: 'xpath'
                },
                option100Page: {
                    selector: '//div/select/option[@value="100"]',
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
                pageNumber3Count: {
                    selector: '//span[text()="1 of 3"]',
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
                noResultsFound: {
                    selector: '//*[contains(text(),"No results found")]',
                    locateStrategy: 'xpath'
                }
            },
        },
        packagMobileColumn: {
            selector: '//tr[1]/th[2]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr[1]/th[2]',
                    locateStrategy: 'xpath'
                },
                allOption: {
                    selector: '(//option)[1]',
                    locateStrategy: 'xpath'
                },
                eventBasedOption: {
                    selector: '//option[text()="Event based"]',
                    locateStrategy: 'xpath'
                },
                creditBasedOption: {
                    selector: '//option[text()="Credit based"]',
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
        componyInfoColumn: {
            selector: '//tr[1]/th[6]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr[1]/th[6]',
                    locateStrategy: 'xpath'
                },
                allOption: {
                    selector: '(//option)[4]',
                    locateStrategy: 'xpath'
                },
                okOption: {
                    selector: '//td[6]//option[text()="OK"]',
                    locateStrategy: 'xpath'
                },
                pendingOption: {
                    selector: '//td[6]//option[text()="PENDING"]',
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
                noResultsFound: {
                    selector: '//*[contains(text(),"No results found")]',
                    locateStrategy: 'xpath'
                }
            },
        },
        invoiceInfoColumn: {
            selector: '//tr[1]/th[7]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr[1]/th[7]',
                    locateStrategy: 'xpath'
                },
                allOption: {
                    selector: '(//option)[7]',
                    locateStrategy: 'xpath'
                },
                okOption: {
                    selector: '//td[7]//option[text()="OK"]',
                    locateStrategy: 'xpath'
                },
                pendingOption: {
                    selector: '//td[7]//option[text()="PENDING"]',
                    locateStrategy: 'xpath'
                },
                firstRow: {
                    selector: '//tr[1]/td[7]/span',
                    locateStrategy: 'xpath'
                },
                secondRow: {
                    selector: '//tr[2]/td[7]/span',
                    locateStrategy: 'xpath'
                },
                thirdRow: {
                    selector: '//tr[3]/td[7]/span',
                    locateStrategy: 'xpath'
                },
                fourthRow: {
                    selector: '//tr[4]/td[7]/span',
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
        rebookToNextColumn: {
            selector: '//tr[1]/th[11]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr[1]/th[11]',
                    locateStrategy: 'xpath'
                },
                allOption: {
                    selector: '(//option)[10]',
                    locateStrategy: 'xpath'
                },
                emptyOption: {
                    selector: '//option[text()="Empty"]',
                    locateStrategy: 'xpath'
                },
                okOption: {
                    selector: '(//option[text()="OK"])[3]',
                    locateStrategy: 'xpath'
                },
                firstRow: {
                    selector: '//tr[1]/td[11]/span',
                    locateStrategy: 'xpath'
                },
                secondRow: {
                    selector: '//tr[2]/td[11]/span',
                    locateStrategy: 'xpath'
                },
                thirdRow: {
                    selector: '//tr[3]/td[11]/span',
                    locateStrategy: 'xpath'
                },
                fourthRow: {
                    selector: '//tr[4]/td[11]/span',
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