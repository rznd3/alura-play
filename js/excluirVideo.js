import { conectaApi } from "./api.js"

export function excluirVideo() {
    const btnExcluir = document.querySelectorAll('[data-excluir]')

    btnExcluir.forEach(btn => {
            btn.addEventListener('click', async (evento) => {
                evento.preventDefault()
                
                // Encontrar o elemento pai mais próximo para remover da página
                const elementoPaiVideo = btn.closest('[data-lista]')
                console.log(elementoPaiVideo)
                
                try {
                    
                    await conectaApi.excluirVideo(btn.id)
                    
                    elementoPaiVideo.remove()
                    
                    alert("Vídeo excluído com sucesso!")
                } catch (error) {
                    alert("Erro ao excluir o vídeo:", error.message)
                }
            })
        })
}
