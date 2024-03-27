import { conectaApi } from "./api.js"

async function editarVideo() {
    const getURL = new URL(window.location)
    const id = getURL.searchParams.get('id')

    const inputLink = document.querySelector('[data-url]')
    const inputTitulo = document.querySelector('[data-titulo]')
    const inputImagem = document.querySelector('[data-imagem]')
    const descricao = Math.floor(Math.random() * 10).toString()

    try {
        const dados = await conectaApi.detalharVideo(id)

        inputLink.value = dados.url
        inputTitulo.value = dados.titulo
        inputImagem.value = dados.imagem
    } catch (error) {
        console.log(error)
        alert(error.message)
    }

    const formulario = document.querySelector('[data-formulario]')

    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault()

        try {
            conectaApi.atualizarVideo(id, inputTitulo.value, descricao, inputLink.value, inputImagem.value)
            window.location.href = '../pages/edicao-concluida.html'
        } catch (error) {
            console.log(error)
        }
    })

    const btnCancelar = document.querySelector('[data-btn-cancelar]')
    btnCancelar.addEventListener('click', () => window.location.href = "../index.html")

}    

editarVideo()