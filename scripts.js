const trocaText = document.querySelector(".fraseSorteio");
const result = document.querySelector(".result");
const novo = document.querySelector(".start");
const textFinal = document.querySelector(".jogoFinalizado");
const numberMin = 1;
const numberMax = 60;

const jogo = [];

function sorteio() {
  while (jogo.length < 6) {
    const max = Math.ceil(numberMin);
    const min = Math.floor(numberMax);
    const randomNumber = Math.floor(Math.random() * (max - min) + min);

    if (!jogo.includes(randomNumber)) {
      jogo.push(randomNumber);
    }
  }
 
let sorted = jogo.sort((a, b) => a - b);

trocaText.innerHTML = sorted;

textFinal.innerHTML = "🍀ANOTE SEU JOGO <br> 🤞BOA SORTE!";
novo.style.visibility = "visible"
result.style.visibility = "hidden"

}

function start() {
textFinal.innerHTML = " ";
jogo.length = 0;
trocaText.innerHTML = "Sorteio entre 01 - 60 ";
result.style.cursor = "pointer";
result.disabled = false;
novo.style.visibility = "hidden"
result.style.visibility = "visible"

}



