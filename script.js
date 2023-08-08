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

 
class FormSubmit {
  constructor(settings) {
    this.settings = settings;
    this.form = document.querySelector(settings.form);
    this.formButton = document.querySelector(settings.button);
    if (this.form) {
      this.url = this.form.getAttribute("action");
    }
    this.sendForm = this.sendForm.bind(this);
  }

  displaySuccess() {
    this.form.innerHTML = this.settings.success;
  }

  displayError() {
    this.form.innerHTML = this.settings.error;
  }

  getFormObject() {
    const formObject = {};
    const fields = this.form.querySelectorAll("[name]");
    fields.forEach((field) => {
      formObject[field.getAttribute("name")] = field.value;
    });
    return formObject;
  }

  onSubmission(event) {
    event.preventDefault();
    event.target.disabled = true;
    event.target.innerText = "Enviando...";
  }

  async sendForm(event) {
    try {
      this.onSubmission(event);
      await fetch(this.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(this.getFormObject()),
      });
      this.displaySuccess();
    } catch (error) {
      this.displayError();
      throw new Error(error);
    }
  }

  init() {
    if (this.form) this.formButton.addEventListener("click", this.sendForm);
    return this;
  }
}

const formSubmit = new FormSubmit({
  form: "[data-form]",
  button: "[data-button]",
  success: "<h1 class='text'>Obrigado pelo Contato</h1> <p class='paragrafo'>Em breve iremos retornar sua mensagem.</p>",
  error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",
});
formSubmit.init();

var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  sliderPerVier: "auto",
  coverflowEffect:{
      rotade:0,
      streth:0,
      depth:900 ,
      modifer:1,
      slidesShadows:true,
  } ,
   loop:true, 
   loopedSlides: 3,
   autoplay: {
    delay: 2000, 
    disableOnInteraction: false,
  },
  on: {
    slideChange: function () {
     
      document.querySelectorAll(".swiper-slide").forEach(function (slide) {
        slide.style.filter = "none";
      });
     
      var activeIndex = this.activeIndex;
      var prevSlide = this.slides[activeIndex - 1];
      var nextSlide = this.slides[activeIndex + 1];
      [prevSlide, nextSlide].forEach(function (slide) {
        if (slide) {
          slide.style.filter = "blur(3px)"; 
        }});
      },
    },
  });
