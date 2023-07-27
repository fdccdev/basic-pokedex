export interface Props {
    pokemons: Pokemon[],
    query: string
}

export type Pokemon = {
    id: string,
    name: string,
    img: string
}

export interface Pkmn {
    name: string,
    type: [{type}],
    img: string,
    hp: string,
    atk: string,
    def: string,
    spatk: string,
    spdef: string,
    speed: string
}

export type Path = {
    name?: string
}