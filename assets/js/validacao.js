const inputs = document.querySelectorAll('.input')
const botao = document.getElementById('botaoEnviar')
let paragrafo = document.querySelectorAll('.txt')

let i = 0

inputs.forEach(input => {
    input.addEventListener('keyup', () => {
        input.style.border = '1px solid #00c22b'
        if (input.value.length === 0) {
            input.style.border = '1px solid'
        }
    })

    botao.addEventListener('click', () => {
        
        if (input.value.length === 0) {
            input.style.border = '1px solid red'
            paragrafo[i].innerHTML = 'campo obrigatório'
        }
        i++
    })
})

