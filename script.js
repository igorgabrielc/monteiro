function toggleMode() {
   const html = document.documentElement;
   html.classList.toggle("light");
 
   // Pegar a tag img
   const img = document.querySelector('img');
 
   // Substituir imagem
   if (html.classList.contains('light')) {
     // Se estiver no modo claro, adicionar a imagem light
     img.setAttribute('src', './img/camera.jpeg');
   } else {
     // Se não estiver no modo claro, manter a imagem
     img.setAttribute('src', './img/camera.jpeg');
   }
 }
 
 let count = 1;
 document.getElementById("radio1").checked = true;
 
 setInterval(function() {
   nextImage();
 }, 4000);
 
 function nextImage() {
   count++;
   if (count > 3) {
     count = 1;
   }
   document.getElementById("radio" + count).checked = true;
 }