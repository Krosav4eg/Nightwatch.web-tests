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
                resetAllButton: {
                    selector: '//*[@class="btn btn-default btn-block filter-button-margins"]',
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

                clearSelectionButton: {
                    selector: '//*[@class="btn btn-default btn-primary clear-selection-btn-margin"]',
                    locateStrategy: 'xpath'
                },
                sendEmailButton: {
                    selector: '//a[text()="Send email"]',
                    locateStrategy: 'xpath'
                },
                sendSMSButton: {
                    selector: '//a[text()="Send SMS"]',
                    locateStrategy: 'xpath'
                },
                alertMassege: {
                    selector: '//div[@class="simple-notification toast-notification alert"]',
                    locateStrategy: 'xpath'
                },
                successMassege: {
                    selector: '//div[@class="simple-notification toast-notification success"]',
                    locateStrategy: 'xpath'
                },
                contentMassege: {
                    selector: '//div[@class="sn-content"]',
                    locateStrategy: 'xpath'
                },
            }
        },

        checkboxColumn: {
            selector: '//tr[1]/th[1]',
            locateStrategy: 'xpath',
            elements: {
                allcheCkbox: {
                    selector: '(//input[@type="checkbox"])[1]',
                    locateStrategy: 'xpath'
                },
                firstRow: {
                    selector: '(//input[@type="checkbox"])[2]',
                    locateStrategy: 'xpath'
                },
                secondRow: {
                    selector: '(//input[@type="checkbox"])[3]',
                    locateStrategy: 'xpath'
                },
                thirdRow: {
                    selector: '(//input[@type="checkbox"])[4]',
                    locateStrategy: 'xpath'
                },
                fourthRow: {
                    selector: '(//input[@type="checkbox"])[5]',
                    locateStrategy: 'xpath'
                },
            }
        },
        idColumn: {
            selector: '//tr[1]/th[2]',
            locateStrategy: 'xpath',
            elements: {
                id50730: {
                    selector: '//a[@href="/representatives/edit/50730"]',
                    locateStrategy: 'xpath'
                },
                nameColumn: {
                    selector: '//tr[1]/th[2]',
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
                fifthRow: {
                    selector: '//tr[5]/td[2]/span',
                    locateStrategy: 'xpath'
                },
                noResultsFound: {
                    selector: '//*[contains(text(),"No results found")]',
                    locateStrategy: 'xpath'
                }
            },
        },
        firstNameColumn: {
            selector: '//tr[1]/th[3]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr[1]/th[3]',
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
                    selector: '//tr[2]/td[3]/span',
                    locateStrategy: 'xpath'
                },
                thirdRow: {
                    selector: '//tr[3]/td[3]/span',
                    locateStrategy: 'xpath'
                },
                fourthRow: {
                    selector: '//tr[4]/td[3]/span',
                    locateStrategy: 'xpath'
                },
                noResultsFound: {
                    selector: '//*[contains(text(),"No results found")]',
                    locateStrategy: 'xpath'
                }
            },
        },
        lastNameColumn: {
            selector: '//tr[1]/th[4]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr[1]/th[4]',
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
                    selector: '//tr[2]/td[4]/span',
                    locateStrategy: 'xpath'
                },
                thirdRow: {
                    selector: '//tr[3]/td[4]/span',
                    locateStrategy: 'xpath'
                },
                fourthRow: {
                    selector: '//tr[4]/td[4]/span',
                    locateStrategy: 'xpath'
                },
                noResultsFound: {
                    selector: '//*[contains(text(),"No results found")]',
                    locateStrategy: 'xpath'
                }
            },
        },
        functionTitleColumn: {
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
            },
        },
        companyNameColumn: {
            selector: '//tr[1]/th[6]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr[1]/th[6]',
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
        mobileColumn: {
            selector: '//tr[1]/th[7]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr[1]/th[7]',
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
        emailColumn: {
            selector: '//tr[1]/th[8]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr[1]/th[8]',
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
                    selector: '//tr[2]/td[8]/span',
                    locateStrategy: 'xpath'
                },
                thirdRow: {
                    selector: '//tr[3]/td[8]/span',
                    locateStrategy: 'xpath'
                },
                fourthRow: {
                    selector: '//tr[4]/td[8]/span',
                    locateStrategy: 'xpath'
                },
                noResultsFound: {
                    selector: '//*[contains(text(),"No results found")]',
                    locateStrategy: 'xpath'
                }
            },
        },
        countryColumn: {
            selector: '//tr[1]/th[9]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr[1]/th[9]',
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
                    selector: '//tr[2]/td[9]/span',
                    locateStrategy: 'xpath'
                },
                thirdRow: {
                    selector: '//tr[3]/td[9]/span',
                    locateStrategy: 'xpath'
                },
                fourthRow: {
                    selector: '//tr[4]/td[9]/span',
                    locateStrategy: 'xpath'
                },
                noResultsFound: {
                    selector: '//*[contains(text(),"No results found")]',
                    locateStrategy: 'xpath'
                }
            },
        },
        participationStatusColumn: {
            selector: '//tr[1]/th[10]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr[1]/th[10]',
                    locateStrategy: 'xpath'
                },
                unconfirmedOption: {
                    selector: '//option[text()="Unconfirmed"]',
                    locateStrategy: 'xpath'
                },
                confirmedOption: {
                    selector: '//option[text()="Confirmed"]',
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
                    selector: '//tr[1]/td[10]/span',
                    locateStrategy: 'xpath'
                },
                secondRow: {
                    selector: '//tr[2]/td[10]/span',
                    locateStrategy: 'xpath'
                },
                thirdRow: {
                    selector: '//tr[3]/td[10]/span',
                    locateStrategy: 'xpath'
                },
                fourthRow: {
                    selector: '//tr[4]/td[10]/span',
                    locateStrategy: 'xpath'
                },
                noResultsFound: {
                    selector: '//*[contains(text(),"No results found")]',
                    locateStrategy: 'xpath'
                }
            },
        },
        activeOfferingColumn: {
            selector: '//tr[1]/th[11]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr[1]/th[11]',
                    locateStrategy: 'xpath'
                },
                seachColumn: {
                    selector: '//tr[1]/td[11]/input[@type="text"]',
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
        MEAccountColumn: {
            selector: '//tr[1]/th[12]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr[1]/th[12]',
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
                    selector: '//tr[1]/td[12]/span',
                    locateStrategy: 'xpath'
                },
                secondRow: {
                    selector: '//tr[2]/td[12]/span',
                    locateStrategy: 'xpath'
                },
                thirdRow: {
                    selector: '//tr[3]/td[12]/span',
                    locateStrategy: 'xpath'
                },
                fourthRow: {
                    selector: '//tr[4]/td[12]/span',
                    locateStrategy: 'xpath'
                },
                noResultsFound: {
                    selector: '//*[contains(text(),"No results found")]',
                    locateStrategy: 'xpath'
                }
            },
        },

        sendEmail: {
            selector: '//h4[text()="Select E-mail template"]',
            locateStrategy: 'xpath',
            elements: {
                templateSelect: {
                    selector: '//select[@class="form-control ng-untouched ng-pristine ng-valid"]',
                    locateStrategy: 'xpath'
                },

                option170: {
                    selector: '//option[@value=170]',
                    locateStrategy: 'xpath'
                },
                option581: {
                    selector: '//option[@value=581]',
                    locateStrategy: 'xpath'
                },

                fromEmailInput: {
                    selector: '//*[contains(text(), "From Email")]/../div/input',
                    locateStrategy: 'xpath'
                },
                fromNameInput: {
                    selector: '//*[contains(text(), "From Name")]/../div/input',
                    locateStrategy: 'xpath'
                },
                replyToEmailInput: {
                    selector: '//*[contains(text(), "Reply-To Email")]/../div/input',
                    locateStrategy: 'xpath'
                },
                subjectInput: {
                    selector: '//*[contains(text(), "Subject")]/../div/input',
                    locateStrategy: 'xpath'
                },
                sendEmailButton: {
                    selector: '//button[text()="Send Email"]',
                    locateStrategy: 'xpath'
                },
                sendSMSButton: {
                    selector: '//a[text()="Send SMS"]',
                    locateStrategy: 'xpath'
                },
                cancelButton: {
                    selector: '//button[text()="Cancel"]',
                    locateStrategy: 'xpath'
                },
                closeButton: {
                    selector: '//button[@class="close"]',
                    locateStrategy: 'xpath'
                },
            }
        },
        sendSMS: {
            selector: '//h4[text()="Select SMS template"]',
            locateStrategy: 'xpath',
            elements: {
                templateSelect: {
                    selector: '//select[@class="form-control ng-untouched ng-pristine ng-valid"]',
                    locateStrategy: 'xpath'
                },
                option97: {
                    selector: '//option[@value=97]',
                    locateStrategy: 'xpath'
                },
                option575: {
                    selector: '//option[@value=575]',
                    locateStrategy: 'xpath'
                },
                textSMS: {
                    selector: '//*[@class="form-control ng-untouched ng-pristine"]',
                    locateStrategy: 'xpath'
                },
                sendSMSButton: {
                    selector: '//button[text()="Send SMS"]',
                    locateStrategy: 'xpath'
                },
                cancelButton: {
                    selector: '//button[text()="Cancel"]',
                    locateStrategy: 'xpath'
                },
                closeButton: {
                    selector: '//button[@class="close"]',
                    locateStrategy: 'xpath'
                },
            }
        }
    }
};