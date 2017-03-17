var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to helpdesk': function (browser) {
        browser
            .relUrl('/events/2008/helpdesk')
    },

    'click on last name of delegates': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//h4[contains(text(),"Event (#2008)")]')
            .clickBySelectorXpath('//a[contains(text(),"Röynä")]');
    },

    'chosen delegate header verifying': function (browser) {
        browser
            .verify.elementPresent('//h4[contains(text(),"Eero Röynä")]')
            .verify.elementPresent('//a[contains(text(),"E#91075")]')
            .verify.elementPresent('//a[contains(text(),"M#203136")]')
            .verify.elementPresent('//div[contains(text(),"Helsingin ortodoksinen seurakunta")]')
            .verify.elementPresent('//i[contains(text(),"tekninen isännöitsijä")]');
    },

    'chosen delegate contact info verifying': function (browser) {
        browser
            .verify.elementPresent('//b[contains(text(),"Mobile ")]')
            .verify.elementPresent('//div[contains(text(),"+35840-0414387")]')

            .verify.elementPresent('//b[contains(text(),"Tel. Direct ")]')
            .verify.elementPresent('//div[contains(text(),"09-85646186")]')

            .verify.elementPresent('//b[contains(text(),"Tel.Switchboard ")]')
            .verify.elementPresent('//div[contains(text(),"020 7220600")]')

            .verify.elementPresent('//b[contains(text(),"ME Account")]')
            .verify.elementPresent('//span[contains(text(),"Yes")]')

            .verify.elementPresent('//b[contains(text(),"Delegate Group")]')
            .verify.elementPresent('//div[contains(text(),"Orange")]')

            .verify.elementPresent('//b[contains(text(),"Event Roles")]');
    },

    'booked meetings pop-up verifying': function (browser) {
        browser
            .verify.elementPresent('//div[contains(text(),"Booked Meetings")]')
        browser.clickBySelectorXpath('//i[@class="pull-right glyphicon accordion-panel-arrow glyphicon-chevron-up"]')
        browser.expect.element('(//div[@class="panel-heading panel-heading-auto-height"])[1]').to.not.be.visible
        browser.expect.element('(//div[@class="panel-heading panel-heading-auto-height"])[2]').to.not.be.visible
        browser.expect.element('(//div[@class="panel-heading panel-heading-auto-height"])[3]').to.not.be.visible
        browser.clickBySelector('(//i[@class="pull-right glyphicon accordion-panel-arrow glyphicon-chevron-down"])[1]');
    },

    'queuing meetings pop-up verifying': function (browser) {
        browser
            .verify.elementPresent('//div[contains(text(),"Queuing Meetings")]')
        browser .clickBySelector('(//i[@class="pull-right glyphicon accordion-panel-arrow glyphicon-chevron-down"])[1]')
        browser.expect.element('(//div[@aria-expanded="true"])[4]').to.be.visible
        browser .clickBySelector('(//i[@class="pull-right glyphicon accordion-panel-arrow glyphicon-chevron-up"])[2]')
    },
});