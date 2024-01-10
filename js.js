// Automatic navigation
let nav = document.querySelector('nav');
let dropdown = nav.querySelector('.dropdown');
let dropdownToggle = nav.querySelector("[data-action='dropdown-toggle']");
let navToggle = nav.querySelector("[data-action='nav-toggle']");


dropdownToggle.addEventListener('click', () => {
  dropdown.classList.toggle('show');
  dropdown.classList.contains('show') ?
  dropdownToggle.setAttribute('aria-expanded', 'true') :
  dropdownToggle.setAttribute('aria-expanded', 'false');
});

navToggle.addEventListener('click', () => {
  nav.classList.toggle('opened');
  nav.classList.contains('opened') ?
  navToggle.setAttribute('aria-expanded', 'true') :
  navToggle.setAttribute('aria-expanded', 'false');
});


// Galerry img slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slideIndex++;
   if (slideIndex > slides.length) {slideIndex = 1}    
   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex-1].style.display = "block";  
   dots[slideIndex-1].className += " active";
   setTimeout(showSlides, 5000); // Change image every x seconds
 }

 //Contact us
function myMap() {
  var mapProp = {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  }

