
var fontSize = 10;

var el = document.querySelector('#mookietown');
el.style.color = '#C00F00';

var dopeboy = document.querySelector('.dopeboy');
dopeboy.style.color = 'blue';


var button = document.querySelector('#haters');
button.addEventListener('click',assclick, false);
function assclick (e) {
  var el = document.querySelector('#asshole');
  fontSize = fontSize + 10;
  el.style.fontSize = fontSize + 'px';
}

var button = document.querySelector('#likers');
button.addEventListener('click',rikers, false);
function rikers (e) {
  var el = document.querySelector('#asshole');
  fontSize = fontSize - 10;
  el.style.fontSize = fontSize + 'px';
}
