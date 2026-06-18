'use strict'

import { renderizarPagina } from '../main.js'
import { getCategorias } from '../router/categoria.js'

export async function criarCatalogo() {

    const pagina = document.createElement('div')
    pagina.classList.add('catalogo-page')

    const categoriasContainer = document.createElement('section')
    categoriasContainer.id = 'categorias'

    const categorias = await getCategorias()

    categorias.response.categorias.forEach(categoria => {
        categoriasContainer.appendChild(
            criarCard(categoria)
        )
    })

    pagina.appendChild(categoriasContainer)

    return pagina
}

function criarCard(categoria) {

    const card = document.createElement('div')
    card.classList.add('card')

    const imagem = document.createElement('img')
    imagem.src = categoria.imagem
    imagem.alt = categoria.categoria

    const info = document.createElement('div')
    info.classList.add('info')

    const titulo = document.createElement('h2')
    titulo.textContent = categoria.categoria

    const descricao = document.createElement('p')
    descricao.textContent = categoria.descricao

    const botao = document.createElement('button')
    botao.textContent = 'VEJA MAIS'
    botao.onclick = () => renderizarPagina('produto', categoria.id)

    info.append(
        titulo,
        descricao,
        botao
    )

    card.append(
        imagem,
        info
    )

    return card
}