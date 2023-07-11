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
 
 var slideIndex = 0;
 var slides = document.getElementsByClassName("slide");
 var bars = document.getElementsByClassName("bar");
 
 function showSlide(index) {
     // Ocultar todos os slides e desmarcar todos os botões de navegação
     for (var i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
         bars[i].classList.remove("active");
     }
 
     // Exibir o slide atual e marcar o botão de navegação correspondente
     slides[index].style.display = "block";
     bars[index].classList.add("active");
 }
 
 function nextSlide() {
     slideIndex++;
     if (slideIndex >= slides.length) {
         slideIndex = 0;
     }
     showSlide(slideIndex);
 }
 
 function previousSlide() {
     slideIndex--;
     if (slideIndex < 0) {
         slideIndex = slides.length - 1;
     }
     showSlide(slideIndex);
 }
 
 // Adicione os seguintes eventos para os botões de navegação
 for (var i = 0; i < bars.length; i++) {
     bars[i].addEventListener("click", function() {
         slideIndex = Array.prototype.indexOf.call(bars, this);
         showSlide(slideIndex);
     });
 }
 
 // Adicione os seguintes eventos para os botões de avançar e voltar
 var nextButton = document.getElementById("nextButton");
 var previousButton = document.getElementById("previousButton");
 
 nextButton.addEventListener("click", nextSlide);
 previousButton.addEventListener("click", previousSlide);
 
 // Chame a função showSlide para exibir o primeiro slide ao carregar a página
 showSlide(slideIndex);

 document.addEventListener("DOMContentLoaded", function(event) {
  var slides = document.querySelectorAll(".slide");
  var currentSlide = 0;

  function showSlide(n) {
    slides[currentSlide].classList.remove("active");
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function previousSlide() {
    showSlide(currentSlide - 1);
  }

  setInterval(nextSlide, 5000); // Altere o tempo em milissegundos (5000 = 5 segundos)

  showSlide(currentSlide);
});