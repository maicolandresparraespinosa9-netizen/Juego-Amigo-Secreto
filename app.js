// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {

    let ingresarAmigo = document.getElementById("amigo").value.trim();

    if (ingresarAmigo === "") {
        alert("Escribe el nombre de tus amigos");
        return;
    }

    amigos.push(ingresarAmigo);
    mostrarListaAmigos();
    document.getElementById("amigo").value = "";
    console.log(amigos)
}


function mostrarListaAmigos() {
    let lista = document.getElementById("listaAmigos");

    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {

    if (amigos.length === 0) {
        alert("Añade otro amigo");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> tu amigo secreto es: ${amigoSorteado}</li>`;
}