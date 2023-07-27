// url_detail = 'https://pokeapi.co/api/v2/pokemon/pikachu'
const url_detail = 'https://pokeapi.co/api/v2/pokemon/'

export async function getDetail(name: string | undefined) {
  const response = await fetch(url_detail + name)
  const data = await response.json()  
  const pokemonInfo = {
    name: data?.name,
    type: data.types,
    img: data.sprites.other['official-artwork'].front_default,
    hp: data.stats[0].base_stat,
    atk: data.stats[1].base_stat,
    def: data.stats[2].base_stat,
    spatk: data.stats[3].base_stat,
    spdef: data.stats[4].base_stat,
    speed: data.stats[5].base_stat,
  }
  
  return pokemonInfo
}
