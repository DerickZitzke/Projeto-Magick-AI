const botaoFiltrar = document.querySelector(".btn-filtrar");

botaoFiltrar.addEventListener("click", function () {
  console.log("Botão Filtrar clicado!");
  const categoriaSelecionada = document.querySelector("#categoria").value;
  const precoMaximoSelecionado = document.querySelector("#preco").value;

  const cartas = document.querySelectorAll(".carta");
  cartas.forEach(function (carta) {
    const categoriaCarta = carta.getAttribute("data-categoria");
    const precoCarta = parseFloat(carta.getAttribute("data-preco"));

    if (
      (categoriaSelecionada === "" || categoriaCarta === categoriaSelecionada) &&
      (precoMaximoSelecionado === "" || precoCarta <= parseFloat(precoMaximoSelecionado))
    ) {
      carta.style.display = "block";
    } else {
      carta.style.display = "none";
    }
  });
});
