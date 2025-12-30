let currentSlide = 1;
const totalSlides = 4;
const audio = document.getElementById("bg-music");

function startJourney() {
    document.getElementById('screen-envelope').classList.remove('active');
    document.getElementById('screen-prank').classList.add('active');
    // Try to play music
    audio.play().catch(e => console.log("Audio requires interaction"));
}

function moveNo() {
    const btn = document.getElementById('noBtn');
    const container = document.querySelector('.prank-box');
    
    // Get random position within the container limits
    const x = Math.random() * (container.offsetWidth - btn.offsetWidth);
    const y = Math.random() * (container.offsetHeight - btn.offsetHeight);
    
    btn.style.position = 'absolute';
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
}

function goToGifts() {
    document.getElementById('screen-prank').classList.remove('active');
    document.getElementById('screen-gifts').classList.add('active');
}

function openFinal() {
    document.getElementById('screen-gifts').classList.remove('active');
    document.getElementById('screen-content').classList.add('active');
    // Auto slide starts
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

function nextSlide() {
    currentSlide++;
    if (currentSlide > totalSlides) currentSlide = 1;
    setSlide(currentSlide);
}

function setSlide(n) {
    currentSlide = n;
    // Hide all
    for (let i = 1; i <= totalSlides; i++) {
        document.getElementById(`slide${i}`).classList.remove('active-slide');
    }
    // Show current
    document.getElementById(`slide${currentSlide}`).classList.add('active-slide');
}