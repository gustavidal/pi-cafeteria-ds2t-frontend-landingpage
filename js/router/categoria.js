'use strict'

const URL = 'http://localhost:8090/v1/frequency80cafe/categoria'

export async function getCategorias() {
    const response = await fetch(URL)
    if (!response.ok) throw new Error('Erro ao listar categorias.')
    return response.json()
}

export async function getCategoria(id) {
    const response = await fetch(`${URL}/${id}`)
    if (!response.ok) throw new Error(`Erro ao buscar o contato de id ${id}`)
    return response.json()
}