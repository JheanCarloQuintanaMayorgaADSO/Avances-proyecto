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