# 🎁 Amigo Secreto

Este projeto permite organizar e realizar um sorteio de **Amigo Secreto** de maneira interativa. Os participantes podem adicionar seus nomes e visualizar quem tiraram de forma segura.

## 📌 Funcionalidades

- Adicionar amigos à lista
- Garantir que ninguém tire a si mesmo
- Exibir o amigo secreto de cada participante
- Embaralhamento justo utilizando o algoritmo Fisher-Yates

## 🚀 Como Usar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/amigo-secreto.git
   ```
2. **Acesse a pasta do projeto:**
   ```bash
   cd amigo-secreto
   ```
3. **Abra o arquivo principal no navegador:**
   - Localize o arquivo [`index.html`](index.html) dentro da pasta do projeto.
   - Clique duas vezes para abrir no navegador ou utilize uma extensão como Live Server no VS Code.

## 🔧 Tecnologias Utilizadas

- HTML
- CSS
- JavaScript (lógica de sorteio implementada com o algoritmo Fisher-Yates)

## 📄 Estrutura do Código

- `adicionarAmigo()`: Adiciona um participante à lista, evitando nomes duplicados.
- `atualizarListaAmigos()`: Atualiza a exibição da lista de participantes.
- `embaralhar(array)`: Função de embaralhamento baseada no algoritmo Fisher-Yates.
- `sortearAmigo()`: Realiza o sorteio, garantindo que ninguém pegue a si mesmo.
- `exibirResultado(mensagem)`: Exibe o resultado do sorteio na interface.

## 🤝 Contribuição

1. Faça um fork do repositório.
2. Crie uma branch com sua feature (`git checkout -b minha-feature`).
3. Faça o commit (`git commit -m 'Adiciona nova feature'`).
4. Faça o push para a branch (`git push origin minha-feature`).
5. Abra um Pull Request.

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Se precisar de mais personalizações ou quiser adicionar novas seções, me avise! 🚀

