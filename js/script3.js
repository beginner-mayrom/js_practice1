var inputNome = document.getElementById('nome');
var inputValor = document.getElementById('valor');
var inputQtde = document.getElementById('qtde');
var produtos = [];
var valorTotal = 0;
var valorProduto = 0;

function adicionar(){

    if (inputNome.value !== '' && inputValor.value !== '' && inputQtde.value !== ''){

        var nome = inputNome.value;
        var valor = inputValor.value;
        var qtde = inputQtde.value;

        produtos.push({
            nome: nome,
            valor: valor,
            quantidade: qtde
        });

        inputNome.value = '';
        inputValor.value = '';
        inputQtde.value = '';
    }
}

function mostrarTotal(){
    var resTotal = document.getElementById('total');
    resTotal.innerHTML = "";
    var resValorTotal = document.getElementById('mostrarValorTotal');
    resValorTotal.innerHTML = "";

    for(var i = 0; i < produtos.length; i++){
        var produto = produtos[i];
        resTotal.innerHTML += `<p>${produto.nome + ', ' + produto.valor + ', ' + produto.quantidade}</p>`;
        valorProduto = produto.valor * produto.quantidade;
        valorTotal = valorProduto + valorTotal;
    }

    resValorTotal.innerHTML = 'Total(R$): ' + valorTotal;
    valorTotal = 0;
}