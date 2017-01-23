var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to awards': function (browser) {
        browser
            .relUrl('/event/1609/awards')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },
    'check awards page info': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h4[text()="Awards"]', 7000)
            .waitForElementVisible('//label[text()="Award title local"]', 7000)
            .waitForElementVisible('//div[1]/div/input[1][@type="text"]', 7000)
            .waitForElementVisible('//label[text()="Award title English"]', 7000)
            .waitForElementVisible('//div[2]/div/input[1][@type="text"]', 7000)
            .waitForElementVisible('//label[text()="Candidate type"]', 7000)
            .waitForElementVisible('//div[text()="                         Contact                       "]', 7000)
            .waitForElementVisible('//input[@id=1]', 7000)
            .waitForElementVisible('//div[text()="                         Company                       "]', 7000)
            .waitForElementVisible('//input[@id=2]', 7000)
            .waitForElementVisible('//div[text()="                         Project                       "]', 7000)
            .waitForElementVisible('//input[@id=3]', 7000)
            .waitForElementVisible('//label[text()="Status"]', 7000)
            .waitForElementVisible('//label[@btnradio="1"]', 7000)
            .waitForElementVisible('//label[@btnradio="0"]', 7000)
            .waitForElementVisible('//div[text()="Modified: "]', 7000)
            .waitForElementVisible('//div[text()="Modified by: "]', 7000)
            .waitForElementVisible('//button[@type="submit"]', 7000)
            .waitForElementVisible('//h4[text()="Candidates"]', 7000);


    },
    'select project radio button ': function (browser) {
        browser
            .click('//input[@id=3]')
            .click('//label[@btnradio="1"]')
            .click('//button[@type="submit"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//div[text()="Award saved successfully"]', 30000)
            .waitForElementVisible('//button[text()="Add a new candidate"]', 30000);

    },

    'add candidate 1': function (browser) {
        browser
            .click('//button[text()="Add a new candidate"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h3[text()="Candidate 1"]', 30000)
            .waitForElementVisible('//label[text()="Project local name "]', 30000)
            .waitForElementVisible('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="localName"]', 30000)
            .waitForElementVisible('//label[text()="Project English name "]', 30000)
            .waitForElementVisible('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="englishName"]', 30000)
            .waitForElementVisible('//label[text()="Country "]', 30000)
            .waitForElementVisible('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="country"]', 30000)
            .waitForElementVisible('//input[@id="myUnit"]', 30000)
            .waitForElementVisible('//p[text()="Image format: .jpg, image size min. 800x400px"]', 30000);

    },
    'Crop the picture (+/- or via scroll on the mouse)': function (browser) {
        browser
            .setValue('//input[@id="myUnit"]', 'C:/Users/Avic/Desktop/pictures for tests(no delete)/wallpaper-19201080.jpg')
            .waitForElementVisible('//h4[text()="Crop picture"]', 30000)
            .waitForElementVisible('//img[@class="cropImage"]', 30000)
            .getElementSize('//img[@class="cropImage"]', function (result) {
                this.verify.equal(typeof result, "object");
                this.verify.equal(result.status, 0);
                this.verify.equal(result.value.width, 495);
                this.verify.equal(result.value.height, 278)
            })
            .click('//img[@class="cropImage"]')
            .waitForElementVisible('//div[@class="cropControls"]', 30000)
            .waitForElementVisible('//button[@class="cropZoomIn"]', 30000)
            .click('//button[@class="cropZoomIn"]')
            .pause(1000)
            .getElementSize('//img[@class="cropImage"]', function (result) {
                this.verify.equal(typeof result, "object");
                this.verify.equal(result.status, 0);
                this.verify.equal(result.value.width, 519);
                this.verify.equal(result.value.height, 292)
            })
            .waitForElementVisible('//button[@class="cropZoomIn"]', 30000)
            .click('//button[@class="cropZoomOut"]')
            .pause(1000)
            .getElementSize('//img[@class="cropImage"]', function (result) {
                this.verify.equal(typeof result, "object");
                this.verify.equal(result.status, 0);
                this.verify.equal(result.value.width, 495);
                this.verify.equal(result.value.height, 278)
            })
    },
    'Click on [Crop]': function (browser) {
        browser
            .waitForElementVisible('//button[text()="Crop"]', 30000)
            .click('//button[text()="Crop"]')
            .waitForElementVisible('//div[text()="Image cropped"]', 20000)
            .verify.elementNotPresent('http://alpha.master-api.managementevents.com/frontend/web/images/no-image.png');
    },
    // 'Verify uploaded logo': function (browser) {
    //     browser
    //         .waitForElementVisible('//img[@class="contact-picture"]', 30000)
    //         .getElementSize('//img[@class="contact-picture"]', function (result) {
    //             this.verify.equal(typeof result, "object");
    //             this.verify.equal(result.status, 0);
    //             this.verify.equal(result.value.width, 200);
    //             this.verify.equal(result.value.height, 100);
    //         })
    // },

    'Download size less then 800X400': function (browser) {
        browser
            .setValue('//input[@id="myUnit"]', 'C:/Users/Avic/Desktop/pictures for tests(no delete)/1169353259.jpg')
            .waitForElementVisible('//div[text()="Image minimum size should be 800x400px"]', 30000);
    },

    'Delete candidate': function (browser) {
        browser
            .waitForElementVisible('//div[@class="row"][1]//button[text()="Delete"]', 30000)
            .click('//div[@class="row"][1]//button[text()="Delete"]')
            .waitForElementVisible('//button[@data-marker="me-confirm__button__button__yes"]', 30000)
            .click('//button[@data-marker="me-confirm__button__button__yes"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .verify.elementNotPresent('//h3[text()="Candidate 1"]')
            .verify.elementNotPresent('//label[text()="Project local name "]')
            .verify.elementNotPresent('//label[text()="Project English name "]')
            .verify.elementNotPresent('//label[text()="Country "]')
            .verify.elementNotPresent('//label[text()="Introduction"]')
            .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]')
            .waitForElementVisible('//div[text()="Company deleted successfully"]', 30000);

    },

})
;