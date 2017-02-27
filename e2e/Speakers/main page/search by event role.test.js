var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/214/speakers')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'check event data': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h4[contains(text(), "Event (#214)")]', 3000);
    },

    'drop down list verify': function (browser) {
        browser
            .moveToElement('(//tr[1]/td[11])[1]', 1298, 597)

            .clickBySelectorXpath('(//select)[2]')
            .verify.containsText('(//select)[2]/option[1]', '')
            .verify.containsText('(//option[@value="1"])[2]', 'Hosted table host')
            .verify.containsText('(//option[@value="2"])[1]', 'Group discussion host')
            .verify.containsText('(//option[@value="3"])[1]', 'Advisory board member')
            .verify.containsText('(//option[@value="4"])[2]', 'Awards candidate')
            .verify.containsText('(//option[@value="5"])[2]', 'Case / expert speaker')
            .verify.containsText('(//option[@value="6"])[2]', 'Chairman')
            .verify.containsText('(//option[@value="7"])[2]', 'Cross-function keynote speaker')
            .verify.containsText('(//option[@value="8"])[1]', 'Debate speaker')
            .verify.containsText('(//option[@value="9"])[2]', 'FishBowl speaker')
            .verify.containsText('(//option[@value="10"])[2]', 'Group discussion initiator')
            .verify.containsText('(//option[@value="11"])[2]', 'Host delegate')
            .verify.containsText('(//option[@value="12"])[2]', 'Keynote speaker')
            .verify.containsText('(//option[@value="13"])[1]', 'Panel speaker')
            .verify.containsText('(//option[@value="14"])[1]', 'Leadership speaker')
            .verify.containsText('(//option[@value="15"])[2]', 'Testimonial')
            .verify.containsText('(//option[@value="30"])[1]', 'Lunch host')
            .verify.containsText('(//option[@value="31"])[1]', 'Dinner host');
    },

    'check blank': function (browser) {
        browser
            .useXpath()
            .clickBySelectorXpath('(//select)[2]/option[1]')
            .verify.elementPresent('//h4/span[contains(text(), "5")]')

            .verify.elementPresent('(//tr[1]/td[11])[2]')
            .verify.elementPresent('//tr[2]/td[11]')
            .verify.elementPresent('//tr[3]/td[11]')
            .verify.elementPresent('//tr[4]/td[11]')
            .verify.elementPresent('//tr[5]/td[11]')
            // .verify.elementPresent('//tr[6]/td[11]')
            // .verify.elementPresent('//tr[7]/td[11]')
            // .verify.elementPresent('//tr[8]/td[11]')
            // .verify.elementPresent('//tr[9]/td[11]')
            // .verify.elementPresent('//tr[10]/td[11]')
            // .verify.elementPresent('//tr[12]/td[11]')
            // .verify.elementPresent('//tr[13]/td[11]');
    },

    'check Hosted table host role': function (browser) {
        browser
            .useXpath()
            .clickBySelectorXpath('(//option[@value="1"])[2]')
            .verify.elementPresent('//h4/span[contains(text(), "0")]');
    },

    'check Group discussion host': function (browser) {
        browser
            .clickBySelectorXpath('(//option[@value="2"])[1]')
            .verify.elementPresent('//h4/span[contains(text(), "0")]');
    },

    'check Advisory board member ': function (browser) {
        browser
            .clickBySelectorXpath('(//option[@value="3"])[1]')
            .verify.elementPresent('//h4/span[contains(text(), "0")]')
    },

    'check Awards candidate': function (browser) {
        browser
            .clickBySelectorXpath('(//option[@value="4"])[2]')
            .verify.elementPresent('//h4/span[contains(text(), "0")]')
    },

    'check Case / expert speaker': function (browser) {
        browser
            .clickBySelectorXpath('(//option[@value="5"])[2]')
            .verify.elementPresent('//h4/span[contains(text(), "0")]')
    },

    'check Chairman': function (browser) {
        browser
            .clickBySelectorXpath('(//option[@value="6"])[2]')
            .verify.elementPresent('//h4/span[contains(text(), "0")]');
    },

    'check Cross-function keynote speaker': function (browser) {
        browser
            .clickBySelectorXpath('(//option[@value="7"])[2]')
            .verify.elementPresent('//h4/span[contains(text(), "0")]')
    },

    'check Debate speaker': function (browser) {
        browser
            .clickBySelectorXpath('(//option[@value="8"])[1]')
            .verify.elementPresent('//h4/span[contains(text(), "1")]')

            .verify.containsText("(//tr[1]/td[11]/span/ul/li)[1]", "Debate speaker")
    },

    'check FishBowl speaker': function (browser) {
        browser
            .clickBySelectorXpath('(//option[@value="9"])[2]')
            .verify.elementPresent('//h4/span[contains(text(), "0")]')
    },

    'check Group discussion initiator': function (browser) {
        browser
            .clickBySelectorXpath('(//option[@value="10"])[2]')
            .verify.elementPresent('//h4/span[contains(text(), "1")]')

            .verify.containsText("(//tr[1]/td[11]/span/ul/li)[1]", "Group discussion initiator")
    },

    'check Host delegate': function (browser) {
        browser
            .clickBySelectorXpath('(//option[@value="11"])[2]')
            .verify.elementPresent('//h4/span[contains(text(), "2")]')

            .verify.containsText("(//tr[1]/td[11]/span/ul/li)[2]", "Host delegate")
            .verify.containsText("(//tr[2]/td[11]/span/ul/li)[1]", "Host delegate");
    },

    'check Keynote speaker': function (browser) {
        browser
            .clickBySelectorXpath('(//option[@value="12"])[2]')
            .verify.elementPresent('//h4/span[contains(text(), "3")]')

            .verify.containsText("(//tr[1]/td[11]/span/ul/li)[2]", "Keynote speaker")
            .verify.containsText("(//tr[2]/td[11]/span/ul/li)[1]", "Keynote speaker")
            .verify.containsText("(//tr[3]/td[11]/span/ul/li)[1]", "Keynote speaker");
    },

    'check Panel': function (browser) {
        browser
            .clickBySelectorXpath('(//option[@value="13"])[1]')
            .verify.elementPresent('//h4/span[contains(text(), "0")]');
    },

    'check Leadership speaker': function (browser) {
        browser
            .clickBySelectorXpath('(//option[@value="14"])[1]')
            .verify.elementPresent('//h4/span[contains(text(), "0")]');
    },

    'check Testimonial': function (browser) {
        browser
            .clickBySelectorXpath('(//option[@value="15"])[2]')
            .verify.elementPresent('//h4/span[contains(text(), "0")]');
    },

    'check Lunch host': function (browser) {
        browser
            .clickBySelectorXpath('(//option[@value="30"])[1]')
            .verify.elementPresent('//h4/span[contains(text(), "0")]');
    },

    'check Dinner host': function (browser) {
        browser
            .clickBySelectorXpath('(//option[@value="31"])[1]')
            .verify.elementPresent('//h4/span[contains(text(), "0")]');
    },

});