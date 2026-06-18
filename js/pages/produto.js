'use strict'

import { getCategoria } from '../router/categoria.js'

export async function criarProduto(idCategoria) {
    const categoria = await getCategoria(idCategoria)

    const pagina = document.createElement('div')

    console.log(categoria.response.categoria[0].produto)

    categoria.response.categoria[0].produto.forEach(produto => {
        pagina.appendChild(
            criarCardProduto(produto)
        )
    })

    return pagina
}

function criarCardProduto(produto) {

    const card = document.createElement('div')
    card.classList.add('card')

    const imagem = document.createElement('img')
    imagem.src = produto.imagem[0].url
    imagem.alt = produto.nome

    const info = document.createElement('div')
    info.classList.add('info')

    const nome = document.createElement('h2')
    nome.textContent = produto.nome

    const descricao = document.createElement('p')
    descricao.textContent = produto.descricao

    const preco = document.createElement('h3')
    preco.classList.add('preco')
    preco.textContent = `R$ ${Number(produto.preco).toFixed(2)}`

    info.append(
        nome,
        descricao,
        preco
    )

    card.append(
        imagem,
        info
    )

    return card
}