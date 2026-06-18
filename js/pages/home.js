'use strict'

import { renderizarPagina } from "../main.js"

export function criarHome() {
    const pagina = document.createElement('div')
    pagina.classList.add('pagina')

    const container = document.createElement('div')
    container.classList.add('container')

    const pistaDiscoteca = document.createElement('div')
    pistaDiscoteca.classList.add('pistaDiscoteca')

    const luzes = [
        ['luz2 azul', 'luz ciano', 'luz2 azul', 'luz ciano', 'luz2 azul', 'luz ciano', 'luz2 azul'],
        ['luz ciano', 'luz2 amarelo', 'luz amarelo', 'luz2 amarelo', 'luz amarelo', 'luz2 amarelo', 'luz ciano'],
        ['luz2 azul', 'luz amarelo', 'luz2 vermelho', 'luz vermelho', 'luz2 vermelho', 'luz amarelo', 'luz2 azul'],
        ['luz ciano', 'luz2 amarelo', 'luz amarelo', 'luz2 amarelo', 'luz amarelo', 'luz2 amarelo', 'luz ciano'],
        ['luz2 azul', 'luz ciano', 'luz2 azul', 'luz ciano', 'luz2 azul', 'luz ciano', 'luz2 azul']
    ]

    luzes.forEach(linha => {
        linha.forEach(classes => {
            const luz = document.createElement('div')
            luz.className = classes
            pistaDiscoteca.appendChild(luz)
        })
    })

    const bolaDiscoteca = document.createElement('img')
    bolaDiscoteca.classList.add('bolaDiscoteca')
    bolaDiscoteca.src = './imgs/bolaDiscoteca.png'

    const homemAmarelo = document.createElement('img')
    homemAmarelo.classList.add('homemAmarelo')
    homemAmarelo.src = './imgs/homemAmarelo.png'

    const homemRosa = document.createElement('img')
    homemRosa.classList.add('homemRosa')
    homemRosa.src = './imgs/homemRosa.png'

    const logoBorda = document.createElement('div')
    logoBorda.classList.add('logo-borda')

    const logo = document.createElement('div')
    logo.classList.add('logo')

    const h1 = document.createElement('h1')

    const texto1 = document.createTextNode('FREQUENCY')

    const br = document.createElement('br')

    const span = document.createElement('span')
    span.textContent = '80 CAFE'

    h1.append(texto1, br, span)

    logo.appendChild(h1)
    logoBorda.appendChild(logo)

    container.append(
        pistaDiscoteca,
        bolaDiscoteca,
        homemAmarelo,
        homemRosa,
        logoBorda
    )

    const slogan = document.createElement('div')
    slogan.classList.add('slogan')

    const p1 = document.createElement('p')
    p1.textContent = 'Sintonizando a frequência'

    const p2 = document.createElement('p')

    const cafe = document.createElement('span')
    cafe.style.color = '#fffb00'
    cafe.textContent = 'café'

    const discoteca = document.createElement('span')
    discoteca.style.color = '#ff0000'
    discoteca.textContent = 'discoteca'

    p2.append(
        'onde o ',
        cafe,
        ' e a ',
        discoteca,
        ' se encontram'
    )

    slogan.append(p1, p2)

    const linhas = document.createElement('div')
    linhas.classList.add('linhas')

    const classesLinhas = ['azul2', 'vermelho2', 'amarela']

    classesLinhas.forEach(classe => {
        const wrapper = document.createElement('div')
        wrapper.classList.add('linha')

        const linha = document.createElement('div')
        linha.classList.add('linha', classe)

        wrapper.appendChild(linha)
        linhas.appendChild(wrapper)
    })

    const catalogo = document.createElement('div')
    catalogo.classList.add('catalogo')

    const catalogoBorda = document.createElement('div')
    catalogoBorda.classList.add('catalogo-borda')

    const botao = document.createElement('button')
    botao.classList.add('botaoCatalogo')
    botao.textContent = 'CATÁLOGO'
    botao.onclick = () => renderizarPagina('catalogo')

    catalogoBorda.appendChild(botao)
    catalogo.appendChild(catalogoBorda)

    pagina.append(
        container,
        slogan,
        linhas,
        catalogo
    )

    return pagina
}