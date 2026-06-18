'use strict'

import { getCategoria } from '../router/categoria.js'
import { renderizarPagina } from '../main.js'
import { criarBackground, criarHeader } from './catalogo.js'

export async function criarProduto(idCategoria) {
    const pagina = document.createElement('div')
    pagina.classList.add('catalogo-page')

    pagina.appendChild(criarBackground())
    pagina.appendChild(criarHeader(() => renderizarPagina('catalogo')))

    try {
        const data = await getCategoria(idCategoria)
        const categoria = data.response.categoria[0]

        const tituloCategoria = document.createElement('h2')
        tituloCategoria.classList.add('titulo-categoria')
        tituloCategoria.textContent = categoria.categoria
        pagina.appendChild(tituloCategoria)

        const produtosContainer = document.createElement('section')
        produtosContainer.id = 'produtos'

        categoria.produto.forEach(produto => {
            produtosContainer.appendChild(criarCardProduto(produto))
        })

        pagina.appendChild(produtosContainer)

    } catch (erro) {
        console.error('Erro ao carregar produtos:', erro)
    }

    return pagina
}

function criarCardProduto(produto) {
    const card = document.createElement('div')
    card.classList.add('card', 'card-produto')

    const imagem = document.createElement('img')
    imagem.src = produto.imagem[0].url
    imagem.alt = produto.nome

    const infoWrapper = document.createElement('div')
    infoWrapper.classList.add('info-produto')

    const nome = document.createElement('h3')
    nome.classList.add('produto-nome')
    nome.textContent = produto.nome

    const infoInterna = document.createElement('div')
    infoInterna.classList.add('info-interna')

    const descricao = document.createElement('p')
    descricao.textContent = produto.descricao

    const preco = document.createElement('span')
    preco.classList.add('preco')
    preco.textContent = `R$ ${Number(produto.preco).toFixed(2)}`

    infoInterna.append(descricao, preco)
    infoWrapper.append(nome, infoInterna)
    card.append(imagem, infoWrapper)
    return card
}
