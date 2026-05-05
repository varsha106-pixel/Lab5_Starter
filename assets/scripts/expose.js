// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');
  const volumeSlider = document.querySelector('#volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');
  const audio = document.querySelector('audio');
  const jsConfetti = new JSConfetti();
  hornSelect.addEventListener('change', () =>{
    const curr_horn = hornSelect.value;
    hornImage.src = `assets/images/${curr_horn}.svg`;
    hornImage.alt = curr_horn;
    audio.src = `assets/audio/${curr_horn}.mp3`;
  });
    volumeSlider.addEventListener('input', () => {
    const volume = parseInt(volumeSlider.value);
    if (volume === 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
      volumeIcon.alt = 'Volume level 0';
    } else if (volume < 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
      volumeIcon.alt = 'Volume level 1';
    } else if (volume < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
      volumeIcon.alt = 'Volume level 2';
    } else {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
      volumeIcon.alt = 'Volume level 3';
    }
        audio.volume = volume / 100;
  });
  playButton.addEventListener('click', () => {
    audio.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  }); 
} document.addEventListener('DOMContentLoaded', init);







    








