var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/partners/25')
    },

    'verify Participation info': function (browser) {
        var participationInfo = browser.page.partnersEdit().section.participationInfo;
        participationInfo
            .clickBySelector('@nameSection')
            .expect.element('@masterCompanyNameText').to.not.be.visible;

        participationInfo.clickBySelector('@nameSection')
            .expect.element('@masterCompanyNameText').to.be.visible;

    },

    'verify Master company name': function (browser) {
        var participationInfo = browser.page.partnersEdit().section.participationInfo;
        participationInfo
            .verify.containsText('@masterCompanyNameInput', "4power Infocom Free Zone Company LLC")

            .click('@masterCompanyIdLink')

            .verify.urlContains("/EW/MasterCompany/cruII/id/");
        browser .back();
    },

  'verify Participation name': function (browser) {
      var participationInfo = browser.page.partnersEdit().section.participationInfo;
      participationInfo
            .waitForElementVisible('@participationNameInput', 30000)
            .verify.valueContains('@participationNameInput', "4power Infocom Free Zone Company LLC")
    },

    'verify Participation status': function (browser) {
        var participationInfo = browser.page.partnersEdit().section.participationInfo;
        participationInfo
            .clickBySelector('@canceledOption')
            .verify.containsText('@participationStatusSelect', "Cancelled")

            .clickBySelector('@unconfirmedRebookOption')
            .verify.containsText('@participationStatusSelect', "Unconfirmed (rebook)")

            .clickBySelector('@confirmedRebookOption')
            .verify.containsText('@participationStatusSelect', "Confirmed (rebook)")

            .clickBySelector('@unconfirmedOption')
            .verify.containsText('@participationStatusSelect', "Unconfirmed")

            .clickBySelector('@confirmedOption')
            .verify.containsText('@participationStatusSelect', "Confirmed")

            .clickBySelector('@canceledOption')
    },

    'verify Rebook responsible': function (browser) {
        var participationInfo = browser.page.partnersEdit().section.participationInfo;
        participationInfo
            .clickBySelector('@rebookResponsibleInput')
            .sendKeys('@rebookResponsibleInput', 'Mari Alén')
            .clickBySelector('@MariAlén');

    },

    'verify Guarantee Valid': function (browser) {
        var participationInfo = browser.page.partnersEdit().section.participationInfo;
        participationInfo
            .clickBySelector('@GuaranteeValidNoCheckbox');
    },

    'participation notes': function (browser) {
        var participationInfo = browser.page.partnersEdit().section.participationInfo;
        participationInfo
            .setValueBySelector('@packageNotesInput', "test test");
    },

     'click Save': function (browser) {
         var participationInfo = browser.page.partnersEdit().section.participationInfo;
         participationInfo
            .click('@saveButton')
            .clickBySelector('@confirmYesButton')

            .waitForElementVisible('@successMassege', 10000)

            .verify.containsText('@participationStatusSelect', "Cancelled")
            .verify.valueContains('@packageNotesInput', "test test")
            .verify.attributeEquals('@GuaranteeValidNoCheckbox', 'checked', 'true')
            .expect.element('@GuaranteeValidYesCheckbox').to.not.be.selected;

         var rebooking = browser.page.partnersEdit().section.rebooking;
         rebooking
             .clickBySelector('@nameSection')
             .verify.containsText('@rebookResponsible', "Mari Alén");
    },

    'edit ': function (browser) {
        var participationInfo = browser.page.partnersEdit().section.participationInfo;
        participationInfo
            .clickBySelector('@confirmedOption')
            .clickBySelector('@GuaranteeValidYesCheckbox')
            .setValueBySelector('@packageNotesInput', "test 2 test")
            .click('@saveButton')

            .waitForElementVisible('@successMassege', 10000)

            .verify.containsText('@participationStatusSelect', "Confirmed")
            .verify.valueContains('@packageNotesInput', "test 2 test")
            .verify.attributeEquals('@GuaranteeValidYesCheckbox', 'checked', 'true')
            .expect.element('@GuaranteeValidNoCheckbox').to.not.be.selected;
    },
});