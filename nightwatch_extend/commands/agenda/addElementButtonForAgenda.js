/**
 * @returns {Object}
 */
module.exports.command = function () {
    this
        .clickBySelectorCss('.btn.btn-info.btn-block')
        .useXpath()
        .verify.elementPresent('//h4[contains(text(),"Element form")]')
        .verify.elementPresent('//label[contains(text(),"Agenda Element Entry Type")]')

        .clickBySelectorCss('select#agendaElementEntryTypeId.form-control')
        .clickBySelectorXpath('//option[contains(text(),"Static agenda element")]');

    return this;
};