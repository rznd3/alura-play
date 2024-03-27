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


async function excluirVideo(id) {
    const deletar =  await fetch(`http://localhost:3000/videos/${id}`, {
        method: 'DELETE'
    }) 
    if(!deletar.ok){
        throw new Error('Não foi possível deletar um cliente')
    }
    
}

async function detalharVideo(id) {
    const conexao = await fetch(`http://localhost:3000/videos/${id}`)

    if (!conexao.ok) {
        throw new Error("Não foi possível enviar dados para o formulário")
    }

    const conexaoJSON = await conexao.json()
    return conexaoJSON
}

async function atualizarVideo(id, titulo, descricao, url, imagem) {    
    const editar = await fetch(`http://localhost:3000/videos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    })

    if (!editar.ok) {
        console.log(error);
        throw new Error("Não foi possível editar o vídeo")
    }

    const editarJson = await editar.json()
    return editarJson
}

export const conectaApi = {
    listaVideos, adicionarVideo, buscarVideo, excluirVideo, detalharVideo, atualizarVideo
}
