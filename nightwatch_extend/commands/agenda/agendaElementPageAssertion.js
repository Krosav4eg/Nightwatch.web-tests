/**
 * @returns {Object}
 */
module.exports.command = function () {
    this
        .useXpath()
        .verify.elementPresent('//label[contains(text(),"End time")]', 'End time')
        .verify.elementPresent('//label[contains(text(),"Start time")]', 'Start time')

        .verify.elementPresent('//label[contains(text(),"Meeting allowed")]', 'Meeting allowed')

        .verify.elementPresent('//label[contains(text(),"Groups Used")]', 'Groups Used')

        .verify.elementPresent('//label[contains(text(),"Event Groups")]', 'Event Groups')
        .verify.containsText('(//div[@class="checkbox-item"])[1]','Group 1 - orange')
        .verify.containsText('(//div[@class="checkbox-item"])[2]','Group 2 - violet')

        .verify.elementPresent('//label[contains(text(),"Show in calendars")]', 'Show in calendars')
        .verify.containsText('(//label)[9]','Delegates')
        .verify.containsText('(//label)[10]','Provider representatives')

        .verify.elementPresent('//label[contains(text(),"Publish WWW")]', 'Publish WWW')
        .useCss()
        .verify.elementPresent('#visibilityPublishWWWYes')
        .verify.elementPresent('#visibilityPublishWWWNo')

        .useXpath()
        .verify.elementPresent('//div[@class="form-group"]/div/label[contains(text(),"Room")]');
    return this;

};
