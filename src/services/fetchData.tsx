import { formatNamePk } from "../utils/utils"

//const url_pokemons = 'https://unpkg.com/pokemons@1.1.0/pokemons.json'
// const url_image_pokemons = 'https://img.pokemondb.net/sprites/sword-shield/icon/drednaw.png'

const url_pokemons_v2 =
  'https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json'

type pokemon = {
  name: {
    english: string
  }
  id: number
  img: string
}

export async function getDataPokemons() {
  const response = await fetch(url_pokemons_v2)
  const data = await response.json()
  const pokemons = data.map((pokemon: pokemon) => ({
    id: pokemon.id,
    name: pokemon.name.english,
    img: `https://img.pokemondb.net/sprites/sword-shield/icon/${formatNamePk(pokemon.name.english).toLowerCase()}.png`
  }))

  localStorage.setItem('pokemons_data', JSON.stringify(pokemons));
  return pokemons
}
