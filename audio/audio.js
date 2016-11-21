var path = require('path');
var av = require('tessel-av');
var mp3 = path.join(__dirname, '178617__goup-1__amen-break-j.mp3');
var sound = new av.Speaker(mp3);

sound.play();

sound.on('ended', function(seconds) {
  sound.play();
});
