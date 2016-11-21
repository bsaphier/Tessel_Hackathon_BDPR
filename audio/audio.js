var path = require('path');
var av = require('tessel-av');
var mp3 = path.join(__dirname, '178617__goup-1__amen-break-j.mp3');
var os = require('os');
var audio = new av.Player();
var speaker = new av.Speaker();

speaker.say(`
  Our original idea was to create a lecture recording system that would stream to a server and distribute the recording through a slack bot.
  But instead, here is the amen break!
`);


speaker.on('lastword', function() {
  audio.play(mp3);
  audio.on('ended', function() {
    console.log('AMEN, Brother!');
    audio.play();
  });
});
