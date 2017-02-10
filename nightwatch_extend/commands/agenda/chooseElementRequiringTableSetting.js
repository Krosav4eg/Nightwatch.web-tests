/**
 * @returns {Object}
 */
module.exports.command = function () {
    this
        .useCss()
        .waitForElementVisible('.btn.btn-info.btn-block', 4000)
        .clickBySelectorCss('.btn.btn-info.btn-block')

        .useXpath()
        .verify.elementPresent('//h4[contains(text(),"Element form")]')
        .verify.elementPresent('//label[contains(text(),"           Agenda Element Entry Type ")]')
        .clickBySelectorCss('select#agendaElementEntryTypeId.form-control')

        .useXpath()
        .waitForElementVisible('//option[contains(text(),"Element requiring table setting")]', 1000)
        .clickBySelectorXpath('//option[contains(text(),"Element requiring table setting")]');

    return this;
};
