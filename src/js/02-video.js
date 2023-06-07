
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640
});

player.on(
  'timeupdate',
  throttle(function (data) {
    const currentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
  }, 1000)
);

const videoPlayer = document.getElementById('vimeo-player');

window.addEventListener('load', () => {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime) {
    videoPlayer.currentTime = savedTime;
    player.setCurrentTime(savedTime)
      .then(function (seconds) {
        // console.log("El tiempo actual se estableció en " + seconds);
      })
      .catch(function (error) {
        switch (error.name) {
          case 'RangeError':
            // El tiempo era menor que 0 o mayor que la duración del video
            break;
          default:
            // Ocurrió algún otro error
            break;
        }
      });
  }
});


