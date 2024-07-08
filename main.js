// Script para mostrar/ocultar el menú desplegable al hacer hover
        document.addEventListener("DOMContentLoaded", function() {
            const dropdownItems = document.querySelectorAll('.dropdown');
            
            dropdownItems.forEach(item => {
                const dropdownToggle = item.querySelector('a');
                const dropdownContent = item.querySelector('.dropdown-content');

                dropdownToggle.addEventListener('mouseenter', function() {
                    dropdownContent.style.display = "block";
                });

                dropdownToggle.addEventListener('mouseleave', function() {
                    dropdownContent.style.display = "none";
                });

                dropdownContent.addEventListener('mouseenter', function() {
                    dropdownContent.style.display = "block";
                });

                dropdownContent.addEventListener('mouseleave', function() {
                    dropdownContent.style.display = "none";
                });
            });
        });



        // Inicializa EmailJS con tu ID de usuario
emailjs.init('jhean carlo'); // Reemplaza con tu propio ID de usuario de EmailJS

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío normal del formulario

    // Reemplaza con el ID del servicio, plantilla y el ID de tu usuario de EmailJS
    emailjs.sendForm('service_oz8joiy', 'jhean carlo', this)
        .then(function(response) {
            document.getElementById('respuesta').textContent = 'Mensaje enviado con éxito.';
            document.getElementById('contact-form').reset(); // Limpia el formulario
        }, function(error) {
            document.getElementById('respuesta').textContent = 'Hubo un error al enviar el mensaje.';
        });
});
