var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
    },

    'pess on id': function (browser) {
        var idColumn = browser.page.presentations().section.idColumn;
        idColumn
            .clickBySelector('@firstRow')
    },

     'press on organizer name': function (browser) {
         var tableSpeaker = browser.page.presentationsEdit().section.tableSpeaker;
         tableSpeaker
            .clickBySelector('@firstRowInColumnM')
    },

    'check information about organizer ': function (browser) {
        var masterContactEdit = browser.page.masterContactEdit()
        masterContactEdit
            .verify.valueContains('@lastNameInput','Alphéus')
            .verify.valueContains('@firstNameInput','Ingo')
            .verify.valueContains('@academicTitleInput','')
            .verify.valueContains('@functionTitleInput','Geschäftsführer')
            .verify.valueContains('@masterCompanyIdInput','RWE GBS GmbH')
            .verify.valueContains('@countryInput','Germany')
            .verify.valueContains('@mobileInput','+49 162 2565252')
            .verify.valueContains('@emailInput','ingo.alpheus@rwe.com')
    },
});