import { conectaApi } from "./api.js"
import constroiCard from "./exibirVideos.js"

const btnPesquisar = document.querySelector('[data-botao-pesquisar]')
btnPesquisar.addEventListener('click', evento => buscarVideo(evento)) 

async function buscarVideo(evento) {
    evento.preventDefault()

    const dadosBusca = document.querySelector('[data-pesquisar]').value
    const busca = await conectaApi.buscarVideo(dadosBusca)

    const lista = document.querySelector('[data-lista]')
    
    lista.replaceChildren()
    
    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)
        ))
        
    if (busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo__error">Não existem vídeos com o termo "${dadosBusca}"</h2>`
    }

}

