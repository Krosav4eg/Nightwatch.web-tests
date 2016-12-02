/**
 * @param {String} url
 * @param {Function} callback
 *
 * @returns {Object}
 */
module.exports.command = function(url, callback) {
  this.url(this.launchUrl + url, callback);

  return this;
};
