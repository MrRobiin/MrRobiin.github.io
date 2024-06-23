
const image = document.getElementById('image');

image.addEventListener('dblclick', () => {
    image.classList.add('spin');
    setTimeout(() => {
        image.classList.remove('spin');
    }, 1000); // Tiden ska matcha varaktigheten för CSS-animationen
});
