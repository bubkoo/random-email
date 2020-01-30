'use strict';

var toString      = require('to-str');
var randomLorem   = require('random-lorem');
var randomDomains = require('random-domains');


module.exports = function (options) {
  var domain = options && options.domain
    ? toString(options.domain)
    : randomDomains();

  var email = options && options.length
    ? randomLorem({length: options.length})
    : randomLorem();

  return email + '@' + domain;
};
