/**
 * @param {String} selector
 *
 * @returns {Object}
 */
module.exports.command = function (selector) {
    var today = new Date();

    var dd = today.getDate();
    if (dd < 10) {
        dd = "0" + dd;
    }

    var mm = today.getMonth();
    mm = mm + 1;
    if (mm < 10) {
        mm = "0" + mm;
    }

    var yy = today.getFullYear();

    var hh = today.getHours();
    if (today.toString().includes("GMT+0300")) {
        hh = hh - 1;
    }
    if (hh < 10) {
        hh = "0" + hh;
    }

    var currentTime = yy + "-" + mm + "-" + dd + " " + hh;

    this
        .verify.containsText(selector, currentTime);

};