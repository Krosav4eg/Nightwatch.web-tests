var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/partner-meeting-status')
    },

    'sort by Representatives up': function (browser) {
        var representativesColumn = browser.page.meetingStatus().section.representativesColumn;
        representativesColumn
            .clickBySelector('@nameColumn')
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '45')
            .verify.containsText('@secondRow', '1')
            .verify.containsText('@thirdRow', '0')
            .verify.containsText('@fourthRow', '0')
    },

    'sort by Representatives down': function (browser) {
        var representativesColumn = browser.page.meetingStatus().section.representativesColumn;
        representativesColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '0')
            .verify.containsText('@secondRow', '0')
            .verify.containsText('@thirdRow', '0')
            .verify.containsText('@fourthRow', '0')
    },

    'search by Representatives Blank': function (browser) {
        var representativesColumn = browser.page.meetingStatus().section.representativesColumn;
        representativesColumn
            .setValueBySelector('@seachColumn', ['45', browser.Keys.ENTER])

            .verify.containsText('@firstRow', '45')
    },
});
