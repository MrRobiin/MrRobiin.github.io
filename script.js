
const image = document.getElementById('image');
const faviconDiv = document.getElementById('favicon-div');
const faviconIcon = document.getElementById('favicon-icon');
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
        faviconIcon.classList.remove('fa-moon');
        faviconIcon.classList.add('fa-sun');
        favicon.href = 'img/sun.ico';
    } else {
        document.body.classList.add('dark-mode');
        faviconIcon.classList.remove('fa-sun');
        faviconIcon.classList.add('fa-moon');
        favicon.href = 'img/moon.ico';
    }
    isDarkMode = !isDarkMode;
});

/* When the user clicks on the button, 
        toggle between hiding and showing the dropdown content */
        function myFunction() {
            document.getElementById("myDropdown").classList.toggle("show");
          }
          
          // Close the dropdown if the user clicks outside of it
          window.onclick = function(event) {
            if (!event.target.matches('.dropbtn')) {
              var dropdowns = document.getElementsByClassName("dropdown-content");
              var i;
              for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
                }
              }
            }
          }

          function myFunctionTwo() {
            document.getElementById("myDropdownTwo").classList.toggle("show");
          }
          
          // Close the dropdown if the user clicks outside of it
          window.onclick = function(event) {
            if (!event.target.matches('.dropbtn')) {
              var dropdowns = document.getElementsByClassName("dropdown-content");
              var i;
              for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
                }
              }
            }
          }