var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to awards': function (browser) {
        browser
            .relUrl('/event/1609/awards')
    },

    'select project radio button ': function (browser) {
        browser
            .selectProjectRadioButton();
    },

    'add candidate 1': function (browser) {
        browser
            .clickBySelectorXpath('//button[text()="Add a new candidate"]')

            .useXpath()
            .verify.elementPresent('//h3[text()="Candidate 1"]')

            .verify.elementPresent('//label[text()="Project local name "]', 30000)
            .verify.elementPresent('//*[text()="Candidate 1"]/../../../..//input[@formcontrolname="localName"]', 30000)

            .verify.elementPresent('//label[text()="Project English name "]', 30000)
            .verify.elementPresent('//*[text()="Candidate 1"]/../../../..//input[@formcontrolname="englishName"]', 30000)

            .verify.elementPresent('//label[text()="Country "]', 30000)
            .verify.elementPresent('//*[text()="Candidate 1"]/../../../..//input[@formcontrolname="country"]', 30000)

            .verify.elementPresent('//input[@id="myUnit"]', 30000)
            .verify.elementPresent('//p[text()="Image format: .jpg, image size min. 800x400px"]', 30000);
    },

    'crop the picture (+/- or via scroll on the mouse)': function (browser) {
        browser

            .setValueByXpath('//input[@id="myUnit"]', __dirname + '/wallpaper-19201080.jpg')
            .waitForElementVisible('//h4[text()="Crop picture"]', 30000)
            .waitForElementVisible('//img[@class="cropImage"]', 30000)
            .getElementSize('//img[@class="cropImage"]', function (result) {
                this.verify.equal(typeof result, "object");
                this.verify.equal(result.status, 0);
                this.verify.equal(result.value.width, 800);
                this.verify.equal(result.value.height, 450)
            })
            .clickBySelectorXpath('//img[@class="cropImage"]')
            .clickBySelectorXpath('//div[@class="cropControls"]')
            .clickBySelectorXpath('//a[@class="cropZoomIn"]')
            .getElementSize('//img[@class="cropImage"]', function (result) {
                this.verify.equal(typeof result, "object");
                this.verify.equal(result.status, 0);
                this.verify.equal(result.value.width, 859);
                this.verify.equal(result.value.height, 482)
            })
            .clickBySelectorXpath('//a[@class="cropZoomOut"]')
            .getElementSize('//img[@class="cropImage"]', function (result) {
                this.verify.equal(typeof result, "object");
                this.verify.equal(result.status, 0);
                this.verify.equal(result.value.width, 800);
                this.verify.equal(result.value.height, 450)
            })
    },

    'click on [Crop]': function (browser) {
        browser
            .clickBySelectorXpath('//button[text()="Crop"]')
            .waitForElementVisible('//div[text()="Image cropped"]', 20000)
            .verify.elementNotPresent('//img[@src="http://alpha.master-api.managementevents.com/frontend/web/images/no-image.png"]');
    },

    'verify uploaded logo': function (browser) {
        browser
            .waitForElementVisible('//img[@id="logo"]', 30000)
            .getElementSize('//img[@id="logo"]', function (result) {
                this.verify.equal(typeof result, "object");
                this.verify.equal(result.status, 0);
                this.verify.equal(result.value.width, 291);
                this.verify.equal(result.value.height, 146);
            })
    },

    'download size less then 800X400': function (browser) {
        browser
            .setValueByXpath('//input[@id="myUnit"]', __dirname + '/1169353259.jpg')
            .waitForElementVisible('//div[text()="Image minimum size should be 800x400px"]', 30000);
    },

    'delete candidate': function (browser) {
        browser
            .deleteCandidateFromProject()
            .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]')
            .waitForElementVisible('//div[text()="Company deleted successfully"]', 30000);
    },
});
