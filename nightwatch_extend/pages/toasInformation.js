module.exports = {
    elements: {
        toastNotificationSuccess: {
            selector: '//div[@class="simple-notification toast-notification success"]',
            locateStrategy: 'xpath'
        },
        toastTitle: {
            selector: '//div[@class="sn-title"]',
            locateStrategy: 'xpath'
        },
        toastContent: {
            selector: '//div[@class="sn-content"]',
            locateStrategy: 'xpath'
        },
    }
};