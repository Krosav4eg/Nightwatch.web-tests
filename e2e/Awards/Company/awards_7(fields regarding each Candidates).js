var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to awards': function (browser) {
        browser
            .relUrl('/event/1501/awards')
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000);
    },
    'check awards page info': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h4[text()="Awards"]', 7000)
            .waitForElementVisible('//label[text()="Award title local"]', 7000)
            .waitForElementVisible('//div[1]/div/input[1][@type="text"]', 7000)
            .waitForElementVisible('//label[text()="Award title English"]', 7000)
            .waitForElementVisible('//div[2]/div/input[1][@type="text"]', 7000)
            .waitForElementVisible('//label[text()="Candidate type"]', 7000)
            .waitForElementVisible('//div[text()="                         Contact                       "]', 7000)
            .waitForElementVisible('//input[@id=1]', 7000)
            .waitForElementVisible('//div[text()="                         Company                       "]', 7000)
            .waitForElementVisible('//input[@id=2]', 7000)
            .waitForElementVisible('//div[text()="                         Project                       "]', 7000)
            .waitForElementVisible('//input[@id=3]', 7000)
            .waitForElementVisible('//label[text()="Status"]', 7000)
            .waitForElementVisible('//label[@btnradio="1"]', 7000)
            .waitForElementVisible('//label[@btnradio="0"]', 7000)
            .waitForElementVisible('//div[text()="Modified: "]', 7000)
            .waitForElementVisible('//div[text()="Modified by: "]', 7000)
            .waitForElementVisible('//button[@type="submit"]', 7000)
            .waitForElementVisible('//h4[text()="Candidates"]', 7000);


    },
    'select company radio button ': function (browser) {
        browser
            .click('//input[@id=2]')
            .click('//label[@btnradio="1"]')
            .click('//button[@type="submit"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .useXpath()
            .waitForElementVisible('//div[text()="Award saved successfully"]', 10000)
            .waitForElementVisible('//button[text()="Add a new candidate"]', 10000);

    },

    'click on add a new candidate  button': function (browser) {
        browser
            .useXpath()
            .click('//button[text()="Add a new candidate"]')
            .waitForElementVisible('//button[text()="Add company"]', 10000)
            .waitForElementVisible('//input[@value-property-name="companyId"]', 10000)
            .click('//input[@value-property-name="companyId"]')
            .useCss()
            .setValue('.auto-complete input', "UNiQUARE")
            .pause(5000)
            .useXpath()
            .click('//*[contains(text(),"UNiQUARE")]')
            .pause(3000)
            .click('//button[text()="Add company"]')
            .pause(3000);

    },
    'added candidate has been displayed': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h4[text()="Candidates"]', 10000)
            .waitForElementVisible('//h3[text()="Candidate 1"]', 10000)
            .waitForElementVisible('//label[text()="Company Name"]', 10000)
            .waitForElementVisible('//span[text()="             UNiQUARE Software Development GmbH             "]', 10000)
            .waitForElementVisible('//a[@href="http://alpha.ew.managementevents.com/EW/MasterCompany/cruII/id/100014"]', 10000)
            .waitForElementVisible('//label[text()="Country"]', 10000)
            .waitForElementVisible('//span[text()="AUSTRIA"]', 10000)
            .waitForElementVisible('//img[@src="http://alpha.master-api.managementevents.com/frontend/web/images/no-image.png"]', 10000)
            .waitForElementVisible('//label[text()="Introduction"]', 10000)
            .waitForElementVisible('//div/textarea', 10000)
            .waitForElementVisible('//button[text()="Winner"]', 10000)
            .waitForElementVisible('//button[text()="Delete"]', 10000)
            .waitForElementVisible('//div[@class="form-group"]//div[text()="Modified: "]', 10000)
            .waitForElementVisible('//div[@class="form-group"]//div[text()="Modified by: "]', 10000)
            .waitForElementVisible('//div[@class="form-group"]//button[text()="Save"]', 10000)


    },
    'delete all candidates from candidates table': function (browser) {
        browser
            .waitForElementVisible('//div[@class="row"][1]//button[text()="Delete"]', 10000)
            .click('//div[@class="row"][1]//button[text()="Delete"]')
            .waitForElementVisible('//button[@data-marker="me-confirm__button__button__yes"]', 3000)
            .click('//button[@data-marker="me-confirm__button__button__yes"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .useXpath()
            .assert.elementNotPresent('//h3[text()="Candidate 1"]');

    },

})
;