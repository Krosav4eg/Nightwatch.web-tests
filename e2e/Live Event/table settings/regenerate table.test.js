var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to table-settings': function (browser) {
        browser
            .relUrl('/events/2316/table-settings/3')
            .waitForElementVisible('#thisIsMainLoader', 80000)
            .waitForElementNotVisible('#thisIsMainLoader', 80000);
    },

    'regenerator table': function (browser) {
        browser
            .useXpath()
            .clickBySelectorXpath('//button[text()="Regenerate tables"]')
            .clickBySelectorXpath('//*[text()="Lunch  1"]/../input')

            .setValueByXpath('(//*[text()="Lunch  1"]/../../../div/label/input)[2]', "9")
            .clickBySelectorXpath('//button[text()="(Re)Generate"]')
    },

    'verify after regenerator table': function (browser) {
        browser
            .pause(3000)
            .elements('css selector','.table.table-bordered', function (result) {
                var count = result.value.length;
                this.verify.equal(count, 23);
                count = count-1;

                for(var countVerify = 1; countVerify < count; countVerify++ ){
                    var selector1 = '(//*[@class="table table-bordered"])[' + countVerify + ']//tr[1]/th/div/div[2]';
                    this
                        .useXpath()
                        .verify.containsText(selector1, '9');

                    selector2 = '(//*[@class="table table-bordered"])[' + countVerify + ']//tr';

                    this.elements('xpath', selector2, function (result){
                        this.verify.equal(result.value.length, 10);
                        }
                    );
                }
            });
    },

    'edit regenerator table': function (browser) {
        browser
            .useXpath()
            .clickBySelectorXpath('//button[text()="Regenerate tables"]')
            .clickBySelectorXpath('//*[text()="Lunch  1"]/../input')

            .setValueByXpath('(//*[text()="Lunch  1"]/../../../div/label/input)[2]', "10")
            .clickBySelectorXpath('//button[text()="(Re)Generate"]')

            .pause(3000)
            .elements('css selector','.table.table-bordered', function (result) {
                var count = result.value.length;
                this.verify.equal(count, 21);
                count = count-1;

                for(var countVerify = 1; countVerify < count; countVerify++ ){
                    var selector1 = '(//*[@class="table table-bordered"])[' + countVerify + ']//tr[1]/th/div/div[2]';
                    this
                        .useXpath()
                        .verify.containsText(selector1, '10');

                    selector2 = '(//*[@class="table table-bordered"])[' + countVerify + ']//tr';

                    this.elements('xpath', selector2, function (result){
                            this.verify.equal(result.value.length, 11);
                        }
                    );
                }
            });
    },

    'cancel regenerator table': function (browser) {
        browser
            .useXpath()
            .clickBySelectorXpath('//button[text()="Regenerate tables"]')
            .clickBySelectorXpath('//button[text()="Close"]')

            .clickBySelectorXpath('//button[text()="Regenerate tables"]')
            .clickBySelectorXpath('//*[text()="(Re)Generate table seating"]/../*[@class="close"]')
    },
});
