const botao = document.getElementById('botaoEnviar')
const inputs = document.querySelectorAll('.input')

inputs.forEach(input => {
    input.addEventListener('keyup', () => {
        input.value.length === 0 ? input.style.border = "1px solid" : input.style.border = '1px solid #00c22b'
    })
})

botao.addEventListener('click', () => {

    inputs.forEach(input => {
        input.addEventListener('keyup', () => {

            if (input.value.length === 0) {
                input.nextElementSibling.classList.add("ativo")
                input.style.border = '1px solid #f52e2e'
            } else {
                input.nextElementSibling.classList.remove("ativo")
            }
        })

        let validacao = input.value

        if (validacao == 0) {
            input.nextElementSibling.classList.add("ativo")
            input.style.border = '1px solid #f52e2e'
        } else {
            input.nextElementSibling.classList.remove("ativo")
        }
    })
})