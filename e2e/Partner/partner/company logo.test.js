var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/212/partners/25')
    },

    'add picture  jpeg': function (browser) {
        var companyDescriptionLogos = browser.page.partnersEdit().section.companyDescriptionLogos;
        companyDescriptionLogos
            .setValueBySelector('@logoInput', __dirname + '/658.jpeg')

            .waitForElementVisible('@cropPictureText', 30000)
            .waitForElementVisible('@cropImage', 30000)
            .getElementSize('@cropImage', function (result) {
                this.verify.equal(typeof result, "object");
                this.verify.equal(result.status, 0);
                this.verify.equal(result.value.width, 712);
                this.verify.equal(result.value.height, 401)
            })

            .clickBySelector('@cropImage')
            .waitForElementVisible('@cropControls', 30000)
            .clickBySelector('@cropZoomIn')
            .getElementSize('@cropImage', function (result) {
                this.verify.equal(typeof result, "object");
                this.verify.equal(result.status, 0);
                this.verify.equal(result.value.width, 775);
                this.verify.equal(result.value.height, 436)
            })

            .clickBySelector('@cropZoomOut')
            .getElementSize('@cropImage', function (result) {
                this.verify.equal(typeof result, "object");
                this.verify.equal(result.status, 0);
                this.verify.equal(result.value.width, 712);
                this.verify.equal(result.value.height, 401)
            })

            .clickBySelector('@cropButton')
            .waitForElementVisible('@imageCroppedText', 20000)

            .clickBySelector('@saveChangesLogoButton')

            .waitForElementVisible('@alertMassege', 10000)
    },

    'add Print logo': function (browser) {
        var companyDescriptionLogos = browser.page.partnersEdit().section.companyDescriptionLogos;
        companyDescriptionLogos
            .setValueBySelector('@printlogoInput', __dirname + '/658.jpeg')
            .clickBySelector('@saveChangesLogoButton')

            .waitForElementVisible('@extentionProblemMassege', 10000);
    },

    'add Print logo': function (browser) {
        var companyDescriptionLogos = browser.page.partnersEdit().section.companyDescriptionLogos;
        companyDescriptionLogos
            .setValueBySelector('@printlogoInput', __dirname + '/658.eps')

            .clickBySelector('@saveChangesLogoButton')

            .waitForElementVisible('@successMassege', 10000)
    },

    'reset to default': function (browser) {
        var companyDescriptionLogos = browser.page.partnersEdit().section.companyDescriptionLogos;
        companyDescriptionLogos
            .clickBySelector('@resetToDefaultButton')

            .getAttribute('@contactPicture', "src", function(result) {
                var imgLoad = result.value;
                this
                    .useXpath()
                    .click('//label[text()="Master company name:"]/../div/a')

                this.verify.attributeContains('//img[@class="contact-picture"]', "src", imgLoad )
            });
    },
});