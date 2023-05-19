const botaoAlterarTempo = document.getElementById
    ("botao-alterar-tempo");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTempo = document.querySelector(".imagem-botao");

botaoAlterarTempo.addEventListener("click", () => {

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTempo.setAttribute("src", "./src/imagens/sol.png");
    }

    else {
        imagemBotaoTrocaDeTempo.setAttribute("src", "./src/imagens/lua.png");
    }

});








