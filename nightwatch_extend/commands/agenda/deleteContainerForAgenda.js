/**
 * @returns {Object}
 */
module.exports.command = function () {
    this
        .clickBySelectorCss('.fa.fa-trash-o.delete-container')
        .clickBySelectorCss('div.modal-footer>button.btn.btn-success')
        .useXpath()
        .verify.elementNotPresent('//b[contains(text(), "test1")]');
    return this;
};
