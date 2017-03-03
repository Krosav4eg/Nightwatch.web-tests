/**
 * @param {String} url
 * @param {Function} callback
 *
 * @returns {Object}
 */
module.exports.command = function(url, callback) {
  this.url(this.launchUrl + url, callback)
    .waitForElementNotVisible('#thisIsMainLoader', 30000);
  return this;
};
