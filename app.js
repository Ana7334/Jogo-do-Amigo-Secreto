let amigos = [];

// Função para adicionar amigo à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome) {
        if (amigos.includes(nome)) {
            alert('Este nome já foi adicionado.');
        } else {
            amigos.push(nome);
            atualizarListaAmigos();
            input.value = '';
        }
    } else {
        alert('Por favor, insira um nome válido.');
    }
}

// Atualiza a lista exibida
function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Embaralha a lista (algoritmo Fisher-Yates)
function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Sorteia os amigos secretos garantindo que ninguém pegue a si mesmo
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para sortear.');
        return;
    }

    const participante = prompt("Digite seu nome para saber quem você tirou:");
    
    if (!participante || !amigos.includes(participante)) {
        alert("Nome não encontrado na lista. Certifique-se de digitar corretamente.");
        return;
    }

    let sorteioValido = false;
    let sorteados = [];

    while (!sorteioValido) {
        sorteados = [...amigos]; // Copia a lista
        embaralhar(sorteados); // Embaralha

        // Garante que ninguém pegue a si mesmo
        sorteioValido = !sorteados.some((sorteado, index) => sorteado === amigos[index]);
    }

    // Mostra quem a pessoa tirou
    const indice = amigos.indexOf(participante);
    const amigoSecreto = sorteados[indice];
    exibirResultado(`O amigo secreto de ${participante} é o ${amigoSecreto}`);
}

// Exibe o resultado na tela
function exibirResultado(mensagem) {
    const resultado = document.getElementById('resultado');
    resultado.textContent = mensagem;
}