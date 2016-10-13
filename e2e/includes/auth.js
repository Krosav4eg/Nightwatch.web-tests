var auth = require('./../../config/auth.js');

module.exports = {
    'auth': function (client) {
        client.auth(auth.login, auth.pass);
    },
};
