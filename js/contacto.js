const btnEnvio = document.getElementById('enviar');
      btnEnvio.addEventListener("click", function (e) {
        e.preventDefauld();
        const nombre = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const mensaje = document.getElementById('mensaje').value;
        window.location.href = `mailto:jhonnatanmc@gmail.com?subject=envioDesdeFormulario&body=Nombre%20%3A${nombre}%0ACorreo%3A${email}%0ATeledono%3A${phone}%0AMensaje%3A${mensaje}`;
      });