let atual = "O";
let anterior = "X";
let vencedor = "";

function jogar(evento) {
  let quadrado = evento.target;
  if (quadrado.classList.contains("quadrados")) {
    let paragrafo = quadrado.querySelector("p")
        if (paragrafo.textContent == "O" || paragrafo.textContent == "X") {
            return;
          }
          
          if (atual == "O") {
            paragrafo.textContent = atual;
            atual = "X";
            anterior = "O";
            document.getElementById('vez-de-jogador').innerHTML = 'Vez do Jogador 2';
          } else {
            paragrafo.textContent = atual;
            atual = "O";
            anterior = "X";
            document.getElementById('vez-de-jogador').innerHTML = 'Vez do Jogador 1';
          }
          verificarVencedor()
    
  }
}

let container = document.getElementById("container");

container.addEventListener("click", jogar);

function reiniciar() {
  let itens = document.querySelectorAll("p.item");
  let quadrados = document.querySelectorAll("div.quadrados")

  for (let i = 0; i < itens.length; i++) {
    itens[i].textContent = "";
  }

  for (let j = 0; j < quadrados.length; j++) {
    quadrados[j].style.background = "white"
  }
}

function itensIguais(a, b, c) {
    let itemA = document.querySelector("p#item" +a)
    let itemB = document.querySelector("p#item" +b)
    let itemC = document.querySelector("p#item" +c)

    let backA = document.querySelector("div#quadrado" +a)
    let backB = document.querySelector("div#quadrado" +b)
    let backC = document.querySelector("div#quadrado" +c)

    if (itemA.textContent == 'O' && itemA.textContent == itemB.textContent && itemA.textContent == itemC.textContent) {
        vencedor = "1"
        backA.style.backgroundColor = "blue"
        backB.style.backgroundColor = "blue"
        backC.style.backgroundColor = "blue"
        return true
    }
    else if (itemA.textContent == 'X' && itemA.textContent == itemB.textContent && itemA.textContent == itemC.textContent){
        vencedor = "2"
        backA.style.backgroundColor = "green"
        backB.style.backgroundColor = "green"
        backC.style.backgroundColor = "green"
        return true
    }
    else {
        return false
    }
}

function verificarVencedor() {
    if (itensIguais(1, 2, 3) || itensIguais(4, 5, 6) || itensIguais(7, 8, 9)) {
        document.getElementById('vez-de-jogador').textContent = `FIM DE JOGO! O jogador ${vencedor} preencheu uma linha.`

        let itens = document.querySelectorAll("p.item");
        for (let p of itens) {
          p.contentEditable = false;
        }
        
    }
    else if (itensIguais(1, 4, 7) || itensIguais(2, 5, 8) || itensIguais(3, 6, 9)) {
        document.getElementById('vez-de-jogador').textContent = `FIM DE JOGO! O jogador ${vencedor} preencheu uma coluna.`

        let itens = document.querySelectorAll("p.item");
        for (let p of itens) {
          p.contentEditable = false;
        }
        
    }
    else if (itensIguais(1, 5, 9) || itensIguais(3, 5, 7)) {
        document.getElementById('vez-de-jogador').textContent = `FIM DE JOGO! O jogador ${vencedor} preencheu uma diagonal.`
        let itens = document.querySelectorAll("p.item");
        for (let p of itens) {
          p.contentEditable = false;
        }
        
    }
}
