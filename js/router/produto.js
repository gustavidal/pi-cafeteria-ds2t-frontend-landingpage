'use strict'

const URL = 'http://localhost:8090/v1/frequency80cafe/produto'

export async function getProdutos() {
    const response = await fetch(URL)
    if (!response.ok) throw new Error('Erro ao listar produtos.')
    return response.json()
}

export async function getProduto(id) {
    const response = await fetch(`${URL}/${id}`)
    if (!response.ok) throw new Error(`Erro ao buscar o produto de id ${id}`)
    return response.json()
}
