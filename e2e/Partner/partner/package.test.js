var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to partners': function (browser) {
        browser
            .relUrl('/event/212/partners/7588')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'add new package': function (browser) {
        browser
            .clickBySelectorXpath('//*[@class="row-fluid btn btn-primary communication-participant-btn"]')
            .verify.containsText('(//h4[@class="modal-title"])[2]', "Select package model and template")
            .verify.elementPresent('//label[text()="Package model"]')
            .verify.elementPresent('//label[text()="Select package"]')
            .verify.elementPresent('(//select[@class="form-control ng-untouched ng-pristine ng-valid"])[2]')

            .clickBySelectorXpath('(//button[text()="Add"])[2]')

            .waitForElementVisible('//div[@class="toast-content"]', 10000)
            .verify.containsText('//div[@class="toast-title"]', 'Error')
            .verify.containsText('//div[@class="toast-message"]', 'Please choose package template')
            .clickBySelectorXpath('//div[@class="toast-content"]')

            .clickBySelectorXpath('//*[contains(text(), "Select package model and template")]/../../..//button[text()="Cancel"]')
    },

    'verify event based': function (browser) {
        browser
            .verify.containsText('//*[text()="Package ID"]/../div/div', '1237')
            .verify.containsText('//*[text()="Package type"]/../div/div', 'Silver')
            .verify.containsText('//*[text()="Package name"]/../div/div', 'Silver 2011')
            .verify.containsText('//*[text()="Package ID"]/../div/div', '1237')

            .clickBySelectorXpath('//option[text()="Archived"]')
            .clickBySelectorXpath('//option[text()="Active"]')

            .verify.containsText('//*[text()="Created"]/../div/div', '2016-06-28 17:29:00 /')
            .verify.containsText('//*[text()="Modified"]/../div/div', ' Xsolve ')
            .verify.containsText('//*[text()="Modified"]/../div/div', 'Test User')
    },

    'input fields': function (browser) {
        browser
            .setValueByXpath('//*[text()="Representatives"]/../div/input' , '1')
            .setValueByXpath('//*[text()="Group discussion hosts"]/../div/input' , '2')
            .setValueByXpath('//*[text()="One to many meeting hosts"]/../div/input' , '3')
            .setValueByXpath('//*[text()="Lunch hosts"]/../div/input' , '4')
            .setValueByXpath('//*[text()="Dinner hosts"]/../div/input' , '5')

            .setValueByXpath('//*[text()="Invited delegates"]/../div/input' , '30')

            .setValueByXpath('//*[text()="Meeting requests left"]/../div/input' , '20')
            .setValueByXpath('//*[text()="Guaranteed meetings"]/../div/input' , '25')
            .clickBySelectorXpath('(//*[text()="Matching"]/../div/div/label/input)[1]')
            .clickBySelectorXpath('(//*[text()="Target service"]/../div/div/label/input)[1]')

            .setValueByXpath('//*[text()="Case - whole audience"]/../div/input' , '1')
            .setValueByXpath('//*[text()="Case - parallel"]/../div/input' , '2')
            .setValueByXpath('//*[text()="Gold spotlight"]/../div/input' , '3')
            .setValueByXpath('//*[text()="Keynote"]/../div/input' , '4')
            .setValueByXpath('//*[text()="Platinum spotlight"]/../div/input' , '5')
            .setValueByXpath('//*[text()="Presentation - whole audience"]/../div/input' , '6')
            .setValueByXpath('//*[text()="Presentation - parallel"]/../div/input' , '7')
            .setValueByXpath('//*[text()="Snap shot"]/../div/input' , '8')
    },

    'click save': function (browser) {
        browser
            .clickBySelectorXpath('(//*[text()="Save"])[2]')
            .waitForElementVisible('//div[@class="toast-content"]', 10000)
            .verify.containsText('//div[@class="toast-title"]', 'Success')

            .verify.containsText('//*[text()="Modified"]/../div/div', ' Xsolve ')
            .verify.containsText('//*[text()="Modified"]/../div/div', 'Test User')
            .containsCurrentDataInSelectorXpath('//*[text()="Modified"]/../div/div');
    },

    'verivy input fields': function (browser) {
        browser
            .verify.valueContains('//*[text()="Representatives"]/../div/input' , '1')
            .verify.valueContains('//*[text()="Group discussion hosts"]/../div/input' , '2')
            .verify.valueContains('//*[text()="One to many meeting hosts"]/../div/input' , '3')
            .verify.valueContains('//*[text()="Lunch hosts"]/../div/input' , '4')
            .verify.valueContains('//*[text()="Dinner hosts"]/../div/input' , '5')

            .verify.valueContains('//*[text()="Invited delegates"]/../div/input' , '30')

            .verify.valueContains('//*[text()="Meeting requests left"]/../div/input' , '20')
            .verify.valueContains('//*[text()="Guaranteed meetings"]/../div/input' , '25')
            .verify.attributeEquals('(//*[text()="Matching"]/../div/div/label/input)[1]', 'checked', 'true')
            .verify.attributeEquals('(//*[text()="Target service"]/../div/div/label/input)[1]', 'checked', 'true')

            .verify.valueContains('//*[text()="Case - whole audience"]/../div/input' , '1')
            .verify.valueContains('//*[text()="Case - parallel"]/../div/input' , '2')
            .verify.valueContains('//*[text()="Gold spotlight"]/../div/input' , '3')
            .verify.valueContains('//*[text()="Keynote"]/../div/input' , '4')
            .verify.valueContains('//*[text()="Platinum spotlight"]/../div/input' , '5')
            .verify.valueContains('//*[text()="Presentation - whole audience"]/../div/input' , '6')
            .verify.valueContains('//*[text()="Presentation - parallel"]/../div/input' , '7')
            .verify.valueContains('//*[text()="Snap shot"]/../div/input' , '8')
    },

    'edit team': function (browser) {
        browser
            .setValueByXpath('//*[text()="Representatives"]/../div/input' , '6')
            .setValueByXpath('//*[text()="Group discussion hosts"]/../div/input' , '7')
            .setValueByXpath('//*[text()="One to many meeting hosts"]/../div/input' , '8')
            .setValueByXpath('//*[text()="Lunch hosts"]/../div/input' , '9')
            .setValueByXpath('//*[text()="Dinner hosts"]/../div/input' , '10')

            .setValueByXpath('//*[text()="Invited delegates"]/../div/input' , '20')

            .setValueByXpath('//*[text()="Meeting requests left"]/../div/input' , '10')
            .setValueByXpath('//*[text()="Guaranteed meetings"]/../div/input' , '15')
            .clickBySelectorXpath('(//*[text()="Matching"]/../div/div/label/input)[2]')
            .clickBySelectorXpath('(//*[text()="Target service"]/../div/div/label/input)[2]')

            .setValueByXpath('//*[text()="Case - whole audience"]/../div/input' , '11')
            .setValueByXpath('//*[text()="Case - parallel"]/../div/input' , '22')
            .setValueByXpath('//*[text()="Gold spotlight"]/../div/input' , '33')
            .setValueByXpath('//*[text()="Keynote"]/../div/input' , '44')
            .setValueByXpath('//*[text()="Platinum spotlight"]/../div/input' , '55')
            .setValueByXpath('//*[text()="Presentation - whole audience"]/../div/input' , '66')
            .setValueByXpath('//*[text()="Presentation - parallel"]/../div/input' , '77')
            .setValueByXpath('//*[text()="Snap shot"]/../div/input' , '88')
    },

    'click save for edit': function (browser) {
        browser
            .clickBySelectorXpath('(//*[text()="Save"])[2]')
            .waitForElementVisible('//div[@class="toast-content"]', 10000)
            .verify.containsText('//div[@class="toast-title"]', 'Success')

            .containsCurrentDataInSelectorXpath('//*[text()="Modified"]/../div/div');
    },

    'verify after edit team': function (browser) {
        browser
            .verify.valueContains('//*[text()="Representatives"]/../div/input' , '6')
            .verify.valueContains('//*[text()="Group discussion hosts"]/../div/input' , '7')
            .verify.valueContains('//*[text()="One to many meeting hosts"]/../div/input' , '8')
            .verify.valueContains('//*[text()="Lunch hosts"]/../div/input' , '9')
            .verify.valueContains('//*[text()="Dinner hosts"]/../div/input' , '10')

            .verify.valueContains('//*[text()="Invited delegates"]/../div/input' , '20')

            .verify.valueContains('//*[text()="Meeting requests left"]/../div/input' , '10')
            .verify.valueContains('//*[text()="Guaranteed meetings"]/../div/input' , '15')
            .verify.attributeEquals('(//*[text()="Matching"]/../div/div/label/input)[2]', 'checked', 'true')
            .verify.attributeEquals('(//*[text()="Target service"]/../div/div/label/input)[2]', 'checked', 'true')

            .verify.valueContains('//*[text()="Case - whole audience"]/../div/input' , '11')
            .verify.valueContains('//*[text()="Case - parallel"]/../div/input' , '22')
            .verify.valueContains('//*[text()="Gold spotlight"]/../div/input' , '33')
            .verify.valueContains('//*[text()="Keynote"]/../div/input' , '44')
            .verify.valueContains('//*[text()="Platinum spotlight"]/../div/input' , '55')
            .verify.valueContains('//*[text()="Presentation - whole audience"]/../div/input' , '66')
            .verify.valueContains('//*[text()="Presentation - parallel"]/../div/input' , '77')
            .verify.valueContains('//*[text()="Snap shot"]/../div/input' , '88')
    },
});