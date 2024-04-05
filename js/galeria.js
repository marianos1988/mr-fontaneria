  //Load Photos Gallery
  const loadPhotos = (quanPhotos) => {

    for(let x=1;x<=quanPhotos;x++) {
      document.querySelector(`.image-gallery-${x}`).addEventListener("load",()=>{
        document.querySelector(`.spinner-image-${x}`).innerHTML=``;
      });
    }
}

// Ejecuta spinner galeria
loadPhotos(31);