var agora = new Date()
var hora = agora.getHours()

var h = window.document.querySelector('div#h')
h.innerHTML = `Agora são ${hora} horas.`

var img = window.document.querySelector('img#img')

if (hora < 5) {
    img.src = 'noite.png'
    window.document.body.style.background = '#34484F'
}else if (hora < 12) {
    img.src = 'manha.png'
    window.document.body.style.background = '#FFE458'
}else if (hora < 18) {
    img.src = 'tarde.png'
    window.document.body.style.background = '#F2AC64'
}else if (hora < 24) {
    img.src = 'noite.png'
    window.document.body.style.background = '#34484F'
}