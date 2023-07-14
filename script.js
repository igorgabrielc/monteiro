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
 
 const carrusel = document.querySelector(".carrusel-items");

 let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
 let intervalo = null;
 let step = 1;
 const start = () => {
   intervalo = setInterval(function () {
     carrusel.scrollLeft = carrusel.scrollLeft + step;
     if (carrusel.scrollLeft === maxScrollLeft) {
       step = step * -1;
     } else if (carrusel.scrollLeft === 0) {
       step = step * -1;
     }
   }, 10);
 };
 
 const stop = () => {
   clearInterval(intervalo);
 };
 
 carrusel.addEventListener("mouseover", () => {
   stop();
 });
 
 carrusel.addEventListener("mouseout", () => {
   start();
 });
 
 start();