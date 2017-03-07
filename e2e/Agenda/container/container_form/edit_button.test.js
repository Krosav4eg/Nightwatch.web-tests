var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/219/agenda')
    },

    'creation container': function (browser) {
        var agendaPage = browser.page.agenda();
        agendaPage.
            containerCreation();
    },

    'click edit button': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .clickBySelector('@editButton')
            .verify.elementPresent('@totalNameContainer');
    },

    'blank.click another field': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .clickBySelector('@headingInput')
            .clickBySelector('@subHeadingInput');
    },

    'blank click Save': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .clickBySelector('@saveButton');
    },

    'click NO button': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .clickBySelector('@editButton')

            .clickBySelector('//button[1][@class="btn btn-default pull-right"]')

            .verify.elementPresent('@startTime')
            .verify.elementPresent('@endTime')
            .verify.elementPresent('@textInContainer');
    },

    'delete container': function (browser) {
        var agendaPage = browser.page.agenda();
        agendaPage
            .containerDelete();
    },
});
