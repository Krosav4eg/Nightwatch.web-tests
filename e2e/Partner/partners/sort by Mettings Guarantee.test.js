var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/partners')
    },

    'sort by Mettings Guarantee up': function (browser) {
        var meetingGuaranteeColumn = browser.page.partners().section.meetingGuaranteeColumn;
        meetingGuaranteeColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '0')
            .verify.containsText('@secondRow', '0')
            .verify.containsText('@thirdRow', '0')
            .verify.containsText('@fourthRow', '0')
    },

    'sort by Mettings Guarantee down': function (browser) {
        var meetingGuaranteeColumn = browser.page.partners().section.meetingGuaranteeColumn;
        meetingGuaranteeColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '0')
            .verify.containsText('@secondRow', '0')
            .verify.containsText('@thirdRow', '0')
            .verify.containsText('@fourthRow', '0')
    },

    'search by Mettings Guarantee Blank': function (browser) {
        var meetingGuaranteeColumn = browser.page.partners().section.meetingGuaranteeColumn;
        meetingGuaranteeColumn
            .setValueBySelector('@seachColumn', ['0', browser.Keys.ENTER])

            .verify.containsText('@firstRow', '0')
    },
});
