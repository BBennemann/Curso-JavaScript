var sele = window.document.querySelector('select#sele')
var lista = []
var res = window.document.querySelector('div#res')

function adicionar() {
    res.innerHTML = ''
    var tnum = window.document.querySelector('input#num')
    var num = Number(tnum.value)
    if (tnum == '' || num < 1 || num > 100 || lista.indexOf(num) != -1) {
        alert('Número invalido, insira outro!')
    } else {
        var item = window.document.createElement('option')
        item.text = `Valor ${num} adicionado`
        sele.appendChild(item) 
        lista.push(num)
    }
    tnum.value = ''
    tnum.focus()
}

function finalizar() {
    if (lista.length == 0) {
        alert('Porfavor adicione valores.')
    }else {
        res.innerHTML = ''
        lista.sort()
        res.innerHTML += `<p>Ao todo temos ${lista.length} elementos cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${lista[lista.length - 1]}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${lista[0]}</p>`
        soma = 0
        for (let c = 0;c <= lista.length - 1; c++) {
            soma += lista[c]
        }
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A média entre eles vale ${soma/lista.length}</p>`
    }
}