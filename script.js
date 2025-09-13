// Espera a que el DOM esté completamente cargado para ejecutar el script
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Seleccionar los elementos necesarios del DOM
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');

    // 2. Añadir un evento de clic a cada enlace de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Prevenir el comportamiento por defecto del enlace (que es recargar la página)
            event.preventDefault();

            // Obtener el ID de la sección a mostrar desde el atributo href del enlace
            const targetId = link.getAttribute('href').substring(1); // ej. de "#muro" a "muro"

            // 3. Gestionar la clase 'active' en los enlaces de navegación
            // Quitar la clase 'active' de todos los enlaces
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });
            // Añadir la clase 'active' solo al enlace que fue clickeado
            link.classList.add('active');

            // 4. Mostrar la sección de contenido correspondiente
            // Ocultar todas las secciones
            contentSections.forEach(section => {
                section.classList.remove('active');
            });
            // Mostrar la sección correcta usando el ID que obtuvimos
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
});