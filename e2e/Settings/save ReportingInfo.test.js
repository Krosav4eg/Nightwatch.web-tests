var _ = require('lodash');
var presteps = require('./../presteps/presteps.js');
var auth = require('./../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {

        browser  .pause(3000)
            .url('http://alpha.ew.managementevents.com/EW/Event/ReportingInfo/id/2428')
    },

    'choose Uitto': function (browser) {
        var reportingInfoEdit = browser.page.reportingInfoEdit();
        reportingInfoEdit
            .waitForElementVisible('@saveButton', 10000)
            .click('@saveButton')
            .waitForElementVisible('@alertSuccessMessage', 50000)

            .containsCurrentData('@editDate');
    },
});