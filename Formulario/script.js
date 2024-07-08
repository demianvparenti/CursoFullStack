// Cambio de estilos
function setStandardStyle() {
    document.getElementById('style-link').href = 'style-basic.css';
}

function setHighContrastStyle() {
    document.getElementById('style-link').href = 'style-contrast.css';
}

// Mensajes de validación custom
/*document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('personalForm');

    var submitButton = form.querySelector('button[type="submit"]');
    submitButton.addEventListener('click', function () {
        // Validación custom para el campo de nombre
        var fname = document.getElementById('fname');
        if (!fname.checkValidity()) {
            if(fname.value.trim().length < 3){
                    fname.setCustomValidity('Por favor, ingrese su nombre.');
            }} else {
            fname.setCustomValidity('');
        }

        // Validación custom para el campo de apellido
        var lname = document.getElementById('lname');
        if (!lname.checkValidity()) {
            if(lname.value.length < 3){
                lname.setCustomValidity('Por favor, ingrese su apellido.');
            }} else {
            lname.setCustomValidity('');
        }

        // Validación custom para el campo de email
        var email = document.getElementById('email');
        if (!email.checkValidity()) {
            if (email.validity.valueMissing) {
                email.setCustomValidity('Por favor, ingrese su email.');
            } else if (email.validity.typeMismatch) {
                email.setCustomValidity('Incluya un signo "@" en la dirección de correo electrónico. La dirección ' + email.value + 'no incluye un signo "@".');
            }
        } else {
            email.setCustomValidity('');
        }

        // Validación custom para el campo de fecha de nacimiento
        var date = document.getElementById('date');
        if (!date.checkValidity()) {
            date.setCustomValidity('Por favor, ingrese su fecha de nacimiento.');
        } else {
            date.setCustomValidity('');
        }

        // Validación custom para el campo de país de residencia
        var country = document.getElementById('country');
        if (!country.checkValidity()) {
            if(country.value.length < 5){
                country.setCustomValidity('Por favor, ingrese su nombre.');
        }} else {
            country.setCustomValidity('');
        }

        // Si el formulario es inválido, prevenir enviar
        if (!form.checkValidity()) {
            event.preventDefault();
            form.reportValidity(); // To trigger showing the custom validation messages
        }
    }, false);
});*/