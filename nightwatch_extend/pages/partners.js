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

                addCompanyButton: {
                    selector: '(//button[text()="Add company"])[1]',
                    locateStrategy: 'xpath'
                },
                addCompanyButtonInModal: {
                    selector: '(//button[text()="Add company"])[2]',
                    locateStrategy: 'xpath'
                },
                cancelButtonInModal: {
                    selector: '//button[text()="Cancel"]',
                    locateStrategy: 'xpath'
                },
                closeButtonInModal: {
                    selector: '(//button[@aria-label="Close"]/span)[1]',
                    locateStrategy: 'xpath'
                },
                erroeMassege: {
                    selector: '//div[@class="simple-notification toast-notification error"]',
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

                companyNameInput: {
                    selector: '//input[@value-property-name="companyId"]',
                    locateStrategy: 'xpath'
                },
                clinArtMenaName: {
                    selector: '//*[contains(text(),"ClinArt Mena")]',
                    locateStrategy: 'xpath'
                },

            }
        },

        idColumn: {
            selector: '//tr/th[1]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr/th[1]',
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
        companyNameColumn: {
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
                    selector: '//tr[1]/td[2]/span',
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
                },
                noResultsFound: {
                    selector: '//*[contains(text(),"No results found")]',
                    locateStrategy: 'xpath'
                }
            }
        },
        participationNameColumn: {
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
                },
                noResultsFound: {
                    selector: '//*[contains(text(),"No results found")]',
                    locateStrategy: 'xpath'
                }
            }
        },
        participationStatusColumn: {
            selector: '//tr[1]/th[4]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr[1]/th[4]',
                    locateStrategy: 'xpath'
                },

                allOption: {
                    selector: '//tr[1]/td[4]/span',
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
        representativesColumn: {
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
                },
                noResultsFound: {
                    selector: '//*[contains(text(),"No results found")]',
                    locateStrategy: 'xpath'
                }
            }
        },
        meetingGuaranteeColumn: {
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
                },
                noResultsFound: {
                    selector: '//*[contains(text(),"No results found")]',
                    locateStrategy: 'xpath'
                }
            }
        },
        meetingRequestsColumn: {
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
                },
                noResultsFound: {
                    selector: '//*[contains(text(),"No results found")]',
                    locateStrategy: 'xpath'
                }
            }
        },
        createdColumn: {
            selector: '//tr/th[11]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr/th[11]',
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
                    selector: '//tr[2]/td[11]',
                    locateStrategy: 'xpath'
                },
                thirdRow: {
                    selector: '//tr[3]/td[11]',
                    locateStrategy: 'xpath'
                },
                fourthRow: {
                    selector: '//tr[4]/td[11]',
                    locateStrategy: 'xpath'
                },
                noResultsFound: {
                    selector: '//*[contains(text(),"No results found")]',
                    locateStrategy: 'xpath'
                }
            }
        },
        modifiedColumn: {
            selector: '//tr/th[13]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr/th[13]',
                    locateStrategy: 'xpath'
                },
                seachColumn: {
                    selector: '//tr[1]/td[13]/input[@type="text"]',
                    locateStrategy: 'xpath'
                },
                firstRow: {
                    selector: '//tr[1]/td[13]/span',
                    locateStrategy: 'xpath'
                },
                secondRow: {
                    selector: '//tr[2]/td[13]',
                    locateStrategy: 'xpath'
                },
                thirdRow: {
                    selector: '//tr[3]/td[13]',
                    locateStrategy: 'xpath'
                },
                fourthRow: {
                    selector: '//tr[4]/td[13]',
                    locateStrategy: 'xpath'
                },
                noResultsFound: {
                    selector: '//*[contains(text(),"No results found")]',
                    locateStrategy: 'xpath'
                }
            }
        },

        cancelParticipation: {
            selector: '(//button[contains(text(), "Cancel participation")])[1]',
            locateStrategy: 'xpath',
            elements: {
                firstButtonCancelParticipation: {
                    selector: '(//button[contains(text(), "Cancel participation")])[1]',
                    locateStrategy: 'xpath'
                },

                modalTitle: {
                    selector: '(//h4[@class="modal-title"])[1]',
                    locateStrategy: 'xpath'
                },
                formGroup: {
                    selector: '(//div[@class="form-group"])[1]',
                    locateStrategy: 'xpath'
                },
                closeButton: {
                    selector: '(//button[@aria-label="Close"]/span)[1]',
                    locateStrategy: 'xpath'
                },
                noButton: {
                    selector: '//button[text()="No"]',
                    locateStrategy: 'xpath'
                },
                yesButton: {
                    selector: '//button[text()="Yes"]',
                    locateStrategy: 'xpath'
                },
            },
        }
    }
};