var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/partners/25')
    },

    'verify Communication': function (browser) {
        var communication = browser.page.partnersEdit().section.communication;
        communication
            .clickBySelector('@nameSection')
            .expect.element('@sendEmailButton').to.not.be.visible;

        communication.clickBySelector('@nameSection')
            .expect.element('@sendEmailButton').to.be.visible;
    },
});