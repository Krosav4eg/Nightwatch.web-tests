module.exports = {
    elements: {
        location: {
            selector: '//*[@class="location-venue ng-binding"]',
            locateStrategy: 'xpath'
        },
        time: {
            selector: '//*[@class="even-time ng-scope"]',
            locateStrategy: 'xpath'
        },
    }
};