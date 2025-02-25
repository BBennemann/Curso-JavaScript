var res = window.document.querySelector('select#res')

function gerar() {
    var txtnum = window.document.querySelector('input#num')
    var num = Number(txtnum.value)

    if (num == 0) {
        window.alert('Por favor insira um número!')
    }else {
        res.innerHTML = ''
        for (var c = 1; c <= 10; c++) {
            var item = window.document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `res${c}`
            res.appendChild(item)
        }
    }

}