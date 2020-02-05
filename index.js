'use strict';

var toString      = require('to-str');
var randomLorem   = require('random-lorem');
var randomDomains = require('random-domains');
var randomNumber = Math.floor(Math.random() * 100 + 1);


module.exports = function (options) {
  var domain = options && options.domain
    ? toString(options.domain)
    : randomDomains();

  var email = options && options.length
    ? randomLorem({length: options.length})
    : randomLorem();

  return email + randomNumber.toString() + '@' + domain;
};
