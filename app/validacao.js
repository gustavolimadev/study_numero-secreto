function verificaValorValido(chute) {
  const numero = +chute;

  if (seInvalido(numero)) {
    elementoChute.innerHTML += "<div>Valor inválido</div>";
    return;
  }

  if (numeroFora(numero)) {
    elementoChute.innerHTML += `<div>Inválido! Fale um número entre ${menorValor} e ${maiorValor}</div>`;
    return;
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
    <h2>Você acertou!</h2>
    <h3>O número secreto era ${numeroSecreto}</h3>

    <button id='jogar-novamente' class='btn-jogar'>Jogar novamente</button>
    `;
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
    <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div> 
    `;
  } else {
    elementoChute.innerHTML += `
    <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div> 
    `;
  }
}

function seInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroFora(numero) {
  return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener("click", (e) => {
  if (e.target.id == "jogar-novamente") {
    window.location.reload();
  }
});
