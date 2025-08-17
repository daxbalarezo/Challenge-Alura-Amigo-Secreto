let nombres = [];

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;

    if (amigo == "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    nombres.push(amigo);
    document.getElementById("amigo").value = "";
    mostrarAmigosEnLista();
}

function mostrarAmigosEnLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < nombres.length; i++) {
        let item = document.createElement("li");
        item.textContent = nombres[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (nombres.length === 0) {
        alert("¡Añade al menos un amigo para poder sortear!");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * nombres.length);
    let amigoSorteado = nombres[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `¡El amigo secreto es: ${amigoSorteado}!`;
}