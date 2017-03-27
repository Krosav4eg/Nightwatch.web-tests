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
    }
};