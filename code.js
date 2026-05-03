// 3. FORMULARIO DE CONTACTO
const form = document.getElementById('form-contacto');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre');
        const email = document.getElementById('email');
        const mensaje = document.getElementById('mensaje');
        
        // Validación simple
        if (!nombre.value.trim() || !email.value.trim() || !mensaje.value.trim()) {
            alert('Por favor, completa todos los campos');
            return;
        }
        
        if (!email.value.includes('@')) {
            alert('Ingresa un email válido');
            return;
        }
        
        // Éxito
        alert('¡Mensaje enviado! Nos contactaremos pronto.');
        form.reset();
    });
}

// 5. ACTUALIZAR AÑO EN FOOTER
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    const añoActual = new Date().getFullYear();
    footerYear.textContent = footerYear.textContent.replace('2026', añoActual);
}