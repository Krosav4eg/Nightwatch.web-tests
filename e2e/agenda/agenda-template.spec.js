var _ = require('lodash');
var boot = require('./../includes/boot.js');
var auth = require('./../includes/auth.js');

module.exports = _.assign(boot, auth, {
    '@tags': ['client'],

    'open agenda template page': function (client) {
        client
            .relUrl('/event-agenda-templates/add')
            .waitForElementPresent('body', 2000)
            .waitForElementVisible('checkbox-group', 2000);
    },

    'check elements on agenda template page': function (client) {
        client
            .assert.containsTextPresent('#page-heading h1', 'New Agenda Template')
            .assert.elementsCountCompare('#template_name', 1)
            .assert.elementsCountCompare('me-event-agenda-template-form', 1)
    },

    'save empty form': function (client) {
        client
            .click('button[type="submit"]')
            .assert.attributeContains('#template_name', 'class', 'ng-invalid')
            .assert.countPresentElements('.help-block', 2)
            .assert.urlEquals(client.launchUrl + '/event-agenda-templates/add');
    },

    'fill template name and save': function (client) {
        client
            .setValue('#template_name', 'name1')
            .click('button[type="submit"]')
            .assert.countPresentElements('.help-block', 1)
            .assert.urlEquals(client.launchUrl + '/event-agenda-templates/add');
    },

    'fill template name and check type and save': function (client) {
        client
            .click('checkbox-item input[type="checkbox"]')
            .click('button[type="submit"]')
            .waitForElementPresent('.toast-success', 2000)
            .assert.urlContains('/event-agenda-templates/edit/');
    }
});
