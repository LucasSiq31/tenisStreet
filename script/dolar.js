// Pega todos os cards existentes
const cards = document.querySelectorAll(".produto");

async function preencherDados() {
    for (const [index, card] of cards.entries()) {
        const produto = produtos[index];

        if (!produto) continue;

        card.querySelector("img").src = produto.imagem;
        card.querySelector("h3").textContent = produto.nome;
        card.querySelector(".dolar").textContent = `$${produto.precoDolar.toFixed(2)}`;
        const precoEmReal = await Conversao2(produto.precoDolar);
        card.querySelector(".real").textContent = `R$${precoEmReal}`;

        const btn = card.querySelector("button");
        btn.addEventListener("click", () => {
            // salva o ID do produto selecionado
            localStorage.setItem("produtoSelecionado", produto.id);
            // redireciona para a página do produto
            window.location.href = "produto.html";
        });
    }
}

async function Conversao2(valor) {
    const resposta = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL');
    const economia = await resposta.json();

    const conversao = economia.USDBRL.bid * valor;
    const total = Number(conversao.toFixed(2));

    return total;
}

preencherDados()