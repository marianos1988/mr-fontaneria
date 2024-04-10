const toggleMenu = () => document.body.classList.toggle("open");

document.querySelector(".burger").addEventListener("click", toggleMenu);

//Contenido index
const index = `
  <section class="container-index">
    <article class="box-images">
      <ul class='slider'>
        <li class='item' style="background-image: url('./img/carousel-1.jpg')">
          <div class='content'>
            <h2 class='title'>"Lossless Youths"</h2>
            <p class='description'> Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
            praesentium nisi. Id laboriosam ipsam enim.  </p>
            <button>Read More</button>
          </div>
        </li>
        <li class='item' style="background-image: url('./img/carousel-2.jpg')">
          <div class='content'>
            <h2 class='title'>"Estrange Bond"</h2>
            <p class='description'> Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
            praesentium nisi. Id laboriosam ipsam enim.  </p>
            <button>Read More</button>
          </div>
        </li>
        <li class='item' style="background-image: url('./img/carousel-3.jpg')">
          <div class='content'>
            <h2 class='title'>"The Gate Keeper"</h2>
            <p class='description'> Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
            praesentium nisi. Id laboriosam ipsam enim.  </p>
            <button>Read More</button>
          </div>
        </li>
        <li class='item' style="background-image: url('./img/carousel-4.jpg')">
          <div class='content'>
            <h2 class='title'>"Last Trace Of Us"</h2>
            <p class='description'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.
            </p>
            <button>Read More</button>
          </div>
        </li>
        <li class='item' style="background-image: url('./img/carousel-5.jpg')">
          <div class='content'>
            <h2 class='title'>"Urban Decay"</h2>
            <p class='description'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.
            </p>
            <button>Read More</button>
          </div>
        </li>
        <li class='item' style="background-image: url('./img/carousel-6.jpg')">
          <div class='content'>
            <h2 class='title'>"The Migration"</h2>
            <p class='description'> Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
            praesentium nisi. Id laboriosam ipsam enim.  </p>
            <button>Read More</button>
          </div>
        </li>
      </ul>
      <nav class='nav'>
        <ion-icon class='btn prev' name="arrow-back-outline"></ion-icon>
        <ion-icon class='btn next' name="arrow-forward-outline"></ion-icon>
      </nav>
    </article>
    <article class="card-presentation">
      <div class="card">
        <img src="./img/card-presentation.jpg" />
        <div>
          <h2>MR Fontaneria</h2>
          <h3>Servicio especializado en Plomeria</h3>
          <p>
            Reparaciones y destapaciones de tuberias
          </p>
          <button>Contactanos:</button>
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
                <li>Relevamiento de trabajos a realizar</li>
              </ul>
            </div>
      
            <div class="cards__card card-co">
              <p class="card__price">Personal Especializado</p>
              <ul role="list" class="card__bullets flow">
                <li>Trabajos garantizados y confiables</li>
                <li>Arreglos y reparaciones en el acto</li>
                <li>Armado de cañerias de alta calidad</li>
              </ul>
            </div>
      
            <div class="cards__card card-co">

              <p class="card__price">Materiales de alto rendimiento</p>
              <ul role="list" class="card__bullets flow">
                <li>Trabajos de estructuracion con cañerias de primera calidad</li>
                <li>Trabajos ordenados</li>
                <li>Mejores soluciones</li>
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
    <h2>Servicios Especiales</h2>
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
            <h2>Plomeria</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis quia possimus aperiam iusto praesentium maxime error? Aliquid quidem nesciunt numquam possimus cumque pariatur, quos nostrum nihil quae, iure asperiores voluptas.
            </p>
          </div>

          <div>
            <h2>Calefones</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis quia possimus aperiam iusto praesentium maxime error? Aliquid quidem nesciunt numquam possimus cumque pariatur, quos nostrum nihil quae, iure asperiores voluptas.
            </p>
          </div>

          <div>
            <h2>Cañerias</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, fuga magnam facere alias dignissimos obcaecati ipsum tempora. Ab ratione illo cum. Ab dolorum vitae voluptas dolor incidunt quisquam animi amet.
            </p>
          </div>

          <div>
            <h2>Pinchaduras</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, velit, deleniti doloribus expedita nemo accusamus nihil possimus voluptates officia consequuntur assumenda culpa, non sint incidunt cumque inventore veniam quam delectus.
            </p>
          </div>

          <div>
            <h2>Insumos</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium odit culpa distinctio aliquid dolores, quae ut, harum veniam adipisci eos illo nisi excepturi commodi molestiae molestias? Maxime possimus id rem.
            </p>
          </div>
        </div>
        <div class="right-servicios">
          <div>
            <img src="https://github.com/ecemgo/frontend-mentor-all-in-one/assets/13468728/f3089615-68aa-48bd-8184-97881b7f8d85" alt="rome" />
          </div>

          <div>
            <img src="https://github.com/ecemgo/frontend-mentor-all-in-one/assets/13468728/c6cee1ff-5c41-447e-be06-06388b87b538" alt="amsterdam" />
          </div>

          <div>
            <img src="https://github.com/ecemgo/frontend-mentor-all-in-one/assets/13468728/f879e848-c8dd-4ebd-876c-c07c8758107c" alt="istanbul" />
          </div>

          <div>
            <img src="https://github.com/ecemgo/frontend-mentor-all-in-one/assets/13468728/d0cb0774-5b2a-46d8-9575-8b6dc9f97583" alt="paris" />
          </div>

          <div>
            <img src="https://github.com/ecemgo/frontend-mentor-all-in-one/assets/13468728/a3c768a5-71d4-404c-82d7-6535f59f2098" alt="london" />
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

// Funcion Carousel
const runCarousel = () => {
  const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

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
  runCarousel();
  runCardsConfianza();
  ActiveOrInactiveWP("activar");
});

//Menu Galeria
document.querySelector("#galeria-nav").addEventListener("click",()=>{
  document.querySelector("#main").innerHTML= galeria;
  setGaleria(168);
  toggleMenu();
  ActiveOrInactiveWP("activar");
});

//Menu Servicios
document.querySelector("#servicios-nav").addEventListener("click",()=>{
  document.querySelector("#main").innerHTML= servicios;
  runServicios();
  toggleMenu();
  ActiveOrInactiveWP("activar");
});

//Menu Contacto
document.querySelector("#contacto-nav").addEventListener("click",()=>{
  document.querySelector("#main").innerHTML= contacto;
  sendForm();
  toggleMenu();
  document.querySelector("#form-send").addEventListener("click", sendForm);
  ActiveOrInactiveWP("inactivar");

});


// Menu Inicio Footer
document.querySelector("#inicio-footer").addEventListener("click",()=>{
  document.querySelector("#main").innerHTML = index;
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
