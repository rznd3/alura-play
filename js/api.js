async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos")
    const conexaoJson = await conexao.json()
    console.log(conexaoJson)
    return conexaoJson
}

async function adicionarVideo(titulo, descricao, imagem) {
    const conexao = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: descricao,
            url: url,
            imagem: imagem
        })
    })
}

async function buscarVideo(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
    const conexaoJson = conexao.json()

    return conexaoJson
}

export const conectaApi = {
    listaVideos, adicionarVideo, buscarVideo
}