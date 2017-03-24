var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
    },

    'go to the edit presentation': function (browser) {
        var idColumn = browser.page.presentations().section.idColumn;
        idColumn
            .clickBySelector('@firstRow')
    },

    'check edit page information': function (browser) {
        var presentation = browser.page.presentationsEdit().section.presentation;
        presentation
            .verify.elementPresent('@organizerText')

            .verify.elementPresent('@managementEventsText')
            .verify.elementPresent('@presentationTypeText')

            .verify.elementPresent('@headingText')
            .verify.elementPresent('@headingInput')
            .verify.elementPresent('@subheading1Text')
            .verify.elementPresent('@subheading1Input')
            .verify.elementPresent('@subheading2Text')
            .verify.elementPresent('@notesText')

            .verify.elementPresent('@createdText')
            .verify.elementPresent('@createdByText')

            .verify.elementPresent('@modifiedText')
            .verify.elementPresent('@modifiedByText')

            .verify.elementPresent('@cancelButton')
            .verify.elementPresent('@saveButton');
    },
});