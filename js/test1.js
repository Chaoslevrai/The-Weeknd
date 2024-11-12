//ca c'est pour le caroussel
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
//

//
function afficherImage(source) {
  var overlay = document.querySelector('.overlay');
  var imageOverlay = document.getElementById('image-overlay');
  imageOverlay.src = source;
  overlay.style.display = 'block';
}

function fermerImage() {
  var overlay = document.querySelector('.overlay');
  overlay.style.display = 'none';
}
//

//
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("custom-slider");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
//

//
function playVideo(element) {
  var iframes = document.querySelectorAll('.video-wrapper iframe');
  iframes.forEach(function (iframe) {
    if (iframe.parentElement === element) {
      element.classList.add('playing');
    } else {
      iframe.parentElement.classList.remove('playing');
    }
  });
}
//


   // Récupération des éléments HTML
   var btnBiographie = document.getElementById('btnBiographie');
   var modalBiographie = document.getElementById('modalBiographie');
   var closeBtn = document.getElementsByClassName('close')[0];
   
   // Affichage de la modal lorsqu'on clique sur le bouton Biographie
   btnBiographie.onclick = function() {
       modalBiographie.style.display = 'block';
   }
   
   // Fermeture de la modal lorsque l'utilisateur clique sur la croix
   closeBtn.onclick = function() {
       modalBiographie.style.display = 'none';
   }
   
   // Fermeture de la modal si l'utilisateur clique en dehors de la modal
   window.onclick = function(event) {
       if (event.target == modalBiographie) {
           modalBiographie.style.display = 'none';
       }
   }
//   

