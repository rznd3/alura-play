import { conectaApi } from "./api.js";
import { initializeDropdownButtons } from "./dropdown.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard(titulo, descricao, url, imagem) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `
    <div class="video">
        <iframe width="100%" height="72%" src="${url}"
            title="${titulo}" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        <div class="descricao-video">
            <img src="${imagem}" alt="logo canal alura">
            <h3>${titulo}</h3>
            <p>${descricao}</p>
        </div>
        <div class="acoes-video"> 
            <div class="acoes-dropdown">
                <button class="dropdown-btn" id="dropdown-btn">&#8230;</button>
                <div class="dropdown-content">
                    <a href="#">Editar</a>
                    <a href="#">Excluir</a>
                </div>
            </div>
        </div>
    </div>
    `;

    return video;
}

async function listaVideos() {
    try {
        const listaApi = await conectaApi.listaVideos()

        listaApi.forEach(elemento => lista.appendChild(
            constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)
        ));

        // Inicializa os botões de dropdown após adicionar os cards de vídeo
        initializeDropdownButtons();
    } catch {
        lista.innerHTML = "<h2 class='mensagem__titulo'>Não foi possível carregar a lista de vídeos</h2>"
    }
}

listaVideos();
