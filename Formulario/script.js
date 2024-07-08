
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('date').setAttribute('max', maxDate());
    submitForm();
    addBlurEventListeners();
});
//Función para validar los campos al enviar el formulario
function submitForm(){
    document.getElementById('personalForm').addEventListener('submit', function(event){
        event.preventDefault();
        
        const fields = ['fname', 'lname', 'email', 'date', 'country'];
        const data = {};
        
        fields.forEach(field =>{
            const fieldValue = document.getElementById(field).value;
            if(fieldValue === ''){
                toggleError(field, true);
            }else{
                toggleError(field, false);
            }
            data[field] = fieldValue;
        });
        
        console.log("Desde submit form data", data)
        alert('Formulario enviado correctamente');
        document.getElementById('personalForm').reset();
    });
}
//Función para mostrar u ocultar los mensajes de error
function toggleError(inputId, isError){
    const errorElementId = `${inputId}-error`;
    if (isError) {
        document.getElementById(errorElementId).classList.add("show");
    } else {
        document.getElementById(errorElementId).classList.remove("show");
    }
} 
//Función para validar los campos al salir de ellos
function addBlurEventListeners(){
    const fields = ['fname', 'lname', 'email', 'date', 'country'];
    
    fields.forEach(field =>{
        document.getElementById(field).addEventListener('blur', function(){
            const isInvalid = this.value === '';
            toggleError(field, isInvalid);
        });
    });
}
//Función para obtener la fecha actual y poder setearla como fecha máxima en el campo de fecha de nacimiento
function maxDate(){
    var currentDate = new Date();
    var day = ('0' + currentDate.getDate()).slice(-2); 
    var month = ('0' + (currentDate.getMonth() + 1)).slice(-2); 
    var year = currentDate.getFullYear();
    var maxDate = year + '-' + month + '-' + day;
    
    return maxDate;
}
// Style Switcher Code
function setStandardStyle() {
    document.getElementById('style-link').href = 'style-basic.css';
}
function setHighContrastStyle() {
    document.getElementById('style-link').href = 'style-high-contrast.css';
}

/*
// Custom Validation Code
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('personalForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Custom validation for the first name field
        var fname = document.getElementById('fname');
        if (!fname.checkValidity()) {
            fname.setCustomValidity('Por favor, ingrese su nombre.');
        } else {
            fname.setCustomValidity('');
        }

        // Custom validation for the last name field
        var lname = document.getElementById('lname');
        if (!lname.checkValidity()) {
            lname.setCustomValidity('Por favor, ingrese su apellido.');
        } else {
            lname.setCustomValidity('');
        }

        // Custom validation for the email field
        var email = document.getElementById('email');
        if (!email.checkValidity()) {
            if (email.validity.valueMissing) {
                email.setCustomValidity('Por favor, ingrese su email.');
            } else if (email.validity.typeMismatch) {
                email.setCustomValidity('"' + email.value + '" no es una dirección de email válida.');
            }
        } else {
            email.setCustomValidity('');
        }

        // Custom validation for the date of birth field
        var date = document.getElementById('date');
        if (!date.checkValidity()) {
            date.setCustomValidity('Por favor, ingrese su fecha de nacimiento.');
        } else {
            date.setCustomValidity('');
        }

        // Custom validation for the country field
        var country = document.getElementById('country');
        if (!country.checkValidity()) {
            country.setCustomValidity('Por favor, ingrese su país de residencia.');
        } else {
            country.setCustomValidity('');
        }

        // If the form is invalid, prevent submission
        if (!form.checkValidity()) {
            event.preventDefault();
            form.reportValidity(); // To trigger showing the custom validation monthsages
        }
    }, false);
});*/