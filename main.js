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



// main.js

document.addEventListener('DOMContentLoaded', () => {
    // Funcionalidad del menú y botón de volver
    const menuIcon = document.querySelector('.menu-icono img');
    menuIcon.addEventListener('click', () => {
      // Código para abrir/cerrar menú
    });
  
    const backIcon = document.querySelector('.menu-icono img[src="images/back-icon.svg"]');
    backIcon.addEventListener('click', () => {
      window.history.back();
    });
  
    // Funcionalidad de eliminar producto
    const removeButtons = document.querySelectorAll('.btn-remove');
    removeButtons.forEach(button => {
      button.addEventListener('click', () => {
        button.closest('.item').remove(); // Elimina el elemento del DOM
        // Aquí puedes agregar lógica para actualizar el total del carrito, si es necesario
      });
    });
  
    // Funcionalidad de vaciar carrito (botón)
    const clearButton = document.querySelector('.btn-clear');
    clearButton.addEventListener('click', () => {
      const items = document.querySelectorAll('.item');
      items.forEach(item => item.remove()); // Elimina todos los elementos .item del DOM
      // Aquí puedes agregar lógica para reiniciar el carrito, si es necesario
    });
  
    // Funcionalidad de proceder al pago (botón)
    const payButton = document.querySelector('.btn-pay');
    payButton.addEventListener('click', () => {
      window.location.href = 'checkout.html'; // Redirecciona a la página de pago
    });
  });