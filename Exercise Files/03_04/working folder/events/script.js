const  jukeBox = document.querySelector('ul.player');

jukeBox.addEventListener('click', function(event) {
  const songName = event.target.getAttribute('data-src');
  const songPlaying = document.querySelector('#player');
  if (songPlaying) {
    if (songPlaying.paused) {
      songPlaying.play();
      event.target.id = 'playing';
    } else {
      songPlaying.pause();
      event.target.id = 'paused';
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
