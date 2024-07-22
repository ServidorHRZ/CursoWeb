document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const accessCode = document.getElementById('accessCode').value;

    // Definir códigos válidos y nombres asociados
    const users = {
        "1724": "Bienvenido Andrés Hincapie",
        "0176": "Adalbert España",
        "3652": "Victor antonio",
        "1663": "John Alexander",
        "2739": "Fernan Julian",
        "6803": "Aura Maria",
        "1878": "Cristhian Geovany",
        "0287": "Rigoberto Martell",
        "2031": "Luis Miguel",
        "0399": "Marco Antonio",
        "6596": "Darly Julieth",
        "9358": "Cesar Augusto",
        "9093": "David Aliri",
        "1063": "Bryan Salirrosas"
    };

    if (users[accessCode]) {
        const username = users[accessCode];
        alert(`¡Bienvenid@, ${username}!`); // Mostrar alerta con el nombre
        localStorage.setItem('username', username); // Guardar nombre en localStorage
        window.location.href = 'Inicio.html'; // Redirigir a inicio.html
    } else {
        alert('Código de acceso inválido. Inténtalo de nuevo.');
    }
});
