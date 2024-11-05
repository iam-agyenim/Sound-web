// Select the audio button and video element
const audioBtn = document.getElementById('audio-btn');
const backgroundVideo = document.getElementById('background-video');

// Toggle play/pause for video when the button is clicked
audioBtn.addEventListener('click', () => {
    if (backgroundVideo.paused) {
        backgroundVideo.play();
        audioBtn.textContent = 'Pause Audio';
    } else {
        backgroundVideo.pause();
        audioBtn.textContent = 'Play Audio';
    }
});

// Reset button text to 'Play Audio' when the video ends
backgroundVideo.addEventListener('ended', () => {
    audioBtn.textContent = 'Play Audio';
});
