'use strict'

const URL = 'http://localhost:8090/v1/frequency80cafe/imagem'

export async function getImagens() {
    const response = await fetch(URL)
    if (!response.ok) throw new Error('Erro ao listar imagens.')
    return response.json()
}

export async function getImagem(id) {
    const response = await fetch(`${URL}/${id}`)
    if (!response.ok) throw new Error(`Erro ao buscar a imagem de id ${id}.`)
    return response.json()
}