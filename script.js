// Select the audio element and button
const audioBtn = document.getElementById('audio-btn');
const backgroundAudio = document.getElementById('background-audio');

// Toggle play/pause for audio when button is clicked
audioBtn.addEventListener('click', () => {
    if (backgroundAudio.paused) {
        backgroundAudio.play();
        audioBtn.textContent = 'Pause Audio';
    } else {
        backgroundAudio.pause();
        audioBtn.textContent = 'Play Audio';
    }
});

