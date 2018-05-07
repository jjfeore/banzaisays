'use strict';

document.addEventListener('keydown', function(event) {
  var theImg = $('#wheel-img');
  var theBar = $('#emote-list').html();
  var theKey = event.which || event.keyCode;
  console.log('Keydown event: ' + event.keyCode);

  if (theKey == 100) {
    theImg.attr('src', 'wheel-heart.png');
    $('#emote-list').html($('#emote-list').html() + '<img src="bleedpurple.png" class="emotes">');
  } else if (theKey == 101) {
    theImg.attr('src', 'wheel-pog.png');
    $('#emote-list').html($('#emote-list').html() + '<img src="pogchamp.png" class="emotes">');
  } else if (theKey == 97) {
    theImg.attr('src', 'wheel-kappa.png');
    $('#emote-list').html($('#emote-list').html() + '<img src="kappa.png" class="emotes">');
  } else if (theKey == 98) {
    theImg.attr('src', 'wheel-bible.png');
    $('#emote-list').html($('#emote-list').html() + '<img src="biblethump.png" class="emotes">');
  }
});

document.addEventListener('keyup', function(event) {
  var theImg = $('#wheel-img');
  var theKey = event.which || event.keyCode;
  console.log('Keyup event: ' + event.keyCode);

  if (theKey == 100 || theKey == 101 || theKey == 97 || theKey == 98) {
    theImg.attr('src', 'wheel1.png');
  }
});
