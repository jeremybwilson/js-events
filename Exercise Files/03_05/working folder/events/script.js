const  jukeBox = document.querySelector('ul.player');

jukeBox.addEventListener('click', function(event) {
  const songName = event.target.getAttribute('data-src');
  const audioPlayer = document.querySelector('#player');
  if (audioPlayer) {

    if (songName ===  audioPlayer.getAttribute('src')){
      if (audioPlayer.paused) {
        audioPlayer.play();
        event.target.id = 'playing';
      } else {
        audioPlayer.pause();
        event.target.id = 'paused';
      }
    } else {
      audioPlayer.src = songName;
      audioPlayer.play();
      if (document.querySelector('#playing')) {
        document.querySelector('#playing').id = '';
      } else {
        document.querySelector('#paused').id = '';
      }
      event.target.id = 'playing';
    }

  } else {
    const audioPlayer = document.createElement('audio');
    audioPlayer.id = 'player';
    event.target.id = 'playing';
    audioPlayer.src = songName;
    document.body.appendChild(audioPlayer);
    audioPlayer.play();

    audioPlayer.addEventListener('ended', function(){
      audioPlayer.parentNode.removeChild(audioPlayer);
      event.target.id = '';
    }, false);
  }
});
