async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos")
    const conexaoJson = await conexao.json()
    console.log(conexaoJson)
    return conexaoJson
}

async function adicionarVideo(titulo, descricao, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    })

    if (!conexao.ok) {
        throw new Error("Não foi possível enviar o vídeo")
    }

    const conexaoJson = await conexao.json()
    return conexaoJson
}

async function buscarVideo(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
    const conexaoJson = conexao.json()

    return conexaoJson
}

export const conectaApi = {
    listaVideos, adicionarVideo, buscarVideo
}