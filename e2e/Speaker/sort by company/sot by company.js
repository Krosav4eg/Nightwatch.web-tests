var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {
    '@disabled': true,
    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/2008/presentations')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },
    'check event data': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h4[text()="Event (#2008)"]', 3000)
            .assert.elementPresent('//h3[text()="NeedSeeker 18.5.2016"]')
            .assert.elementPresent('//div[text()="Local name: NeedSeeker 18.5.2016"]')
            .assert.elementPresent('//div[text()="Dates: 2016-05-18 08:00:00 - 2016-05-18 13:00:00"]')
            .assert.elementPresent('//div[text()="Venue: Tapahtumakeskus Telakka, Helsinki"]');
    },
    'go to the edit presentation': function (browser) {
        browser
            .waitForElementVisible('//a[@href="/presentations/edit/3732"]', 3000)
            .click('//a[@href="/presentations/edit/3732"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h1[text()="Edit Presentation (#3732)"]', 3000);

    },

    'sort by company name up': function (browser) {
        browser
            .waitForElementVisible('//me-event-presentation-speaker-list//th[3][contains(text(),"Company name")]', 5000)
            .click('//me-event-presentation-speaker-list//th[3][contains(text(),"Company name")]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//tr[1]/td[3]/span[text()="       Danske Bank     "]', 5000)
            .waitForElementVisible('//tr[2]/td[3]/span[text()="       Norges Statsbaner AS (NSB)     "]', 30000)
            .waitForElementVisible('//tr[3]/td[3]/span[text()="       Turun Osuuskauppa     "]', 30000);

    },

    'sort by company name down': function (browser) {
        browser
            .waitForElementVisible('//me-event-presentation-speaker-list//th[3][contains(text(),"Company name")]', 5000)
            .click('//me-event-presentation-speaker-list//th[3][contains(text(),"Company name")]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//tr[3]/td[3]/span[text()="       Danske Bank     "]', 5000)
            .waitForElementVisible('//tr[2]/td[3]/span[text()="       Norges Statsbaner AS (NSB)     "]', 30000)
            .waitForElementVisible('//tr[1]/td[3]/span[text()="       Turun Osuuskauppa     "]', 30000);

    },


});