module.exports = {
        sections: {
            event: {
                selector: '//h4[text()="Event (#214)"]',
                locateStrategy: 'xpath',
                elements: {
                    totalName: {
                        selector: '//h4[text()="Event (#214)"]',
                        locateStrategy: 'xpath'
                    }
                }
            },

            titleColumn: {
                selector: '//tr[1]/th[5]',
                locateStrategy: 'xpath',
                elements: {
                    sortColumn: {
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
            }
        }
};