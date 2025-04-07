document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.querySelector('#formularioCompra');

    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault(); // Evita el envío del formulario

        // Obtener los valores de los campos
        const nombre = document.querySelector('#nombre').value.trim();
        const email = document.querySelector('#email').value.trim();
        const calle = document.querySelector('#calle').value.trim();
        const ciudad = document.querySelector('#ciudad').value.trim();

        let mensajeError = '';

        // Validar los campos
        if (nombre === '') {
            mensajeError += 'El campo "Nombre" está vacío.\n';
        }
        if (email === '') {
            mensajeError += 'El campo "Email" está vacío.\n';
        }
        if (calle === '') {
            mensajeError += 'El campo "Calle" está vacío.\n';
        }
        if (ciudad === '') {
            mensajeError += 'El campo "Ciudad" está vacío.\n';
        }

        // Si hay errores, mostrar el mensaje
        if (mensajeError) {
            alert(mensajeError); // Muestra los errores
        } else {
            // Si no hay errores, mostrar un mensaje de "Enviando..."
            alert('Enviando...');
        }
    });
});