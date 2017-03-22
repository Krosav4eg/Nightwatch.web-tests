module.exports = {
    elements: {
        startTime: {
            selector: '//*[@formcontrolname="startTime"]/input',
            locateStrategy: 'xpath'
        },
        locationInput: {
            selector: '//select[@formcontrolname="countryId"]',
            locateStrategy: 'xpath'
        },
        townInput: {
            selector: '//input[@formcontrolname="city"]',
            locateStrategy: 'xpath'
        },
    }
};