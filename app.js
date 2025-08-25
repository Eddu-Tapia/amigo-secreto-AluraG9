let amigos = [];



function agregarAmigo() {
    //Entrada
    let entrada = document.getElementById("amigo"); //Texto tal cual ingresa
    let nombre = entrada.value.trim();       //Nombre ingresado sin espacios

    //Valida entrada en blanco
    if (nombre === ""){
        alert("Por favor, incerte un nombre.")
        return;
    }

    //Añadir nombre a la lista de amigos
    amigos.push(nombre);

    //Mostrar lista de amigos
    mostrarAmigos();

    //Limpiar el campo de entrada
    entrada.value = "";
}

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    //Se borra la lista anteriormente pintada
    lista.innerHTML = "";

    //Recorre la lista amigos y va escribiendo los nombres en ella
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    //Validar que haya amigos disponibles
    if (amigos.length === 0){
        alert("No hay amigos para sortear.");
        return;
    }

    //Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length); 
    
    //Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];


    //Mostrar el resultado 
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}
