module.exports = {
    before: function (client) {
        client.windowMaximize();
    },

    after: function (client) {
        client.end();
    }
};
