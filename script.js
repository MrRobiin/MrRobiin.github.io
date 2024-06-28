
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


document.addEventListener('DOMContentLoaded', function() {
  if (!getCookie('cookiesAccepted')) {
      document.getElementById('cookieBanner').style.display = 'block';
  }

  document.getElementById('acceptCookies').addEventListener('click', function() {
      setCookie('cookiesAccepted', 'true', 365);
      document.getElementById('cookieBanner').style.display = 'none';
  });
});

// Cookie functions
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function eraseCookie(name) {
  document.cookie = name + '=; Max-Age=-99999999;';
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}