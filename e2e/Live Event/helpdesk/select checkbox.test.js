var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/events/2316/helpdesk')
    },

    'choose one partner': function (browser) {
        var checkboxColmnPage = browser.page.helpdesk().section.checkboxColmn;
        checkboxColmnPage
            .clickBySelector('@firstRow')

            .verify.attributeEquals('@firstRow', 'checked', 'true')
            .expect.element('@allCheckbox').to.not.be.selected;
    },

    'choose several partner ': function (browser) {
        var checkboxColmnPage = browser.page.helpdesk().section.checkboxColmn;
        checkboxColmnPage
            .clickBySelector('@secondRow')
            .clickBySelector('@thirdRow')

            .verify.attributeEquals('@firstRow', 'checked', 'true')
            .verify.attributeEquals('@secondRow', 'checked', 'true')
            .verify.attributeEquals('@thirdRow', 'checked', 'true')
            .expect.element('@allCheckbox').to.not.be.selected;
    },

    'choose all': function (browser) {
        var checkboxColmnPage = browser.page.helpdesk().section.checkboxColmn;
        checkboxColmnPage
            .clickBySelector('@allCheckbox');
        browser
            .elements('css selector','input[type="checkbox"]', function (result) {
                var count = result.value.length;
                for(var countVerify = 1; countVerify < count; countVerify++ ){
                    var selector = '(//input[@type="checkbox"])[' + countVerify + ']';
                    this.useXpath()
                        .verify.attributeEquals(selector, 'checked', 'true');
                }
            });
    },

    'cancel all': function (browser) {
        var checkboxColmnPage = browser.page.helpdesk().section.checkboxColmn;
        checkboxColmnPage
            .clickBySelector('@allCheckbox');
        browser
            .elements('css selector','input[type="checkbox"]', function (result) {
                var count = result.value.length;
                for(var countVerify = 1; countVerify < count; countVerify++ ){
                    var selector = '(//input[@type="checkbox"])[' + countVerify + ']';
                    this.useXpath()
                        .expect.element(selector).to.not.be.selected;
                }
            });
    },
});