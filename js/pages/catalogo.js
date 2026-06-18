'use strict'

import { renderizarPagina } from '../main.js'
import { getCategorias } from '../router/categoria.js'

export async function criarCatalogo() {
    const pagina = document.createElement('div')
    pagina.classList.add('catalogo-page')

    // Background bolinhas
    pagina.appendChild(criarBackground())

    // Header com logo
    pagina.appendChild(criarHeader(null))

    // Busca
    const pesquisa = document.createElement('div')
    pesquisa.classList.add('pesquisa')

    const input = document.createElement('input')
    input.type = 'text'
    input.placeholder = 'Buscar'

    pesquisa.appendChild(input)
    pagina.appendChild(pesquisa)

    // Lista de categorias
    const categoriasContainer = document.createElement('section')
    categoriasContainer.id = 'categorias'

    let categorias = []

    try {
        const data = await getCategorias()
        categorias = data.response.categorias

        categorias.forEach(cat => {
            categoriasContainer.appendChild(criarCard(cat))
        })
    } catch (erro) {
        console.error('Erro ao carregar categorias:', erro)
    }

    pagina.appendChild(categoriasContainer)

    // Filtro local por nome de categoria
    input.addEventListener('input', () => {
        const termo = input.value.trim().toLowerCase()
        categoriasContainer.querySelectorAll('.card').forEach(card => {
            card.style.display = card.dataset.nome.includes(termo) ? 'flex' : 'none'
        })
    })

    return pagina
}

function criarCard(categoria) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.dataset.nome = categoria.categoria.toLowerCase()

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

    info.append(titulo, descricao, botao)
    card.append(imagem, info)
    return card
}

export function criarBackground() {
    const bg = document.createElement('div')
    bg.classList.add('background')

    const cores = ['azul', 'vermelho', 'amarelo', 'ciano']
    const animacoes = ['luz', 'luz2']

    for (let i = 0; i < 100; i++) {
        const bolinha = document.createElement('div')
        const cor = cores[Math.floor(Math.random() * cores.length)]
        const anim = animacoes[Math.floor(Math.random() * animacoes.length)]
        bolinha.className = `${anim} ${cor}`
        bg.appendChild(bolinha)
    }

    return bg
}

export function criarHeader(onVoltar) {
    const header = document.createElement('header')

    if (onVoltar) {
        const btnVoltar = document.createElement('button')
        btnVoltar.classList.add('voltar')
        btnVoltar.textContent = '←'
        btnVoltar.onclick = onVoltar
        header.appendChild(btnVoltar)
    }

    const logoBorda = document.createElement('div')
    logoBorda.classList.add('logo-borda')

    const logo = document.createElement('div')
    logo.classList.add('logo')

    const h1 = document.createElement('h1')
    h1.innerHTML = 'FREQUENCY<br><span>80 CAFE</span>'

    logo.appendChild(h1)
    logoBorda.appendChild(logo)
    header.appendChild(logoBorda)

    return header
}