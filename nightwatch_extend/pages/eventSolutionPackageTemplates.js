module.exports = {
    sections: {
        statusColumn: {
            selector: '//tr/th[2]',
            locateStrategy: 'xpath',
            elements: {
                nameColumn: {
                    selector: '//tr/th[2]',
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
                passiveOption: {
                    selector: '//option[text()="Passive"]',
                    locateStrategy: 'xpath'
                },
                firstRow: {
                    selector: '//tr[1]/td[2]/span',
                    locateStrategy: 'xpath'
                },
                noResultsFound: {
                    selector: '//*[contains(text(), "No results found")]',
                    locateStrategy: 'xpath'
                },
            }
        },
    }
};