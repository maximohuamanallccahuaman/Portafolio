(function () {
    emailjs.init('znHmd9tqxzFopvPtq'); // Reemplaza con tu API Key pública
})();

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Ocultar mensajes previos
    document.getElementById('confirmationMessage').style.display = 'none';
    document.getElementById('errorMessage').style.display = 'none';

    // Enviar el formulario usando EmailJS
    emailjs.sendForm('service_scec1iu', 'template_qlg3z5n', this)
        .then(function (response) {
            // Mostrar mensaje de éxito
            let confirmationMessage = document.getElementById('confirmationMessage');
            confirmationMessage.style.display = 'block';

            // Limpiar los campos del formulario
            document.getElementById('contactForm').reset();

            // Ocultar el mensaje después de 5 segundos
            setTimeout(function () {
                confirmationMessage.style.display = 'none';
            }, 5000);

        }, function (error) {
            // Mostrar mensaje de error
            let errorMessage = document.getElementById('errorMessage');
            errorMessage.style.display = 'block';

            // Ocultar el mensaje después de 5 segundos
            setTimeout(function () {
                errorMessage.style.display = 'none';
            }, 5000);
        });
});
