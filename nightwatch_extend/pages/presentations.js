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
                }
            }
        },
        presenterColumn: {
            selector: '//tr/th[2]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr/th[2]',
                    locateStrategy: 'xpath'
                },
                allOption: {
                    selector: '//tr/td[2]/select/option[1]',
                    locateStrategy: 'xpath'
                },
                delegateOption: {
                    selector: '//tr/td[2]/select/option[2]',
                    locateStrategy: 'xpath'
                },
                partnerOption: {
                    selector: '//tr/td[2]/select/option[3]',
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
        organizerColumn: {
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
        presentationTypeColumn: {
            selector: '//tr/th[4]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr/th[4]',
                    locateStrategy: 'xpath'
                },
                allOption: {
                    selector: '(//option)[4]',
                    locateStrategy: 'xpath'
                },
                delegateCasePresentationOption: {
                    selector: '//option[text()="Delegate - Case presentation"]',
                    locateStrategy: 'xpath'
                },
                delegateChairmanSpeechOption: {
                    selector: '//option[text()="Delegate - Chairman speech"]',
                    locateStrategy: 'xpath'
                },
                delegateCrossFunctionOption: {
                    selector: '//option[text()="Delegate - Cross-function keynote"]',
                    locateStrategy: 'xpath'
                },
                delegateDebateOption: {
                    selector: '//option[text()="Delegate - Debate"]',
                    locateStrategy: 'xpath'
                },
                delegateFishBowlOption: {
                    selector: '//option[text()="Delegate - FishBowl"]',
                    locateStrategy: 'xpath'
                },
                delegateGroupDiscussionOption: {
                    selector: '//option[text()="Delegate - Group discussion initiation"]',
                    locateStrategy: 'xpath'
                },
                delegateKeynoteOption: {
                    selector: '//option[text()="Delegate - Keynote"]',
                    locateStrategy: 'xpath'
                },
                delegateLeadershipPresentationOption: {
                    selector: '//option[text()="Delegate - Leadership presentation"]',
                    locateStrategy: 'xpath'
                },
                delegatePanelDiscussionOption: {
                    selector: '//option[text()="Delegate - Panel discussion"]',
                    locateStrategy: 'xpath'
                },
                partnerCaseParallelOption: {
                    selector: '//option[text()="Partner - Case - parallel"]',
                    locateStrategy: 'xpath'
                },
                partnerCaseWholeAudienceOption: {
                    selector: '//option[text()="Partner - Case - whole audience"]',
                    locateStrategy: 'xpath'
                },
                partnerGoldSpotlightOption: {
                    selector: '//option[text()="Partner - Gold spotlight"]',
                    locateStrategy: 'xpath'
                },
                partnerPlatinumSpotlightOption: {
                    selector: '//option[text()="Partner - Platinum spotlight"]',
                    locateStrategy: 'xpath'
                },
                partnerPresentationParallelOption: {
                    selector: '//option[text()="Partner - Presentation - parallel"]',
                    locateStrategy: 'xpath'
                },
                partnerPresentationWholeAudienceOption: {
                    selector: '//option[text()="Partner - Presentation - whole audience"]',
                    locateStrategy: 'xpath'
                },
                partnerSnapShotOption: {
                    selector: '//option[text()="Partner - SnapShot"]',
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
                },
                noResultsFound: {
                    selector: '//*[contains(text(),"No results found")]',
                    locateStrategy: 'xpath'
                }
            }
        },
        presentationHeadingsColumn: {
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
        speakerCompanyColumn: {
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
        speakerLastNameColumn: {
            selector: '//tr/th[8]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr/th[8]',
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
                }
            }
        },
        speakerFirstNameColumn: {
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
        speakerTitleColumn: {
            selector: '//tr/th[10]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr/th[10]',
                    locateStrategy: 'xpath'
                },
                seachColumn: {
                    selector: '//tr[1]/td[10]/input[@type="text"]',
                    locateStrategy: 'xpath'
                },
                firstRow: {
                    selector: '//tr[1]/td[10]/span',
                    locateStrategy: 'xpath'
                },
                secondRow: {
                    selector: '//tr[2]/td[10]',
                    locateStrategy: 'xpath'
                },
                thirdRow: {
                    selector: '//tr[3]/td[10]',
                    locateStrategy: 'xpath'
                },
                fourthRow: {
                    selector: '//tr[4]/td[10]',
                    locateStrategy: 'xpath'
                }
            }
        },
        speakerEmailColumn: {
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
                }
            }
        },
        speakerMobileColumn: {
            selector: '//tr/th[12]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr/th[12]',
                    locateStrategy: 'xpath'
                },
                seachColumn: {
                    selector: '//tr[1]/td[12]/input[@type="text"]',
                    locateStrategy: 'xpath'
                },
                firstRow: {
                    selector: '//tr[1]/td[12]/span',
                    locateStrategy: 'xpath'
                },
                secondRow: {
                    selector: '//tr[2]/td[12]',
                    locateStrategy: 'xpath'
                },
                thirdRow: {
                    selector: '//tr[3]/td[12]',
                    locateStrategy: 'xpath'
                },
                fourthRow: {
                    selector: '//tr[4]/td[12]',
                    locateStrategy: 'xpath'
                }
            }
        },
    }
};