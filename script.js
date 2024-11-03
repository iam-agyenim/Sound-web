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

const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel-image');
let index = 0;

// Function to show the next image
function showNextImage() {
    index = (index + 1) % images.length;  // Cycle back to the start
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Auto-slide every 5 seconds
setInterval(showNextImage, 5000);
