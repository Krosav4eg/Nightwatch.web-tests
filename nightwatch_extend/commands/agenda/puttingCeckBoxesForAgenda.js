/**
 * @returns {Object}
 */
module.exports.command = function () {
    this
        .useXpath()
        .verify.elementPresent('//div[text()="               Group 1 - orange             "]')
        .verify.elementPresent('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__0"]')
        .clickBySelectorXpath('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__0"]')

        .verify.elementPresent('//div[text()="               Group 2 - violet             "]')
        .verify.elementPresent('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__1"]')
        .clickBySelectorXpath('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__1"]')

        .clickBySelectorXpath('//div[@class="col-sm-12 container_btn_group"]/button[2][contains(text(),"Save")]');
    return this;
};
