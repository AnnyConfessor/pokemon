import { API_URL } from './../config/constants'

export const getPokemon = id =>
    fetch(`${API_URL}/pokemon/${id}`)
        .then(res => res.json())

export const listPokemons = () => //nao precisa de params essa function
    fetch(`${API_URL}/pokemon/?limit=20&offset=20`)
        .then(res => res.json())
