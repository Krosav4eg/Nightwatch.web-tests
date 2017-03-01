/**
 * @returns {Object}
 */
module.exports.command = function () {
    this
        .clickBySelectorCss('.fa.fa-trash-o.delete-container')
        .clickBySelectorXpath('//button[@data-marker="me-confirm__button__button__yes"]')
        .useXpath()
        .verify.elementNotPresent('//b[contains(text(), "test1")]')
        .verify.elementPresent('//div[contains(text(), "Container deleted")]');
    return this;
};
