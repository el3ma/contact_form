const btnSubmit = document.getElementById('btn')
const modal = document.getElementById('myModal')
const form = document.getElementById('form')

function sendForm() {
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();  // Previene el envío del formulario
            console.log('hola');  // Muestra "hola" en la consola

            if (modal) {
                // Muestra el modal
                modal.style.display = 'block';
                modal.classList.remove('hide');  // Asegúrate de que la clase 'hide' no está presente

                // Después de 3 segundos, baja la opacidad y oculta el modal
                setTimeout(function() {
                    modal.classList.add('hide');

                    // Espera a que la transición termine antes de ocultar completamente el modal
                    setTimeout(function() {
                        modal.style.display = 'none';
                    }, 500);  // Tiempo de transición en milisegundos
                }, 3000);  // Tiempo de espera antes de ocultar en milisegundos
            }
        });
    }
}

sendForm();