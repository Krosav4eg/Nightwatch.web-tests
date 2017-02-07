// var _ = require('lodash');
// var presteps = require('./../../../presteps/presteps.js');
// var auth = require('./../../../presteps/auth.js');
//
// module.exports = _.assign(presteps, auth, {
//
//     'redirection to delegates': function (browser) {
//         browser
//             .relUrl('/event/2008/delegates')
//             .waitForElementVisible('#thisIsMainLoader', 30000)
//             .waitForElementNotVisible('#thisIsMainLoader', 30000);
//     },
//
//     'check that when you open select E-mail template page template field is blank': function (browser) {
//         browser
//             .clickBySelectorXpath('(//tr/td/input[@type="checkbox"])[1]')
//             .verify.elementPresent('//h4[contains(text(),"Delegates 1/68")]')
//             .clickBySelectorXpath('(//button[contains(text(),"Send SMS")])[1]')
//
//             .verify.elementPresent('//h4[contains(text(),"Select SMS template")]')
//
//             .verify.elementPresent('(//div[contains(text(),"Template:")])[2]')
//             .verify.valueContains('(//select)[10]', '');
//     },
//
//     'visible correct templates in drop down list': function (browser) {
//         browser
//             .clickBySelectorXpath('(//select)[10]')
//
//             .verify.containsText('(//option)[41]', '')
//             .verify.containsText('//option[@value="317"]', 'Nik SMS')
//             .verify.containsText('//option[@value="327"]', 'SMS Template Delegates')
//             .verify.containsText('//option[@value="331"]', 'Test')
//             .verify.containsText('//option[@value="304"]', 'Test 13')
//             .verify.containsText('//option[@value="305"]', 'Test template')
//             .verify.containsText('//option[@value="296"]', 'Test123')
//             .verify.containsText('//option[@value="289"]', 'Testing')
//             .verify.containsText('//option[@value="307"]', 'This is the master temple in english');
//     },
//
//     'choose blank field': function (browser) {
//         browser
//             .clickBySelectorXpath('(//option)[41]')
//             .verify.valueContains('(//select)[10]', '');
//     },
//
//     'click send sms button without chosen template': function (browser) {
//         browser
//             .clickBySelectorXpath('(//button[contains(text(),"Send SMS")])[2]')
//             .useXpath()
//             .waitForElementVisible('//div[contains(text(),"Please choose template.")]', 5000)
//
//             .clickBySelectorXpath('(//button[contains(text(),"Send SMS")])[1]');
//     },
//
//     'choose sms template': function (browser) {
//         browser
//             .clickBySelectorXpath('(//option[contains(text(),"Test template")])[1]')
//
//             .verify.containsText('//textarea', 'text');
//     },
//
//     'check that information would be update after you change template': function (browser) {
//         browser
//             .relUrl('/sms-templates/edit/305')
//             .useCss()
//             .waitForElementNotVisible('#thisIsMainLoader', 30000)
//
//             .useXpath()
//             .verify.elementPresent('//h1[contains(text(),"Edit Sms Template (#305)")]')
//
//             .setValueByXpath('//input[@ngcontrol="name"]', 'Template for autotest')
//             .setValueByXpath('//textarea', 'autotest')
//
//             .clickBySelectorXpath('(//button[contains(text(),"Save")])[1]')
//             .clickBySelectorXpath('(//button[contains(text(),"Save")])[2]')
//
//             .relUrl('/event/2008/delegates')
//             .useCss()
//             .waitForElementNotVisible('#thisIsMainLoader', 30000)
//
//             .useXpath()
//             .clickBySelectorXpath('(//tr/td/input[@type="checkbox"])[1]')
//             .verify.elementPresent('//h4[contains(text(),"Delegates 1/68")]')
//             .clickBySelectorXpath('(//button[contains(text(),"Send SMS")])[1]')
//
//             .clickBySelectorXpath('(//option[contains(text(),"Template for autotest")])[1]')
//             .verify.containsText('//textarea', 'autotest');
//     },
//
//     'to return order': function (browser) {
//         browser
//             .relUrl('/sms-templates/edit/305')
//             .useCss()
//             .waitForElementNotVisible('#thisIsMainLoader', 30000)
//
//             .useXpath()
//             .verify.elementPresent('//h1[contains(text(),"Edit Sms Template (#305)")]')
//
//             .setValueByXpath('//input[@ngcontrol="name"]', 'Test template')
//             .setValueByXpath('//textarea', 'text')
//
//             .clickBySelectorXpath('(//button[contains(text(),"Save")])[1]')
//             .clickBySelectorXpath('(//button[contains(text(),"Save")])[2]')
//
//             .verify.elementPresent('//div[contains(text(),"The Localization Template was updated successfully")]');
//     },
//
//     'verify send sms button': function (browser) {
//         browser
//             .relUrl('/event/2008/delegates')
//             .useCss()
//             .waitForElementNotVisible('#thisIsMainLoader', 30000)
//
//             .useXpath()
//             .clickBySelectorXpath('(//tr/td/input[@type="checkbox"])[3]')
//             .clickBySelectorXpath('(//button[contains(text(),"Send SMS")])[1]')
//
//             .clickBySelectorXpath('(//option[contains(text(),"Test template")])[1]')
//             .clickBySelectorXpath('(//button[@class="btn btn-primary"])[3]')
//             .useXpath()
//             .verify.elementPresent('//div[contains(text(),"The SMS template cannot be sent to: ")]')
//
//             .moveToElement('//tr/th[15]', 1340, 640)
//             .containsCurrentDataInSelectorXpath('(//tr[3]/td[15])[1]');
//     },
//
//     'verify cancel  button': function (browser) {
//         browser
//             .clickBySelectorXpath('(//button[contains(text(),"Send SMS")])[1]')
//             .clickBySelectorXpath('(//option[contains(text(),"Test template")])[1]')
//
//             .clickBySelectorXpath('(//button[@class="btn btn-default"])[6]')
//
//             .verify.elementNotPresent('//div[contains(text(),"The SMS template was sent successfully.")]')
//             .moveToElement('(//tr/td[15]/span)[1]', 1340, 640)
//             .containsCurrentDataInSelectorXpath('(//tr[2]/td[15])[1]')
//
//             .clickBySelectorXpath('(//tr/td/input[@type="checkbox"])[3]')
//             .clickBySelectorXpath('(//tr/td/input[@type="checkbox"])[2]')
//             .clickBySelectorXpath('(//button[contains(text(),"Send SMS")])[1]')
//
//             .verify.valueContains('(//select)[10]', '')
//             .verify.elementNotPresent('(//textarea)[1]');
//     },
//
// });