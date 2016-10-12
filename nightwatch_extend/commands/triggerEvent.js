var fireEvent = function fireEvent(selector, name) {
  var event = document.createEvent('Event');
  var field = document.querySelectorAll(selector)[0];

  event.initEvent(name, true, true);

  return field.dispatchEvent(event);
};

var cb = function cb(callback, result) {
  if (typeof callback === 'function') {
    callback.bind(this, result);
  }
};

module.exports.command = function command(selector, name, callback) {
  this.execute(fireEvent, [selector, name], cb.bind(this, callback));
  return this;
};
