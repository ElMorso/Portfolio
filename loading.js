document.addEventListener("DOMContentLoaded", function() {
    // Simula la carga de la página durante 3 segundos
    setTimeout(function() {
        document.getElementById('continuarBtn').style.display = 'block'; // Mostrar el botón después de 3 segundos
    }, 3000);

    // Agregar evento de clic al botón "Continuar"
    document.getElementById('continuarBtn').addEventListener('click', function() {
        var nextPage = 'index.html' || 'proyectos.html' || ' contacto.html'; // Aquí debes especificar la URL de la próxima página
        window.location.href = nextPage; // Redirige a la página correspondiente
    });
});