//rodapé
var copyright = window.document.querySelector('#copyright')
var dataAtual = new Date()
var anoAtual = dataAtual.getFullYear()
copyright.innerHTML = `&copy; ${anoAtual} raysantori`