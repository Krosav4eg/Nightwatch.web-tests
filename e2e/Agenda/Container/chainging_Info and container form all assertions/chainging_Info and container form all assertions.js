var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {
    '@disabled': true,
    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/agenda')
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000);
    },
    'creation container for changing info': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('button.btn.btn-primary.btn-block', 10000)
            .click('button.btn.btn-primary.btn-block')
            .pause(2000)
            .useXpath()
            .assert.containsText('//h4[contains(text(),"Container form")]', 'Container form')
            .useCss()
            .waitForElementVisible('input#heading', 1000)
            .setValue('input#heading', 'test1')
            .waitForElementVisible('input#subHeading', 1000)
            .setValue('input#subHeading', 'test')
            .waitForElementVisible('#containerStartHour input', 1000)
            .setValue('#containerStartHour input', '8:00')
            .waitForElementVisible('#containerEndHour input', 1000)
            .setValue('#containerEndHour input', '10:00')
            .useXpath()
            .click('//form/div[2]/div/div/button[contains(text(),"Save")]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(1000)
            .useXpath()
            .assert.containsText('//b[1][contains(text(),"8:00")]', '8:00')
            .assert.containsText('//b[2][contains(text(),"10:00")]', '10:00');
    },

    'click on (edit button) ': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('i.fa.fa-pencil.edit-container', 2000)
            .click('i.fa.fa-pencil.edit-container')
            .pause(2000)
            .useXpath()
            .assert.containsText('//h4[contains(text(),"Container form")]', 'Container form');
    },
    'delete end time': function (browser) {
        browser
            .useCss()
            .click('#containerEndHour input')
            .clearValue('#containerEndHour input')
            .pause(1000)
            .click('input#subHeading')
            .pause(2000)
            .useXpath()
            .assert.elementPresent('//p[text()=" End Hour is required.           "]')
            .useCss()
            .setValue('#containerEndHour input', ['00:00', browser.Keys.ENTER])
            .useXpath()
            .assert.elementPresent('//p[text()=" Date should be between 08:00 and 23:59           "]');

    },
    'delete start time': function (browser) {
        browser
            .useCss()
            .click('#containerStartHour input')
            .clearValue('#containerStartHour input')
            .pause(1000)
            .click('input#subHeading')
            .pause(2000)
            .useXpath()
            .assert.elementPresent('//p[text()=" Start Hour is required.           "]')
            .useCss()
            .setValue('#containerStartHour input', ['7:59', browser.Keys.ENTER])
            .useXpath()
            .assert.elementPresent('//p[text()=" Date should be between 08:00 and 23:59           "]');

    },
    'click NO button on form': function (browser) {
        browser
            .waitForElementVisible('//modal[@class="modal fade in"]//button[1][@class="btn btn-default pull-right"]', 2000)
            .click('//modal[@class="modal fade in"]//button[1][@class="btn btn-default pull-right"]')
            .pause(2000);
    },

    'no change was made assertion': function (browser) {
        browser
            .useXpath()
            .assert.elementPresent('//b[contains(text(), "test1")]')
            .assert.containsText('//b[1][contains(text(),"8:00")]', '8:00')
            .assert.containsText('//b[2][contains(text(),"10:00")]', '10:00');
    },

    'delete container for changing info ': function (browser) {
        browser
            .useCss()
            .click('.fa.fa-trash-o.delete-container')
            .pause(1000)
            .waitForElementVisible('div.modal-footer>button.btn.btn-success', 5000)
            .click('div.modal-footer>button.btn.btn-success')
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(1000)
            .useXpath()
            .assert.elementNotPresent('//b[contains(text(), "test1")]');

    },
    'creation container': function (browser) {
        browser
            .useCss()
            .click('button.btn.btn-primary.btn-block')
            .pause(2000)
            .useXpath()
            .assert.containsText('//h4[contains(text(),"Container form")]', 'Container form')
            .useCss()
            .waitForElementVisible('input#heading', 1000)
            .setValue('input#heading', 'autotest4')
            .waitForElementVisible('input#subHeading', 1000)
            .setValue('input#subHeading', 'test')
            .waitForElementVisible('#containerStartHour input', 1000)
            .setValue('#containerStartHour input', '8:00')
            .waitForElementVisible('#containerEndHour input', 1000)
            .setValue('#containerEndHour input', '10:00')
            .useXpath()
            .click('//form/div[2]/div/div/button[contains(text(),"Save")]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(1000);
    },

    'check information in agenda page': function (browser) {
        browser
            .useXpath()
            .assert.containsText('//b[contains(text(),"8:00")]', '8:00')
            .assert.containsText('//b[contains(text(),"10:00")]', '10:00')
            .assert.elementPresent('//b[contains(text(), "autotest4")]');
    },

    'click edit button': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('i.fa.fa-pencil.edit-container', 3000)
            .click('i.fa.fa-pencil.edit-container')
            .pause(1000)
            .useXpath()
            .assert.containsText('//h4[contains(text(),"Container form")]', 'Container form');
    },

    'blank.click another field': function (browser) {
        browser
            .useCss()
            .click('input#heading')
            .clearValue('input#heading')
            .click('input#subHeading');


    },

    'blank click ': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//form/div[2]/div/div/button[contains(text(),"Save")]', 3000)
            .click('//form/div[2]/div/div/button[contains(text(),"Save")]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000);

    },

    'click NO button': function (browser) {
        browser
            .pause(3000)
            .click('i.fa.fa-pencil.edit-container')
            .useXpath()
            .waitForElementVisible('//modal[@class="modal fade in"]//button[1][@class="btn btn-default pull-right"]', 2000)
            .click('//modal[@class="modal fade in"]//button[1][@class="btn btn-default pull-right"]')
            .pause(2000)
            .assert.elementPresent('//b[contains(text(), "autotest4")]')
            .assert.containsText('//b[1][contains(text(),"8:00")]', '8:00')
            .assert.containsText('//b[2][contains(text(),"10:00")]', '10:00')
            .pause(3000);
    },


    'delete cont': function (browser) {
        browser
            .useCss()
            .click('.fa.fa-trash-o.delete-container')
            .pause(1000)
            .waitForElementVisible('div.modal-footer>button.btn.btn-success', 1000)
            .click('div.modal-footer>button.btn.btn-success')
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(1000)
            .useXpath()
            .assert.elementNotPresent('//b[contains(text(), "autotest4")]');

    },
    'Check that field is required = blank click another field': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('button.btn.btn-primary.btn-block', 3000)
            .click('button.btn.btn-primary.btn-block')
            .pause(2000)
            .useXpath()
            .assert.containsText('//h4[contains(text(),"Container form")]', 'Container form')
            .useCss()
            .click('#containerEndHour')
            .pause(1000)
            .click('input#subHeading')
            .pause(1000);
    },
    'blank click Save': function (browser) {
        browser
            .useXpath()
            .click('//form/div[2]/div/div/button[contains(text(),"Save")]')
            .assert.elementPresent('//p[text()=" End Hour is required.           "]')
            .waitForElementVisible('//modal[@class="modal fade in"]//button[1][@class="btn btn-default pull-right"]', 2000)
            .click('//modal[@class="modal fade in"]//button[1][@class="btn btn-default pull-right"]')
            .pause(2000);
    },

    'check end time after event': function (browser) {
        browser
            .useCss()
            .click('button.btn.btn-primary.btn-block')
            .pause(2000)
            .useXpath()
            .assert.containsText('//h4[contains(text(),"Container form")]', 'Container form')
            .useCss()
            .waitForElementVisible('#containerEndHour input', 1000)
            .setValue('#containerEndHour input', ['00:00', browser.Keys.ENTER])
            .useXpath()
            .assert.elementPresent('//p[text()=" Date should be between 08:00 and 23:59           "]')
            .waitForElementVisible('//modal[@class="modal fade in"]//button[1][@class="btn btn-default pull-right"]', 2000)
            .click('//modal[@class="modal fade in"]//button[1][@class="btn btn-default pull-right"]')
            .pause(2000);
    },

    'check end time after creation container': function (browser) {
        browser
            .useCss()
            .click('button.btn.btn-primary.btn-block')
            .pause(2000)
            .useXpath()
            .assert.containsText('//h4[contains(text(),"Container form")]', 'Container form')
            .useCss()
            .waitForElementVisible('input#heading', 1000)
            .setValue('input#heading', 'autotest5')
            .waitForElementVisible('input#subHeading', 1000)
            .setValue('input#subHeading', 'test')
            .waitForElementVisible('#containerStartHour input', 1000)
            .setValue('#containerStartHour input', '8:00')
            .waitForElementVisible('#containerEndHour input', 1000)
            .setValue('#containerEndHour input', '10:00')
            .useXpath()
            .click('//form/div[2]/div/div/button[contains(text(),"Save")]')
            .waitForElementVisible('//b[2][contains(text(),"10:00")]', 15000)
            .assert.containsText('//b[2][contains(text(),"10:00")]', '10:00');
    },

    'Check that only container was create ': function (browser) {
        browser
            .assert.elementPresent('//b[contains(text(), "autotest5")]')
            .assert.containsText('//b[1][contains(text(),"8:00")]', '8:00')
            .assert.containsText('//b[2][contains(text(),"10:00")]', '10:00');
    },

    'that information message appears': function (browser) {
        browser
            .assert.elementPresent('//div[text()=" You don`t have any elements into container                 "]');

    },

    'container without time 8:00-8:00': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('button.btn.btn-primary.btn-block', 3000)
            .click('button.btn.btn-primary.btn-block')
            .pause(2000)
            .useXpath()
            .assert.containsText('//h4[contains(text(),"Container form")]', 'Container form')
            .useCss()
            .waitForElementVisible('input#heading', 1000)
            .setValue('input#heading', 'autotest5 ')
            .waitForElementVisible('input#subHeading', 1000)
            .setValue('input#subHeading', 'test')
            .waitForElementVisible('#containerStartHour input', 1000)
            .setValue('#containerStartHour input', '8:00')
            .waitForElementVisible('#containerEndHour input', 1000)
            .setValue('#containerEndHour input', '8:00')
            .useXpath()
            .click('//form/div[2]/div/div/button[contains(text(),"Save")]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .useXpath()
            .assert.elementPresent('//b[contains(text(), "autotest5")]')
            .assert.containsText('//b[1][contains(text(),"8:00")]', '8:00')
            .assert.containsText('//b[2][contains(text(),"8:00")]', '8:00');
    },
    'delete container': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('.fa.fa-trash-o.delete-container', 5000)
            .click('.fa.fa-trash-o.delete-container')
            .waitForElementVisible('div.modal-footer>button.btn.btn-success', 3000)
            .click('div.modal-footer>button.btn.btn-success')
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000);

    },
    'delete container again': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('.fa.fa-trash-o.delete-container', 5000)
            .click('.fa.fa-trash-o.delete-container')
            .waitForElementVisible('div.modal-footer>button.btn.btn-success', 3000)
            .click('div.modal-footer>button.btn.btn-success')
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(1000)
            .useXpath()
            .assert.elementNotPresent('//b[contains(text(), "autotest5")]');

    },


    'check save button': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('button.btn.btn-primary.btn-block', 5000)
            .click('button.btn.btn-primary.btn-block')
            .pause(2000)
            .useXpath()
            .assert.containsText('//h4[contains(text(),"Container form")]', 'Container form')
            .useCss()
            .waitForElementVisible('input#heading', 1000)
            .setValue('input#heading', 'autotest6')
            .waitForElementVisible('input#subHeading', 1000)
            .setValue('input#subHeading', 'test')
            .waitForElementVisible('#containerStartHour input', 1000)
            .setValue('#containerStartHour input', '8:00')
            .waitForElementVisible('#containerEndHour input', 1000)
            .setValue('#containerEndHour input', '10:00')
            .useXpath()
            .click('//form/div[2]/div/div/button[contains(text(),"Save")]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .useXpath()
            .assert.elementPresent('//b[contains(text(), "autotest6")]')
            .assert.containsText('//b[1][contains(text(),"8:00")]', '8:00')
            .assert.containsText('//b[2][contains(text(),"10:00")]', '10:00');
    },

    'delete container for header ': function (browser) {
        browser
            .useCss()
            .click('.fa.fa-trash-o.delete-container')
            .waitForElementVisible('modal.modal.fade.in div.modal-footer>button.btn.btn-success', 4000)
            .click('div.modal-footer>button.btn.btn-success')
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(1000)
            .useXpath()
            .assert.elementNotPresent('//b[contains(text(), "autotest6")]');

    },

    'Check that field header is required ': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('button.btn.btn-primary.btn-block', 5000)
            .click('button.btn.btn-primary.btn-block')
            .pause(2000)
            .useXpath()
            .assert.containsText('//h4[contains(text(),"Container form")]', 'Container form')
            .useCss()
            .click('input#heading')
            .pause(1000)
            .click('input#subHeading')
            .useXpath()
            .assert.elementPresent('//p[text()=" Heading is required.           "]')
            .waitForElementVisible('//modal[@class="modal fade in"]//button[1][@class="btn btn-default pull-right"]', 2000)
            .click('//modal[@class="modal fade in"]//button[1][@class="btn btn-default pull-right"]')
            .pause(2000);

    },

    'blank.click Save': function (browser) {
        browser
            .useCss()
            .click('button.btn.btn-primary.btn-block')
            .pause(2000)
            .useXpath()
            .assert.containsText('//h4[contains(text(),"Container form")]', 'Container form')
            .click('//form/div[2]/div/div/button[contains(text(),"Save")]')
            .pause(1000)
            .assert.elementPresent('//p[text()=" Heading is required.           "]')
            .assert.elementPresent('//modal[@class="modal fade in"]//form/div[2]/div/div/button[contains(text(),"Cancel")]')
            .click('//modal[@class="modal fade in"]//form/div[2]/div/div/button[contains(text(),"Cancel")]')
            .useCss()
            .waitForElementNotVisible('div.modal-content', 10000);

    },


    'Check that field start time is required ': function (browser) {
        browser
            .waitForElementVisible('button.btn.btn-primary.btn-block', 10000)
            .click('button.btn.btn-primary.btn-block')
            .pause(2000)
            .useXpath()
            .assert.containsText('//h4[contains(text(),"Container form")]', 'Container form')
            .useCss()
            .click('#containerStartHour')
            .pause(1000)
            .click('input#subHeading')
            .pause(1000);
    },

    'blank click Save without inputting fields': function (browser) {
        browser
            .useXpath()
            .click('//form/div[2]/div/div/button[contains(text(),"Save")]')
            .assert.elementPresent('//p[text()=" Start Hour is required.           "]')
            .waitForElementVisible('//modal[@class="modal fade in"]//button[1][@class="btn btn-default pull-right"]', 2000)
            .click('//modal[@class="modal fade in"]//button[1][@class="btn btn-default pull-right"]')
            .pause(2000);

    },

    'can not create time before event': function (browser) {
        browser
            .useCss()
            .click('button.btn.btn-primary.btn-block')
            .pause(2000)
            .useXpath()
            .assert.containsText('//h4[contains(text(),"Container form")]', 'Container form')
            .useCss()
            .waitForElementVisible('#containerStartHour input', 1000)
            .setValue('#containerStartHour input', ['7:00', browser.Keys.ENTER])
            .useXpath()
            .assert.elementPresent('//p[text()=" Date should be between 08:00 and 23:59           "]')
            .waitForElementVisible('//modal[@class="modal fade in"]//button[1][@class="btn btn-default pull-right"]', 2000)
            .click('//modal[@class="modal fade in"]//button[1][@class="btn btn-default pull-right"]')
            .pause(2000);
    },

    'creation of container': function (browser) {
        browser
            .useCss()
            .click('button.btn.btn-primary.btn-block')
            .pause(2000)
            .useXpath()
            .assert.containsText('//h4[contains(text(),"Container form")]', 'Container form')
            .useCss()
            .waitForElementVisible('input#heading', 1000)
            .setValue('input#heading', 'autotest7 ')
            .waitForElementVisible('input#subHeading', 1000)
            .setValue('input#subHeading', 'test')
            .waitForElementVisible('#containerStartHour input', 1000)
            .setValue('#containerStartHour input', '8:00')
            .waitForElementVisible('#containerEndHour input', 1000)
            .setValue('#containerEndHour input', '10:00')
            .useXpath()
            .click('//form/div[2]/div/div/button[contains(text(),"Save")]')
            .pause(3000);
    },
    'check start time after creation container': function (browser) {
        browser
            .useXpath()
            .assert.containsText('//b[1][contains(text(),"8:00")]', '8:00');
    },

    'delete container for start time': function (browser) {
        browser
            .useCss()
            .click('.fa.fa-trash-o.delete-container')
            .pause(1000)
            .waitForElementVisible('div.modal-footer>button.btn.btn-success', 1000)
            .click('div.modal-footer>button.btn.btn-success')
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(1000)
            .useXpath()
            .assert.elementNotPresent('//b[contains(text(), "autotest7")]');
    },


    'blank click another field for sub_heading': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('button.btn.btn-primary.btn-block', 5000)
            .click('button.btn.btn-primary.btn-block')
            .useXpath()
            .assert.elementPresent('//h4[contains(text(), "Container form")]')
            .useCss()
            .waitForElementVisible('input#subHeading', 1000)
            .click('input#subHeading')
            .waitForElementVisible('input#heading', 1000)
            .click('input#heading');
    },

    'Check that field sub_heading is not required': function (browser) {
        browser
            .useXpath()
            .assert.elementNotPresent('//p[text()=" Sub Heading is required.           "]');
    },

    'blank click Save for sub_heading': function (browser) {
        browser
            .useXpath()
            .click('//form/div[2]/div/div/button[contains(text(),"Save")]')
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 10000);

    },

    'check save button for sub_heading': function (browser) {
        browser
            .waitForElementVisible('button.btn.btn-primary.btn-block', 4000)
            .click('button.btn.btn-primary.btn-block')
            .useXpath()
            .assert.elementPresent('//h4[contains(text(), "Container form")]')
            .useCss()
            .waitForElementVisible('input#heading', 1000)
            .setValue('input#heading', 'autotest8 ')
            .waitForElementVisible('input#subHeading', 1000)
            .setValue('input#subHeading', 'test')
            .waitForElementVisible('#containerStartHour input', 1000)
            .setValue('#containerStartHour input', '8:00')
            .waitForElementVisible('#containerEndHour input', 1000)
            .setValue('#containerEndHour input', '10:00')
            .useXpath()
            .click('//form/div[2]/div/div/button[contains(text(),"Save")]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .useXpath()
            .assert.elementPresent('//b[contains(text(), "autotest8")]');
    },

    'delete container for sub_heading': function (browser) {
        browser
            .useCss()
            .click('.fa.fa-trash-o.delete-container')
            .waitForElementVisible('div.modal-footer>button.btn.btn-success', 5000)
            .click('div.modal-footer>button.btn.btn-success')
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .useXpath()
            .assert.elementNotPresent('//b[contains(text(), "autotest8")]');

    },
});
