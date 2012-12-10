'use strict';

// Generate Bandcamp iframe
var SERVICE_BANDCAMP = /[A-Za-z0-9-_]+\.bandcamp\.com\/[A-Z0-9-_]+\/[A-Z0-9-_]+/gi;

exports.process = function(media, remix, options) {
  var remix;
  if (!remix.isMatched && media.match(SERVICE_BANDCAMP)) {
    remix = '<div class="object-wrapper"><iframe width="100%" height="100" '+
          'src="http://bandcamp.com/EmbeddedPlayer/v=2/track=3063546832/size=venti/bgcol=FFFFFF/linkcol=4285BB/" '+
          'allowtransparency="true" frameborder="0">'+
          '<a href="http://rossocorsarecords.bandcamp.com/track/lazerhawk-underworld-legend-of-zelda-remix">Lazerhawk '+
          '- Underworld (Legend of Zelda Remix) by Rosso Corsa Records</a></iframe>'
  }
  return remix;
};
