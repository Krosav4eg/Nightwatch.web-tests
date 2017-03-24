var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/representatives')
    },

    'choose one partner': function (browser) {
        var checkboxColumn = browser.page.representatives().section.checkboxColumn;
        checkboxColumn
            .clickBySelector('@firstRow')

            .verify.attributeEquals('@firstRow', 'checked', 'true')
            .expect.element('@allcheCkbox').to.not.be.selected;
    },

    'choose several partner ': function (browser) {
        var checkboxColumn = browser.page.representatives().section.checkboxColumn;
        checkboxColumn
            .clickBySelector('@secondRow')
            .clickBySelector('@thirdRow')

            .verify.attributeEquals('@firstRow', 'checked', 'true')
            .verify.attributeEquals('@secondRow', 'checked', 'true')
            .verify.attributeEquals('@thirdRow', 'checked', 'true')
            .expect.element('@fourthRow').to.not.be.selected;
    },

    'choose all': function (browser) {
        var checkboxColumn = browser.page.representatives().section.checkboxColumn;
        checkboxColumn
            .clickBySelector('@allcheCkbox');

        browser .elements('css selector','input[type="checkbox"]', function (result) {
                 var count = result.value.length;
                 for(var countVerify = 1; countVerify < count; countVerify++ ){
                     var selector = '(//input[@type="checkbox"])[' + countVerify + ']';
                     this.useXpath()
                         .verify.attributeEquals(selector, 'checked', 'true');
                 }
            });
    },

    'cancel all': function (browser) {
        var allInformation = browser.page.representatives().section.allInformation;
        allInformation
            .clickBySelector('@clearSelectionButton')

        browser  .elements('css selector','input[type="checkbox"]', function (result) {
                var count = result.value.length;
                for(var countVerify = 1; countVerify < count; countVerify++ ){
                    var selector = '(//input[@type="checkbox"])[' + countVerify + ']';
                    this.useXpath()
                        .expect.element(selector).to.not.be.selected;
                }
            });
    },
});
