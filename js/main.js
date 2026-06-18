'use strict'

import { criarHome } from './pages/home.js'
import { criarCatalogo } from './pages/catalogo.js'
import { criarProduto } from './pages/produto.js'

const paginas = {
    home: {
        titulo: 'Frequency Café',
        renderizar: criarHome
    },

    catalogo: {
        titulo: 'Catálogo',
        renderizar: criarCatalogo
    },

    produto: {
        titulo: 'Produto',
        renderizar: criarProduto
    }
}

export async function renderizarPagina(nomePagina, id = null) {
    const pagina = await paginas[nomePagina].renderizar(id)
    document.title = paginas[nomePagina].titulo
    document.body.replaceChildren(pagina)
}

renderizarPagina('home')