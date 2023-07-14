function toggleMode() {
   const html = document.documentElement;
   html.classList.toggle("light");
 
   // Pegar a tag img
   const img = document.querySelector('img');
 
   // Substituir imagem
   if (html.classList.contains('light')) {
     // Se estiver no modo claro, adicionar a imagem light
     img.setAttribute('src', './img/bg.png');
   } else {
     // Se não estiver no modo claro, manter a imagem
     img.setAttribute('src', './img/bg2.png');
   }
 }

 document.addEventListener("DOMContentLoaded", function() {
  var slideIndex = 1;
  showSlide(slideIndex);

  function showSlide(n) {
    var slides = document.getElementsByClassName("s-item");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }

  function changeSlide(n) {
    showSlide((slideIndex += n));
  }

  var leftControl = document.querySelector("#trabalho .left-control");
  var rightControl = document.querySelector("#trabalho .right-control");

  leftControl.addEventListener("click", function() {
    changeSlide(-1);
  });

  rightControl.addEventListener("click", function() {
    changeSlide(1);
  });

  // Função para rotação automática
  function autoRotate() {
    changeSlide(1);
  }


  var interval = 5000; 

 
  var autoRotation = setInterval(autoRotate, interval);

  // Pausar a rotação automática quando o mouse estiver sobre o slider
  var slider = document.getElementById("trabalho");

  slider.addEventListener("mouseenter", function() {
    clearInterval(autoRotation);
  });

  // Retomar a rotação automática quando o mouse sair do slider
  slider.addEventListener("mouseleave", function() {
    autoRotation = setInterval(autoRotate, interval);
  });
});