document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Evita el envío del formulario para realizar las validaciones personalizadas
    event.preventDefault();

    // Selecciona los campos del formulario
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Array para almacenar los mensajes de error
    let errors = [];

    // Validación del campo nombre
    if (name === '') {
        errors.push('Por favor, ingrese su nombre.');
    }

    // Validación del campo email
    if (email === '') {
        errors.push('Por favor, ingrese su correo electrónico.');
    } else if (!/\S+@\S+\.\S+/.test(email)) { // Expresión regular para validar el formato del email
        errors.push('Por favor, ingrese un correo electrónico válido.');
    }

    // Validación del campo mensaje
    if (message === '') {
        errors.push('Por favor, ingrese un mensaje.');
    }

    // Si hay errores, muestra una alerta con los mensajes de error
    if (errors.length > 0) {
        alert(errors.join('\n'));
    } else {
        // Si no hay errores, muestra un mensaje de éxito y resetea el formulario
        alert('Gracias por tu mensaje. Será contestado a la brevedad.');
        document.getElementById('contactForm').reset();
    }
});