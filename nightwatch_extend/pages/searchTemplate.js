module.exports = {
    elements: {
        namePage: {
            selector: '//h1[text()="Event settings - template library"]',
            locateStrategy: 'xpath'
        },
        addTemplateButton: {
            selector: '//a[text()="Add template"]',
            locateStrategy: 'xpath'
        },
    },
        sections: {
            idColumn: {
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
                    }
                },
            },
            templateNameColumn: {
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
            statusColumn: {
                selector: '//tr[1]/th[3]',
                locateStrategy: 'xpath',
                elements: {
                    nameColumn: {
                        selector: '//tr[1]/th[3]',
                        locateStrategy: 'xpath'
                    },
                    allOption: {
                        selector: '(//option)[1]',
                        locateStrategy: 'xpath'
                    },
                    draftOption: {
                        selector: '//option[text()="Draft"]',
                        locateStrategy: 'xpath'
                    },
                    activeOption: {
                        selector: '//option[text()="Active"]',
                        locateStrategy: 'xpath'
                    },
                    archivedOption: {
                        selector: '//option[text()="Archived"]',
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
                    }
                },
            },
            createdColumn: {
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
            createdByColumn: {
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
            modifiedColumn: {
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
            modifiedByColumn: {
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

    }
};