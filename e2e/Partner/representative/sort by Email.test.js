var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/representatives')
    },

    'sort by Email up': function (browser) {
        var emailColumn = browser.page.representatives().section.emailColumn;
        emailColumn

            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'aanand@profilesw.com')
            .verify.containsText('@secondRow', 'abhinav@pantechsystems.com')
            .verify.containsText('@thirdRow', 'alaa.assem@clinart.net')
            .verify.containsText('@fourthRow', 'albert@fujisoft.net')

            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'zameer@alrostamanigroup.ae')
            .verify.containsText('@secondRow', 'ville.kakela@managementevents.com')
            .verify.containsText('@thirdRow', 'victor@cmcs-mena.com')
            .verify.containsText('@fourthRow', 'venkateshm@techsource.ae')
    },

    'search by Email Blank': function (browser) {
        var emailColumn = browser.page.representatives().section.emailColumn;
        emailColumn
            .setValueBySelector('@seachColumn', ['zameer@alrostamanigroup.ae', browser.Keys.ENTER])

            .verify.containsText('@firstRow', 'zameer@alrostamanigroup.ae')
    },

    'search by Mobile 3 numbers': function (browser) {
        var emailColumn = browser.page.representatives().section.emailColumn;
        emailColumn
            .setValueBySelector('@seachColumn', ['zam', browser.Keys.ENTER])

            .verify.containsText('@firstRow', 'zameer@alrostamanigroup.ae')
    },
});
