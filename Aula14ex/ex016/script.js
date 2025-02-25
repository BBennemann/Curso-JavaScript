var resposta = window.document.querySelector('p#res')

function contar() {
    var inicio = window.document.querySelector('input#ini')
    var fim = window.document.querySelector('input#fim')
    var passo = window.document.querySelector('input#pas')

    var numIni = Number(inicio.value)
    var numFim = Number(fim.value)
    var numPas = Number(passo.value)

    resposta.innerHTML = ''
    if (numFim == '' || numIni == ''){
        resposta.innerHTML = 'Impossivel contar'
    }else {
        if (numPas == '') {
            window.alert('Passo invalido! Considerando passo 1')
            numPas = 1
        }
        if (numFim > numIni) {
            for (numIni; numIni <= numFim; numIni += numPas) {
                resposta.innerHTML += `${numIni} 👉`
            }
            resposta.innerHTML += `🚩`
        }else if (numIni > numFim) {
            for (numIni; numIni >= numFim; numIni -= numPas) {
                resposta.innerHTML += `${numIni} 👉`
            }
            resposta.innerHTML += `🚩`
        }
    }
}
