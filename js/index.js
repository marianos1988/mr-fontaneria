const toggleMenu = () => document.body.classList.toggle("open");

document.querySelector(".burger").addEventListener("click", toggleMenu);

//Contenido index 
const index = `
  <section class="container-index">
    <article class="card-presentation">
      <div class="card">
        <img src="./img/card-presentation.jpg" />
        <div>
          <h2>Taller de Fontaneria</h2>
          <h3>Servicio de fontaneria con amplia experiencia en el sector</h3>
          <p>
            Localizacion y reparacion de tuberias AFC, ACS, calefaccion, gas y aire acondicionado
          </p>
          <button>Contacto:</button>
          <div class="box-icos">
            <a href="tel:+34690644690"><img class="tel" src="./img/tel.png" alt=""></a>
            <a href="https://wa.me/34690644690" target="_blank"><img class="ws" src="./img/whatsapp.png" alt=""></a>
          </div>
        </div>
      </div>
    </article>
    <article class="box-confianza">
      <div class="main flow">
        <h1 class="main__heading">Trabajos 100% Garantizados</h1>
        <div class="main__cards cards-co">
          <div class="cards__inner">
            <div class="cards__card card-co">

              <p class="card__price">Armado de presupuestos</p>
              <ul role="list" class="card__bullets flow">
                <li>Hacemos presupuestos en el acto</li>
                <li>Presupuestos sin cargo</li>
                <li>Informe tecnico del trabajo a realizar</li>
              </ul>
            </div>
      
            <div class="cards__card card-co">
              <p class="card__price">Personal Especializado</p>
              <ul role="list" class="card__bullets flow">
                <li>Trabajos garantizados y confiables</li>
                <li>Localizaciones y reparaciones en el acto</li>
                <li>Instalaciones con materiales de alta calidad</li>
              </ul>
            </div>
      
            <div class="cards__card card-co">

              <p class="card__price">Materiales de alto rendimiento</p>
              <ul role="list" class="card__bullets flow">
                <li>Materiales homologados</li>
                <li>Materiales primera calidad</li>
                <li>Vida util de los materiales garantizados</li>
              </ul>
            </div>
          </div>
          
          <div class="overlay cards__inner"></div>
        </div>
      </div>
    </article>
  </section>
`;
//Contenido Galeria
const galeria = `
  <article class="container-gallery">       
    <div class="all-img-gallery"></div>
  </article>
`;
//Contenido servicios
const servicios = `
  <article class="container-servicios">
    <h2>Servicios Especializados</h2>
    <div class="slider-servicios">
      <div class="controls-servicios">
        <div class="up-servicios">
          <i class="fa fa-chevron-up"></i>
        </div>
        <div class="down-servicios">
          <i class="fa fa-chevron-down"></i>
        </div>
      </div>

      <div class="wrapper-servicios">
        <div class="left-servicios">
          <div>
            <h2>Fontaneria</h2>
            <p>
              Trabajos de fontaneria, reparaciones o sustitucion de líneas de drenaje rotas, drenajes obstruidos, grifos, etc. 
            </p>
          </div>

          <div>
            <h2>Calefación</h2>
            <p>
              Instalación de tuberías de calefacción para agua caliente o fría. Instalacion de suelos radiantes, mantenimiento y mejoras.
            </p>
          </div>

          <div>
            <h2>Instalaciones</h2>
            <p>
              Restauración de tuberías de agua sanitaría fría o caliente. Aumento del flujo del agua, reparación de fugas por pequeñas que sean, aumento de la calidad y limpieza del agua, etc.
            </p>
          </div>

          <div>
            <h2>Reparaciones</h2>
            <p>
              Localización y reparación de tuberias AFS, ACS, calefacciones, gas, aire acondicionados, grifería, baños, trabajos generales. 
            </p>
          </div>

          <div>
            <h2>Otros Trabajos</h2>
            <p>
              Reparación de aparatos domésticos e instalaciones. Instalación y mantenimiento de sistemas de calefaccion de gas y líquido (unidades de aire acondicionado, radiadores, etc.)
            </p>
          </div>

        </div>
        <div class="right-servicios">
          <div>
            <img src="./img/servicios/servicio-5.jpg" alt="Otros trabajos" />
          </div>

          <div>
            <img src="./img/servicios/servicio-4.jpg" alt="Reparaciones" />
          </div>

          <div>
          <img src="./img/servicios/servicio-3.jpg" alt="Instalaciones" />
          </div>

          <div>
            <img src="./img/servicios/servicio-2.jpg" alt="Calefaccion" />
          </div>

          <div>

            <img src="./img/servicios/servicio-1.jpg" alt="Fontaneria" />
            <div class="spinner-servicios"></div>
          </div>
        </div>
      </div>
    </div>
  </article>
`;

//Contenido Contacto
const contacto = `
  <article class="container-contacto">
    <div class="content">
      <h2>Contactanos</h2>
      <p>
        Ponete en contacto con nosotros para solicitar presupuestos o visitas tecnicas
      </p>
    </div>
    <div class="container">
      <div class="contactInfo">
        <div class="box">
          <a href="https://maps.app.goo.gl/37TAv5geV1Dncxrz9" target="_blank"><div class="icon"><ion-icon class="ion-icon" name="location-outline"></ion-icon></div></a>
          <div class="text">
            <h3>Domicilio</h3>
            <p>Grupo Santiago Apóstol 2,<br>Sestao - Vizcaya,</p>
          </div>
        </div>
        <div class="box">
          <a href="tel:+34690644690"><div class="box-ico-data" target="_blank"></div><div class="icon"><ion-icon class="ion-icon" name="call-outline"></ion-icon></div></a>
          <div class="text">
            <h3>Telefono</h3>
            <p>34 690 644690
            </p>
          </div>
        </div>
        <div class="box">
        <a href="https://wa.me/34690644690" target="_blank"><div class="icon"><ion-icon class="ion-icon" name="logo-whatsapp"></ion-icon></ion-icon></div></a>
          <div class="text">
            <h3>Whatsapp</h3>
            <p>34 690 644690
            </p>
          </div>
        </div>              
        <div class="box">
          <a href="mailto:ruizymirandona@gmail.com" target="_blank"><div class="icon"><ion-icon class="ion-icon" name="mail-outline"></ion-icon></div></a>
          <div class="text">
            <h3>Email</h3>
            <p>ruizymirandona@gmail.com</p>
          </div>
        </div>
        <h2 class="txt">Connect with us</h2>
        <ul class="sci">
          <li><a href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
          <li><a href="#"><ion-icon name="logo-twitter"></ion-icon></a></li>
          <li><a href="#"><ion-icon name="logo-linkedin"></ion-icon></a></li>
          <li><a href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
        </ul>
      </div>

      <div class="contactForm">
        <form action="https://formsubmit.co/ruizymirandona@gmail.com" id="submit-form-contactus" method="POST">
          <h2>Envia tu consulta</h2>
          <div class="inputBox">
            <input type="text" name="name" id="form-name" required="required">
            <span>Nombre y Apellido</span>
          </div>
          <div class="inputBox">
            <input type="text" name="email" id="form-email" required="required">
            <span>Email</span>
          </div>
          <div class="inputBox">
            <input type="text" name="phone" id="form-phone" required="required">
            <span>Telefono</span>
          </div>
          <div class="inputBox">
            <textarea required="required" name="comment" id="form-comments"></textarea>
            <span>Escribi tu consulta...</span>
          </div>
          <div class="inputBox">
            <!-- <input type="submit" value="Enviar"> -->
            <button type="submit" id="form-send" class="custom-btn btn-14">Enviar</button>
            <div class="message"></div>
            <div class="box-spinner"></div>
          </div>
          <input type="hidden" name="_next" value="http://127.0.0.1:5500/mr-fontaneria/contacto.html">
          <input type="hidden" name="_captcha" value="false">
        </form>
      </div>
    </div>
  </article>
`;

//Activar o desactivar Whatsapp
const ActiveOrInactiveWP = (activoOInactivo) =>{
  if(activoOInactivo === "activar") {
    if(document.querySelector(".wp-float").classList.contains("wp-inactive")) {
      document.querySelector(".wp-float").classList.replace("wp-inactive","wp-active");
    }
  }
  else if(activoOInactivo === "inactivar") {
    if(document.querySelector(".wp-float").classList.contains("wp-active")) {
      document.querySelector(".wp-float").classList.replace("wp-active","wp-inactive");
    }
  }

}

//Activar o desactivar Carousel
const ActiveOrInactiveCarousel = (activoOInactivo) =>{
  if(activoOInactivo === "activar") {
    if(document.querySelector(".container-carousel").classList.contains("carousel-inactive")) {
      document.querySelector(".container-carousel").classList.replace("carousel-inactive","carousel-active");
    }
  }
  else if(activoOInactivo === "inactivar") {
    if(document.querySelector(".container-carousel").classList.contains("carousel-active")) {
      document.querySelector(".container-carousel").classList.replace("carousel-active","carousel-inactive");
    }
  }

}


// Funcion Carousel
function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}
const slider = document.querySelector('.slider');
document.addEventListener('click',activate,false);
const runCarousel = () => {
  const slider = document.querySelector('.slider');
  document.addEventListener('click',activate,false);

}



// CArds de Confianza
const runCardsConfianza = () => {
  const cardsContainer = document.querySelector(".cards-co");
  const cardsContainerInner = document.querySelector(".cards__inner");
  const cards = Array.from(document.querySelectorAll(".card-co"));
  const overlay = document.querySelector(".overlay");
  
  const applyOverlayMask = (e) => {
    const overlayEl = e.currentTarget;
    const x = e.pageX - cardsContainer.offsetLeft;
    const y = e.pageY - cardsContainer.offsetTop;
  
    overlayEl.style = `--opacity: 1; --x: ${x}px; --y:${y}px;`;
  };
  
  const createOverlayCta = (overlayCard, ctaEl) => {
    const overlayCta = document.createElement("div");
    overlayCta.classList.add("cta");
    overlayCta.textContent = ctaEl.textContent;
    overlayCta.setAttribute("aria-hidden", true);
    overlayCard.append(overlayCta);
  };
  
  const observer = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      const cardIndex = cards.indexOf(entry.target);
      let width = entry.borderBoxSize[0].inlineSize;
      let height = entry.borderBoxSize[0].blockSize;
  
      if (cardIndex >= 0) {
        overlay.children[cardIndex].style.width = `${width}px`;
        overlay.children[cardIndex].style.height = `${height}px`;
      }
    });
  });
  
  const initOverlayCard = (cardEl) => {
    const overlayCard = document.createElement("div");
    overlayCard.classList.add("card-co");
    // createOverlayCta(overlayCard, cardEl.lastElementChild);
    overlay.append(overlayCard);
    observer.observe(cardEl);
  };
  
  cards.forEach(initOverlayCard);
  document.body.addEventListener("pointermove", applyOverlayMask);
  
}

const loadPhotos = (quanPhotos) => {

  for(let x=1;x<=quanPhotos;x++) {
    document.querySelector(`.image-gallery-${x}`).addEventListener("load",()=>{
      document.querySelector(`.spinner-image-${x}`).innerHTML=``;
    });
  }
}

//Generar galeria fotos
const setGaleria = (quanPhotos)=> {

  let galeria = `
    <h2 title="gallery-tittle">Nuestros trabajos</h2>
  `
  for(x=1;x <= quanPhotos;x++) {
    let newImg = `
      <a href="./img/galeria/${x}.jpeg" target="_blank">
        <div class="box-spinner spinner-image-${x}">
          <div class="spinner"></div>
        </div>
        <img class="image-gallery-${x}" src="./img/galeria/${x}.jpeg" alt="image-gallery-${x}">
      </a>
    `;
    galeria += newImg;
  }

  document.querySelector(".all-img-gallery").innerHTML= galeria;

  // Ejecuta spinner galeria
  loadPhotos(168);

}

//Correr Servicios
const runServicios = () => {

  let slider = document.querySelector(".slider-servicios");
  let currentSlide = 0;
  let totalSlides = slider.querySelectorAll(".wrapper-servicios .left-servicios > div").length - 1;

  slider.querySelector(".controls-servicios .up-servicios").addEventListener("click", function () {
    if (currentSlide == 0) {
      return;
    }
    currentSlide--;
    slider.querySelector(".wrapper-servicios .left-servicios div").style.marginTop = `${
      currentSlide * -100
    }vh`;
    slider.querySelector(".wrapper-servicios .right-servicios div").style.marginTop = `${
      (totalSlides - currentSlide) * -100
    }vh`;
  });

  slider.querySelector(".controls-servicios .down-servicios").addEventListener("click", function () {
    if (currentSlide == totalSlides) {
      return;
    }
    currentSlide++;
    slider.querySelector(".wrapper-servicios .left-servicios div").style.marginTop = `${
      currentSlide * -100
    }vh`;
    slider.querySelector(".wrapper-servicios .right-servicios div").style.marginTop = `${
      (totalSlides - currentSlide) * -100
    }vh`;

  });
}

//Enviar Formulario
const sendForm = ()=> {
  document.querySelector("#submit-form-contactus").addEventListener("submit", async (e) => {
    e.preventDefault();
    document.querySelector(".message").textContent= ``


    const object = {
      method: "POST",
      headers: {
        "Content-Type": "aplicaction/json",
        "Accept": "aplication/json"
      },
      body: JSON.stringify({
        nombre: document.querySelector("#form-name").value,
        email: document.querySelector("#form-email").value,
        telefono: document.querySelector("#form-phone").value,
        consulta: document.querySelector("#form-comments").value,
      })
    };
    try{
      
      document.querySelector(".box-spinner").innerHTML=`<div class="spinner"></div>`;
      const JSONData = await fetch("https://formsubmit.co/ajax/ruizymirandona@gmail.com",object);
      const data = await JSONData.json();
      document.querySelector(".box-spinner").innerHTML=``;
      
      if(data.success) {
        document.querySelector("#form-name").value="";
        document.querySelector("#form-email").value="";
        document.querySelector("#form-comments").value="";
        telefono: document.querySelector("#form-phone").value="";
        document.querySelector(".message").style.color=`green`;
        document.querySelector(".message").textContent=`Mensaje enviado`;

      }
      else {
        document.querySelector(".message").style.color=`red`;
        document.querySelector(".message").textContent=`Mensaje no enviado`;
      }
    } catch(e) {
      document.querySelector(".message").style.color=`red`;
      document.querySelector(".message").textContent=`Error de conexion`;
    }
  });
}

// Menu Inicio
document.querySelector("#inicio-nav").addEventListener("click",()=>{
  document.querySelector("#main").innerHTML = index;
  toggleMenu();

  runCardsConfianza();
  ActiveOrInactiveCarousel("activar");
  ActiveOrInactiveWP("activar");
  runCarousel();
});

//Menu Galeria
document.querySelector("#galeria-nav").addEventListener("click",()=>{
  document.querySelector("#main").innerHTML= galeria;
  setGaleria(168);
  toggleMenu();
  ActiveOrInactiveWP("activar");
  ActiveOrInactiveCarousel("inactivar");
});

//Menu Servicios
document.querySelector("#servicios-nav").addEventListener("click",()=>{
  document.querySelector("#main").innerHTML= servicios;
  runServicios();
  toggleMenu();
  ActiveOrInactiveWP("activar");
  ActiveOrInactiveCarousel("inactivar");
});

//Menu Contacto
document.querySelector("#contacto-nav").addEventListener("click",()=>{
  document.querySelector("#main").innerHTML= contacto;
  sendForm();
  toggleMenu();
  document.querySelector("#form-send").addEventListener("click", sendForm);
  ActiveOrInactiveWP("inactivar");
  ActiveOrInactiveCarousel("inactivar");

});


// Menu Inicio Footer
document.querySelector("#inicio-footer").addEventListener("click",()=>{
  document.querySelector("#main").innerHTML = index;
  ActiveOrInactiveCarousel("activar");
  runCarousel();
  runCardsConfianza();
  ActiveOrInactiveWP("activar");
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth' // Desplazamiento suave
  });
});

//Menu Galeria Footer
document.querySelector("#galeria-footer").addEventListener("click",()=>{
  document.querySelector("#main").innerHTML= galeria;
  setGaleria(168);
  ActiveOrInactiveWP("activar");
  ActiveOrInactiveCarousel("inactivar");
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth' // Desplazamiento suave
  });

});

//Menu Servicios Footer
document.querySelector("#servicios-footer").addEventListener("click",()=>{
  document.querySelector("#main").innerHTML= servicios;
  runServicios();
  ActiveOrInactiveCarousel("inactivar");
  ActiveOrInactiveWP("activar");
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth' // Desplazamiento suave
  });

});

//Menu Contacto Footer
document.querySelector("#contacto-footer").addEventListener("click",()=>{
  document.querySelector("#main").innerHTML= contacto;
  sendForm();
  ActiveOrInactiveCarousel("inactivar");
  ActiveOrInactiveWP("inactivar");
  document.querySelector("#form-send").addEventListener("click", sendForm);
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth' // Desplazamiento suave
  });
});

runCarousel();
runCardsConfianza();
