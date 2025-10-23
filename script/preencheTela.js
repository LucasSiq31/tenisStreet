const idProduto = localStorage.getItem("produtoSelecionado");


async function PreencheDados(){
    if (idProduto) {
        const produto = produtos.find(p => p.id == idProduto);
        if (produto) {
            document.getElementById("imagem").src = produto.imagem;
            document.getElementById("nome").innerHTML = produto.nome;
            const precoEmReal = await Conversao2(produto.precoDolar);
            document.getElementById("real").textContent = `R$${precoEmReal}`;
            document.getElementById("dolar").textContent = `$${produto.precoDolar.toFixed(2)}`;
            document.getElementById("desc").innerHTML = produto.desc;
            document.getElementById("marca").innerHTML = produto.marca;
            document.getElementById("cor").innerHTML = produto.cor;

            produtos[idProduto - 1].tamanhos.forEach(tamanho => {
                document.getElementById("tamanhos").innerHTML += `<div>${tamanho}</div>`;
            });

            document.title = `${produto.nome} - TênisStreet`;

        } else {
            document.querySelector("main").innerHTML = "<h2>Produto não encontrado.</h2>";
        }
    } else {
        document.querySelector("main").innerHTML = "<h2>Nenhum produto selecionado.</h2>";
    }
}

async function Conversao2(valor) {
    const resposta = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL');
    const economia = await resposta.json();

    const conversao = economia.USDBRL.bid * valor;
    const total = Number(conversao.toFixed(2));

    return total;
}

PreencheDados()