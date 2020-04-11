
const  jukeBox = document.querySelector('ul.player');

jukeBox.addEventListener('click', function(event) {
  const audioPlayer = document.createElement('audio');
  const songName = event.target.getAttribute('data-src');
  audioPlayer.id = 'player';
  event.target.id = 'playing';
  audioPlayer.src = songName;
  document.body.appendChild(audioPlayer);
  audioPlayer.play();

  audioPlayer.addEventListener('ended', function(){
    audioPlayer.parentNode.removeChild(audioPlayer);
    event.target.id = '';
  }, false);
});
