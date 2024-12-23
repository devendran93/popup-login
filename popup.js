
// JavaScript to handle popup functionality
const openPopupButton = document.getElementById('open-popup');
const closePopupButton = document.getElementById('close-popup');
const popupOverlay = document.getElementById('popup-overlay');

// Open popup
openPopupButton.addEventListener('click', () => {
    popupOverlay.style.display = 'flex';
});

// Close popup
closePopupButton.addEventListener('click', () => {
    popupOverlay.style.display = 'none';
});

// Close popup when clicking outside the content
popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
        popupOverlay.style.display = 'none';
    }
});