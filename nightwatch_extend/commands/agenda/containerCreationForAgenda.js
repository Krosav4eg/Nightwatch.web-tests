/**
 * @returns {Object}
 */
module.exports.command = function () {
    this
        .useCss()
        .waitForElementVisible('button.btn.btn-primary.btn-block', 30000)
        .clickBySelectorCss('button.btn.btn-primary.btn-block')

        .useXpath()
        .waitForElementVisible('//h4[contains(text(),"Container form")]', 10000)
        .setValueByCss('input#heading', 'test1')
        .setValueByCss('input#subHeading', 'test')
        .setValueByCss('#containerStartHour input', '8:00')
        .setValueByCss('#containerEndHour input', '10:00')
        .clickBySelectorCss('input#subHeading')

        .useXpath()
        .clickBySelectorXpath('//form/div[2]/div/div/button[contains(text(),"Save")]')

        .verify.elementPresent('//b[1][contains(text(),"8:00")]')
        .verify.elementPresent('//b[2][contains(text(),"10:00")]')
        .verify.elementPresent('//b[contains(text(),"test1")]')
        .verify.elementPresent('//div[contains(text(),"Container saved")]')

        .useCss()
        .verify.elementPresent('.fa.fa-trash-o.delete-container')
        .verify.elementPresent('.fa.fa-pencil.edit-container');

    return this;
};
