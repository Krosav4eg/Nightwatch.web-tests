/**
 * @returns {Object}
 */
module.exports.command = function () {
    this
        .verify.elementPresent('//h4[text()="Candidates"]')

        .verify.elementPresent('//h3[text()="Candidate 1"]')

        .verify.elementPresent('//label[text()="Project local name "]')
        .verify.elementPresent('//label[text()="Country "]')

        .verify.elementPresent('//*[text()="Candidate 1"]/../../../../../..//button[text()="Winner"]')
        .verify.elementPresent('//*[text()="Candidate 1"]/../../../../../..//button[text()="Delete"]')

        .verify.elementPresent('//label[text()="Introduction"]')
        .verify.elementPresent('//*[text()="Candidate 1"]/../../../../../..//textarea[@ngcontrol="introduction"]');

    return this;
};
