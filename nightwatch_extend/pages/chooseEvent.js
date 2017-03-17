module.exports = {
    sections: {
        searchForEventsTable: {
            selector: '(//tr/td[1]/input)[1]',
            locateStrategy: 'xpath',
            elements: {
                searchByIdField: {
                    selector: '(//tr/td[1]/input)[1]',
                    locateStrategy: 'xpath'
                },
                firstRow: {
                    selector: '(//tr/td[1]/span/a)[1]',
                    locateStrategy: 'xpath'
                },
                secondRow: {
                    selector: '(//tr/td[2]/span)[1]',
                    locateStrategy: 'xpath'
                },
                thirdRow: {
                    selector: '(//tr/td[3]/span)[1]',
                    locateStrategy: 'xpath'
                },
                fourthRow: {
                    selector: '(//tr/td[4]/span)[1]',
                    locateStrategy: 'xpath'
                },
                fifthRow: {
                    selector: '(//tr/td[4]/span)[1]',
                    locateStrategy: 'xpath'
                },
                sixthRow: {
                    selector: '(//tr/td[6]/span)[1]',
                    locateStrategy: 'xpath'
                },
                seventhRow: {
                    selector: '(//tr/td[7]/span)[1]',
                    locateStrategy: 'xpath'
                },


                searchByBusinessUnitField: {
                    selector: '(//tr/td[2]/input)[1]',
                    locateStrategy: 'xpath'
                },

                firstColumnOfBusinessUnit: {
                    selector: '(//tr[1]/td[2]/span)[1]',
                    locateStrategy: 'xpath'
                },
                secondColumnOfBusinessUnit: {
                    selector: '(//tr[2]/td[2]/span)[1]',
                    locateStrategy: 'xpath'
                },
                thirdColumnOfBusinessUnit: {
                    selector: '(//tr[3]/td[2]/span)[1]',
                    locateStrategy: 'xpath'
                },
                fourthColumnOfBusinessUnit: {
                    selector: '(//tr[4]/td[2]/span)[1]',
                    locateStrategy: 'xpath'
                },
                fifthColumnOfBusinessUnit: {
                    selector: '(//tr[5]/td[2]/span)[1]',
                    locateStrategy: 'xpath'
                },


                searchByCountryField: {
                    selector: '(//tr/td[3]/input)[1]',
                    locateStrategy: 'xpath'
                },

                firstColumnOfCountry: {
                    selector: '(//tr[1]/td[3]/span)[1]',
                    locateStrategy: 'xpath'
                },
                secondColumnOfCountry: {
                    selector: '(//tr[2]/td[3]/span)[1]',
                    locateStrategy: 'xpath'
                },
                thirdColumnOfCountry: {
                    selector: '(//tr[3]/td[3]/span)[1]',
                    locateStrategy: 'xpath'
                },
                fourthColumnOfCountry: {
                    selector: '(//tr[4]/td[3]/span)[1]',
                    locateStrategy: 'xpath'
                },
                fifthColumnOfCountry: {
                    selector: '(//tr[5]/td[3]/span)[1]',
                    locateStrategy: 'xpath'
                },


                searchByEventNameField: {
                    selector: '(//tr/td[5]/input)[1]',
                    locateStrategy: 'xpath'
                },

                firstColumnOfEventName: {
                    selector: '(//tr[1]/td[5]/span)[1]',
                    locateStrategy: 'xpath'
                },
                secondColumnOfEventName: {
                    selector: '(//tr[2]/td[5]/span)[1]',
                    locateStrategy: 'xpath'
                },
                thirdColumnOfEventName: {
                    selector: '(//tr[3]/td[5]/span)[1]',
                    locateStrategy: 'xpath'
                },
                fourthColumnOfEventName: {
                    selector: '(//tr[4]/td[5]/span)[1]',
                    locateStrategy: 'xpath'
                },
                fifthColumnOfEventName: {
                    selector: '(//tr[5]/td[5]/span)[1]',
                    locateStrategy: 'xpath'
                },


                searchByStartDateField: {
                    selector: '(//tr/td[6]/input)[1]',
                    locateStrategy: 'xpath'
                },

                firstColumnOfStartDateField: {
                    selector: '(//tr[1]/td[6]/span)[1]',
                    locateStrategy: 'xpath'
                },
                secondColumnOfStartDateField: {
                    selector: '(//tr[2]/td[6]/span)[1]',
                    locateStrategy: 'xpath'
                },
                thirdColumnOfStartDateField: {
                    selector: '(//tr[3]/td[6]/span)[1]',
                    locateStrategy: 'xpath'
                },
                fourthColumnOfStartDateField: {
                    selector: '(//tr[4]/td[6]/span)[1]',
                    locateStrategy: 'xpath'
                },
                fifthColumnOfStartDateField: {
                    selector: '(//tr[5]/td[6]/span)[1]',
                    locateStrategy: 'xpath'
                },


                searchByEndDate: {
                    selector: '(//tr/td[7]/input)[1]',
                    locateStrategy: 'xpath'
                },

                firstColumnOfEndDate: {
                    selector: '(//tr[1]/td[7]/span)[1]',
                    locateStrategy: 'xpath'
                },
                secondColumnOfEndDate: {
                    selector: '(//tr[2]/td[7]/span)[1]',
                    locateStrategy: 'xpath'
                },
                thirdColumnOfEndDate: {
                    selector: '(//tr[3]/td[7]/span)[1]',
                    locateStrategy: 'xpath'
                },
                fourthColumnOfEndDate: {
                    selector: '(//tr[4]/td[7]/span)[1]',
                    locateStrategy: 'xpath'
                },
                fifthColumnOfEndDate: {
                    selector: '(//tr[5]/td[7]/span)[1]',
                    locateStrategy: 'xpath'
                },
            }
        },
        eventTypeFilter: {
            selector: '//option[@value="38"]',
            locateStrategy: 'xpath',
            elements: {
                firstColumnOfEventType: {
                    selector: '(//tr[1]/td[4]/span)[1]',
                    locateStrategy: 'xpath'
                },
                secondColumnOfEventType: {
                    selector: '(//tr[2]/td[4]/span)[1]',
                    locateStrategy: 'xpath'
                },
                thirdColumnOfEventType: {
                    selector: '(//tr[3]/td[4]/span)[1]',
                    locateStrategy: 'xpath'
                },
                fourthColumnOfEventType: {
                    selector: '(//tr[4]/td[4]/span)[1]',
                    locateStrategy: 'xpath'
                },
                fifthColumnOfEventType: {
                    selector: '(//tr[5]/td[4]/span)[1]',
                    locateStrategy: 'xpath'
                },
                conference: {
                    selector: '//option[@value="38"]',
                    locateStrategy: 'xpath'
                },
                industryForum: {
                    selector: '//option[@value="39"]',
                    locateStrategy: 'xpath'
                },
                minutes: {
                    selector: '//option[@value="40"]',
                    locateStrategy: 'xpath'
                },
                summit: {
                    selector: '//option[@value="41"]',
                    locateStrategy: 'xpath'
                },
                kongressi: {
                    selector: '//option[@value="42"]',
                    locateStrategy: 'xpath'
                },
                managementForum: {
                    selector: '//option[@value="43"]',
                    locateStrategy: 'xpath'
                },
                emailApproval: {
                    selector: '//option[@value="44"]',
                    locateStrategy: 'xpath'
                },
                businessLounge: {
                    selector: '//option[@value="45"]',
                    locateStrategy: 'xpath'
                },
                executiveForum: {
                    selector: '//option[@value="46"]',
                    locateStrategy: 'xpath'
                },
                ideaGarden: {
                    selector: '//option[@value="47"]',
                    locateStrategy: 'xpath'
                },
                strategyForum: {
                    selector: '//option[@value="48"]',
                    locateStrategy: 'xpath'
                },
                growthSession: {
                    selector: '//option[@value="49"]',
                    locateStrategy: 'xpath'
                },
                needSeeker: {
                    selector: '//option[@value="50"]',
                    locateStrategy: 'xpath'
                },
            }
        },

        sortForEventsTable: {
            selector: '(//tr/th[1])[1]',
            locateStrategy: 'xpath',
            elements: {
                sortById: {
                    selector: '(//tr/th[1])[1]',
                    locateStrategy: 'xpath'
                },
                firstColumnOfId: {
                    selector: '(//tr[1]/td[1]/span/a)[1]',
                    locateStrategy: 'xpath'
                },
                secondColumnOfId: {
                    selector: '(//tr[2]/td[1]/span/a)[1]',
                    locateStrategy: 'xpath'
                },
                thirdColumnOfId: {
                    selector: '(//tr[3]/td[1]/span/a)[1]',
                    locateStrategy: 'xpath'
                },
                fourthColumnOfId: {
                    selector: '(//tr[4]/td[1]/span/a)[1]',
                    locateStrategy: 'xpath'
                },
                fifthColumnOfId: {
                    selector: '(//tr[5]/td[1]/span/a)[1]',
                    locateStrategy: 'xpath'
                },


                sortByBusinessUnit: {
                    selector: '(//tr/th[2])[1]',
                    locateStrategy: 'xpath'
                },
                firstColumnOfBusinessUnit: {
                    selector: '(//tr[1]/td[2]/span)[1]',
                    locateStrategy: 'xpath'
                },
                secondColumnOfBusinessUnit: {
                    selector: '(//tr[2]/td[2]/span)[1]',
                    locateStrategy: 'xpath'
                },
                thirdColumnOfBusinessUnit: {
                    selector: '(//tr[3]/td[2]/span)[1]',
                    locateStrategy: 'xpath'
                },
                fourthColumnOfBusinessUnit: {
                    selector: '(//tr[4]/td[2]/span)[1]',
                    locateStrategy: 'xpath'
                },
                fifthColumnOfBusinessUnit: {
                    selector: '(//tr[5]/td[2]/span)[1]',
                    locateStrategy: 'xpath'
                },


                sortByCountry: {
                    selector: '(//tr/th[3])[1]',
                    locateStrategy: 'xpath'
                },
                firstColumnOfCountry: {
                    selector: '(//tr[1]/td[3]/span)[1]',
                    locateStrategy: 'xpath'
                },
                secondColumnOfCountry: {
                    selector: '(//tr[2]/td[3]/span)[1]',
                    locateStrategy: 'xpath'
                },
                thirdColumnOfCountry: {
                    selector: '(//tr[3]/td[3]/span)[1]',
                    locateStrategy: 'xpath'
                },
                fourthColumnOfCountry: {
                    selector: '(//tr[4]/td[3]/span)[1]',
                    locateStrategy: 'xpath'
                },
                fifthColumnOfCountry: {
                    selector: '(//tr[5]/td[3]/span)[1]',
                    locateStrategy: 'xpath'
                },


                sortByEventType: {
                    selector: '(//tr/th[4])[1]',
                    locateStrategy: 'xpath'
                },
                firstColumnOfEventType: {
                    selector: '(//tr[1]/td[4]/span)[1]',
                    locateStrategy: 'xpath'
                },
                secondColumnOfEventType: {
                    selector: '(//tr[2]/td[4]/span)[1]',
                    locateStrategy: 'xpath'
                },
                thirdColumnOfEventType: {
                    selector: '(//tr[3]/td[4]/span)[1]',
                    locateStrategy: 'xpath'
                },
                fourthColumnOfEventType: {
                    selector: '(//tr[4]/td[4]/span)[1]',
                    locateStrategy: 'xpath'
                },
                fifthColumnOfEventType: {
                    selector: '(//tr[5]/td[4]/span)[1]',
                    locateStrategy: 'xpath'
                },


                sortByEventName: {
                    selector: '(//tr/th[5])[1]',
                    locateStrategy: 'xpath'
                },
                firstColumnOfEventName: {
                    selector: '(//tr[1]/td[5]/span)[1]',
                    locateStrategy: 'xpath'
                },
                secondColumnOfEventName: {
                    selector: '(//tr[2]/td[5]/span)[1]',
                    locateStrategy: 'xpath'
                },
                thirdColumnOfEventName: {
                    selector: '(//tr[3]/td[5]/span)[1]',
                    locateStrategy: 'xpath'
                },
                fourthColumnOfEventName: {
                    selector: '(//tr[4]/td[5]/span)[1]',
                    locateStrategy: 'xpath'
                },
                fifthColumnOfEventName: {
                    selector: '(//tr[5]/td[5]/span)[1]',
                    locateStrategy: 'xpath'
                },


                sortByStartDate: {
                    selector: '(//tr/th[6])[1]',
                    locateStrategy: 'xpath'
                },
                firstColumnOfStartDate: {
                    selector: '(//tr[1]/td[6]/span)[1]',
                    locateStrategy: 'xpath'
                },
                secondColumnOfStartDate: {
                    selector: '(//tr[2]/td[6]/span)[1]',
                    locateStrategy: 'xpath'
                },
                thirdColumnOfStartDate: {
                    selector: '(//tr[3]/td[6]/span)[1]',
                    locateStrategy: 'xpath'
                },
                fourthColumnOfStartDate: {
                    selector: '(//tr[4]/td[6]/span)[1]',
                    locateStrategy: 'xpath'
                },
                fifthColumnOfStartDate: {
                    selector: '(//tr[5]/td[6]/span)[1]',
                    locateStrategy: 'xpath'
                },


                sortByEndDate: {
                    selector: '(//tr/th[7])[1]',
                    locateStrategy: 'xpath'
                },
                firstColumnOfEndDate: {
                    selector: '(//tr[1]/td[7]/span)[1]',
                    locateStrategy: 'xpath'
                },
                secondColumnOfEndDate: {
                    selector: '(//tr[2]/td[7]/span)[1]',
                    locateStrategy: 'xpath'
                },
                thirdColumnOfEndDate: {
                    selector: '(//tr[3]/td[7]/span)[1]',
                    locateStrategy: 'xpath'
                },
                fourthColumnOfEndDate: {
                    selector: '(//tr[4]/td[7]/span)[1]',
                    locateStrategy: 'xpath'
                },
                fifthColumnOfEndDate: {
                    selector: '(//tr[5]/td[7]/span)[1]',
                    locateStrategy: 'xpath'
                },
            }
        },

        pageFilter: {
            selector: '(//option[@value="20"])[1]',
            locateStrategy: 'xpath',
            elements: {
                twentyCount: {
                    selector: '(//option[@value="20"])[1]',
                    locateStrategy: 'xpath'
                },
                pageText: {
                    selector: '(//span[contains(text(),"Pages")])[1]',
                    locateStrategy: 'xpath'
                },

                firstPage: {
                    selector: '(//div[@class="ng-grid-pager left"])[1]/span[2][contains(text(),"1")]',
                    locateStrategy: 'xpath'
                },
                secondPage: {
                    selector: '(//div[@class="ng-grid-pager left"])[1]/a[1][contains(text(),"2")]',
                    locateStrategy: 'xpath'
                },
                thirdPage: {
                    selector: '(//div[@class="ng-grid-pager left"])[1]/a[2][contains(text(),"3")]',
                    locateStrategy: 'xpath'
                },
                fourthPage: {
                    selector: '(//div[@class="ng-grid-pager left"])[1]/a[3][contains(text(),"4")]',
                    locateStrategy: 'xpath'
                },
                fifthPage: {
                    selector: '(//div[@class="ng-grid-pager left"])[1]/a[4][contains(text(),"5")]',
                    locateStrategy: 'xpath'
                },
                nextPage: {
                    selector: '(//div[@class="ng-grid-pager left"])[1]/a[5][contains(text(),"Next")]',
                    locateStrategy: 'xpath'
                },

                lastPage: {
                    selector: '(//div[@class="ng-grid-pager left"])[1]/a[6][contains(text(),"Last")]',
                    locateStrategy: 'xpath'
                },

                totalPageNumbersFor20: {
                    selector: '//span[contains(text(),"1 of 6")]',
                    locateStrategy: 'xpath'
                },


                fiftyCount: {
                    selector: '(//option[@value="50"])[2]',
                    locateStrategy: 'xpath'
                },
                totalPageNumbersFor50: {
                    selector: '//span[contains(text(),"1 of 3")]',
                    locateStrategy: 'xpath'
                },


                hundredCount: {
                    selector: '(//option[@value="100"])[1]',
                    locateStrategy: 'xpath'
                },
                totalPageNumbersFor100: {
                    selector: '//span[contains(text(),"1 of 2")]',
                    locateStrategy: 'xpath'
                },

            }
        },
        liveEventsTable: {
            selector: '//i[@class="glyphicon glyphicon-chevron-down"]',
            locateStrategy: 'xpath',
            elements: {
                chevronDown: {
                    selector: '//i[@class="glyphicon glyphicon-chevron-down"]',
                    locateStrategy: 'xpath'
                },

                countryNameColumn: {
                    selector: '(//th[contains(text(),"Country Name")])[1]',
                    locateStrategy: 'xpath'
                },
                firstRowForCountryName: {
                    selector: '//tr[2]/td[1]',
                    locateStrategy: 'xpath'
                },
                secondRowForCountryName: {
                    selector: '//tr[3]/td[1]',
                    locateStrategy: 'xpath'
                },
                thirdRowForCountryName: {
                    selector: '//tr[4]/td[1]',
                    locateStrategy: 'xpath'
                },



                nameColumn: {
                    selector: '(//th[contains(text(),"Name")])[3]',
                    locateStrategy: 'xpath'
                },
                firstRowForName: {
                    selector: '//tr[2]/td[2]',
                    locateStrategy: 'xpath'
                },
                secondRowForName: {
                    selector: '//tr[3]/td[2]',
                    locateStrategy: 'xpath'
                },
                thirdRowForName: {
                    selector: '//tr[4]/td[2]',
                    locateStrategy: 'xpath'
                },



                startDateColumn: {
                    selector: '(//th[contains(text(),"Start date")])[2]',
                    locateStrategy: 'xpath'
                },
                firstRowForStartDate: {
                    selector: '//tr[2]/td[3]',
                    locateStrategy: 'xpath'
                },
                secondRowForStartDate: {
                    selector: '//tr[3]/td[3]',
                    locateStrategy: 'xpath'
                },
                thirdRowForStartDate: {
                    selector: '//tr[4]/td[3]',
                    locateStrategy: 'xpath'
                },



                endDateColumn: {
                    selector: '(//th[contains(text(),"End date")])[2]',
                    locateStrategy: 'xpath'
                },
                firstRowForEndDate: {
                    selector: '//tr[2]/td[4]',
                    locateStrategy: 'xpath'
                },
                secondRowForEndDate: {
                    selector: '//tr[3]/td[4]',
                    locateStrategy: 'xpath'
                },
                thirdRowForEndDate: {
                    selector: '//tr[4]/td[4]',
                    locateStrategy: 'xpath'
                }
            }
        }
    }
};