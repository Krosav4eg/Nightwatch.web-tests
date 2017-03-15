module.exports = {
    elements: {
        startTime: {
            selector: '//input[@data-attribute="startTime"]',
            locateStrategy: 'xpath'
        },
        locationInput: {
            selector: '//select[@name="Event[countryId]"]',
            locateStrategy: 'xpath'
        },
        townInput: {
            selector: '//input[@name="Event[city]"]',
            locateStrategy: 'xpath'
        },
    }
};