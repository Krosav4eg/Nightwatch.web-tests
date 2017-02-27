/**
 * @param {String} selector
 *
 * @param {String} text
 *
 * @returns {Object}
 */
module.exports.command = function(selector, text) {
    this
        .useXpath()
        .moveToElement(selector,  30,  30)
        .mouseButtonDown(0);
    this .pause(500)
        .moveToElement(text,  10,  10)
        .mouseButtonUp(0);

    return this;
};
