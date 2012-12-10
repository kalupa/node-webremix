'use strict';

// Generate Bandcamp iframe
var SERVICE_BANDCAMP = /[A-Za-z0-9-_]+\.bandcamp\.com\/[A-Z0-9-_]+\/[A-Z0-9-_]+/gi;

exports.process = function(media, remix, options) {
  if (!remix.isMatched && media.match(SERVICE_BANDCAMP)) {


  }
  return remix;
};
