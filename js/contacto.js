
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
        const JSONData = await fetch("https://formsubmit.co/ajax/mariano.floresta2@gmail.com",object);
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

document.querySelector("#form-send").addEventListener("click", sendForm);