module.exports = {
        sections: {
            event: {
                selector: '//h4',
                locateStrategy: 'xpath',
                elements: {
                    totalName214: {
                        selector: '//h4[text()="Event (#214)"]',
                        locateStrategy: 'xpath'
                    },
                    totalName212: {
                        selector: '//h4[text()="Event (#212)"]',
                        locateStrategy: 'xpath'
                    },
                    totalName2473: {
                        selector: '//h4[text()="Event (#2473)"]',
                        locateStrategy: 'xpath'
                    },
                    nameEvent: {
                        selector: '//h3',
                        locateStrategy: 'xpath'
                    },
                    localNameEvent: {
                        selector: '(//*[@class="panel-body"]/div)[1]',
                        locateStrategy: 'xpath'
                    },
                    daes: {
                        selector: '(//*[@class="panel-body"]/div)[2]',
                        locateStrategy: 'xpath'
                    },
                    venue: {
                        selector: '(//*[@class="panel-body"]/div)[3]',
                        locateStrategy: 'xpath'
                    }
                }
            },

            checkBox:{
                selector: '//table',
                locateStrategy: 'xpath',
                elements: {
                    allcheckBox: {
                        selector: '//thead/tr[1]/th[1]',
                        locateStrategy: 'xpath'
                    },
                    firstcheckBox: {
                        selector: '//table/tbody/tr[1]/td[1]/input',
                        locateStrategy: 'xpath'
                    },
                    secondcheckBox: {
                        selector: '//table/tbody/tr[2]/td[1]/input',
                        locateStrategy: 'xpath'
                    },
                    thirdcheckBox: {
                        selector: '//table/tbody/tr[3]/td[1]/input',
                        locateStrategy: 'xpath'
                    },
                }
            },

            companyColumn: {
                selector: '//tr[1]/th[2]',
                locateStrategy: 'xpath',
                elements: {
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
                    }
                },
            },

            lastNameColumn: {
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
                        selector: '//tr[1]/td[3]/span/a',
                        locateStrategy: 'xpath'
                    },
                    secondRow: {
                        selector: '//tr[2]/td[3]/span/a',
                        locateStrategy: 'xpath'
                    },
                    thirdRow: {
                        selector: '//tr[3]/td[3]/span/a',
                        locateStrategy: 'xpath'
                    },
                    fourthRow: {
                        selector: '//tr[4]/td[3]/span/a',
                        locateStrategy: 'xpath'
                    }
                },
            },

            firstNameColumn: {
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
                    }
                },
            },

            titleColumn: {
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
                    }
                },
            },

            emailColumn: {
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
                    }
                },
            },

            countryColumn: {
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
                    }
                },
            },

            organizerColumn: {
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
                        selector: '//tr[1]/td[9]/span/ul/li',
                        locateStrategy: 'xpath'
                    },
                    secondRow: {
                        selector: '//tr[2]/td[9]/span/ul/li',
                        locateStrategy: 'xpath'
                    },
                    thirdRow: {
                        selector: '//tr[3]/td[9]/span/ul/li',
                        locateStrategy: 'xpath'
                    },
                    fourthRow: {
                        selector: '//tr[4]/td[9]/span/ul/li',
                        locateStrategy: 'xpath'
                    },
                }
            },

            presentationTypeColumn: {
                selector: '//tr[1]/th[10]',
                locateStrategy: 'xpath',
                elements: {
                    nameColumn: {
                        selector: '//tr[1]/th[10]',
                        locateStrategy: 'xpath'
                    },

                    caseParallelOption: {
                        selector: '//option[text()="Case - parallel"]',
                        locateStrategy: 'xpath'
                    },
                    caseWholeAudienceOption: {
                        selector: '//option[text()="Case - whole audience"]',
                        locateStrategy: 'xpath'
                    },
                    casePresentationOption: {
                        selector: '//option[text()="Case presentation"]',
                        locateStrategy: 'xpath'
                    },
                    chairmanSpeechOption: {
                        selector: '//option[text()="Chairman speech"]',
                        locateStrategy: 'xpath'
                    },
                    crossFunctionKeynoteOption: {
                        selector: '//option[text()="Cross-function keynote"]',
                        locateStrategy: 'xpath'
                    },
                    debateOption: {
                        selector: '//option[text()="Debate"]',
                        locateStrategy: 'xpath'
                    },
                    fishBowlOption: {
                        selector: '//option[text()="FishBowl"]',
                        locateStrategy: 'xpath'
                    },
                    groupDiscussionInitiationOption: {
                        selector: '//option[text()="Group discussion initiation"]',
                        locateStrategy: 'xpath'
                    },
                    leadershipPresentationOption: {
                        selector: '//option[text()="Leadership presentation"]',
                        locateStrategy: 'xpath'
                    },
                    panelDiscussionOption: {
                        selector: '//option[text()="Panel discussion"]',
                        locateStrategy: 'xpath'
                    },

                    firstRow: {
                        selector: '//tr[1]/td[10]/span/ul/li',
                        locateStrategy: 'xpath'
                    },
                    secondRow: {
                        selector: '//tr[2]/td[10]/span/ul/li',
                        locateStrategy: 'xpath'
                    },
                    thirdRow: {
                        selector: '//tr[3]/td[10]/span/ul/li',
                        locateStrategy: 'xpath'
                    },
                    fourthRow: {
                        selector: '//tr[4]/td[10]/span/ul/li',
                        locateStrategy: 'xpath'
                    },
                    fifthRow: {
                        selector: '//tr[5]/td[10]/span/ul/li',
                        locateStrategy: 'xpath'
                    },
                    noResultsFound: {
                        selector: '//*[contains(text(),"No results found")]',
                        locateStrategy: 'xpath'
                    }
                }
            },

            eventRolesColumn: {
                selector: '//tr[1]/th[11]',
                locateStrategy: 'xpath',
                elements: {
                    nameColumn: {
                        selector: '//tr[1]/th[11]',
                        locateStrategy: 'xpath'
                    },
                    numberOfLines: {
                        selector: '//h4/span',
                        locateStrategy: 'xpath'
                    },
                    allOption: {
                        selector: '(//select)[2]',
                        locateStrategy: 'xpath'
                    },
                    firstEmptyOption: {
                        selector: '(//select)[2]/option[1]',
                        locateStrategy: 'xpath'
                    },
                    hostedTableHostOption: {
                        selector: '(//option[@value="1"])[2]',
                        locateStrategy: 'xpath'
                    },
                    groupDiscussionHostOption: {
                        selector: '(//option[@value="2"])[1]',
                        locateStrategy: 'xpath'
                    },
                    advisoryBoardMemberOption: {
                        selector: '(//option[@value="3"])[1]',
                        locateStrategy: 'xpath'
                    },
                    awardsCandidateOption: {
                        selector: '(//option[@value="4"])[2]',
                        locateStrategy: 'xpath'
                    },
                    caseExpertSpeakerOption: {
                        selector: '(//option[@value="5"])[2]',
                        locateStrategy: 'xpath'
                    },
                    chairmanOption: {
                        selector: '(//option[@value="6"])[2]',
                        locateStrategy: 'xpath'
                    },
                    crossFunctionKeynoteSpeakerOption: {
                        selector: '(//option[@value="7"])[2]',
                        locateStrategy: 'xpath'
                    },
                    debateSpeakerOption: {
                        selector: '(//option[@value="8"])[1]',
                        locateStrategy: 'xpath'
                    },
                    fishBowlSpeakerOption: {
                        selector: '(//option[@value="9"])[2]',
                        locateStrategy: 'xpath'
                    },
                    groupDiscussionInitiatorOption: {
                        selector: '(//option[@value="10"])[2]',
                        locateStrategy: 'xpath'
                    },
                    hostDelegateOption: {
                        selector: '(//option[@value="11"])[2]',
                        locateStrategy: 'xpath'
                    },
                    keynoteSpeakerOption: {
                        selector: '(//option[@value="12"])[2]',
                        locateStrategy: 'xpath'
                    },
                    panelSpeakerOption: {
                        selector: '(//option[@value="13"])[1]',
                        locateStrategy: 'xpath'
                    },
                    leadershipSpeakerOption: {
                        selector: '(//option[@value="14"])[1]',
                        locateStrategy: 'xpath'
                    },
                    testimonialOption: {
                        selector: '(//option[@value="15"])[2]',
                        locateStrategy: 'xpath'
                    },
                   lunchHostOption: {
                        selector: '(//option[@value="30"])[1]',
                        locateStrategy: 'xpath'
                    },
                    dinnerHostOption: {
                        selector: '(//option[@value="31"])[1]',
                        locateStrategy: 'xpath'
                    },

                    firstRow: {
                        selector: '(//tr[1]/td[11]/span/ul/li)[1]',
                        locateStrategy: 'xpath'
                    },

                    secondOneRow: {
                        selector: '(//tr[2]/td[11]/span/ul/li)[1]',
                        locateStrategy: 'xpath'
                    },

                    secondTwoRow: {
                        selector: '(//tr[2]/td[11]/span/ul/li)[2]',
                        locateStrategy: 'xpath'
                    },
                    thirdOneRow: {
                        selector: '(//tr[3]/td[11]/span/ul/li)[1]',
                        locateStrategy: 'xpath'
                    },
                    thirdTwoRow: {
                        selector: '(//tr[3]/td[11]/span/ul/li)[2]',
                        locateStrategy: 'xpath'
                    },
                    fourthRow: {
                        selector: '//tr[4]/td[11]/span/ul/li',
                        locateStrategy: 'xpath'
                    },
                    fifthRow: {
                        selector: '//tr[5]/td[11]/span/ul/li',
                        locateStrategy: 'xpath'
                    },
                }
            },

            presenterTypeColumn: {
                selector: '//tr[1]/th[13]',
                locateStrategy: 'xpath',
                elements: {
                    nameColumn: {
                        selector: '//tr[1]/th[13]',
                        locateStrategy: 'xpath'
                    },
                    partnerOption: {
                        selector: '(//option[text()="Partner"])[2]',
                        locateStrategy: 'xpath'
                    },
                    delegateOption: {
                        selector: '(//option[text()="Delegate"])[2]',
                        locateStrategy: 'xpath'
                    },
                    firstRow: {
                        selector: '//tr[1]/td[13]/span/ul/li',
                        locateStrategy: 'xpath'
                    },
                    secondRow: {
                        selector: '//tr[2]/td[13]/span/ul/li',
                        locateStrategy: 'xpath'
                    },
                    thirdRow: {
                        selector: '//tr[3]/td[13]/span/ul/li',
                        locateStrategy: 'xpath'
                    },
                    fourthRow: {
                        selector: '//tr[4]/td[13]/span/ul/li',
                        locateStrategy: 'xpath'
                    },
                    fifthRow: {
                        selector: '//tr[5]/td[13]/span/ul/li',
                        locateStrategy: 'xpath'
                    },
                    noResultsFound: {
                        selector: '//*[contains(text(),"No results found")]',
                        locateStrategy: 'xpath'
                    }
                },
            },

            pageCount: {
                selector: '//*[@class="ng-grid-footer clearfix"]',
                locateStrategy: 'xpath',
                elements: {
                    show20RowsOption: {
                        selector: '//div/select/option[@value="20"]',
                        locateStrategy: 'xpath'
                    },
                    show50RowsOption: {
                        selector: '//div/select/option[@value="50"]',
                        locateStrategy: 'xpath'
                    },
                    show100RowsOption: {
                        selector: '//div/select/option[@value="100"]',
                        locateStrategy: 'xpath'
                    },
                    currentPage: {
                        selector: '//span[text()="1 of 2"]',
                        locateStrategy: 'xpath'
                    },
                    owePage: {
                        selector: '//span[text()="1 of 1"]',
                        locateStrategy: 'xpath'
                    },
                    nextPage: {
                        selector: '//a[text()="Next"]',
                        locateStrategy: 'xpath'
                    },
                    lastPage: {
                        selector: '//a[text()="Last"]',
                        locateStrategy: 'xpath'
                    },
                }
            },

            sendEmail: {
                selector: '//a[text()="Send email"]',
                locateStrategy: 'xpath',
                elements: {
                    sendEmailButton: {
                        selector: '//a[text()="Send email"]',
                        locateStrategy: 'xpath'
                    },
                    nameWindowSendEmail: {
                        selector: '//h4[text()="Select email template"]',
                        locateStrategy: 'xpath'
                    },
                    firstOption: {
                        selector: '//*[@class="modal in fade"]//option[2]',
                        locateStrategy: 'xpath'
                    },
                    any310Option: {
                        selector: '//modal[@class="modal fade in"]//option[@value="310"]',
                        locateStrategy: 'xpath'
                    },
                    templateField: {
                        selector: '//div[contains(text(),"Template:")]',
                        locateStrategy: 'xpath'
                    },
                    fromEmailInput: {
                        selector: '//div[contains(text(),"From Email:")]/../div/input',
                        locateStrategy: 'xpath'
                    },
                    fromNameInput: {
                        selector: '//div[contains(text(),"From Name:")]/../div/input',
                        locateStrategy: 'xpath'
                    },
                    replyToEmailInput: {
                        selector: '//div[contains(text(),"Reply-To Email:")]/../div/input',
                        locateStrategy: 'xpath'
                    },
                    subjectInput: {
                        selector: '//div[contains(text(),"Subject:")]/../div/input',
                        locateStrategy: 'xpath'
                    },
                    cancelButton: {
                        selector: '//button[text()="Cancel"]',
                        locateStrategy: 'xpath'
                    },
                    submitButton: {
                        selector: '//button[text()="Send Email"]',
                        locateStrategy: 'xpath'
                    },
                    sendSuccessfully: {
                        selector: '//div[text()="Email sent to 4 recipients"]',
                        locateStrategy: 'xpath'
                    },
                }
            }
        }
};
