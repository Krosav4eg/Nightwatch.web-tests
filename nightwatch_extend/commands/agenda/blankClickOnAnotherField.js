/**
 * @returns {Object}
 */
module.exports.command = function () {
    this
        .useXpath()
        .verify.containsText('//h4[contains(text(),"Element form")]', 'Element form')

        .verify.containsText('//label[contains(text(),"Agenda Element Type ")]', 'Agenda Element Type ')
        .clickBySelectorXpath('//label[contains(text(),"Agenda Element Type ")]')

        .verify.containsText('//label[contains(text(),"           Start time ")]', 'Start time')
        .clickBySelectorXpath('//label[contains(text(),"           Start time ")]')

        .verify.elementPresent('//p[text()=" Field is required.           "]');

    return this;
};
