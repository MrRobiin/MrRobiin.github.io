// script.js

const image = document.getElementById('image');
const faviconDiv = document.getElementById('favicon-div');
const faviconImg = document.getElementById('favicon-img');
const favicon = document.getElementById('favicon');

image.addEventListener('dblclick', () => {
    image.classList.add('spin');
    setTimeout(() => {
        image.classList.remove('spin');
    }, 1000); // Tiden ska matcha varaktigheten för CSS-animationen
});

let isDarkMode = false;

faviconDiv.addEventListener('click', () => {
    if (isDarkMode) {
        document.body.classList.remove('dark-mode');
        faviconImg.src = 'img/sun.png';
        favicon.href = 'sun.ico';
    } else {
        document.body.classList.add('dark-mode');
        faviconImg.src = 'img/moon.png';
        favicon.href = 'moon.ico';
    }
    isDarkMode = !isDarkMode;
});
