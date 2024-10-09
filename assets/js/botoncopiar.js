function copyEmail() {
    const email = 'maximo.huaman2003@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        const copyIcon = document.querySelector('.copy-icon');
        const copiedIcon = document.querySelector('.copied-icon');

        copyIcon.style.display = 'none'; // Oculta el icono original
        copiedIcon.style.display = 'inline'; // Muestra el icono copiado

        // Añade la clase para la animación
        copyIcon.classList.add('clicked'); 
        setTimeout(() => {
            copyIcon.classList.remove('clicked'); // Elimina la clase después de 300ms
        }, 300);

        // Cambia el icono copiado de vuelta al original después de 2 segundos
        setTimeout(() => {
            copyIcon.style.display = 'inline'; // Muestra el icono original
            copiedIcon.style.display = 'none'; // Oculta el icono copiado
        }, 2000);
    });
}