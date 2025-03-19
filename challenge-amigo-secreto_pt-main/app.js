let amigos = [];
let amigosDisponiveis = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    if (nome === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }
    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }
    amigos.push(nome);
    amigosDisponiveis.push(nome); // Adiciona também na lista de disponíveis
    input.value = "";
    document.getElementById("botaoSortear").disabled = amigosDisponiveis.length === 0;
}

function sortearAmigo() {
    if (amigosDisponiveis.length === 0) {
        alert("Todos os amigos já foram sorteados!");
        return;
    }

    let sorteadoIndex = Math.floor(Math.random() * amigosDisponiveis.length);
    let sorteado = amigosDisponiveis.splice(sorteadoIndex, 1)[0]; // Remove o sorteado da lista

    exibirResultado(sorteado);

    // Desativa o botão se não houver mais nomes para sortear
    document.getElementById("botaoSortear").disabled = amigosDisponiveis.length === 0;
}

function exibirResultado(sorteado) {
    const listaResultado = document.getElementById("resultado");
    const li = document.createElement("li");
    li.textContent = `Sorteado: ${sorteado}`;
    listaResultado.appendChild(li);
}

function reiniciarSorteio() {
    amigosDisponiveis = [...amigos]; // Restaura a lista original
    document.getElementById("resultado").innerHTML = ""; // Limpa os resultados
    document.getElementById("botaoSortear").disabled = amigosDisponiveis.length === 0;
}



