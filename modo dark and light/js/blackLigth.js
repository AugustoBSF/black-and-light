// DOM
const btClaro = document.querySelector('#claro')
const btEscuro = document.querySelector('#escuro')
const fundo = document.querySelector('body')




// EVENTOS

btClaro.addEventListener('click', clarum)
btEscuro.addEventListener('click', escurum)



// FUNÇÃO


function clarum() {
    fundo.className = 'claro'
}
function escurum() {
    fundo.className = 'escuro'
}