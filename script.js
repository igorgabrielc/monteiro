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
var slides = document.getElementsByClassName("content");

// Função para mostrar os slides
function showSlides() {
    // Ocultar todos os slides
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // Avançar para o próximo slide
    slideIndex++;
    // Verificar se chegou ao final dos slides e voltar ao primeiro slide
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    // Exibir o slide atual
    slides[slideIndex - 1].style.display = "block";
    // Definir um intervalo de tempo para trocar os slides automaticamente
    setTimeout(showSlides, 3000); // Trocar o slide a cada 3 segundos (3000 milissegundos)
}

// Chamar a função showSlides para iniciar a exibição automática dos slides
showSlides();

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