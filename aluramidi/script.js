const listaDeTeclas = document.querySelectorAll('input[type="button"]')
const inputTel = document.querySelector('input[type="tel"]');

for (let i = 0; i < listaDeTeclas.length; i++) {

  let tecla = listaDeTeclas[i]

  tecla.addEventListener('click', function () {
    inputTel.value = inputTel.value + tecla.value
  })

  tecla.onkeydown = function (event) {
    if (event.code === 'Enter' || event.code === 'Space') {
      tecla.classList.add('ativa');
    }
  }

  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  }
}
