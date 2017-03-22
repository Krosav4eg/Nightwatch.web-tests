var awardsCommands = {
    addNewCandidateByName: function(name) {
        var locatorTextInput = '//*[contains(text(),"' + name + '")]';
        this.section.candidatesSectoin
            .clickBySelector('@addNewCandidateButton')
            .clickBySelector('@companyNameInput')
            .sendKeys('@companyNameInput', name)
            .clickBySelectorXpath(locatorTextInput)
            .clickBySelector('@addCompanyButton');
    },
    deleteFirstCandidate: function() {
        this.section.candidatesSectoin
            .clickBySelector('@deleteFirstButton')
            .clickBySelector('@confirmYesButon');

        this.section.awardSectoin
            .waitForElementVisible('@succesDeleteMasseg', 30000);
    },
};
module.exports = {
    commands: [awardsCommands],
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
        awardSectoin: {
            selector: '//h4[text()="Awards"]',
            locateStrategy: 'xpath',
            elements: {
                awardTitleLocalText: {
                    selector: '//label[text()="Award title local"]',
                    locateStrategy: 'xpath'
                },
                awardTitleLocalInput: {
                    selector: '//div[1]/div/input[1][@type="text"]',
                    locateStrategy: 'xpath'
                },
                awardTitleEnglishText: {
                    selector: '//label[text()="Award title English"]',
                    locateStrategy: 'xpath'
                },
                awardTitleEnglishInput: {
                    selector: '//div[2]/div/input[1][@type="text"]',
                    locateStrategy: 'xpath'
                },
                candidateTypeText: {
                    selector: '//label[text()="Candidate type"]',
                    locateStrategy: 'xpath'
                },

                contactRadioButton: {
                    selector: '//radio-item[@id=1]/div/input',
                    locateStrategy: 'xpath'
                },
                companyRadioButton: {
                    selector: '//radio-item[@id=2]/div/input',
                    locateStrategy: 'xpath'
                },
                projectRadioButton: {
                    selector: '//radio-item[@id=3]/div/input',
                    locateStrategy: 'xpath'
                },

                statusText: {
                    selector: '//label[text()="Status"]',
                    locateStrategy: 'xpath'
                },

                modifiedText: {
                    selector: '//div[text()="Modified: "]',
                    locateStrategy: 'xpath'
                },

                modifiedDate: {
                    selector: '//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]',
                    locateStrategy: 'xpath'
                },

                modifiedByText: {
                    selector: '//div[text()="Modified by: "]',
                    locateStrategy: 'xpath'
                },

                onButton: {
                    selector: '//label[@btnradio="1"]',
                    locateStrategy: 'xpath'
                },
                offButton: {
                    selector: '//label[@btnradio="0"]',
                    locateStrategy: 'xpath'
                },

                saveButton: {
                    selector: '//button[@type="submit"]',
                    locateStrategy: 'xpath'
                },
                succesMasseg: {
                    selector: '//div[text()="Award saved successfully"]',
                    locateStrategy: 'xpath'
                },
                succesDeleteMasseg: {
                    selector: '//div[text()="Company deleted successfully"]',
                    locateStrategy: 'xpath'
                },
                infoMassege: {
                    selector: '//*[contains(text(),"be changed because candidates have been selected.Please remove the existing candidates before changing the candidate type of the award.")]',
                    locateStrategy: 'xpath'
                },
            }
        },
        candidatesSectoin: {
            selector: '//h4[text()="Candidates"]',
            locateStrategy: 'xpath',
            elements: {
                addNewCandidateButton: {
                    selector: '//button[text()="Add a new candidate"]',
                    locateStrategy: 'xpath'
                },
                companyNameInput: {
                    selector: '//input[@value-property-name="companyId"]',
                    locateStrategy: 'xpath'
                },
                addCompanyButton: {
                    selector: '//button[text()="Add company"]',
                    locateStrategy: 'xpath'
                },

                candidate1Text: {
                    selector: '//h3[contains(text(),"Candidate 1")]',
                    locateStrategy: 'xpath'
                },
                candidate2Text: {
                    selector: '//h3[contains(text(),"Candidate 2")]',
                    locateStrategy: 'xpath'
                },
                candidate3Text: {
                    selector: '//h3[contains(text(),"Candidate 3")]',
                    locateStrategy: 'xpath'
                },
                companyNameText: {
                    selector: '//label[contains(text(),"Company Name")]',
                    locateStrategy: 'xpath'
                },
                companyNameCondidateText: {
                    selector: '//*[text()="Company Name"]/../div/span',
                    locateStrategy: 'xpath'
                },
                companyNameSecondCondidateText: {
                    selector: '(//*[text()="Company Name"]/../div/span)[2]',
                    locateStrategy: 'xpath'
                },
                masterId84462Link: {
                    selector: '//a[contains(text(),"(M#84462)")]',
                    locateStrategy: 'xpath'
                },
                masterIdLink: {
                    selector: '//*[text()="Candidates"]/../..//a[contains(@href,"MasterCompany")]',
                    locateStrategy: 'xpath'
                },
                countryText: {
                    selector: '//label[contains(text(),"Country")]',
                    locateStrategy: 'xpath'
                },
                countryCondidateText: {
                    selector: '//*[text()="Country"]/../div/span',
                    locateStrategy: 'xpath'
                },

                defaultLogo: {
                    selector: '//*[text()="Candidates"]/../..//img',
                    locateStrategy: 'xpath'
                },
                introductionText: {
                    selector: '//label[contains(text(),"Introduction")]',
                    locateStrategy: 'xpath'
                },
                introductionInput: {
                    selector: '//div/textarea',
                    locateStrategy: 'xpath'
                },
                winnersdescriptionText: {
                    selector: '//*[contains(text(),"s description")]',
                    locateStrategy: 'xpath'
                },
                winnersdescriptionInput: {
                    selector: '//form//div[2]//textarea',
                    locateStrategy: 'xpath'
                },

                winnerButton: {
                    selector: '//button[contains(text(),"Winner")]',
                    locateStrategy: 'xpath'
                },
                deleteButton: {
                    selector: '//button[contains(text(),"Delete")]',
                    locateStrategy: 'xpath'
                },
                deleteFirstButton: {
                    selector: '//div[@class="row"][1]//button[text()="Delete"]',
                    locateStrategy: 'xpath'
                },
                confirmYesButon: {
                    selector: '//button[@data-marker="me-confirm__button__button__yes"]',
                    locateStrategy: 'xpath'
                },

                modifiedText: {
                    selector: '//div[@class="form-group"]//div[contains(text(),"Modified: ")]',
                    locateStrategy: 'xpath'
                },
                modifiedByText: {
                    selector: '//div[@class="form-group"]//div[contains(text(),"Modified by: ")]',
                    locateStrategy: 'xpath'
                },
               saveButton: {
                    selector: '//div[@class="form-group"]//button[text()="Save"]',
                    locateStrategy: 'xpath'
                },
                errorMassege: {
                    selector: '//div[text()="Please select a company"]',
                    locateStrategy: 'xpath'
                },
            }
        },
    }
};