const bgmButton = document.getElementById('bgmButton');
const volumeBar = document.getElementById('volumeBar');
const volumeValue = document.getElementById('volumeValue');
const volumeIcon = document.getElementById('volumeIcon');
const bgmAudio = document.getElementById('background-music');
let isPlaying = false; // Status BGM

// Fungsi untuk toggle play/pause BGM
bgmButton.addEventListener('click', function() {
  if (isPlaying) {
    bgmAudio.pause();
    bgmButton.classList.remove('pause');
    bgmButton.classList.add('play');
    bgmButton.innerHTML = '<i class="fas fa-play"></i> Play BGM';
    console.log('Pause BGM');
  } else {
    bgmAudio.play().then(() => {
      bgmButton.classList.remove('play');
      bgmButton.classList.add('pause');
      bgmButton.innerHTML = '<i class="fas fa-pause"></i> Pause BGM';
      console.log('Play BGM');
    }).catch((error) => {
      console.error('Error playing audio:', error);
    });
  }

  isPlaying = !isPlaying; // Toggle status
});

// Update volume text saat slider digeser
volumeBar.addEventListener('input', function() {
  let value = volumeBar.value;
  bgmAudio.volume = value / 100; // Set volume
  volumeValue.textContent = `${value}%`;
  console.log(`Volume: ${value}%`);
});

// Update ikon volume berdasarkan level
volumeBar.addEventListener('input', function() {
  let value = volumeBar.value;
  if (value == 0) {
    volumeIcon.classList.remove('fa-volume-up', 'fa-volume-down');
    volumeIcon.classList.add('fa-volume-off');
  } else if (value > 0 && value <= 50) {
    volumeIcon.classList.remove('fa-volume-up', 'fa-volume-off');
    volumeIcon.classList.add('fa-volume-down');
  } else {
    volumeIcon.classList.remove('fa-volume-down', 'fa-volume-off');
    volumeIcon.classList.add('fa-volume-up');
  }
});