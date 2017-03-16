module.exports = {
    elements: {
        toastNotificationSuccess: {
            selector: '//div[@class="simple-notification toast-notification success"]',
            locateStrategy: 'xpath'
        },
        toastTitle: {
            selector: '(//div[@class="sn-title"])[1]',
            locateStrategy: 'xpath'
        },
        toastContent: {
            selector: '(//div[@class="sn-content"])[1]',
            locateStrategy: 'xpath'
        },
    }
};