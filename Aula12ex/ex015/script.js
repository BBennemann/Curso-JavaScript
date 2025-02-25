var agora = new Date()
var ano = agora.getFullYear()

var img = window.document.querySelector('img#img')
var nascimento = window.document.getElementById('nas')
var txtres = window.document.getElementById('res')

var sex = window.document.getElementsByName('sex')

function verificar() { 
    var idade = ano - nascimento.value
    if (nascimento.value.length == 0 || nascimento.value > ano) {
        window.alert('[ERRO]! Verifique os dados e tente novamente.')
    }else {
        if (sex[0].checked) {
            var genero = 'homem'
            if (idade < 14) {
                img.src = 'criancaH.png'
            }else if (idade < 20) {
                img.src = 'adolescenteH.png'
            }else if (idade < 60) {
                img.src = 'Homem.png'
            }else if (idade < 100) {
                img.src = 'Velho.png'
            }
        }else {
            var genero = 'mulher'
            if (idade < 14) {
                img.src = 'criancaM.png'
            }else if (idade < 20) {
                img.src = 'adolescenteM.png'
            }else if (idade < 60) {
                img.src = 'Mulher.png'
            }else if (idade < 100) {
                img.src = 'Velha.png'
            }
        }
    }
    txtres.innerHTML = `Detectamos ${genero} com ${idade} anos.`
}

