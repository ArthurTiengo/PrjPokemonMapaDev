const btnAvancar = document.querySelector("#btn-avancar");
const btnVoltar = document.querySelector("#btn-voltar");

const cartoes = document.querySelectorAll(".cartao");

let cartaoAtual = 0;

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao(indiceCartao) {
  cartoes[indiceCartao].classList.add("selecionado");
}

btnAvancar.addEventListener("click", () => {
  //.lenght = retorna o tamanho do vetor ou seja a quantidade de elementos que esta guardada nele
  if (cartaoAtual < cartoes.length - 1) {
    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao(cartaoAtual);
  }
});

btnVoltar.addEventListener("click", () => {
  //.lenght = retorna o tamanho do vetor ou seja a quantidade de elementos que esta guardada nele
  if (cartaoAtual > 0) {
    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao(cartaoAtual);
  }
});
