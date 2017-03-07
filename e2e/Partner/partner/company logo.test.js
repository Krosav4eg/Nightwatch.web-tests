var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/212/partners/25')
    },

    'add picture  jpeg': function (browser) {
        browser
            .setValueByXpath('//input[@id="myUnit"]', __dirname + '/658.jpeg')

            .waitForElementVisible('//h4[text()="Crop picture"]', 30000)
            .waitForElementVisible('//img[@class="cropImage"]', 30000)
            .getElementSize('//img[@class="cropImage"]', function (result) {
                this.verify.equal(typeof result, "object");
                this.verify.equal(result.status, 0);
                this.verify.equal(result.value.width, 712);
                this.verify.equal(result.value.height, 401)
            })

            .clickBySelectorXpath('//img[@class="cropImage"]')
            .waitForElementVisible('//div[@class="cropControls"]', 30000)
            .clickBySelectorXpath('//button[@class="cropZoomIn"]')
            .getElementSize('//img[@class="cropImage"]', function (result) {
                this.verify.equal(typeof result, "object");
                this.verify.equal(result.status, 0);
                this.verify.equal(result.value.width, 775);
                this.verify.equal(result.value.height, 436)
            })

            .clickBySelectorXpath('//button[@class="cropZoomOut"]')
            .getElementSize('//img[@class="cropImage"]', function (result) {
                this.verify.equal(typeof result, "object");
                this.verify.equal(result.status, 0);
                this.verify.equal(result.value.width, 712);
                this.verify.equal(result.value.height, 401)
            })

            .clickBySelectorXpath('//button[text()="Crop"]')
            .waitForElementVisible('//div[text()="Image cropped"]', 20000)

            .clickBySelectorXpath('(//button[text()="Save changes"])[2]')

            .waitForElementVisible('//div[@class="simple-notification toast-notification alert"]', 10000)
            .verify.containsText('//div[@class="toast-title"]', 'Warning!')
            .verify.containsText('//div[@class="toast-message"]', 'Please upload updated print logo as well!')
            .clickBySelectorXpath('//div[@class="toast-content"]')
    },

    'add Print logo': function (browser) {
        browser
            .setValueByXpath('//input[@name="printlogo"]', __dirname + '/658.jpeg')
            .clickBySelectorXpath('(//button[text()="Save changes"])[2]')

            .waitForElementVisible('//div[@class="toast-content"]', 10000)
            .verify.containsText('//div[@class="toast-title"]', 'Failure!')
            .verify.containsText('//div[@class="toast-message"]', 'Extention problem')
            .clickBySelectorXpath('//div[@class="toast-content"]')
    },

    'add Print logo': function (browser) {
        browser
            .setValueByXpath('//input[@name="printlogo"]', __dirname + '/658.eps')

            .clickBySelectorXpath('(//button[text()="Save changes"])[2]')

            .waitForElementVisible('//div[@class="toast-content"]', 10000)
            .verify.containsText('//div[@class="toast-title"]', 'Success!')
            .verify.containsText('//div[@class="toast-message"]', 'Logo file successfully created')
            .clickBySelectorXpath('//div[@class="toast-content"]')
    },

    'reset to default': function (browser) {
        browser
            .clickBySelectorXpath('//*[text()="Reset to default"]')

            .getAttribute('//img[@class="contact-picture"]', "src", function(result) {
                var imgLoad = result.value;
                this
                    .click('//label[text()="Master company name:"]/../div/a')

                this.verify.attributeContains('//img[@class="contact-picture"]', "src", imgLoad )
            });
    },
});