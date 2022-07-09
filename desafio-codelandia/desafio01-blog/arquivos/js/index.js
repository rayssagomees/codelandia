//dark-mode
const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')

$checkbox.addEventListener('change', function(){
    $html.classList.toggle('dark-mode')
})

//rodapé
var copyright = window.document.querySelector('#copyright')
var dataAtual = new Date()
var anoAtual = dataAtual.getFullYear()
copyright.innerHTML = `&copy; ${anoAtual} raysantori`