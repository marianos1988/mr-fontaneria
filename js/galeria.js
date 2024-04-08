const loadPhotos = (quanPhotos) => {

  for(let x=1;x<=quanPhotos;x++) {
    document.querySelector(`.image-gallery-${x}`).addEventListener("load",()=>{
      document.querySelector(`.spinner-image-${x}`).innerHTML=``;
    });
  }
}

//Galeria 168 fotos
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
setGaleria(168);






