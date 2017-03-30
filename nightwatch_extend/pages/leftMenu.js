module.exports = {
    elements: {
        meetingsSummary: {
            selector: '//a/span[text()="Meetings summary"]',
            locateStrategy: 'xpath'
        },
        settings: {
            selector: '//a/span[text()="Settings"]',
            locateStrategy: 'xpath'
        },
        templates: {
            selector: '//a/span[text()="Templates"]',
            locateStrategy: 'xpath'
        },
        eventSettings: {
            selector: '//a/span[text()="Event Settings"]',
            locateStrategy: 'xpath'
        },
        addTemplate: {
            selector: '//a/span[text()="Add template"]',
            locateStrategy: 'xpath'
        },
        searchTemplate: {
            selector: '//a/span[text()="Search templates"]',
            locateStrategy: 'xpath'
        },
    }
};