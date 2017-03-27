var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/representatives')
    },

    'sort by E#ID up': function (browser) {
        var idColumn = browser.page.representatives().section.idColumn;
        idColumn

            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '#50729')
            .verify.containsText('@secondRow', '#50730')
            .verify.containsText('@thirdRow', '#50731')
            .verify.containsText('@fourthRow', '#50732')

            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '#50775')
            .verify.containsText('@secondRow', '#50774')
            .verify.containsText('@thirdRow', '#50773')
            .verify.containsText('@fourthRow', '#50772')
    },

    'search by E#ID. Blank': function (browser) {
        var idColumn = browser.page.representatives().section.idColumn;
        idColumn
            .setValueBySelector('@seachColumn', ['50729', browser.Keys.ENTER])

            .verify.containsText('@firstRow', '#50729')
    },
});
