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

    'add button verify': function (browser) {
        var presentation = browser.page.presentationsEdit().section.presentation;
        presentation
            .setValueBySelector('@addFileInput', __dirname + '/Event-Agenda.docx')
            .clickBySelector('@uploadFileButton')

            .verify.containsText('@listMaterialItem', 'Event-Agenda.docx (351.29 kB)')
            .waitForElementVisible('@deleteButton', 8000)

            .clickBySelector('@deleteButton')
            .clickBySelector('@alertYes')

            .verify.elementNotPresent('@eventAgendaDocx')

            .setValueBySelector('@addFileInput', __dirname + '/Event-Agenda.docx')
            .clickBySelector('@uploadFileButton')

            .verify.containsText('@listMaterialItem', 'Event-Agenda.docx (351.29 kB)')
            .waitForElementVisible('@deleteButton', 8000)

            .clickBySelector('@deleteButton')
            .clickBySelector('@alertYes')

            .verify.elementNotPresent('@eventAgendaDocx');
    },
});