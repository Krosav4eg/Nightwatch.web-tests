var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to speaker': function (browser) {
        browser
            .relUrl('/event/214/speakers');
    },

    'check event data': function (browser) {
        var eventSection = browser.page.speaker().section.event;
        eventSection
            .waitForElementVisible('@totalName214', 3000);
    },

    'sort by title up': function (browser) {
        var titleColumnSection = browser.page.speaker().section.titleColumn;

        titleColumnSection
            .clickBySelector('@nameColumn')
            .verify.containsText('@firstRow', "Geschäftsführer")
            .verify.containsText("@secondRow", "Head of Global Construction")
            .verify.containsText("@thirdRow", "Senior Principal Engineer, Corporate Technology")
            .verify.containsText("@fourthRow", "Vice President Sales China and Mongolia");
    },

    'sort by title down': function (browser) {
        var titleColumnSection = browser.page.speaker().section.titleColumn;

        titleColumnSection
            .clickBySelector('@nameColumn')

            .verify.containsText("@firstRow", "Vorstand Industrie")
            .verify.containsText("@secondRow", "Vice President Sales China and Mongolia")
            .verify.containsText("@thirdRow", "Senior Principal Engineer, Corporate Technology");
    },

    'search by title ': function (browser) {
        var titleColumnSection = browser.page.speaker().section.titleColumn;

        titleColumnSection
            .setValueBySelector('@seachColumn', ['Geschäftsführer', browser.Keys.ENTER])
            .verify.containsText("@firstRow", "Geschäftsführer");
    },
});